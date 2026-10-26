import { HeartHandshake, Sparkles, ShieldCheck, Heart, Flower2 } from 'lucide-react';
import { CherryBlossomBranch } from './BotanicalDecorations';

export function PhilosophySection() {
  const pillars = [
    {
      icon: <Heart className="h-6 w-6 text-pink-700" />,
      title: 'Wohlfühlatmosphäre in jeder Lebensphase',
      description:
        'In unserer Praxis möchten wir einen Ort schaffen, an dem Sie sich in jeder Lebensphase – von der Mädchensprechstunde über die Familienplanung und Schwangerschaft bis hin zu den Wechseljahren – willkommen, verstanden und rundum gut aufgehoben fühlen.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-pink-700" />,
      title: 'Individuelle Betreuung & Zeit für Sie',
      description:
        'Jede Frau ist einzigartig. Ihre persönlichen Bedürfnisse, Wünsche und individuellen Lebensumstände stehen im Mittelpunkt unseres Handelns. Wir nehmen uns bewusst Zeit, um gemeinsam mit Ihnen die bestmögliche Behandlung zu planen.'
    },
    {
      icon: <Flower2 className="h-6 w-6 text-pink-700" />,
      title: 'Ganzheitlicher Ansatz',
      description:
        'Wir verbinden moderne, evidenzbasierte medizinische Erkenntnisse mit einem ganzheitlichen Blick auf Ihre Gesundheit, Ihr seelisches Wohlbefinden und Ihren Körper im Einklang.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-pink-700" />,
      title: 'Vertrauen, Offenheit & Respekt',
      description:
        'Eine vertrauensvolle Atmosphäre, Offenheit und gegenseitiger Respekt bilden das feste Fundament unserer täglichen Arbeit – damit Sie sich bei jedem Besuch in unserer Praxis sicher und ernst genommen fühlen.'
    }
  ];

  return (
    <section id="philosophie" className="relative py-14 sm:py-18 lg:py-20 border-b border-[#F0E6E8] bg-white scroll-mt-20 overflow-hidden">
      {/* Subtle Botanical Decoration */}
      <div className="absolute -top-10 -right-10 pointer-events-none select-none opacity-20 hidden lg:block">
        <CherryBlossomBranch className="w-72 h-72 text-pink-300" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF5F6] px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-pink-700 border border-[#F0E6E8]">
            <HeartHandshake className="h-3.5 w-3.5" />
            <span>Leitbild der Praxis Frauenzeit Brühl</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#2B2326]">
            Unsere Philosophie
          </h2>
          <p className="mt-3 text-base sm:text-lg text-pink-700 font-medium italic">
            „In unserer Praxis möchten wir einen Ort schaffen, an dem Sie sich in jeder Lebensphase willkommen, verstanden und gut aufgehoben fühlen.“
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-[#F0E6E8] bg-[#FAF5F6]/40 p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-[#E8D2D7] hover:bg-white transition-all flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#F0E6E8] shadow-2xs group-hover:scale-110 group-hover:bg-pink-50 transition-all mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2B2326] leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#5C4A4F] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
