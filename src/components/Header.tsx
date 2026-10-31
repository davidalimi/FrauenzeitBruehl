import { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  Accessibility
} from 'lucide-react';

interface HeaderProps {
  onOpenAppointmentModal?: () => void;
  activeNav?: string;
  onNavClick?: (nav: string) => void;
  onOpenAccessibility?: () => void;
  isA11yActive?: boolean;
}

export function Header({ 
  activeNav = 'start', 
  onNavClick,
  onOpenAccessibility,
  isA11yActive = false
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightsOpen, setHighlightsOpen] = useState(false);

  // Logo asset URL supporting Vite base path
  const logoUrl = `${import.meta.env.BASE_URL}assets/header/logo.png`;

  const handleNavClick = (sectionId: string) => {
    if (onNavClick) onNavClick(sectionId);
    setMobileMenuOpen(false);

    if (sectionId === 'start') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 96;

      // Locate the section title heading or its title container
      const h2 = section.querySelector('h2');
      const titleTarget = h2 ? (h2.closest('.text-left') || h2) : section;

      const targetRect = titleTarget.getBoundingClientRect();
      const targetTop = targetRect.top + window.scrollY;
      
      // Position the section title at the top of the screen right below the header (with 12px breathing room)
      const offsetPosition = targetTop - headerHeight - 12;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleServiceHighlightClick = (serviceId: string) => {
    setHighlightsOpen(false);
    setMobileMenuOpen(false);
    if (onNavClick) onNavClick(serviceId);
    
    const section = document.getElementById('leistungen');
    if (section) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 96;

      const h2 = section.querySelector('h2');
      const titleTarget = h2 ? (h2.closest('.text-left') || h2) : section;

      const targetRect = titleTarget.getBoundingClientRect();
      const targetTop = targetRect.top + window.scrollY;
      const offsetPosition = targetTop - headerHeight - 12;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
    window.dispatchEvent(new CustomEvent('open-service', { detail: serviceId }));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#F0E6E8] shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout (lg and above): Left Brand Text | Center Nav with Logo in middle between Praxis & Leistungen | Right CTA */}
        <div className="hidden lg:flex h-24 xl:h-26 items-center justify-between gap-4">
          
          {/* Left Brand Text: FrauenzeitBrühl / Gynäkologie & Geburtshilfe */}
          <a 
            href="#start" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('start');
            }}
            className="flex flex-col text-left group cursor-pointer shrink-0"
            aria-label="Frauenzeit Brühl Startseite"
          >
            <span className="text-2xl xl:text-[27px] font-bold tracking-tight text-[#2B2326] font-sans leading-tight group-hover:text-pink-900 transition-colors">
              Frauenzeit<span className="text-pink-900">Brühl</span>
            </span>
            <span className="text-xs xl:text-sm font-medium text-[#826970] tracking-wide leading-tight mt-0.5">
              Gynäkologie & Geburtshilfe
            </span>
          </a>

          {/* Center Navigation: Startseite, Philosophie, Team, Praxis, [Logo], Leistungen, Kontakt */}
          <nav className="flex items-center justify-center gap-3.5 xl:gap-5">
            <button
              type="button"
              onClick={() => handleNavClick('start')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                activeNav === 'start' ? 'text-pink-900 font-bold border-b-2 border-pink-900' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Startseite
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('philosophie')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                activeNav === 'philosophie' ? 'text-pink-900 font-bold border-b-2 border-pink-900' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Philosophie
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('team')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                activeNav === 'team' ? 'text-pink-900 font-bold border-b-2 border-pink-900' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Team
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praxis')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                activeNav === 'praxis' ? 'text-pink-900 font-bold border-b-2 border-pink-900' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Praxis
            </button>

            {/* Center Brand Logo (Enlarged and prominent between Praxis and Leistungen) */}
            <a 
              href="#start" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('start');
              }}
              className="group cursor-pointer mx-1.5 xl:mx-3 shrink-0"
              aria-label="Frauenzeit Brühl Startseite"
            >
              <div className="relative h-21 w-21 xl:h-24 xl:w-24 rounded-full bg-white shadow-xs shrink-0 overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
                <img 
                  src={logoUrl} 
                  alt="Frauenzeit Brühl Logo" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public/')) {
                      target.src = './public/assets/header/logo.png';
                    }
                  }}
                />
              </div>
            </a>

            <button
              type="button"
              onClick={() => handleNavClick('leistungen')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                activeNav === 'leistungen' ? 'text-pink-900 font-bold border-b-2 border-pink-900' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Leistungen
            </button>

            {/* Schwerpunkte Menu: Ernährungsmedizin & Better Pelvi */}
            <div 
              className="relative"
              onMouseEnter={() => setHighlightsOpen(true)}
              onMouseLeave={() => setHighlightsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setHighlightsOpen(!highlightsOpen)}
                className={`inline-flex items-center gap-1 text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                  activeNav === 'ernaehrung' || activeNav === 'betterpelvi'
                    ? 'text-pink-900 font-bold border-b-2 border-pink-900'
                    : 'text-[#4D3F43] font-medium'
                }`}
                aria-expanded={highlightsOpen}
              >
                <span>Schwerpunkte</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${highlightsOpen ? 'rotate-180 text-pink-900' : 'text-[#826970]'}`} />
              </button>

              {highlightsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-2xl bg-white p-2 border border-[#E8D2D7] shadow-lg text-left divide-y divide-[#FAF5F6]">
                    <button
                      type="button"
                      onClick={() => handleServiceHighlightClick('ernaehrung')}
                      className="w-full text-left p-3 rounded-xl hover:bg-[#FAF1F3] transition-colors group cursor-pointer block"
                    >
                      <div className="font-semibold text-sm text-[#2B2326] group-hover:text-pink-900 transition-colors">
                        Ernährungsmedizin
                      </div>
                      <div className="text-xs text-[#5C4A4F] mt-0.5">
                        Ganzheitliche Beratung & Mikronährstoffe
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleServiceHighlightClick('betterpelvi')}
                      className="w-full text-left p-3 rounded-xl hover:bg-[#FAF1F3] transition-colors group cursor-pointer block"
                    >
                      <div className="font-semibold text-sm text-[#2B2326] group-hover:text-pink-900 transition-colors">
                        Better Pelvi
                      </div>
                      <div className="text-xs text-[#5C4A4F] mt-0.5">
                        Innovative Beckenbodentherapie
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('kontakt')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-900 whitespace-nowrap cursor-pointer ${
                activeNav === 'kontakt' ? 'text-pink-900 font-bold border-b-2 border-pink-900' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Kontakt
            </button>
          </nav>

          {/* Right CTA: Barrierefreiheit & Termin Buchen */}
          <div className="flex items-center justify-end gap-2 xl:gap-3 shrink-0">
            {onOpenAccessibility && (
              <button
                type="button"
                onClick={onOpenAccessibility}
                title="Barrierefreiheit & Lesekomfort anpassen"
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs xl:text-sm font-semibold transition-all cursor-pointer shadow-2xs group ${
                  isA11yActive
                    ? 'bg-pink-900 text-white border-pink-900 shadow-xs'
                    : 'bg-white text-[#4D3F43] border-[#E8D2D7] hover:text-pink-900 hover:border-pink-900/40 hover:bg-[#FAF1F3]'
                }`}
              >
                <Accessibility className={`h-4 w-4 ${isA11yActive ? 'text-white' : 'text-pink-900'} group-hover:scale-110 transition-transform`} />
                <span>Barrierefreiheit</span>
                {isA11yActive && (
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                )}
              </button>
            )}

            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-pink-900 px-5 py-3 text-sm xl:text-base font-semibold text-white shadow-xs transition-all hover:bg-pink-950 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Termin Buchen</span>
            </a>
          </div>
        </div>

        {/* Mobile / Tablet Header Bar (under lg) */}
        <div className="flex lg:hidden h-20 items-center justify-between gap-4">
          <a 
            href="#start" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('start');
            }}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative h-15 w-15 sm:h-16 sm:w-16 rounded-full bg-white shadow-xs shrink-0 overflow-hidden group-hover:scale-105 transition-all">
              <img 
                src={logoUrl} 
                alt="Frauenzeit Brühl Logo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('public/')) {
                    target.src = './public/assets/header/logo.png';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#2B2326]">
                Frauenzeit<span className="text-pink-900">Brühl</span>
              </span>
              <span className="text-[10px] font-medium text-[#826970]">
                Gynäkologie & Geburtshilfe
              </span>
            </div>
          </a>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {onOpenAccessibility && (
              <button
                type="button"
                onClick={onOpenAccessibility}
                className={`rounded-lg p-2.5 transition-colors cursor-pointer border ${
                  isA11yActive 
                    ? 'bg-pink-900 text-white border-pink-900' 
                    : 'bg-white text-pink-900 border-[#E8D2D7] hover:bg-[#FAF5F6]'
                }`}
                title="Barrierefreiheit"
                aria-label="Barrierefreiheit anpassen"
              >
                <Accessibility className="h-4 w-4" />
              </button>
            )}

            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-900 p-2.5 text-white shadow-xs hover:bg-pink-950 transition-colors"
              title="Termin buchen"
              aria-label="Termin Buchen"
            >
              <Calendar className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#4D3F43] hover:bg-[#FAF5F6] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Navigation öffnen"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#F0E6E8] bg-white px-4 py-6 lg:hidden shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 text-base font-medium text-[#2B2326]">
            <button
              type="button"
              onClick={() => handleNavClick('start')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-900"
            >
              <span>Startseite</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('philosophie')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-900"
            >
              <span>Philosophie</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('team')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-900"
            >
              <span>Team</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praxis')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-900"
            >
              <span>Praxis</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('leistungen')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-900"
            >
              <span>Leistungen</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>

            {/* Mobile Highlights Sub-Menu */}
            <div className="my-1 rounded-xl bg-[#FAF1F3]/70 p-2.5 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-pink-950 px-2 block">
                Schwerpunkte & Highlights
              </span>
              <button
                type="button"
                onClick={() => handleServiceHighlightClick('ernaehrung')}
                className="flex w-full items-center justify-between py-2 px-2.5 rounded-lg text-left text-sm font-medium text-[#2B2326] hover:bg-white hover:text-pink-900 transition-colors"
              >
                <span>Ernährungsmedizin</span>
                <ChevronRight className="h-3.5 w-3.5 text-[#A37B85]" />
              </button>
              <button
                type="button"
                onClick={() => handleServiceHighlightClick('betterpelvi')}
                className="flex w-full items-center justify-between py-2 px-2.5 rounded-lg text-left text-sm font-medium text-[#2B2326] hover:bg-white hover:text-pink-900 transition-colors"
              >
                <span>Better Pelvi</span>
                <ChevronRight className="h-3.5 w-3.5 text-[#A37B85]" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('kontakt')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-900"
            >
              <span>Kontakt</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
          </nav>

          {/* Mobile Direct Action Block */}
          <div className="mt-6 pt-5 border-t border-[#F0E6E8] space-y-3">
            {onOpenAccessibility && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccessibility();
                }}
                className={`flex w-full items-center justify-between rounded-xl p-3 text-sm font-semibold transition-colors cursor-pointer border ${
                  isA11yActive
                    ? 'bg-pink-900 text-white border-pink-900'
                    : 'bg-[#FCF8F9] text-[#2B2326] border-[#E8D2D7] hover:bg-[#FAF1F3]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Accessibility className="h-4 w-4 text-pink-900" />
                  <span>Barrierefreiheit & Lesemodus</span>
                </span>
                <span className="text-xs bg-white/90 text-pink-950 px-2 py-0.5 rounded-md font-bold border border-[#E8D2D7]">
                  {isA11yActive ? 'Aktiv' : 'Anpassen'}
                </span>
              </button>
            )}

            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-900 py-3 text-sm font-semibold text-white shadow-xs hover:bg-pink-950 transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>Termin Buchen</span>
            </a>

            <a
              href="tel:0223243545"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8D2D7] bg-[#FCF8F9] py-3 text-sm font-semibold text-pink-900 hover:bg-[#FAF5F6] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(02232) 43545</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
