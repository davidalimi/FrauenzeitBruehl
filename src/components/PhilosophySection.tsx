import { SectionBackToTop } from './SectionBackToTop';

export function PhilosophySection() {
  return (
    <section id="philosophie" className="relative pt-8 sm:pt-12 pb-14 sm:pb-18 border-b border-[#F0E6E8] bg-white scroll-mt-24 xl:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="border-b border-[#F0E6E8] pb-4 mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2B2326] leading-snug">
            Unsere Philosophie
          </h2>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-[#4D3F43] leading-relaxed">
            <p>
              In unserer Praxis möchten wir einen Ort schaffen, an dem Sie sich in jeder Lebensphase willkommen, verstanden und gut aufgehoben fühlen. Von der Mädchensprechstunde über Schwangerschaft und Familienplanung bis hin zu den Wechseljahren begleiten wir Sie mit fachlicher Kompetenz und Einfühlungsvermögen.
            </p>
            <p>
              Jede Frau ist einzigartig – deshalb stehen für uns Ihre individuellen Bedürfnisse, Wünsche und Lebensumstände im Mittelpunkt. Wir nehmen uns Zeit und planen gemeinsam mit Ihnen die bestmögliche Behandlung. Dabei verbinden wir moderne medizinische Erkenntnisse mit einem ganzheitlichen Blick auf Ihre Gesundheit und Ihr Wohlbefinden.
            </p>
            <p>
              Eine vertrauensvolle Atmosphäre, Offenheit und gegenseitiger Respekt bilden die Grundlage unserer Arbeit. Unser Ziel ist es, dass Sie sich bei jedem Besuch sicher und ernst genommen fühlen.
            </p>
          </div>

          <p className="text-base sm:text-lg font-medium text-pink-900 leading-relaxed">
            Wir freuen uns darauf, Sie kennenzulernen und Sie auf Ihrem persönlichen Lebensweg begleiten zu dürfen.
          </p>
        </div>
      </div>

      {/* Discreet corner up arrow */}
      <SectionBackToTop />
    </section>
  );
}

