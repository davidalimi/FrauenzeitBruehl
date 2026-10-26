/**
 * @file theme.ts
 * ==============================================================================
 * ZENTRALE DESIGN- & THEME-KONFIGURATION DER PRAXIS FRAUENZEIT BRÜHL
 * ==============================================================================
 * 
 * Hier können Sie alle Schriftarten, Farben und visuellen Design-Parameter
 * an einem zentralen Ort verwalten und anpassen, ohne einzelne Komponenten
 * bearbeiten zu müssen.
 * 
 * Änderungen an dieser Datei wirken sich sofort auf die gesamte Website aus!
 */

export interface ThemeConfig {
  fonts: {
    /**
     * Schriftart für Überschriften, Titel, Menüs, Buttons und Badges
     * Standard: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
     */
    heading: string;
    /**
     * Schriftart für Fliesstexte, Beschreibungen, Absätze und Modal-Inhalte
     * Standard: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
     */
    body: string;
    /**
     * Schriftart für Nummern, Codes, Zähler und technische Labels
     * Standard: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"
     */
    mono: string;
  };
  colors: {
    primary: {
      /** Primärer Markenfarbton (Buttons, aktive Nav-Punkte, Icons) */
      default: string;
      /** Hover-Farbton für Buttons und interaktive Elemente */
      hover: string;
      /** Zarte Akzenttönung für Badges und Highlights */
      light: string;
      /** Sehr zarter rosa Praxishintergrund für Sektionen */
      surface: string;
      /** Sanfter Hintergrund für Karten und Boxen */
      subtle: string;
      /** Dezenter Trennlinien- und Rahmenfarbton */
      border: string;
    };
    background: {
      /** Gesamter Seitenhintergrund (warm & organisch) */
      page: string;
      /** Karten- und Modalhintergründe */
      card: string;
      /** Alternierende Sektionshintergründe */
      sectionAlt: string;
    };
    text: {
      /** Haupttextfarbe für beste Lesbarkeit */
      main: string;
      /** Sekundärtext für Fließtext und Erklärungen */
      body: string;
      /** Gedämpfter Text für Metadaten und Labels */
      muted: string;
      /** Sehr dezenter Text für Ziffern und Hilfetexte */
      subtle: string;
    };
  };
}

export const THEME_CONFIG: ThemeConfig = {
  // 1. SCHRIFTARTEN
  fonts: {
    heading: '"EB Garamond", Georgia, serif',
    body: '"EB Garamond", Georgia, serif',
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },

  // 2. FARBPALETTE
  colors: {
    primary: {
      default: '#BE185D', // Warmes Praxis-Himbeer / Pink-700
      hover: '#9D174D',   // Dunkleres Pink-800 für Hover-Zustände
      light: '#FCE7F3',   // Zartes Pink-100 für Badge-Hintergründe
      surface: '#FAF5F6', // Zart getönter Sektionshintergrund
      subtle: '#FCF8F9',  // Heller Kartenhintergrund
      border: '#F0E6E8',  // Sanfte Rahmenlinie
    },
    background: {
      page: '#FCFBF9',    // Warmer Praxis-Hintergrund
      card: '#FFFFFF',    // Reines Weiß für Inhaltskarten
      sectionAlt: '#FAF5F6', // Alternierender Sektionshintergrund
    },
    text: {
      main: '#2B2326',   // Tiefes Warmgrau / Kohle für Überschriften
      body: '#5C4A4F',   // Gut lesbares Dunkelgrau für Paragraphen
      muted: '#826970',  // Sanftes Mittelgrau für Zusatzinfos
      subtle: '#A88C93', // Helles Grau für Nummern & Trenner
    },
  },
};

/**
 * Wendet die konfigurierten Theme-Werte als CSS Custom Properties auf :root an.
 * Wird beim Start der Anwendung in main.tsx aufgerufen.
 */
export function applyTheme(theme: ThemeConfig = THEME_CONFIG): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;

  // Schriftarten
  root.style.setProperty('--font-heading', theme.fonts.heading);
  root.style.setProperty('--font-body', theme.fonts.body);
  root.style.setProperty('--font-mono', theme.fonts.mono);

  // Farben - Primär / Akzente
  root.style.setProperty('--color-primary', theme.colors.primary.default);
  root.style.setProperty('--color-primary-hover', theme.colors.primary.hover);
  root.style.setProperty('--color-primary-light', theme.colors.primary.light);
  root.style.setProperty('--color-primary-surface', theme.colors.primary.surface);
  root.style.setProperty('--color-primary-subtle', theme.colors.primary.subtle);
  root.style.setProperty('--color-primary-border', theme.colors.primary.border);

  // Farben - Hintergründe
  root.style.setProperty('--color-bg-page', theme.colors.background.page);
  root.style.setProperty('--color-bg-card', theme.colors.background.card);
  root.style.setProperty('--color-bg-alt', theme.colors.background.sectionAlt);

  // Farben - Texte
  root.style.setProperty('--color-text-main', theme.colors.text.main);
  root.style.setProperty('--color-text-body', theme.colors.text.body);
  root.style.setProperty('--color-text-muted', theme.colors.text.muted);
  root.style.setProperty('--color-text-subtle', theme.colors.text.subtle);
}
