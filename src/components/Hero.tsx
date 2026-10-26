import { Calendar, Phone, HeartHandshake } from 'lucide-react';

export function Hero() {
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';
  const teamPhotoUrl = `${import.meta.env.BASE_URL}assets/hero/team.png`;
  const drBirkenfeldImg = `${import.meta.env.BASE_URL}assets/team/anika-birkenfeld.png`;
  const drLedwigImg = `${import.meta.env.BASE_URL}assets/team/corinna-ledwig.png`;

  return (
    <section className="relative overflow-hidden border-b border-[#F0E6E8] bg-gradient-to-b from-[#FAF5F6] via-white to-[#FCFBF9] py-10 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Hero Showcase: Brand, Direct Actions & Team Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Leitmotiv & Direct Actions */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#2B2326] leading-tight" style={{ textWrap: 'balance' }}>
              Frauenzeit<span className="text-pink-700">Brühl</span>
            </h1>

            <p className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-medium text-pink-700 tracking-tight leading-snug">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-pink-800 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Termin Buchen</span>
              </a>

              <a
                href="tel:0223243545"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E8D2D7] bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold text-pink-700 shadow-2xs hover:bg-[#FAF5F6] active:scale-[0.98] transition-all"
              >
                <Phone className="h-4 w-4 text-pink-700" />
                <span>02232 / 43545</span>
              </a>
            </div>

            {/* Transition Note Badge */}
            <div className="mt-5 pt-4 border-t border-[#F0E6E8] flex items-center gap-2 text-xs text-[#735F64]">
              <HeartHandshake className="h-4 w-4 text-pink-700 shrink-0" />
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
          <div className="border-b border-[#F0E6E8] pb-6 mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2B2326] leading-snug">
              Herzlich Willkommen auf der Webseite der Praxis FrauenzeitBrühl
            </h2>

            <p className="mt-3 text-base sm:text-lg font-semibold text-pink-700">
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

          {/* Letter Sign-Off and Doctor Signatures */}
          <div className="mt-8 pt-6 border-t border-[#F0E6E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-4xl">
            <div>
              <p className="text-sm font-semibold text-pink-700">Herzlichst,</p>
              <p className="text-xs sm:text-sm font-semibold text-[#2B2326] mt-0.5">
                Ihre neuen Frauenärztinnen der FrauenzeitBrühl
              </p>
            </div>

            {/* Doctor Profile Cards */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Dr. Birkenfeld */}
              <div className="flex items-center gap-3 bg-white border border-[#E8D2D7] rounded-lg px-3.5 py-2 shadow-2xs">
                <img
                  src={drBirkenfeldImg}
                  alt="Dr. med. Anika Birkenfeld"
                  className="h-10 w-10 rounded-full object-cover border border-[#E8D2D7]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public/')) {
                      target.src = './public/assets/team/anika-birkenfeld.png';
                    }
                  }}
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B2326]">Dr. med. Anika Birkenfeld</h4>
                </div>
              </div>

              {/* Dr. Ledwig */}
              <div className="flex items-center gap-3 bg-white border border-[#E8D2D7] rounded-lg px-3.5 py-2 shadow-2xs">
                <img
                  src={drLedwigImg}
                  alt="Dr. med. Corinna Ledwig"
                  className="h-10 w-10 rounded-full object-cover border border-[#E8D2D7]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public/')) {
                      target.src = './public/assets/team/corinna-ledwig.png';
                    }
                  }}
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B2326]">Dr. med. Corinna Ledwig</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
