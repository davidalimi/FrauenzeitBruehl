import { useEffect, useState } from 'react';
import { 
  X, 
  Calendar, 
  Award, 
  GraduationCap, 
  BookOpen, 
  Heart, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Stethoscope, 
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export interface DoctorDetail {
  id: 'birkenfeld' | 'ledwig';
  name: string;
  salutation: string;
  role: string;
  subtitle: string;
  badge: string;
  image: string;
  quote: string;
  aboutStory: string[];
  personalNotes?: string;
  careerTimeline: {
    year: string;
    title: string;
    organization: string;
    details?: string;
  }[];
  qualifications: string[];
  furtherTraining?: string[];
  publications?: {
    year: string;
    title: string;
    authors: string;
    journal: string;
  }[];
  memberships: string[];
  doctoralThesis?: {
    year: string;
    institution: string;
    title: string;
  };
  doctolibBookingUrl: string;
}

export const DOCTORS_DATA: Record<'birkenfeld' | 'ledwig', DoctorDetail> = {
  birkenfeld: {
    id: 'birkenfeld',
    name: 'Dr. med. Anika Birkenfeld',
    salutation: 'Fachärztin für Frauenheilkunde & Geburtshilfe',
    role: 'Fachärztin für Gynäkologie und Geburtshilfe, DEGUM I',
    subtitle: 'Ärztliche Leitung',
    badge: 'DEGUM I · FMF zertifiziert',
    image: `${import.meta.env.BASE_URL}assets/team/anika-birkenfeld.png`,
    quote: '„Wir begleiten Sie in Ihren wichtigsten Lebensphasen mit Gründlichkeit, Ruhe und Herz.“',
    aboutStory: [
      'Mein Name ist Anika Birkenfeld. Ich wurde mitten im Veedel in der Stadt mit K (Köln) geboren und nach einem Abstecher in die Stadt Wien bin ich dorthin zurückgekehrt – und dann in den schönsten Kölner Vorort, nach Brühl, gezogen.',
      'Nach meiner abgeschlossenen Ausbildung als Krankenschwester (1999–2002) absolvierte ich das Studium der Humanmedizin an der Rheinischen Friedrich-Wilhelms-Universität Bonn, mit einer Auslandsfamulatur in Peru und dem Chirurgietertial des Praktischen Jahres in Aarau in der Schweiz.',
      'Bereits zu Beginn des Studiums lernte ich Dr. med. Corinna Ledwig kennen. Seitdem gingen wir nicht nur unseren beruflichen Weg gemeinsam, es entwickelte sich auch eine besondere, langjährige Freundschaft. Mit Frauenzeit Brühl verwirklichen wir nun unseren gemeinsamen Lebenstraum einer modernen, ganzheitlichen Praxis.',
      'Nach dem Staatsexamen erfolgte meine Facharztausbildung im St. Johannes-Hospital Troisdorf-Sieglar, an den GFO Kliniken St. Marienhospital Bonn und am Marienhospital Brühl. Dort war ich nach der Facharztprüfung als Oberärztin und leitende Kreißsaalärztin sowie als hygiene- und antibiotikabeauftragte Ärztin tätig. Meine DEGUM I Qualifikation sowie die FMF-Ersttrimesterscreening-Zertifizierung erwarb ich in der renommierten Praxis für Pränataldiagnostik amedes.',
      'Vor unserer Praxisgründung vertiefte ich meine ambulante Expertise als angestellte Fachärztin in der Praxis Dr. Ivanova in Kerpen und in der Praxis für Pränataldiagnostik und Gynäkologie PD Dr. Willruth in Hürth.'
    ],
    personalNotes: 'Ich bin verheiratet und habe zwei Kinder. Am liebsten tanze ich im Zumba-Rhythmus oder zu Karnevalsmusik durchs Leben! Mit Familie und Freunden erkunde ich die Welt auf Reisen, liebe Musik von Klassik bis Pop und vertreibe mir die Freizeit in der Natur mit Schwimmen, Laufen und Radfahren – mit etwas Glück treffen Sie mich bei einem Triathlon.',
    doctoralThesis: {
      year: '2024',
      institution: 'Unifrauenklinik Köln',
      title: 'Mikroblutuntersuchung unter der Geburt'
    },
    careerTimeline: [
      {
        year: '1999 – 2002',
        title: 'Ausbildung zur examinierten Krankenschwester',
        organization: 'Fundierte pflegerische und menschliche Grundausbildung'
      },
      {
        year: '2002 – 2009',
        title: 'Studium der Humanmedizin',
        organization: 'Rheinische Friedrich-Wilhelms-Universität Bonn',
        details: 'Auslandsfamulatur in Peru'
      },
      {
        year: '2009 – 2010',
        title: 'Praktisches Jahr (PJ)',
        organization: 'Marien-Hospital Euskirchen & Kantonsspital Aarau (Schweiz)'
      },
      {
        year: '2010 – 2018',
        title: 'Facharztausbildung Gynäkologie & Geburtshilfe',
        organization: 'St. Johannes Hospital Troisdorf-Sieglar, GFO Kliniken Marienhospital Bonn & Marienhospital Brühl'
      },
      {
        year: '2018',
        title: 'Fachärztin für Frauenheilkunde und Geburtshilfe',
        organization: 'Anerkennung durch die Ärztekammer Nordrhein'
      },
      {
        year: '2018 – 2023',
        title: 'Oberärztin & Leitende Kreißsaalärztin',
        organization: 'GFO Klinik Marienhospital Brühl',
        details: 'Leitung Kreißsaal, Hygiene- und Antibiotic-Stewardship-beauftragte Ärztin'
      },
      {
        year: '2021 – 2024',
        title: 'Weiterbildungsassistentin für Ultraschallmedizin',
        organization: 'Praxis für Pränatalmedizin amedes (Dr. med. A. Fotiadis)'
      },
      {
        year: '2024 – 2026',
        title: 'Angestellte Fachärztin für Gynäkologie & Geburtshilfe',
        organization: 'Praxis Dr. Ivanova (Kerpen) & PD Dr. Willruth (Hürth)'
      },
      {
        year: '2024',
        title: 'Promotion zur Doktorin der Medizin (Dr. med.)',
        organization: 'Medizinische Fakultät der Universität zu Köln'
      },
      {
        year: 'Seit 2026',
        title: 'Gemeinschaftliche Praxisgründung Frauenzeit Brühl',
        organization: 'Niederlassung mit Dr. med. Corinna Ledwig in Brühl'
      }
    ],
    qualifications: [
      'DEGUM I (Deutsche Gesellschaft für Ultraschall in der Medizin)',
      'ErsttrimesterScreening-Zertifizierung nach FMF Deutschland',
      'Hygienebeauftragte Ärztin & Antibiotic-Stewardship-Expertin',
      'Weiterbildung zur Ernährungsmedizinerin',
      'Umfassende Pränataldiagnostik & fetomaternale Sonographie',
      'Onkologische Nachsorge & Brustsprechstunde'
    ],
    furtherTraining: [
      'Hochfrequente Mammasonographie',
      'Feindiagnostik kindlicher Organanlagen',
      'Ernährungsmedizin in Schwangerschaft & Klimakterium',
      'Kontinuierliche Notfall- und Reanimationstrainings'
    ],
    memberships: [
      'DEGUM (Deutsche Gesellschaft für Ultraschall in der Medizin)',
      'DGGG (Deutsche Gesellschaft für Gynäkologie und Geburtshilfe)',
      'Deutsche Menopause Gesellschaft e.V.',
      'Ärztekammer Nordrhein (ÄkNo)'
    ],
    doctolibBookingUrl: 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl'
  },
  ledwig: {
    id: 'ledwig',
    name: 'Dr. med. Corinna Ledwig',
    salutation: 'Fachärztin für Frauenheilkunde & Geburtshilfe',
    role: 'Fachärztin für Gynäkologie und Geburtshilfe',
    subtitle: 'Ärztliche Leitung',
    badge: 'BetterPelvi® · Ganzheitliche Gynäkologie',
    image: `${import.meta.env.BASE_URL}assets/team/corinna-ledwig.png`,
    quote: '„Jede Frau ist einzigartig. Vertrauen und individuelle Beratung stehen bei uns an erster Stelle.“',
    aboutStory: [
      'Ich wurde 1983 im Schwabenland, in Ludwigsburg, geboren. Meine Kindheit und Jugend verbrachte ich jedoch im schönen Rheinland. Für das Studium der Humanmedizin zog es mich 2002 an die Rheinische Friedrich-Wilhelms-Universität Bonn.',
      'Dort begann nicht nur mein beruflicher Weg, sondern auch eine ganz besondere Freundschaft: Bereits am allerersten Studientag lernte ich meine heutige Praxispartnerin Dr. med. Anika Birkenfeld kennen. Seitdem gehen wir gemeinsam durchs Leben – durch Studium, Facharztausbildung und nun mit der Verwirklichung unseres gemeinsamen Traums einer eigenen Praxis.',
      'Während meines Studiums durfte ich im Rahmen einer Auslandsfamulatur wertvolle Erfahrungen in Kenia sammeln. Einen Teil meines Praktischen Jahres absolvierte ich anschließend im Tygerberg Hospital in Südafrika. Die Arbeit in diesen Ländern hat mich fachlich wie persönlich tief geprägt.',
      'Bereits während meiner medizinischen Ausbildung und im Rahmen meiner Promotion beschäftigte ich mich intensiv wissenschaftlich mit hormonellen Einflüssen auf den weiblichen Organismus. Der Schwerpunkt meiner Forschungsarbeit lag auf der Wirkung von Phytoöstrogenen (Isoflavonen) und deren Einfluss auf hormonempfindliche Gewebe. Die Ergebnisse wurden in renommierten internationalen Fachzeitschriften publiziert.',
      'Meine Facharztausbildung begann ich im St. Johannes Krankenhaus Troisdorf-Sieglar (Schwerpunkt Geburtshilfe) und setzte sie im Brustzentrum im St. Josef Krankenhaus Troisdorf fort. Nach Facharztprüfung (2016) und der Geburt meines zweiten Kindes entschied ich mich bewusst für die ambulante Versorgung. Seither war ich in Köln (Praxis Dr. Gringmuth) und Hürth (PD Dr. Willruth) tätig.',
      'Meine berufliche Erfüllung finde ich im persönlichen Kontakt mit meinen Patientinnen, in der langfristigen Begleitung und darin, Frauen in allen Lebensphasen – von Teenagern bis zu den Wechseljahren – individuell und auf Augenhöhe zu betreuen.'
    ],
    personalNotes: 'Mutter von drei Kindern. Mit Begeisterung für ganzheitliche Medizin, Naturheilkunde und eine offene Gesprächskultur, in der jede Frage willkommen ist.',
    doctoralThesis: {
      year: '2011',
      institution: 'Medizinische Fakultät der Universität zu Köln',
      title: 'Hormonelle Einflüsse von Phytoöstrogenen auf hormonempfindliche Gewebe'
    },
    careerTimeline: [
      {
        year: '2002 – 2009',
        title: 'Studium der Humanmedizin',
        organization: 'Rheinische Friedrich-Wilhelms-Universität Bonn',
        details: 'Auslandsfamulatur in Kenia'
      },
      {
        year: '2008 – 2009',
        title: 'Praktisches Jahr (PJ)',
        organization: 'Tygerberg Hospital (Stellenbosch, Südafrika) & Marien-Hospital Euskirchen'
      },
      {
        year: '2009 – 2016',
        title: 'Assistenzärztin in Facharztweiterbildung',
        organization: 'GFO Kliniken Troisdorf: St. Johannes Hospital (Geburtshilfe) & St. Josef Hospital (Brustzentrum)'
      },
      {
        year: '2011',
        title: 'Promotion zur Doktorin der Medizin (Dr. med.)',
        organization: 'Medizinische Fakultät der Universität zu Köln'
      },
      {
        year: '2016',
        title: 'Fachärztin für Frauenheilkunde und Geburtshilfe',
        organization: 'Facharztanerkennung durch die Ärztekammer Nordrhein'
      },
      {
        year: '2015 – 2024',
        title: 'Angestellte Fachärztin für Gynäkologie & Geburtshilfe',
        organization: 'Praxis für Gynäkologie und Geburtshilfe Dr. Gringmuth, Köln'
      },
      {
        year: '2017 – 2026',
        title: 'Angestellte Fachärztin für Pränataldiagnostik & Gynäkologie',
        organization: 'Praxis PD Dr. Willruth, Hürth'
      },
      {
        year: 'Seit 2026',
        title: 'Gemeinschaftliche Praxisgründung Frauenzeit Brühl',
        organization: 'Niederlassung mit Dr. med. Anika Birkenfeld in Brühl'
      }
    ],
    qualifications: [
      'Fachärztin für Frauenheilkunde und Geburtshilfe',
      'Qualifikation zur fachgebundenen genetischen Beratung (03/2022)',
      'Weiterbildung fetomaternale Dopplersonographie (Universitätsklinikum Bonn)',
      'Weiterbildung Mammasonographie (Brustultraschall)',
      'Anerkennung Psychosomatische Grundversorgung (09/2011–07/2014)',
      'Weiterbildung Ernährungsmedizin (seit 2025)',
      'BetterPelvi® Beckenbodentherapie',
      'Impfzertifikat für Ärztinnen und Ärzte (03/2025)'
    ],
    furtherTraining: [
      'Gynäko-infektiologisches Fachseminar (06/2011)',
      'Bioidentische Hormontherapie in der Perimenopause',
      'Einfühlsame Teenagersprechstunde & Jugendgynäkologie',
      'Ganzheitliche Begleitung bei Endometriose & PCOS'
    ],
    publications: [
      {
        year: '2009',
        title: 'Responses of estrogen sensitive tissues in female Wistar rats to pre- and postnatal isoflavone exposure',
        authors: 'T. Hertrampf, C. Ledwig, S. Kulling, A. Molzberger, F.J. Möller, O. Zierau, G. Vollmer, S. Moors, G.H. Degen, P. Diel',
        journal: 'Toxicology Letters 2009; 191: 181–188'
      },
      {
        year: '2012',
        title: 'The rat prepubertal uterine myometrium and not the luminal epithelium is predominantly affected by a chronic dietary genistein exposure',
        authors: 'F.J. Möller, C. Ledwig, O. Zierau, T. Hertrampf, G.H. Degen, P. Diel, G. Vollmer',
        journal: 'Archives of Toxicology 2012; 86(12)'
      }
    ],
    memberships: [
      'Ärztekammer Nordrhein (ÄkNo)',
      'Deutsche Gesellschaft für Gynäkologie und Geburtshilfe (DGGG)',
      'Deutsche Menopause Gesellschaft e.V.',
      'Berufsverband der Frauenärzte (BVF)'
    ],
    doctolibBookingUrl: 'https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl'
  }
};

interface DoctorModalProps {
  doctor: DoctorDetail | null;
  onClose: () => void;
  onSwitchDoctor?: (doctorKey: 'birkenfeld' | 'ledwig') => void;
}

export function DoctorModal({ doctor, onClose, onSwitchDoctor }: DoctorModalProps) {
  const [activeTab, setActiveTab] = useState<'vita' | 'career' | 'qualifications' | 'science'>('vita');

  const isAnika = doctor?.id === 'birkenfeld';
  const otherDoctorKey = isAnika ? 'ledwig' : 'birkenfeld';
  const otherDoctorName = isAnika ? 'Dr. med. Corinna Ledwig' : 'Dr. med. Anika Birkenfeld';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && onSwitchDoctor) {
        onSwitchDoctor(otherDoctorKey);
      }
    };

    if (doctor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [doctor, onClose, onSwitchDoctor, otherDoctorKey]);

  // Reset tab to vita when doctor changes
  useEffect(() => {
    setActiveTab('vita');
  }, [doctor?.id]);

  if (!doctor) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
    >
      {/* Desktop Floating Prev/Next Buttons */}
      {onSwitchDoctor && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSwitchDoctor(otherDoctorKey);
            }}
            className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2B2326] shadow-xl hover:bg-white hover:text-pink-700 hover:scale-105 active:scale-95 transition-all border border-[#E8D2D7] cursor-pointer"
            aria-label={`Zu ${otherDoctorName} wechseln`}
            title={`Zu ${otherDoctorName} (Pfeiltaste links/rechts)`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSwitchDoctor(otherDoctorKey);
            }}
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2B2326] shadow-xl hover:bg-white hover:text-pink-700 hover:scale-105 active:scale-95 transition-all border border-[#E8D2D7] cursor-pointer"
            aria-label={`Zu ${otherDoctorName} wechseln`}
            title={`Zu ${otherDoctorName} (Pfeiltaste links/rechts)`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-[#F0E6E8] flex flex-col text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls: Doctor switch and close button */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {onSwitchDoctor && (
            <button
              type="button"
              onClick={() => onSwitchDoctor(otherDoctorKey)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-medium text-[#735F64] hover:text-pink-700 hover:bg-white border border-[#E8D2D7] shadow-xs transition-colors cursor-pointer"
              title={`Zu ${otherDoctorName} (Pfeiltaste links/rechts)`}
            >
              <span>{otherDoctorName.replace('Dr. med. ', 'Dr. ')}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-500 hover:text-[#2B2326] hover:bg-white shadow-sm border border-[#E8D2D7] transition-colors cursor-pointer"
            aria-label="Profil schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Header Banner: Doctor Presentation & Quick Stats */}
        <div className="bg-gradient-to-r from-[#FAF5F6] via-white to-[#FCF8F9] border-b border-[#F0E6E8] p-5 sm:p-7 shrink-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Portrait Image */}
            <div className="relative h-28 w-24 sm:h-36 sm:w-28 rounded-2xl overflow-hidden border-2 border-pink-700/20 shadow-md bg-white shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('public/')) {
                    target.src = `./public/assets/team/${doctor.id === 'birkenfeld' ? 'anika-birkenfeld.png' : 'corinna-ledwig.png'}`;
                  }
                }}
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center sm:text-left space-y-1.5">
              <h2 id="doctor-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2B2326]">
                {doctor.name}
              </h2>
              <p className="text-sm font-medium text-pink-700">
                {doctor.salutation}
              </p>
              {/* Doctor Quote */}
              <p className="text-xs sm:text-sm italic text-[#5C4A4F] max-w-2xl bg-white/80 p-2.5 rounded-xl border border-[#F0E6E8] shadow-2xs">
                {doctor.quote}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5 sm:gap-2 border-t border-[#F0E6E8] pt-4">
            <button
              type="button"
              onClick={() => setActiveTab('vita')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'vita'
                  ? 'bg-pink-700 text-white shadow-xs'
                  : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] hover:bg-[#FAF5F6]'
              }`}
            >
              <Heart className="h-3.5 w-3.5" />
              <span>Über mich & Vita</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('career')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'career'
                  ? 'bg-pink-700 text-white shadow-xs'
                  : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] hover:bg-[#FAF5F6]'
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              <span>Beruflicher Werdegang ({doctor.careerTimeline.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('qualifications')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'qualifications'
                  ? 'bg-pink-700 text-white shadow-xs'
                  : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] hover:bg-[#FAF5F6]'
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              <span>Qualifikationen & Verbände</span>
            </button>
            {(doctor.publications && doctor.publications.length > 0) && (
              <button
                type="button"
                onClick={() => setActiveTab('science')}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'science'
                    ? 'bg-pink-700 text-white shadow-xs'
                    : 'bg-white text-[#735F64] hover:text-[#2B2326] border border-[#F0E6E8] hover:bg-[#FAF5F6]'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Forschung & Publikationen</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* TAB 1: Über mich & Persönliche Geschichte */}
          {activeTab === 'vita' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Doctor Story */}
              <div className="space-y-3.5 text-sm text-[#4D3F43] leading-relaxed">
                <h3 className="text-base font-bold text-[#2B2326] flex items-center gap-2">
                  <Heart className="h-4 w-4 text-pink-700" />
                  <span>Persönlicher Werdegang & Philosophie</span>
                </h3>
                {doctor.aboutStory.map((paragraph, idx) => (
                  <p key={idx} className="bg-[#FAF5F6]/50 p-3 rounded-xl border border-[#F0E6E8]/60">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Personal Side / Family / Passions */}
              {doctor.personalNotes && (
                <div className="rounded-2xl border border-[#E8D2D7] bg-white p-5 shadow-2xs space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pink-700 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-pink-700" />
                    <span>Persönliches & Freizeit</span>
                  </h4>
                  <p className="text-xs text-[#5C4A4F] leading-relaxed">
                    {doctor.personalNotes}
                  </p>
                </div>
              )}

              {/* Promotion Notice */}
              {doctor.doctoralThesis && (
                <div className="rounded-xl border border-[#F0E6E8] bg-[#FAF5F6] p-4 flex items-start gap-3 text-xs text-[#4D3F43]">
                  <GraduationCap className="h-5 w-5 text-pink-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2B2326] block">
                      Promotion zum Dr. med. ({doctor.doctoralThesis.year}):
                    </span>
                    <span className="italic block mt-0.5 font-medium text-pink-800">
                      „{doctor.doctoralThesis.title}“
                    </span>
                    <span className="text-[#735F64] block mt-0.5">
                      {doctor.doctoralThesis.institution}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Beruflicher Werdegang Timeline (More compact) */}
          {activeTab === 'career' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <h3 className="text-sm font-bold text-[#2B2326] flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-pink-700" />
                <span>Stationen des beruflichen Werdegangs</span>
              </h3>
              <div className="relative pl-5 space-y-2.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E8D2D7]">
                {doctor.careerTimeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline bullet */}
                    <div className="absolute -left-5 top-2.5 h-2 w-2 rounded-full border-2 border-white bg-pink-700 shadow-xs" />
                    
                    <div className="rounded-xl border border-[#F0E6E8] bg-white py-2.5 px-3.5 shadow-2xs hover:border-[#E8D2D7] transition-all">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-pink-700">
                          {item.year}
                        </span>
                        <span className="text-[11px] text-[#735F64]">
                          {item.organization}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#2B2326]">
                        {item.title}
                      </h4>
                      {item.details && (
                        <p className="mt-0.5 text-[11px] text-[#5C4A4F] leading-snug">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Qualifikationen & Mitgliedschaften */}
          {activeTab === 'qualifications' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Core Qualifications */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#2B2326] flex items-center gap-2">
                  <Award className="h-4 w-4 text-pink-700" />
                  <span>Zusatzqualifikationen & Zertifizierungen</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {doctor.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-[#F0E6E8] bg-white p-3 shadow-2xs">
                      <CheckCircle2 className="h-4 w-4 text-pink-700 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#2B2326]">{qual}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Further Training */}
              {doctor.furtherTraining && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#735F64]">
                    Fortbildungen & Schwerpunkte:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.furtherTraining.map((train, idx) => (
                      <div key={idx} className="flex items-start gap-2 rounded-lg bg-[#FAF5F6] p-2.5 text-xs text-[#5C4A4F] border border-[#F0E6E8]/70">
                        <Sparkles className="h-3.5 w-3.5 text-pink-600 shrink-0 mt-0.5" />
                        <span>{train}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Memberships */}
              <div className="space-y-3 pt-3 border-t border-[#F0E6E8]">
                <h3 className="text-base font-bold text-[#2B2326] flex items-center gap-2">
                  <Users className="h-4 w-4 text-pink-700" />
                  <span>Mitgliedschaften in medizinischen Fachgesellschaften</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.memberships.map((member, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-[#2B2326] border border-[#E8D2D7] shadow-2xs"
                    >
                      <Stethoscope className="h-3.5 w-3.5 text-pink-700" />
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Forschung & Publikationen */}
          {activeTab === 'science' && doctor.publications && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="text-base font-bold text-[#2B2326] flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-pink-700" />
                <span>Wissenschaftliche Forschung & Fachpublikationen</span>
              </h3>
              <p className="text-xs text-[#5C4A4F] leading-relaxed">
                Wissenschaftliche Originalarbeiten in internationalen Peer-Review-Fachzeitschriften zum Einfluss hormoneller und pflanzlicher Wirkstoffe (Phytoöstrogene) auf weibliche Gewebe:
              </p>

              <div className="space-y-3.5 pt-2">
                {doctor.publications.map((pub, idx) => (
                  <div key={idx} className="rounded-xl border border-[#E8D2D7] bg-white p-4 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                        {pub.year}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {pub.journal}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#2B2326] leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-[11px] text-[#735F64]">
                      <strong>Autoren:</strong> {pub.authors}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer: Action Bar & Doctor Switch */}
        <div className="bg-[#FAF5F6] border-t border-[#F0E6E8] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {/* Switch Doctor Partner Shortcut */}
          {onSwitchDoctor && (
            <button
              type="button"
              onClick={() => onSwitchDoctor(otherDoctorKey)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-700 hover:text-pink-800 transition-colors cursor-pointer py-1.5 px-2 rounded-lg hover:bg-white"
            >
              <span>Zu {otherDoctorName} wechseln</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          )}

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-[#5C4A4F] bg-white hover:bg-[#F0E6E8] border border-[#E8D2D7] rounded-xl transition-colors cursor-pointer"
            >
              Schließen
            </button>

            <a
              href={doctor.doctolibBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-pink-800 transition-all cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Termin bei {doctor.name.replace('Dr. med. ', 'Dr. ')} vereinbaren</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
