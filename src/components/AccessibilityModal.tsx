import { useState, useEffect } from 'react';
import { 
  Accessibility, 
  X, 
  Type, 
  Sun, 
  Underline, 
  PauseCircle, 
  RotateCcw, 
  Check, 
  Eye, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

export interface AccessibilitySettings {
  enabled: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  readableFont: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  enabled: false,
  fontSize: 'normal',
  highContrast: false,
  readableFont: false,
  underlineLinks: false,
  reduceMotion: false,
};

const STORAGE_KEY = 'frauenzeit_bruehl_a11y';

export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_SETTINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }

    const root = document.documentElement;

    // Apply or remove classes based on settings
    if (settings.enabled) {
      root.classList.add('a11y-mode');
    } else {
      root.classList.remove('a11y-mode');
    }

    // Font size
    root.classList.remove('a11y-large-text', 'a11y-extra-large-text');
    if (settings.fontSize === 'large') root.classList.add('a11y-large-text');
    if (settings.fontSize === 'xlarge') root.classList.add('a11y-extra-large-text');

    // High contrast
    if (settings.highContrast) {
      root.classList.add('a11y-high-contrast');
    } else {
      root.classList.remove('a11y-high-contrast');
    }

    // Readable font
    if (settings.readableFont) {
      root.classList.add('a11y-readable-font');
    } else {
      root.classList.remove('a11y-readable-font');
    }

    // Underline links
    if (settings.underlineLinks) {
      root.classList.add('a11y-underline-links');
    } else {
      root.classList.remove('a11y-underline-links');
    }

    // Reduce motion
    if (settings.reduceMotion) {
      root.classList.add('a11y-reduce-motion');
    } else {
      root.classList.remove('a11y-reduce-motion');
    }

    // Always ensure high visibility focus outline
    root.classList.add('a11y-focus-visible');
  }, [settings]);

  const toggleMasterMode = () => {
    setSettings((prev) => {
      const willEnable = !prev.enabled;
      if (willEnable) {
        // Turning master on activates standard accessible preset
        return {
          enabled: true,
          fontSize: prev.fontSize === 'normal' ? 'large' : prev.fontSize,
          highContrast: true,
          readableFont: true,
          underlineLinks: true,
          reduceMotion: true,
        };
      } else {
        return DEFAULT_SETTINGS;
      }
    });
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      // If any specific setting is turned on, mark master enabled as true
      const hasAnyActive = 
        next.fontSize !== 'normal' || 
        next.highContrast || 
        next.readableFont || 
        next.underlineLinks || 
        next.reduceMotion;
      next.enabled = hasAnyActive;
      return next;
    });
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return {
    settings,
    toggleMasterMode,
    updateSetting,
    resetSettings,
  };
}

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  a11y: ReturnType<typeof useAccessibility>;
}

export function AccessibilityModal({ isOpen, onClose, a11y }: AccessibilityModalProps) {
  const { settings, toggleMasterMode, updateSetting, resetSettings } = a11y;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="a11y-modal-title"
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-[#E8D2D7] p-5 sm:p-7 text-left animate-in zoom-in-95 duration-150 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F0E6E8]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF1F3] text-pink-900 border border-[#E8D2D7]">
              <Accessibility className="h-5 w-5" />
            </div>
            <div>
              <h3 id="a11y-modal-title" className="text-lg sm:text-xl font-bold text-[#2B2326]">
                Barrierefreiheit
              </h3>
              <p className="text-xs text-[#735F64]">
                Individuelle Anpassung für optimalen Lesekomfort
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#FAF5F6] text-neutral-500 hover:text-[#2B2326] hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Master One-Click Switch */}
        <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#FAF1F3] via-white to-[#FCF8F9] border-2 border-pink-900/30 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base text-[#2B2326]">
                <Sparkles className="h-4 w-4 text-pink-900" />
                <span>Barrierefreier Modus</span>
              </div>
              <p className="text-xs text-[#5C4A4F] leading-relaxed">
                Aktiviert mit einem Klick vergrößerte Schrift, hohen Kontrast, gut lesbare Typografie und ruhige Darstellung.
              </p>
            </div>
            <button
              type="button"
              onClick={toggleMasterMode}
              role="switch"
              aria-checked={settings.enabled}
              className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-900/40 ${
                settings.enabled ? 'bg-pink-900' : 'bg-neutral-300'
              }`}
            >
              <span className="sr-only">Barrierefreien Modus umschalten</span>
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  settings.enabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="mt-3 pt-3 border-t border-[#EADBDD] flex items-center justify-between text-xs">
            <span className="font-semibold text-pink-950">
              Status:{' '}
              <span className={settings.enabled ? 'text-emerald-700 font-bold' : 'text-neutral-500'}>
                {settings.enabled ? 'Aktiviert' : 'Standard'}
              </span>
            </span>
            {settings.enabled && (
              <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                WCAG AAA optimiert
              </span>
            )}
          </div>
        </div>

        {/* Detailed Controls */}
        <div className="mt-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#735F64] block">
            Detaillierte Optionen
          </span>

          {/* 1. Schriftgröße */}
          <div className="rounded-xl border border-[#F0E6E8] bg-[#FCF8F9] p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2B2326] flex items-center gap-1.5">
                <Type className="h-3.5 w-3.5 text-pink-900" />
                <span>Schriftgröße</span>
              </span>
              <span className="text-[11px] text-[#735F64]">
                {settings.fontSize === 'normal' && 'Standard (100%)'}
                {settings.fontSize === 'large' && 'Groß (115%)'}
                {settings.fontSize === 'xlarge' && 'Sehr Groß (130%)'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => updateSetting('fontSize', 'normal')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  settings.fontSize === 'normal'
                    ? 'bg-pink-900 text-white border-pink-900 shadow-2xs'
                    : 'bg-white text-[#4D3F43] border-[#E8D2D7] hover:bg-[#FAF1F3]'
                }`}
              >
                100%
              </button>
              <button
                type="button"
                onClick={() => updateSetting('fontSize', 'large')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  settings.fontSize === 'large'
                    ? 'bg-pink-900 text-white border-pink-900 shadow-2xs'
                    : 'bg-white text-[#4D3F43] border-[#E8D2D7] hover:bg-[#FAF1F3]'
                }`}
              >
                115% (A+)
              </button>
              <button
                type="button"
                onClick={() => updateSetting('fontSize', 'xlarge')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  settings.fontSize === 'xlarge'
                    ? 'bg-pink-900 text-white border-pink-900 shadow-2xs'
                    : 'bg-white text-[#4D3F43] border-[#E8D2D7] hover:bg-[#FAF1F3]'
                }`}
              >
                130% (A++)
              </button>
            </div>
          </div>

          {/* 2. Hoher Kontrast */}
          <div className="flex items-center justify-between rounded-xl border border-[#F0E6E8] bg-[#FCF8F9] p-3.5">
            <div className="flex items-center gap-2.5">
              <Sun className="h-4 w-4 text-pink-900" />
              <div>
                <span className="text-xs font-bold text-[#2B2326] block">
                  Hoher Kontrast
                </span>
                <span className="text-[11px] text-[#5C4A4F] block">
                  Maximale Textschärfe und kräftige Ränder
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              className={`h-6 w-11 rounded-full p-0.5 transition-colors cursor-pointer ${
                settings.highContrast ? 'bg-pink-900' : 'bg-neutral-300'
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition-transform ${
                  settings.highContrast ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 3. Gut lesbare serifenlose Schrift */}
          <div className="flex items-center justify-between rounded-xl border border-[#F0E6E8] bg-[#FCF8F9] p-3.5">
            <div className="flex items-center gap-2.5">
              <Eye className="h-4 w-4 text-pink-900" />
              <div>
                <span className="text-xs font-bold text-[#2B2326] block">
                  Lesefreundliche Schrift
                </span>
                <span className="text-[11px] text-[#5C4A4F] block">
                  Klare Buchstaben mit erweitertem Zeilenabstand
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => updateSetting('readableFont', !settings.readableFont)}
              className={`h-6 w-11 rounded-full p-0.5 transition-colors cursor-pointer ${
                settings.readableFont ? 'bg-pink-900' : 'bg-neutral-300'
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition-transform ${
                  settings.readableFont ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 4. Links unterstreichen */}
          <div className="flex items-center justify-between rounded-xl border border-[#F0E6E8] bg-[#FCF8F9] p-3.5">
            <div className="flex items-center gap-2.5">
              <Underline className="h-4 w-4 text-pink-900" />
              <div>
                <span className="text-xs font-bold text-[#2B2326] block">
                  Links unterstreichen
                </span>
                <span className="text-[11px] text-[#5C4A4F] block">
                  Hebt alle Verweise und Telefonnummern hervor
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => updateSetting('underlineLinks', !settings.underlineLinks)}
              className={`h-6 w-11 rounded-full p-0.5 transition-colors cursor-pointer ${
                settings.underlineLinks ? 'bg-pink-900' : 'bg-neutral-300'
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition-transform ${
                  settings.underlineLinks ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 5. Bewegung / Animationen reduzieren */}
          <div className="flex items-center justify-between rounded-xl border border-[#F0E6E8] bg-[#FCF8F9] p-3.5">
            <div className="flex items-center gap-2.5">
              <PauseCircle className="h-4 w-4 text-pink-900" />
              <div>
                <span className="text-xs font-bold text-[#2B2326] block">
                  Bewegung reduzieren
                </span>
                <span className="text-[11px] text-[#5C4A4F] block">
                  Stoppt Animationen für ruhiges Lesen
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => updateSetting('reduceMotion', !settings.reduceMotion)}
              className={`h-6 w-11 rounded-full p-0.5 transition-colors cursor-pointer ${
                settings.reduceMotion ? 'bg-pink-900' : 'bg-neutral-300'
              }`}
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition-transform ${
                  settings.reduceMotion ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#F0E6E8] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={resetSettings}
            className="inline-flex items-center gap-1.5 text-xs text-[#735F64] hover:text-pink-900 py-1.5 px-2.5 rounded-lg hover:bg-[#FAF1F3] transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Zurücksetzen</span>
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#2B2326] px-5 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
          >
            Fertig
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Discreet Floating Quick-Access Button (at bottom-left)
 */
export function FloatingAccessibilityButton({ 
  onClick, 
  isActive 
}: { 
  onClick: () => void; 
  isActive: boolean; 
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Barrierefreiheit & Lesekomfort anpassen"
      aria-label="Barrierefreiheit Einstellungen öffnen"
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 inline-flex items-center gap-2 rounded-full px-3.5 py-2.5 shadow-md border transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-pink-500/40 ${
        isActive 
          ? 'bg-pink-900 text-white border-pink-900 shadow-pink-900/20' 
          : 'bg-white/95 text-[#4D3F43] hover:text-pink-900 border-[#E8D2D7] hover:border-pink-300 hover:bg-white backdrop-blur-xs'
      }`}
    >
      <Accessibility className={`h-4 w-4 ${isActive ? 'text-white' : 'text-pink-900'}`} />
      <span className="text-xs font-semibold hidden md:inline">
        {isActive ? 'Barrierefrei aktiv' : 'Barrierefreiheit'}
      </span>
      {isActive && (
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      )}
    </button>
  );
}
