export function PhilosophySection() {
  return (
    <section id="philosophie" className="relative py-14 sm:py-18 lg:py-20 border-b border-[#F0E6E8] bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="border-b border-[#F0E6E8] pb-4 mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2B2326]">
            Unsere Philosophie
          </h2>
        </div>

        {/* Clean, open typography without the round border card */}
        <div className="max-w-4xl space-y-6">
          <p className="text-lg sm:text-xl font-medium text-pink-800 leading-relaxed">
            In unserer Praxis möchten wir einen Ort schaffen, an dem Sie sich in jeder Lebensphase willkommen, verstanden und gut aufgehoben fühlen. Von der Mädchensprechstunde über Schwangerschaft und Familienplanung bis hin zu den Wechseljahren begleiten wir Sie mit fachlicher Kompetenz und Einfühlungsvermögen.
          </p>

          <div className="space-y-4 text-base sm:text-lg text-[#4D3F43] leading-relaxed">
            <p>
              Jede Frau ist einzigartig – deshalb stehen für uns Ihre individuellen Bedürfnisse, Wünsche und Lebensumstände im Mittelpunkt. Wir nehmen uns Zeit und planen gemeinsam mit Ihnen die bestmögliche Behandlung. Dabei verbinden wir moderne medizinische Erkenntnisse mit einem ganzheitlichen Blick auf Ihre Gesundheit und Ihr Wohlbefinden.
            </p>
            <p>
              Eine vertrauensvolle Atmosphäre, Offenheit und gegenseitiger Respekt bilden die Grundlage unserer Arbeit. Unser Ziel ist es, dass Sie sich bei jedem Besuch sicher und ernst genommen fühlen.
            </p>
            <p className="font-medium text-[#2B2326]">
              Wir freuen uns darauf, Sie kennenzulernen und Sie auf Ihrem persönlichen Lebensweg begleiten zu dürfen.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-3 text-sm font-semibold text-[#826970]">
            <span className="h-px w-10 bg-[#E8D2D7]" />
            <span>Dr. med. Anika Birkenfeld & Dr. med. Corinna Ledwig</span>
          </div>
        </div>
      </div>
    </section>
  );
}

