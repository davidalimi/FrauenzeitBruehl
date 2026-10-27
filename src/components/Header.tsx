import { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onOpenAppointmentModal?: () => void;
  activeNav?: string;
  onNavClick?: (nav: string) => void;
}

export function Header({ 
  activeNav = 'start', 
  onNavClick 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logo asset URL supporting Vite base path
  const logoUrl = `${import.meta.env.BASE_URL}assets/header/logo.png`;

  const handleNavClick = (sectionId: string) => {
    if (onNavClick) onNavClick(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            <span className="text-2xl xl:text-[27px] font-bold tracking-tight text-[#2B2326] font-sans leading-tight group-hover:text-pink-700 transition-colors">
              Frauenzeit<span className="text-pink-700">Brühl</span>
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
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-700 whitespace-nowrap cursor-pointer ${
                activeNav === 'start' ? 'text-pink-700 font-bold border-b-2 border-pink-700' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Startseite
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('philosophie')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-700 whitespace-nowrap cursor-pointer ${
                activeNav === 'philosophie' ? 'text-pink-700 font-bold border-b-2 border-pink-700' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Philosophie
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('team')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-700 whitespace-nowrap cursor-pointer ${
                activeNav === 'team' ? 'text-pink-700 font-bold border-b-2 border-pink-700' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Team
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praxis')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-700 whitespace-nowrap cursor-pointer ${
                activeNav === 'praxis' ? 'text-pink-700 font-bold border-b-2 border-pink-700' : 'text-[#4D3F43] font-medium'
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
              <div className="relative h-18 w-18 xl:h-20 xl:w-20 rounded-full p-1.5 border-2 border-[#E8D2D7] bg-[#FCF8F9] shadow-sm shrink-0 overflow-hidden group-hover:border-pink-700/60 transition-all group-hover:scale-105">
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
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-700 whitespace-nowrap cursor-pointer ${
                activeNav === 'leistungen' ? 'text-pink-700 font-bold border-b-2 border-pink-700' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Leistungen
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('kontakt')}
              className={`text-base xl:text-[17px] transition-colors py-1.5 hover:text-pink-700 whitespace-nowrap cursor-pointer ${
                activeNav === 'kontakt' ? 'text-pink-700 font-bold border-b-2 border-pink-700' : 'text-[#4D3F43] font-medium'
              }`}
            >
              Kontakt
            </button>
          </nav>

          {/* Right CTA: Termin Buchen */}
          <div className="flex items-center justify-end shrink-0">
            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-pink-700 px-5 py-3 text-sm xl:text-base font-semibold text-white shadow-xs transition-all hover:bg-pink-800 active:scale-[0.98] whitespace-nowrap cursor-pointer"
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
            <div className="relative h-13 w-13 rounded-full p-1 border border-[#E8D2D7] bg-[#FCF8F9] shadow-xs shrink-0 overflow-hidden">
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
                Frauenzeit<span className="text-pink-700">Brühl</span>
              </span>
              <span className="text-[10px] font-medium text-[#826970]">
                Gynäkologie & Geburtshilfe
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-700 p-2.5 text-white shadow-xs hover:bg-pink-800 transition-colors"
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
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Startseite</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('philosophie')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Philosophie</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('team')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Team</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praxis')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Praxis</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('leistungen')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Leistungen</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('kontakt')}
              className="flex items-center justify-between py-2 text-left hover:text-pink-700"
            >
              <span>Kontakt</span>
              <ChevronRight className="h-4 w-4 text-[#A37B85]" />
            </button>
          </nav>

          {/* Mobile Direct Action Block */}
          <div className="mt-6 pt-5 border-t border-[#F0E6E8] space-y-3">
            <a
              href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-700 py-3 text-sm font-semibold text-white shadow-xs hover:bg-pink-800 transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>Termin Buchen</span>
            </a>

            <a
              href="tel:0223243545"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8D2D7] bg-[#FCF8F9] py-3 text-sm font-semibold text-pink-700 hover:bg-[#FAF5F6] transition-colors"
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
