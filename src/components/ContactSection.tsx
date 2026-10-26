import { MapPin, Phone, Clock, Calendar, Mail, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-[#FAF5F6] border-b border-[#F0E6E8] scroll-mt-20">
      <div id="sprechzeiten" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header: Focusing solely on Sprechzeiten */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl">
            Sprechzeiten
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#5C4A4F] leading-relaxed">
            Wir nehmen uns Zeit für Ihre Gesundheit und Ihr Wohlbefinden. Vereinbaren Sie Ihren Wunschtermin oder treten Sie direkt mit uns in Kontakt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Sprechzeiten Timetable Card */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-white p-6 sm:p-8 border border-[#F0E6E8] shadow-xs text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5EDEF]">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-pink-50 flex items-center justify-center text-pink-700">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2B2326]">
                  Praxis-Sprechzeiten
                </h3>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Termine nach Vereinbarung
              </span>
            </div>
            
            {/* Hours Table */}
            <div className="mt-5 space-y-1 text-xs sm:text-sm divide-y divide-[#FAF5F6]">
              <div className="flex items-center justify-between py-2.5">
                <span className="font-semibold text-[#2B2326]">Montag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums text-right">08:00 – 13:00 & 14:00 – 18:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="font-semibold text-[#2B2326]">Dienstag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums text-right">08:00 – 15:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="font-semibold text-[#2B2326]">Mittwoch</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums text-right">08:00 – 15:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="font-semibold text-[#2B2326]">Donnerstag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums text-right">08:00 – 13:00 & 14:00 – 18:00 Uhr</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="font-semibold text-[#2B2326]">Freitag</span>
                <span className="text-[#5C4A4F] font-mono tabular-nums text-right">08:30 – 14:00 Uhr</span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="mt-6 pt-5 border-t border-[#F5EDEF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-[#735F64]">
                Buchen Sie Ihren Wunschtermin unkompliziert rund um die Uhr.
              </span>
              <a
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-pink-800 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="h-4 w-4" />
                <span>Termin Buchen</span>
              </a>
            </div>
          </div>

          {/* Elegant Contact Details (Address, Phone, Email) */}
          <div className="lg:col-span-5 space-y-3.5 text-left">
            
            {/* Address Card */}
            <a
              href="https://maps.app.goo.gl/jpkhX3wU7SzwhnGX6"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-white p-5 border border-[#F0E6E8] shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all cursor-pointer"
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
                  <div className="mt-1 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors">
                    Mühlenstraße 37
                  </div>
                  <div className="text-xs sm:text-sm text-[#5C4A4F]">
                    50321 Brühl (Rheinland)
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:0223243545"
              className="group block rounded-2xl bg-white p-5 border border-[#F0E6E8] shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all cursor-pointer"
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
                  <div className="mt-1 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors">
                    02232 / 43545
                  </div>
                  <div className="text-xs sm:text-sm text-[#5C4A4F]">
                    Direkt anrufen für Beratung & Rückfragen
                  </div>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:praxis@frauenzeit-bruehl.de"
              className="group block rounded-2xl bg-white p-5 border border-[#F0E6E8] shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all cursor-pointer"
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
                  <div className="mt-1 font-semibold text-sm sm:text-base text-[#2B2326] group-hover:text-pink-700 transition-colors truncate">
                    praxis@frauenzeit-bruehl.de
                  </div>
                  <div className="text-xs sm:text-sm text-[#5C4A4F]">
                    Nachricht oder Rezeptanfrage senden
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
