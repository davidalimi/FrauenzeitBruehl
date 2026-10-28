import { useState, useEffect } from 'react';
import { X, Phone, ShieldCheck, FileText, ExternalLink, Download } from 'lucide-react';

export function Footer() {
  const [activeModal, setActiveModal] = useState<'impressum' | 'privacy' | null>(null);

  const logoUrl = `${import.meta.env.BASE_URL}assets/header/logo.svg`;
  const doctolibUrl = 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl';

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return (
    <>
      <footer className="relative overflow-hidden bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-left">
            
            {/* Column 1: Brand & Practice Info (spans 2 columns) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full border border-slate-700 bg-white/10 p-0.5 overflow-hidden shrink-0">
                  <img
                    src={logoUrl}
                    alt="Frauenzeit Brühl Logo"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('public/')) {
                        target.src = './public/assets/header/logo.svg';
                      }
                    }}
                  />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-white font-sans">
                    Frauenzeit<span className="text-pink-400">Brühl</span>
                  </span>
                  <span className="block text-xs font-medium text-slate-400">
                    Gynäkologie & Geburtshilfe
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Gemeinschaftspraxis für Gynäkologie und Geburtshilfe · Dr. med. Anika Birkenfeld & Dr. med. Corinna Ledwig
              </p>

              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <div className="text-slate-300 font-medium">Mühlenstraße 37 · 50321 Brühl</div>
                <div>
                  Telefon:{' '}
                  <a href="tel:0223243545" className="text-pink-400 hover:text-pink-300 transition-colors">
                    02232/43545
                  </a>
                </div>
                <div>
                  E-Mail:{' '}
                  <a href="mailto:praxis@frauenzeit-bruehl.de" className="text-pink-400 hover:text-pink-300 transition-colors">
                    praxis@frauenzeit-bruehl.de
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Service & Termine */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Service & Termine
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a
                    href={doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors font-medium"
                  >
                    <span>Online-Terminbuchung</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white transition-colors">
                    Ärztinnen & Team
                  </a>
                </li>
                <li>
                  <a href="#praxis" className="hover:text-white transition-colors">
                    Praxis
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-white transition-colors">
                    Kontakt & Sprechzeiten
                  </a>
                </li>
                <li>
                  <a href="tel:0223243545" className="hover:text-white transition-colors">
                    Telefonische Beratung
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Notfallnummern */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Notfallnummern
              </h4>
              <div className="space-y-3 text-xs text-slate-400">
                <div>
                  <span className="text-slate-300 block font-semibold">Lebensbedrohlicher Notfall:</span>
                  <a href="tel:112" className="text-base font-bold text-red-400 hover:underline tabular-nums">
                    112
                  </a>
                </div>
                <div>
                  <span className="text-slate-300 block font-semibold">Ärztlicher Bereitschaftsdienst:</span>
                  <a href="tel:116117" className="text-base font-bold text-sky-400 hover:underline tabular-nums">
                    116 117
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Giftnotrufzentrale:</span>
                  <a href="tel:+4955119240" className="hover:text-white transition-colors tabular-nums">
                    +49 (0)551 19240
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal Modals */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} FrauenzeitBrühl · Alle Rechte vorbehalten.
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveModal('impressum')}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Impressum (Legal Notice)
              </button>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Datenschutz (Privacy & GDPR)
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Popups (Impressum & Datenschutz) */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 text-slate-900"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                {activeModal === 'impressum' ? (
                  <FileText className="h-5 w-5 text-pink-900" />
                ) : (
                  <ShieldCheck className="h-5 w-5 text-pink-900" />
                )}
                <h3 className="text-base font-bold text-slate-900">
                  {activeModal === 'impressum'
                    ? 'Impressum (Angaben gemäß § 5 TMG)'
                    : 'Datenschutz & Ärztliche Schweigepflicht'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              {activeModal === 'impressum' ? (
                <>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Gemeinschaftspraxis Frauenzeit Brühl:
                    </strong>
                    <p>
                      Dr. med. Anika Birkenfeld & Dr. med. Corinna Ledwig<br />
                      Fachärztinnen für Frauenheilkunde und Geburtshilfe<br />
                      Mühlenstraße 37 · 50321 Brühl · Deutschland
                    </p>
                    <p className="mt-1">
                      Telefon: (02232) 43545 · Fax: (02232) 44651<br />
                      E-Mail: praxis@frauenzeit-bruehl.de
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Zuständige Ärztekammer & Aufsichtsbehörde:
                    </strong>
                    <p>
                      Ärztekammer Nordrhein (Körperschaft des öffentlichen Rechts)<br />
                      Tersteegenstraße 9, 40474 Düsseldorf
                    </p>
                    <p className="mt-1">
                      Kassenärztliche Vereinigung Nordrhein (KV Nordrhein)<br />
                      Sedanstraße 10-16, 50668 Köln
                    </p>
                    <p className="mt-1">
                      Gesetzliche Berufsbezeichnung: Fachärztin für Frauenheilkunde und Geburtshilfe (verliehen in der Bundesrepublik Deutschland)
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Berufsrechtliche Regelungen:
                    </strong>
                    <p>
                      Berufsordnung der Ärztekammer Nordrhein und Heilberufsgesetz NRW.<br />
                      Die Regelungen sind einsehbar auf der Website der Ärztekammer Nordrhein unter{' '}
                      <a 
                        href="https://www.aekno.de" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-pink-900 underline hover:text-pink-950"
                      >
                        www.aekno.de
                      </a>.
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Haftungshinweis:
                    </strong>
                    <p>
                      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Patientendatenschutz nach DSGVO & BDSG:
                    </strong>
                    <p>
                      Der Schutz Ihrer persönlichen und medizinischen Daten genießt in unserer Praxis höchste Priorität. Alle erhobenen Gesundheitsdaten unterliegen der strikten ärztlichen Schweigepflicht (§ 203 StGB) und den Bestimmungen der Europäischen Datenschutz-Grundverordnung (Art. 9 DSGVO).
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Erhebung und Zweck der Datenverarbeitung:
                    </strong>
                    <p>
                      Die Verarbeitung personenbezogener Daten (Name, Kontaktdaten, anamnestische und diagnostische Daten) erfolgt ausschließlich zum Zweck der medizinischen Beratung, Diagnostik und Behandlung sowie zur Abrechnung mit Ihrer Krankenkasse bzw. privaten Verrechnungsstelle. Gesetzliche Aufbewahrungsfristen (§ 630f BGB) werden streng eingehalten.
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Digitale Übertragungen & Doctolib:
                    </strong>
                    <p>
                      Die Online-Terminbuchung erfolgt über den zertifizierten Gesundheitsdienstleister Doctolib. Die Datenübertragung ist mit modernsten TLS 1.3-Verfahren verschlüsselt. Eine Weitergabe an unbefugte Dritte findet zu keinem Zeitpunkt statt.
                    </p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-1">
                      Ihre Rechte als Patientin:
                    </strong>
                    <p>
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Zudem steht Ihnen das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten zu, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.
                    </p>
                  </div>

                  {/* Official PDF Document Download */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl border border-pink-200 bg-[#FCF8F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-900">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2B2326]">
                          Patienteninformation zum Datenschutz (PDF)
                        </h4>
                        <p className="text-xs text-[#5C4A4F] mt-0.5 leading-relaxed">
                          Offizielles Dokument inklusive Einwilligung zur Nutzung bisheriger Behandlungsunterlagen & Abholung durch Dritte.
                        </p>
                      </div>
                    </div>
                    <a
                      href={`${import.meta.env.BASE_URL}assets/docs/patienteninformation-datenschutz.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-900 hover:bg-pink-950 text-white px-4 py-2.5 text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      <span>PDF ansehen / herunterladen</span>
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Modal Action */}
            <div className="pt-4 mt-6 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
