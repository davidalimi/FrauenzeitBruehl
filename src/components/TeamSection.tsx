import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  X, 
  GraduationCap, 
  ChevronLeft,
  ChevronRight, 
  HeartHandshake, 
  Stethoscope,
  Users
} from 'lucide-react';
import { DoctorModal, DOCTORS_DATA } from './DoctorModal';
import { SectionBackToTop } from './SectionBackToTop';

interface DoctorMember {
  id: 'birkenfeld' | 'ledwig';
  name: string;
  role: string;
  badge: string;
  specialtyBadge: string;
  image: string;
  bio: string;
  points: string[];
  quote: string;
}

interface TeamAssistant {
  id: string;
  name: string;
  role: string;
  badge: string;
  category: 'Managerin' | 'Praxisassistenz' | 'MFA';
  image: string;
  bio: string;
  points: string[];
  quote: string;
}

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamAssistant | null>(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState<'birkenfeld' | 'ledwig' | null>(null);

  // The 2 Doctors (Executive / Clinical Leaders)
  const doctors: DoctorMember[] = [
    {
      id: 'birkenfeld',
      name: 'Dr. med. Anika Birkenfeld',
      role: 'Fachärztin für Frauenheilkunde & Geburtshilfe',
      badge: 'Ärztliche Leitung',
      specialtyBadge: 'DEGUM I · Pränatalmedizin · Ernährungsmedizin',
      image: `${import.meta.env.BASE_URL}assets/team/anika-birkenfeld.png`,
      bio: 'Ehemalige Oberärztin am Marienhospital Brühl. Besondere Schwerpunkte in der Pränataldiagnostik (DEGUM I), onkologischen Nachsorge und ganzheitlichen Ernährungsmedizin.',
      points: [
        'Schwangerschaftsvorsorge & DEGUM I Pränataldiagnostik',
        'Gynäkologische Onkologie & einfühlsame Nachsorge',
        'Hochauflösende Ultraschalldiagnostik & Brustsprechstunde',
        'Zertifizierte Weiterbildung Ernährungsmedizin',
      ],
      quote: '„Wir begleiten Sie in Ihren wichtigsten Lebensphasen mit Gründlichkeit, Ruhe und Herz.“',
    },
    {
      id: 'ledwig',
      name: 'Dr. med. Corinna Ledwig',
      role: 'Fachärztin für Frauenheilkunde & Geburtshilfe',
      badge: 'Ärztliche Leitung',
      specialtyBadge: 'BetterPelvi® · Teenager-Gyn.',
      image: `${import.meta.env.BASE_URL}assets/team/corinna-ledwig.png`,
      bio: 'Spezialisiert auf ganzheitliche Frauengesundheit, Teenager-Sprechstunde, differenzierte Wechseljahresberatung (HRT) sowie innovative Beckenbodentherapie (BetterPelvi®).',
      points: [
        'Ganzheitliche Gynäkologie, Vorsorge & Prävention',
        'Spezialisierte Menopausen- & Hormonsprechstunde',
        'Einfühlsame Mädchen- & Teenagersprechstunde',
        'BetterPelvi® Magnetfeld-Beckenbodentherapie',
      ],
      quote: '„Jede Frau ist einzigartig. Vertrauen und individuelle Beratung stehen bei uns an erster Stelle.“',
    },
  ];

  // The 4 Team Members below the doctors (Grid of 4):
  // 1. Janine (Managerin), 2. Nina (Praxisassistenz), 3. Saskia (MFA), 4. Melissa (MFA)
  const teamMembers: TeamAssistant[] = [
    {
      id: 'engels',
      name: 'Janine Engels',
      role: 'Praxismanagerin',
      badge: 'Praxisteam',
      category: 'Managerin',
      image: `${import.meta.env.BASE_URL}assets/team/janine-engels.png`,
      bio: 'Als Praxismanagerin leitet und koordiniert Janine Engels die Praxisorganisation, Abläufe und Qualitätsstandards mit Weitblick und Herzlichkeit.',
      points: [
        'Praxismanagement & Praxisorganisation',
        'Koordination der Sprechstunden & Abläufe',
        'Qualitätsmanagement & Patientinnenservice',
        'Begleitung der Schwangerschaftsvorsorge & CTG',
      ],
      quote: '„Ein reibungsloser Praxisablauf und eine herzliche Atmosphäre schaffen Raum für das Wesentliche: Ihre Gesundheit.“',
    },
    {
      id: 'greger',
      name: 'Nina Greger',
      role: 'Praxisassistenz',
      badge: 'Praxisteam',
      category: 'Praxisassistenz',
      image: `${import.meta.env.BASE_URL}assets/team/nina-greger.jpg`,
      bio: 'Unterstützt bei gynäkologischen Untersuchungen, Vorsorgen und Behandlungen mit Ruhe, Erfahrung und menschlicher Wärme.',
      points: [
        'Assistenz bei Krebsfrüherkennungsuntersuchungen',
        'Begleitung bei Spiraleneinlagen',
        'Patientinnenbetreuung vor & nach Behandlungen',
        'Geräteaufbereitung & Qualitätssicherung',
      ],
      quote: '„Wir möchten, dass Sie sich von der ersten bis zur letzten Minute gut aufgehoben fühlen.“',
    },
    {
      id: 'dittrich',
      name: 'Saskia Dittrich',
      role: 'Medizinische Fachangestellte',
      badge: 'Praxisteam',
      category: 'MFA',
      image: `${import.meta.env.BASE_URL}assets/team/saskia-dittrich.jpg`,
      bio: 'Mit Herzlichkeit, Organisationstalent und einem offenen Ohr sorgt sie für eine verlässliche Koordination und kurze Wartezeiten am Empfang.',
      points: [
        'Patientinnenbetreuung & Erstaufnahme',
        'Terminkoordination & Sprechstundenassistenz',
        'Rezept- & Überweisungsmanagement',
        'Telefonische Beratung & Service',
      ],
      quote: '„Ein herzliches Lächeln und ein reibungsloser Ablauf geben Ihnen Sicherheit bei jedem Besuch.“',
    },
    {
      id: 'graefen',
      name: 'Melissa Graefen',
      role: 'Medizinische Fachangestellte',
      badge: 'Praxisteam',
      category: 'MFA',
      image: `${import.meta.env.BASE_URL}assets/team/melissa-graefen.jpg`,
      bio: 'Verantwortlich für das Praxislabor und diagnostische Vorbereitungen mit höchster Präzision und empathischer Fürsorge.',
      points: [
        'Blutentnahmen & Praxislaboranalysen',
        'Vorbereitung gynäkologischer Abstriche',
        'Impfberatung & Impfpasskontrolle',
        'Hygienemanagement & Qualitätssicherung',
      ],
      quote: '„Einfühlsamkeit und Genauigkeit im Labor schaffen die verlässliche Basis für Ihre Diagnose.“',
    },
  ];

  return (
    <section id="team" className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 border-b border-[#F0E6E8] bg-white scroll-mt-24 xl:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-900">
            <Users className="h-3.5 w-3.5" />
            <span>Ärztinnen & Praxisteam</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl lg:text-4xl">
            Unser Team
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C4A4F] leading-relaxed">
            Mit hoher medizinischer Fachkompetenz, Empathie und moderner Diagnostik begleiten wir Sie durch jede Lebensphase. Lernen Sie unsere Fachärztinnen und unser eingespieltes Team kennen.
          </p>
        </div>

        {/* ============================================================== */}
        {/* ROW 1: THE TWO DOCTORS (Larger, prominent feature section)     */}
        {/* ============================================================== */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-[#F0E6E8]">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-pink-900" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#735F64]">
                Ärztliche Leitung
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#F0E6E8] bg-[#FCF8F9] p-6 sm:p-7 text-left shadow-sm transition-all duration-300 hover:border-[#E8D2D7] hover:shadow-md"
              >
                <div>
                  {/* Doctor Photo & Basic Bio Layout */}
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Portrait Photo Container */}
                    <div 
                      onClick={() => setSelectedDoctorId(doc.id)}
                      className="relative w-full sm:w-48 sm:h-60 shrink-0 aspect-[3/4] sm:aspect-auto overflow-hidden rounded-2xl border border-[#E8D2D7] bg-white shadow-sm cursor-pointer group/img"
                      title="Klicken, um Vita & Details anzuzeigen"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedDoctorId(doc.id);
                        }
                      }}
                    >
                      <img
                        src={doc.image}
                        alt={`Porträt von ${doc.name}`}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                        onError={(e) => {
                          const target = e.currentTarget;
                          const imgSrc = doc.image;
                          if (imgSrc && !target.src.includes('public/')) {
                            const rel = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
                            target.src = `./public/${rel}`;
                          }
                        }}
                      />
                    </div>

                    {/* Name, Subtitle, Bio */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl sm:text-2xl font-extrabold text-[#2B2326] tracking-tight">
                        {doc.name}
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-pink-900">
                        {doc.role}
                      </p>
                      
                      <p className="mt-3 text-xs sm:text-sm text-[#5C4A4F] leading-relaxed">
                        {doc.bio}
                      </p>

                      {/* Personal Quote */}
                      <div className="mt-4 rounded-xl border border-[#F0E6E8] bg-white p-3.5 text-xs italic text-[#4D3F43] shadow-2xs">
                        {doc.quote}
                      </div>
                    </div>
                  </div>

                  {/* Schwerpunkte & Qualifikationen */}
                  <div className="mt-6 pt-5 border-t border-[#F0E6E8]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#735F64] block mb-2.5">
                      Schwerpunkte & Behandlungsspektrum:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {doc.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs text-[#4D3F43]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-pink-900 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Action Button: Open Doctor Detail Modal (Smaller, compact style) */}
                <div className="mt-6 pt-4 border-t border-[#F0E6E8]">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctorId(doc.id)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-[#E8D2D7] py-2.5 px-4 text-xs font-semibold text-pink-900 shadow-2xs hover:bg-pink-900 hover:text-white hover:border-pink-900 active:scale-[0.98] transition-all cursor-pointer group/btn"
                  >
                    <GraduationCap className="h-4 w-4 text-pink-900 group-hover/btn:text-white transition-colors" />
                    <span>Vita & Details ansehen</span>
                    <ChevronRight className="h-3.5 w-3.5 text-pink-400 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* ROW 2: PRAXISTEAM & ASSISTENZ (Grid of 4 compact cards)         */}
        {/* ============================================================== */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-[#F0E6E8]">
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-pink-900" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#735F64]">
                Praxis Team
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col justify-between rounded-2xl border border-[#F0E6E8] bg-[#FCF8F9] p-5 text-left shadow-2xs transition-all duration-200 hover:border-[#E8D2D7] hover:shadow-sm"
              >
                <div>
                  {/* Team Member Photo */}
                  <div 
                    className="overflow-hidden rounded-xl border border-[#E8D2D7] bg-white aspect-[4/5] w-full shadow-2xs group/img cursor-pointer relative"
                    onClick={() => setSelectedMember(member)}
                    title="Klicken zum Vergrößern"
                  >
                    <img
                      src={member.image}
                      alt={`Porträt von ${member.name}`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const imgSrc = member.image;
                        if (imgSrc && !target.src.includes('public/')) {
                          const rel = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
                          target.src = `./public/${rel}`;
                        }
                      }}
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="mt-3.5">
                    <h4 className="text-base font-bold text-[#2B2326] leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-pink-900 mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="mt-2 text-xs text-[#5C4A4F] leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Short Quote */}
                  <div className="mt-3 rounded-lg border border-[#F0E6E8] bg-white p-2.5 text-[11px] italic text-[#4D3F43]">
                    {member.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Doctor Detailed Profile Modal */}
      <DoctorModal
        doctor={selectedDoctorId ? DOCTORS_DATA[selectedDoctorId] : null}
        onClose={() => setSelectedDoctorId(null)}
        onSwitchDoctor={(newId) => setSelectedDoctorId(newId)}
      />

      {/* Photo Lightbox Modal for Team Members with Left/Right Navigation */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedMember(null)}
        >
          {/* Desktop Floating Prev/Next Buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const idx = teamMembers.findIndex(m => m.id === selectedMember.id);
              const prevIdx = idx <= 0 ? teamMembers.length - 1 : idx - 1;
              setSelectedMember(teamMembers[prevIdx]);
            }}
            className="hidden sm:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#2B2326] shadow-xl hover:bg-white hover:text-pink-900 hover:scale-105 active:scale-95 transition-all border border-[#E8D2D7] cursor-pointer"
            aria-label="Vorherige Mitarbeiterin"
            title="Vorherige Mitarbeiterin (Pfeiltaste links)"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const idx = teamMembers.findIndex(m => m.id === selectedMember.id);
              const nextIdx = (idx + 1) % teamMembers.length;
              setSelectedMember(teamMembers[nextIdx]);
            }}
            className="hidden sm:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#2B2326] shadow-xl hover:bg-white hover:text-pink-900 hover:scale-110 active:scale-95 transition-all border border-[#E8D2D7] cursor-pointer"
            aria-label="Nächste Mitarbeiterin"
            title="Nächste Mitarbeiterin (Pfeiltaste rechts)"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div 
            className="relative max-w-sm sm:max-w-md w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#F0E6E8] p-4 text-left animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E6E8]">
              <div>
                <h4 className="text-base font-bold text-[#2B2326]">{selectedMember.name}</h4>
                <p className="text-xs text-pink-900 font-medium">{selectedMember.role}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    const idx = teamMembers.findIndex(m => m.id === selectedMember.id);
                    const prevIdx = idx <= 0 ? teamMembers.length - 1 : idx - 1;
                    setSelectedMember(teamMembers[prevIdx]);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8D2D7] bg-white text-neutral-600 hover:text-pink-900 hover:bg-[#FAF5F6] transition-colors cursor-pointer"
                  aria-label="Vorherige Mitarbeiterin"
                  title="Vorherige (Pfeiltaste links)"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const idx = teamMembers.findIndex(m => m.id === selectedMember.id);
                    const nextIdx = (idx + 1) % teamMembers.length;
                    setSelectedMember(teamMembers[nextIdx]);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8D2D7] bg-white text-neutral-600 hover:text-pink-900 hover:bg-[#FAF5F6] transition-colors cursor-pointer"
                  aria-label="Nächste Mitarbeiterin"
                  title="Nächste (Pfeiltaste rechts)"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-[#2B2326] hover:bg-neutral-100 transition-colors cursor-pointer ml-1"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-[#E8D2D7] bg-[#FCF8F9] aspect-3/4 w-full">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}

      {/* Discreet corner up arrow */}
      <SectionBackToTop />
    </section>
  );
}
