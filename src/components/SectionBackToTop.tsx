import { ArrowUp } from 'lucide-react';

interface SectionBackToTopProps {
  className?: string;
  position?: 'bottom-right' | 'top-right';
}

export function SectionBackToTop({ 
  className = '', 
  position = 'bottom-right' 
}: SectionBackToTopProps) {
  const positionClasses = position === 'bottom-right' 
    ? 'bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8'
    : 'top-6 right-4 sm:top-8 sm:right-6 lg:right-8';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      title="Nach oben"
      aria-label="Zum Anfang der Seite scrollen"
      className={`absolute ${positionClasses} z-10 inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/85 hover:bg-white text-[#826970] hover:text-pink-900 border border-[#EADEE1] hover:border-pink-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-pink-500/30 ${className}`}
    >
      <ArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="sr-only">Nach oben</span>
    </button>
  );
}
