import { Calendar, Phone, HeartHandshake } from 'lucide-react';

export function Hero() {
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';
  const teamPhotoUrl = `${import.meta.env.BASE_URL}assets/hero/team.png`;

  return (
    <section className="relative overflow-hidden border-b border-[#F0E6E8] bg-gradient-to-b from-[#FAF5F6] via-white to-[#FCFBF9] py-10 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Hero Showcase: Brand, Direct Actions & Team Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Leitmotiv & Direct Actions */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#2B2326] leading-tight" style={{ textWrap: 'balance' }}>
              Frauenzeit<span className="text-pink-900">Brühl</span>
            </h1>

            <p className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-medium text-pink-900 tracking-tight leading-snug">
              Zeit für Frauen. <br className="hidden sm:inline" />
              Zeit für Gesundheit. <br className="hidden sm:inline" />
              Zeit für Sie.
            </p>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[#5C4A4F] max-w-xl">
              Wir begleiten Sie in jeder Lebensphase mit Kompetenz, Herz und einem ganzheitlichen Blick auf Ihre Gesundheit.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-900 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-pink-950 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Termin Buchen</span>
              </a>

              <a
                href="tel:0223243545"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E8D2D7] bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold text-pink-900 shadow-2xs hover:bg-[#FAF5F6] active:scale-[0.98] transition-all"
              >
                <Phone className="h-4 w-4 text-pink-900" />
                <span>02232 / 43545</span>
              </a>
            </div>

            {/* Transition Note Badge */}
            <div className="mt-5 pt-4 border-t border-[#F0E6E8] flex items-center gap-2 text-xs text-[#735F64]">
              <HeartHandshake className="h-4 w-4 text-pink-900 shrink-0" />
              <span>Praxisübernahme von Frau Dr. Sabine Latta zum 1. Oktober 2026</span>
            </div>
          </div>

          {/* Right Column: Team Showcase Photo */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={teamPhotoUrl}
                alt="Das Team der Praxis Frauenzeit Brühl"
                className="w-full h-auto object-cover block"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('public/')) {
                    target.src = './public/assets/hero/team.png';
                  }
                }}
              />
            </div>
          </div>

        </div>

        {/* Official Welcome Message: Clean typography without round border */}
        <div className="border-t border-[#F0E6E8] pt-10 sm:pt-14 text-left">
          {/* Letter Header */}
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2B2326] leading-snug">
              Herzlich Willkommen auf der Webseite der Praxis FrauenzeitBrühl
            </h2>

            <p className="mt-4 text-base sm:text-lg font-semibold text-pink-900">
              Liebe Patientinnen,
            </p>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="max-w-4xl space-y-4 text-sm sm:text-base text-[#4D3F43] leading-relaxed">
            <p>
              Wir freuen uns sehr, die gynäkologische Praxis von Frau Dr. Sabine Latta zum 1. Oktober 2026 übernehmen zu dürfen und Sie künftig in der FrauenzeitBrühl willkommen zu heißen.
            </p>

            <p>
              Wir sind Dr. med. Anika Birkenfeld, Mutter von zwei Kindern und seit 2018 Fachärztin für Frauenheilkunde und Geburtshilfe, sowie Dr. med. Corinna Ledwig, Fachärztin seit 2016 für Frauenheilkunde und Geburtshilfe. Gemeinsam begleiten wir Frauen mit langjähriger Erfahrung, medizinischer Kompetenz und viel Einfühlungsvermögen.
            </p>

            <p>
              Unser Ziel ist es, Sie individuell und vertrauensvoll zu betreuen. Neben der klassischen gynäkologischen Versorgung legen wir besonderen Wert auf eine ganzheitliche Frauenheilkunde – mit Ihren persönlichen Bedürfnissen und Ihrer Gesundheit im Mittelpunkt.
            </p>

            <p>
              Wir freuen uns darauf, Sie kennenzulernen und mit Fachwissen, Empathie sowie einem offenen Ohr begleiten zu dürfen.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4 flex items-center gap-3 text-sm font-semibold text-[#826970]">
            <span className="h-px w-10 bg-[#E8D2D7]" />
            <span>Dr. med. Anika Birkenfeld & Dr. med. Corinna Ledwig</span>
          </div>
        </div>

      </div>
    </section>
  );
}
