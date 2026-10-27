import { MapPin, Phone, Clock, Mail, ArrowUpRight, Calendar } from 'lucide-react';

export function ContactSection() {
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-[#FAF5F6] border-b border-[#F0E6E8] scroll-mt-20">
      <div id="sprechzeiten" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header: Left-aligned like Unsere Praxis */}
        <div className="max-w-3xl text-left pb-8 sm:pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-700">
            <Clock className="h-3.5 w-3.5" />
            <span>Kontakt & Sprechzeiten</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl lg:text-4xl">
            Sprechzeiten
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C4A4F] leading-relaxed">
            Wir nehmen uns Zeit für Ihre Gesundheit und Ihr Wohlbefinden. Vereinbaren Sie Ihren Wunschtermin oder treten Sie direkt mit uns in Kontakt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Sprechzeiten Timetable Card (Left Column, spans the 4 rows space) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 border border-[#F0E6E8] shadow-xs text-left h-full">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#F5EDEF]">
              <div className="h-9 w-9 rounded-xl bg-pink-50 flex items-center justify-center text-pink-700">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2B2326]">
                Praxis-Sprechzeiten
              </h3>
            </div>
            
            {/* Hours Table (Balanced across the card height) */}
            <div className="my-auto py-2 space-y-1 text-xs sm:text-sm divide-y divide-[#FAF5F6] font-quicksand">
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold text-[#2B2326]">Montag</span>
                <span className="text-[#5C4A4F] font-medium tabular-nums text-right">08:00 – 13:00 & 14:00 – 18:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold text-[#2B2326]">Dienstag</span>
                <span className="text-[#5C4A4F] font-medium tabular-nums text-right">08:00 – 15:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold text-[#2B2326]">Mittwoch</span>
                <span className="text-[#5C4A4F] font-medium tabular-nums text-right">08:00 – 15:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold text-[#2B2326]">Donnerstag</span>
                <span className="text-[#5C4A4F] font-medium tabular-nums text-right">08:00 – 13:00 & 14:00 – 18:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold text-[#2B2326]">Freitag</span>
                <span className="text-[#5C4A4F] font-medium tabular-nums text-right">08:30 – 14:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* 4 Action Cards on the Right: 1. Adresse, 2. Telefon, 3. E-Mail, 4. Termin */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-3.5 text-left h-full">
            
            {/* Row 1: Address Card */}
            <a
              href="https://maps.app.goo.gl/jpkhX3wU7SzwhnGX6"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white p-4 sm:p-4.5 border border-[#F0E6E8] shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-[#FAF1F3] text-pink-700 flex items-center justify-center shrink-0 group-hover:bg-pink-700 group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#826970]">
                      Adresse & Anfahrt
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#A37B85] group-hover:text-pink-700 transition-colors" />
                  </div>
                  <div className="mt-0.5 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors">
                    Mühlenstraße 37
                  </div>
                  <div className="text-xs text-[#5C4A4F]">
                    50321 Brühl
                  </div>
                </div>
              </div>
            </a>

            {/* Row 2: Phone Card */}
            <a
              href="tel:0223243545"
              className="group block rounded-2xl bg-white p-4 sm:p-4.5 border border-[#F0E6E8] shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-[#FAF1F3] text-pink-700 flex items-center justify-center shrink-0 group-hover:bg-pink-700 group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#826970]">
                      Telefon
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#A37B85] group-hover:text-pink-700 transition-colors" />
                  </div>
                  <div className="mt-0.5 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors">
                    02232 / 43545
                  </div>
                  <div className="text-xs text-[#5C4A4F]">
                    Direkt anrufen für Beratung & Rückfragen
                  </div>
                </div>
              </div>
            </a>

            {/* Row 3: Email Card */}
            <a
              href="mailto:praxis@frauenzeit-bruehl.de"
              className="group block rounded-2xl bg-white p-4 sm:p-4.5 border border-[#F0E6E8] shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-[#FAF1F3] text-pink-700 flex items-center justify-center shrink-0 group-hover:bg-pink-700 group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#826970]">
                      E-Mail
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#A37B85] group-hover:text-pink-700 transition-colors" />
                  </div>
                  <div className="mt-0.5 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors truncate">
                    praxis@frauenzeit-bruehl.de
                  </div>
                  <div className="text-xs text-[#5C4A4F]">
                    Nachricht oder Rezeptanfrage senden
                  </div>
                </div>
              </div>
            </a>

            {/* Row 4: Termin Buchen Card */}
            <a
              href={doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white p-4 sm:p-4.5 border border-[#F0E6E8] shadow-2xs hover:border-pink-400 hover:shadow-xs transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-pink-700 text-white flex items-center justify-center shrink-0 group-hover:bg-pink-800 transition-colors shadow-2xs">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-700">
                      Termin Buchen
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="mt-0.5 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors">
                    Online-Terminbuchung
                  </div>
                  <div className="text-xs text-[#5C4A4F]">
                    24/7 über Doctolib unkompliziert buchen
                  </div>
                </div>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
