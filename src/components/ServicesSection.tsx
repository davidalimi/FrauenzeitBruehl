import { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck, 
  Maximize2, 
  X, 
  Calendar,
  ExternalLink,
  BookOpen,
  Activity,
  Heart,
  Baby,
  Salad,
  Zap
} from 'lucide-react';
import { CherryBlossomFlower, CottonSprig } from './BotanicalDecorations';

export interface SchwerpunktItem {
  id: 'schwangerschaft' | 'ernaehrung' | 'hormone' | 'menopause' | 'betterpelvi' | 'igel';
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  alt: string;
  leadQuote: string;
  teaser: string;
  detailedText: string[];
  keyHighlights: string[];
  clinicalFocus: {
    category: string;
    items: string[];
  }[];
  forWhom: string;
  practiceAdvantage: string;
  costNote?: string;
}

export const SCHWERPUNKTE_DATA: SchwerpunktItem[] = [
  {
    id: 'schwangerschaft',
    number: '01',
    title: 'Schwangerschaft',
    subtitle: 'Einfühlsame & ganzheitliche Schwangerschaftsbegleitung',
    badge: 'Schwerpunkt 01 · Pränatale Begleitung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/schwangerschaft.webp`,
    alt: 'Schwangere Frau hält behutsam rosa Babyschuhe auf ihrem Bauch',
    leadQuote: '„Mit Ihrer Schwangerschaft beginnt ein neuer Lebensabschnitt – voller Vorfreude, Veränderungen und einzigartiger Momente.“',
    teaser: 'Vom positiven Schwangerschaftstest über alle Trimester bis ins Wochenbett: Wir begleiten Sie mit medizinischer Kompetenz, hoher Feindiagnostik-Expertise (DEGUM I) und herzlicher Fürsorge.',
    detailedText: [
      'Herzlichen Glückwunsch zu Ihrer Schwangerschaft! Neben den regulären medizinischen Vorsorgeuntersuchungen nehmen wir uns bewusst ausreichend Zeit für Ihre Fragen, Gedanken und individuellen Wünsche. Uns ist eine vertrauensvolle Betreuung auf Augenhöhe besonders wichtig, damit Sie gut informiert und mit einem sicheren Gefühl durch Ihre Schwangerschaft gehen.',
      'Die Schwangerschaftsvorsorge beginnt in der Regel ab der 7. Schwangerschaftswoche (bei besonderen Fragestellungen selbstverständlich auch früher). Bis zur 30. Schwangerschaftswoche finden die Vorsorgeuntersuchungen alle vier Wochen statt, anschließend alle zwei Wochen bis zur Geburt.',
      'Bei jedem Termin kontrollieren wir sorgfältig Blutdruck, Gewicht, Urin und führen die vorgesehenen Blutuntersuchungen durch. Zwischen der 24. und 28. Schwangerschaftswoche erfolgt das Screening auf Schwangerschaftsdiabetes (oraler Glukosetoleranztest).',
      'In regelmäßigen Patientinnenseminaren rund um Schwangerschaft, Geburt und Ernährung erhalten Sie fundierte Informationen und praktische Tipps in entspannter Praxisatmosphäre.'
    ],
    keyHighlights: [
      'Mutterschaftsvorsorge nach aktuellen Richtlinien',
      'DEGUM I Ultraschalldiagnostik & fetomaternale Sonographie',
      'Screening auf Gestationsdiabetes (Glukosetoleranztest)',
      'Regelmäßige Patientinnenseminare zu Schwangerschaft & Ernährung'
    ],
    clinicalFocus: [
      {
        category: 'Basisvorsorge im Überblick',
        items: [
          'Regelmäßige 4- bzw. 2-wöchige Vorsorgeuntersuchungen',
          'Drei große Basis-Ultraschalluntersuchungen',
          'Kontinuierliche CTG-Überwachung (Herztöne & Wehentätigkeit)',
          'Kontrolle von Blutdruck, Gewicht, Eisen- & Urinwerten'
        ]
      },
      {
        category: 'Ergänzende Diagnostik (nach Wunsch & Indikation)',
        items: [
          'Ersttrimesterscreening (11+0 bis 13+6 SSW) nach FMF-Kriterien',
          'Nicht-invasiver Pränataltest (NIPT) auf Trisomie 13, 18 und 21',
          'Präeklampsiescreening zur Früherkennung von Schwangerschaftshochdruck',
          'Doppler-Ultraschall zur Beurteilung der mütterlichen & kindlichen Durchblutung',
          'Infektionsdiagnostik (CMV, Toxoplasmose, B-Streptokokken-Abstrich)'
        ]
      }
    ],
    forWhom: 'Werdende Mütter & Paare vom Kinderwunsch über die Frühschwangerschaft bis zur Entbindung & Wochenbett.',
    practiceAdvantage: 'Hochqualifizierte Betreuung durch ehemalige Oberärztin & DEGUM I zertifizierte Pränatalmedizinerin mit Zweitmonitor für Eltern.',
    costNote: 'Die reguläre Schwangerschaftsvorsorge ist Kassenleistung. Spezialisierte Pränataltests (z. B. NIPT ohne Indikation, erweitertes Ersttrimesterscreening) sind Wahlleistungen (IGeL).'
  },
  {
    id: 'ernaehrung',
    number: '02',
    title: 'Ernährungsmedizin',
    subtitle: 'Wissenschaftlich fundierte Ernährungstherapie & Vitalstoffberatung',
    badge: 'Schwerpunkt 02 · Ganzheitliche Vitalität',
    image: `${import.meta.env.BASE_URL}assets/leistungen/ernaehrungsmedizin.webp`,
    alt: 'Frische, gesunde bunte Ernährung mit mediterranem Gemüse, Beeren, Nüssen und Vitalstoffen',
    leadQuote: '„Eine ausgewogene, gesunde Ernährung ist ein wesentlicher Baustein für unsere Gesundheit und unser Wohlbefinden.“',
    teaser: 'Gezielte ernährungsmedizinische Therapie verbindet gynäkologische Behandlung mit individueller Prävention. Alltagstauglich, nachhaltig und ohne kurzfristige Diäten.',
    detailedText: [
      'Die Ernährungsmedizin berücksichtigt die enge, wissenschaftlich belegte Wechselwirkung zwischen Ernährung, Stoffwechsel, Hormonhaushalt und Entzündungsprozessen im weiblichen Körper.',
      'Viele gynäkologische Beschwerden – von chronischen Schmerzen bei Endometriose über Zyklusstörungen bis hin zu Wechseljahresbeschwerden – können durch eine gezielte Anpassung der Ernährungsweise spürbar positiv beeinflusst werden.',
      'Beide Fachärztinnen unserer Praxis befinden sich in qualifizierter ernährungsmedizinischer Weiterbildung. Gemeinsam entwickeln wir realistische, machbare Strategien, die sich harmonisch in Ihren persönlichen Alltag einfügen.',
      'Wir verstehen gesunde Ernährung nicht als Verzicht, sondern als tägliche Möglichkeit, Ihren Körper bestmöglich mit wertvollen Mikronährstoffen und Energie zu versorgen.'
    ],
    keyHighlights: [
      'Fundierte Ernährungstherapie bei Endometriose & chronischen Schmerzen',
      'Unterstützung bei PMOS (PCOS), Zyklusstörungen & Kinderwunsch',
      'Gezielte Nährstoffberatung in Schwangerschaft & Stillzeit',
      'Konzepte zur Osteoporose- & Stoffwechselprävention'
    ],
    clinicalFocus: [
      {
        category: 'Häufige Behandlungsanlässe',
        items: [
          'Endometriose & chronisch-entzündliche Beckenschmerzen',
          'Polyendokrines metabolisches Ovarialsyndrom (PMOS / PCOS)',
          'Kinderwunsch, Schwangerschaftsvorbereitung & Gestationsdiabetes',
          'Hormonelle Umstellungsphasen & Wechseljahresbeschwerden',
          'Gewichtsregulation, Insulinresistenz & Mangelernährung',
          'Osteoporoseprävention durch knochenaktive Mikronährstoffe'
        ]
      },
      {
        category: 'Unser Beratungsansatz',
        items: [
          'Ausführliche ernährungs- und anamnestische Statuserhebung',
          'Wissenschaftlich fundierte, leitliniengerechte Nährstoffanalyse',
          'Individuelle Pläne ohne Radikaldiäten oder Dogmen',
          'Integration praxistauglicher Ernährungsgewohnheiten in Familie & Beruf'
        ]
      }
    ],
    forWhom: 'Frauen in allen Lebensphasen mit hormonellen Dysbalancen, Kinderwunsch, chronischen Schmerzen oder dem Wunsch nach präventiver Vitalität.',
    practiceAdvantage: 'Ärztlich geleitete Ernährungsmedizin direkt verzahnt mit gynäkologischer Diagnostik.',
    costNote: 'Ernährungsmedizinische Spezialberatung wird als individuelle Gesundheitsleistung (IGeL) angeboten; viele Krankenkassen bezuschussen ernährungsmedizinische Präventionsangebote.'
  },
  {
    id: 'hormone',
    number: '03',
    title: 'Hormonsprechstunde',
    subtitle: 'Präzise Diagnostik & einfühlsame Therapie hormoneller Dysbalancen',
    badge: 'Schwerpunkt 03 · Hormonelle Balance',
    image: `${import.meta.env.BASE_URL}assets/leistungen/hormonsprechstunde.webp`,
    alt: 'Hormonbalance Bausteine mit den Aufschriften Estrogen und Progesterone',
    leadQuote: '„Hormone beeinflussen den weiblichen Körper in jeder Lebensphase.“',
    teaser: 'Sie steuern Vitalität, Zyklus, Fruchtbarkeit und seelisches Wohlbefinden: Bereits feinste hormonelle Ungleichgewichte können den Alltag belasten. Wir finden die Ursache.',
    detailedText: [
      'Hormone steuern unzählige lebenswichtige Prozesse im Körper der Frau. Schon geringe Abweichungen des hormonellen Gleichgewichts können zu Zyklusunregelmäßigkeiten, Hautveränderungen, Erschöpfung oder ungewollter Kinderlosigkeit führen.',
      'In unserer spezialisierten Hormonsprechstunde steht eine ausführliche Anamnese und eine präzise, zielgerichtete Labordiagnostik an erster Stelle.',
      'Gemeinsam gehen wir den Ursachen auf den Grund und entwickeln ein individuelles Therapiekonzept – auf Basis neuester Leitlinien und mit viel Verständnis für Ihre persönliche Lebenssituation.',
      'Dabei verbinden wir bewährte Schulmedizin mit ganzheitlichen Ansätzen wie Lebensstil- und Ernährungskonzepten.'
    ],
    keyHighlights: [
      'Gezielte Hormonanalytik (Östrogen, Progesteron, Androgene, Prolaktin, Schilddrüse)',
      'Spezialdiagnostik bei PMOS (PCOS) & Insulinresistenz',
      'Behandlung von Zyklusstörungen & Prämenstruellem Syndrom (PMS)',
      'Hormonelle Abklärung bei unerfülltem Kinderwunsch & Lutealinsuffizienz'
    ],
    clinicalFocus: [
      {
        category: 'Schwerpunkte der Hormonsprechstunde',
        items: [
          'Zyklusunregelmäßigkeiten, Amenorrhoe & Dysmenorrhoe',
          'Prämenstruelles Syndrom (PMS) & PMDS',
          'Polyendokrines metabolisches Ovarialsyndrom (PMOS, ehemals PCOS)',
          'Insulinresistenz & hormonell bedingte Gewichtsprobleme',
          'Unerfüllter Kinderwunsch & Gelbkörperschwäche (Lutealinsuffizienz)',
          'Erhöhte Prolaktinspiegel (Hyperprolaktinämie)',
          'Störungen der Pubertätsentwicklung bei jungen Mädchen'
        ]
      },
      {
        category: 'Therapeutische Möglichkeiten',
        items: [
          'Zyklusmonitoring und zielgerichtete Hormonsubstitution',
          'Pflanzliche Therapieansätze (Phytotherapie)',
          'Ernährungsmedizinische Stoffwechseloptimierung',
          'Begleitende psychosomatische Unterstützung'
        ]
      }
    ],
    forWhom: 'Frauen von der Pubertät bis zur Postmenopause mit Zyklusbeschwerden, hormoneller Akne, PMS oder Kinderwunsch.',
    practiceAdvantage: 'Wissenschaftlich fundierte Hormonkompetenz durch langjährige Forschung zu Phytoöstrogenen und endokrinen Geweben.',
    costNote: 'Medizinisch begründete Hormonabklärungen sind Bestandteil der vertragsärztlichen Versorgung; weitergehende Spezialprofile werden transparent erläutert.'
  },
  {
    id: 'menopause',
    number: '04',
    title: 'Menopausensprechstunde',
    subtitle: 'Individuelle, moderne Begleitung durch die Wechseljahre',
    badge: 'Schwerpunkt 04 · Wechseljahresbegleitung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/menopausensprechstunde.webp`,
    alt: 'Arrangement aus zarten Rosen, Uhr und Menopause-Schriftzug auf rosa Hintergrund',
    leadQuote: '„Mit den Wechseljahren beginnt ein ganz natürlicher Wandel, den jede Frau unterschiedlich erlebt.“',
    teaser: 'Bereits ab dem 40. Lebensjahr können erste hormonelle Veränderungen eintreffen. Wir betrachten Sie als Ganzes und bieten moderne, sichere Therapiekonzepte.',
    detailedText: [
      'Mit den Wechseljahren beginnt ein ganz natürlicher, aber oft herausfordernder hormoneller Wandel. Häufig treten bereits in der Perimenopause – oft bei noch regelmäßigem Zyklus – erste Symptome wie Schlafstörungen, Hitzewallungen, Stimmungsschwankungen oder Konzentrationsprobleme auf.',
      'In unserer Menopausensprechstunde nehmen wir uns bewusst viel Zeit für Sie. Wir betrachten nicht bloß einzelne Laborwerte, sondern Ihre gesamte Lebenssituation und Ihr persönliches Wohlbefinden.',
      'Je nach Ihren Bedürfnissen kommen sanfte pflanzliche Phytotherapeutika, gezielte Mikronährstoffe oder bioidentische Hormone (transdermal) nach modernsten Sicherheitsstandards zum Einsatz.',
      'Ergänzend besprechen wir Bewegungs- und Ernährungsempfehlungen zur Stärkung der Knochen (Osteoporoseschutz) und des Herz-Kreislauf-Systems.'
    ],
    keyHighlights: [
      'Ausführliche Beratung zu Perimenopause & Postmenopause',
      'Moderne Hormonersatztherapie mit bioidentischen Hormonen',
      'Pflanzliche Alternativen & Phytotherapie bei milderen Beschwerden',
      'Osteoporose- & Herz-Kreislauf-Prävention'
    ],
    clinicalFocus: [
      {
        category: 'Häufig behandelte Wechseljahresbeschwerden',
        items: [
          'Hitzewallungen & nächtliche Schweißausbrüche',
          'Ein- und Durchschlafstörungen sowie Erschöpfungszustände',
          'Stimmungsschwankungen, Reizbarkeit & depressive Verstimmungen',
          'Gedächtnis- und Konzentrationsstörungen („Brain Fog“)',
          'Veränderungen der Haut, Haare und Schleimhäute',
          'Gelenk- und Muskelschmerzen im Klimakterium'
        ]
      },
      {
        category: 'Bausteine unseres Therapiekonzepts',
        items: [
          'Individuelle Risiko-Nutzen-Abwägung vor jeder Hormontherapie',
          'Bevorzugter Einsatz bioidentischer Hormone über die Haut (Gele/Pflaster)',
          'Gezielte Mikronährstofftherapie (Vitamin D3, K2, Magnesium, Omega-3)',
          'Ernährungs- & Bewegungsempfehlungen zum Erhalt der Muskel- und Knochenmasse'
        ]
      }
    ],
    forWhom: 'Frauen ab ca. 40 Jahren in der Prä-, Peri- oder Postmenopause mit Beschwerden oder Fragen zum gesunden Älterwerden.',
    practiceAdvantage: 'Mitgliedschaft in der Deutschen Menopause Gesellschaft e.V. mit fortlaufender Aktualisierung neuester wissenschaftlicher Leitlinien.',
    costNote: 'Die ausführliche Menopausensprechstunde mit ganzheitlicher Beratung ist eine individuelle Gesundheitsleistung (IGeL).'
  },
  {
    id: 'betterpelvi',
    number: '05',
    title: 'BetterPelvi- Therapie',
    subtitle: 'Innovative Beckenbodentherapie mit Magnetstimulation für Sie & Ihn',
    badge: 'Schwerpunkt 05 · Beckenbodengesundheit',
    image: `${import.meta.env.BASE_URL}assets/leistungen/betterpelvi-therapie.webp`,
    alt: 'Hände halten behutsam eine blühende Rose als Symbol für Beckenbodengesundheit und Wohlbefinden',
    leadQuote: '„Der Beckenboden spielt eine zentrale Rolle für Kontinenz, Stabilität und unser körperliches Wohlbefinden.“',
    teaser: 'Gezielte Aktivierung der tiefen Beckenbodenmuskulatur: Vollständig bekleidet, schmerzfrei und in nur 20–30 Minuten auf dem innovativen BetterPelvi® Beckenbodenstuhl.',
    detailedText: [
      'Der Beckenboden stützt Blase, Darm und Gebärmutter, sorgt für Kontinenz und bildet das fundamentale Zentrum unserer Körpermitte und Rumpfstabilität. Schwangerschaft, Geburt, hormonelle Umstellungen im Klimakterium oder Operationen können diese Muskulatur schwächen.',
      'Die Folgen reichen von unwillkürlichem Urinverlust (beim Husten, Lachen, Sport) über Senkungs- und Druckgefühle bis hin zu chronischen Rückenschmerzen.',
      'Mit unserem BetterPelvi® Beckenbodenstuhl bieten wir eine moderne, nicht-invasive Behandlung: Hochintensive elektromagnetische Impulse lösen tausende tiefe Muskelkontraktionen aus – weit intensiver und präziser als herkömmliches Training.',
      'Sie sitzen entspannt und vollständig bekleidet auf dem Stuhl. Eine Sitzung dauert ca. 20 bis 30 Minuten und erfordert keinerlei Ausfallzeit.'
    ],
    keyHighlights: [
      'Sanft, nicht-invasiv und vollständig bekleidet',
      'Kurze Behandlungsdauer (ca. 20–30 Minuten) ohne Ausfallzeit',
      'Effektiv bei Belastungs- & Dranginkontinenz sowie Senkungsbeschwerden',
      'Optimale Unterstützung bei der Rückbildung nach Geburten'
    ],
    clinicalFocus: [
      {
        category: 'Anwendungsgebiete Frauengesundheit & Rückbildung',
        items: [
          'Leichte bis mittlere Belastungs- & Dranginkontinenz',
          'Beckenbodenschwäche in den Wechseljahren & Senkungsbeschwerden',
          'Rückbildung nach Schwangerschaft und Entbindung',
          'Chronische Schmerzen oder Verspannungen im Beckenring',
          'Schmerzen beim Geschlechtsverkehr (Dyspareunie) durch Dysbalancen'
        ]
      },
      {
        category: 'Rückenstabilität & Männergesundheit',
        items: [
          'Chronische Schmerzen im unteren Lendenwirbelbereich',
          'Stabilisierung der tiefen Bauch- und Rumpfmuskulatur',
          'Kontinenzstärkung für Männer nach urologischen/Prostata-Eingriffen',
          'Allgemeine Steigerung der körperlichen Vitalität und Lebensqualität'
        ]
      }
    ],
    forWhom: 'Frauen nach Geburten, im Klimakterium, bei Blasenschwäche oder Senkungsbeschwerden – sowie Männer nach Prostata-Operationen.',
    practiceAdvantage: 'Eigener geschützter Behandlungsraum in unserer Praxis mit persönlicher ärztlicher Betreuung und individueller Intensitätsanpassung.',
    costNote: 'Die BetterPelvi® Magnetstimulation ist eine innovative Selbstzahlerleistung; Paketpreise und Kur-Angebote werden vorab transparent besprochen.'
  },
  {
    id: 'igel',
    number: '06',
    title: 'Wahlleistungen (IGeL)',
    subtitle: 'Sinnvolle individuelle Zusatzuntersuchungen für maximale Sicherheit',
    badge: 'Schwerpunkt 06 · Individuelle Vorsorge',
    image: `${import.meta.env.BASE_URL}assets/leistungen/wahlleistungen-igel.webp`,
    alt: 'Zart blühender Kirschblütenzweig vor hellem Hintergrund als Symbol für Schutz und Vorsorge',
    leadQuote: '„Wir bieten Ihnen neben den Kassenleistungen ein ausgewähltes Spektrum sinnvoller individueller Gesundheitsleistungen an.“',
    teaser: 'Erweiterte Vorsorge und Diagnostik über den gesetzlichen Basisschutz hinaus: Individuell abgestimmt auf Ihr persönliches Sicherheitsbedürfnis und Lebensalter.',
    detailedText: [
      'Ihre Gesundheit liegt uns am Herzen. Die gesetzlichen Früherkennungsprogramme bieten eine solide Grundabsicherung, lassen jedoch einige hochmoderne und präzise diagnostische Methoden unberücksichtigt.',
      'Deshalb bieten wir Ihnen in unserer Praxis ein sorgfältig ausgewähltes, medizinisch sinnvolles Spektrum an individuellen Gesundheitsleistungen (IGeL) an.',
      'Hierzu zählen der hochauflösende Ultraschall der Brustdrüsen (Mammasonographie) und der inneren Beckenorgane (Gebärmutter und Eierstöcke), um Veränderungen frühzeitig und ohne Strahlenbelastung zu erkennen.',
      'In einem persönlichen Gespräch beraten wir Sie transparent und ohne Druck, welche Zusatzuntersuchungen in Ihrer spezifischen Lebensphase medizinisch wertvoll sind.'
    ],
    keyHighlights: [
      'Transvaginaler Beckenultraschall (Früherkennung an Eierstöcken & Gebärmutter)',
      'Hochauflösende Mammasonographie (strahlenfreie Brustuntersuchung)',
      'Dünnschichtzytologie (ThinPrep) für höchste Abstrichpräzision',
      'Erweiterte Laborprofile & Infektionsvorsorge in der Schwangerschaft'
    ],
    clinicalFocus: [
      {
        category: 'Gynäkologische Zusatzvorsorge',
        items: [
          'Transvaginaler Ultraschall zur Früherkennung von Zysten, Myomen & Endometriumveränderungen',
          'Mammasonographie zur schonenden Gewebsbeurteilung beider Brüste',
          'ThinPrep (Dünnschicht-Pap-Abstrich) für verbesserte Zytologiediagnostik',
          'Immunologischer Stuhltest (iFOBT) & Blasenkrebsschnelltest'
        ]
      },
      {
        category: 'Spezialsprechstunden & Schwangerschafts-Plus',
        items: [
          'BetterPelvi® Beckenbodentherapie mit Magnetfeldstuhl',
          'Ausführliche Menopausen- & Hormonberatung',
          'Ernährungsmedizinische Therapie & Vitalstoffberatung',
          'Ersttrimesterscreening & Präeklampsie-Screening in der Schwangerschaft',
          'Infektionsschutz-Labor: Toxoplasmose, CMV, Ringelröteln & B-Streptokokken'
        ]
      }
    ],
    forWhom: 'Patientinnen, die Wert auf eine engmaschige, erweiterte Früherkennung und modernste strahlenfreie Ultraschalldiagnostik legen.',
    practiceAdvantage: 'Vollkommene Transparenz gemäß Gebührenordnung für Ärzte (GOÄ) – faire Beratung ohne Verkaufsdruck.',
    costNote: 'IGeL werden privat nach der GOÄ abgerechnet. Viele private Krankenversicherungen erstatten diese Leistungen vollständig.'
  }
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSchwerpunkt, setSelectedSchwerpunkt] = useState<SchwerpunktItem | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCHWERPUNKTE_DATA.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? SCHWERPUNKTE_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % SCHWERPUNKTE_DATA.length);
  };

  const handleSelect = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentItem = SCHWERPUNKTE_DATA[currentIndex];

  // Helper icons per Schwerpunkt
  const getIcon = (id: SchwerpunktItem['id']) => {
    switch (id) {
      case 'schwangerschaft':
        return <Baby className="h-4 w-4" />;
      case 'ernaehrung':
        return <Salad className="h-4 w-4" />;
      case 'hormone':
        return <Activity className="h-4 w-4" />;
      case 'menopause':
        return <Heart className="h-4 w-4" />;
      case 'betterpelvi':
        return <Zap className="h-4 w-4" />;
      case 'igel':
        return <ShieldCheck className="h-4 w-4" />;
    }
  };

  return (
    <section id="leistungen" className="relative overflow-hidden py-16 sm:py-24 border-b border-[#F0E6E8] bg-[#FAF5F6]/40 scroll-mt-20">
      {/* Subtle Botanical Watermarks */}
      <div className="absolute -top-10 -left-10 pointer-events-none select-none opacity-15 hidden lg:block">
        <CottonSprig className="w-64 h-64 text-[#CFB6BC]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 text-left">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-700">
              <CherryBlossomFlower className="h-3.5 w-3.5 text-pink-600 shrink-0" />
              <span>Ganzheitliche Frauenheilkunde · 6 Schwerpunkte</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl lg:text-4xl">
              Unsere Schwerpunkte
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C4A4F] leading-relaxed">
              Vorsorge, Begleitung und moderne Spezialtherapien: Wir verbinden fundierte Schulmedizin mit ganzheitlicher Zuwendung in 6 medizinischen Kernbereichen.
            </p>
          </div>

          {/* Stepper Controls: Slide Counter & Nav Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#735F64] bg-white px-3.5 py-2 rounded-xl border border-[#F0E6E8] shadow-2xs">
              <span className="text-pink-700 font-bold">{currentItem.number}</span>
              <span>/</span>
              <span>06</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D2D7] bg-white text-[#2B2326] hover:bg-[#FAF5F6] hover:text-pink-700 transition-colors shadow-2xs cursor-pointer"
                aria-label="Vorheriger Schwerpunkt"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D2D7] bg-white text-[#2B2326] hover:bg-[#FAF5F6] hover:text-pink-700 transition-colors shadow-2xs cursor-pointer"
                aria-label="Nächster Schwerpunkt"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Schwerpunkte Quick Pill Selectors (Desktop & Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2 pb-6">
          {SCHWERPUNKTE_DATA.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all cursor-pointer text-center ${
                currentIndex === idx
                  ? 'bg-pink-700 text-white shadow-sm ring-2 ring-pink-700/25 scale-[1.02]'
                  : 'bg-white text-[#5C4A4F] hover:text-[#2B2326] border border-[#F0E6E8] hover:border-[#E8D2D7] shadow-2xs hover:bg-[#FAF5F6]'
              }`}
            >
              <span className={`shrink-0 ${currentIndex === idx ? 'text-white' : 'text-pink-700'}`}>
                {getIcon(item.id)}
              </span>
              <span className="truncate">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage for Selected Schwerpunkt */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8D2D7] bg-white shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Photo Area (7 cols on lg) */}
            <div 
              className="relative lg:col-span-7 aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:min-h-[500px] bg-neutral-900 group/stage overflow-hidden cursor-pointer"
              onClick={() => setSelectedSchwerpunkt(currentItem)}
              title="Klicken für ausführliche Details zum Schwerpunkt"
            >
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="h-full w-full object-cover transition-all duration-700 group-hover/stage:scale-[1.03]"
                onError={(e) => {
                  const target = e.currentTarget;
                  const imgSrc = currentItem.image;
                  if (imgSrc && !target.src.includes('public/')) {
                    const rel = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
                    target.src = `./public/${rel}`;
                  }
                }}
              />
              
              {/* Subtle Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Tag / Category Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-pink-700 shadow-sm border border-[#E8D2D7]">
                  <Sparkles className="h-3 w-3" />
                  {currentItem.badge}
                </span>
              </div>

              {/* Reassurance Badge Bottom Left */}
              <div className="absolute bottom-4 left-4 z-10 max-w-[85%] sm:max-w-none">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5 text-pink-300 shrink-0" />
                  <span className="truncate sm:whitespace-normal">Frauenzeit Brühl · Ganzheitlicher Schwerpunkt</span>
                </span>
              </div>

              {/* Zoom Trigger Button Overlay */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSchwerpunkt(currentItem);
                  }}
                  className="flex items-center gap-1.5 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-[#2B2326] shadow-md hover:bg-white hover:text-pink-700 transition-colors cursor-pointer"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-pink-700" />
                  <span>Details öffnen</span>
                </button>
              </div>
            </div>

            {/* Content & Details Panel (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left bg-white">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-pink-700">
                    Schwerpunkt {currentItem.number} von 06
                  </span>
                  <span className="text-xs font-semibold text-[#735F64] bg-[#FAF5F6] px-2.5 py-0.5 rounded-md border border-[#F0E6E8]">
                    Praxis Frauenzeit Brühl
                  </span>
                </div>

                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#2B2326] leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-xs font-semibold text-pink-700 mt-1">
                  {currentItem.subtitle}
                </p>

                {/* Lead Quote */}
                <div className="mt-4 rounded-xl border border-[#F0E6E8] bg-[#FAF5F6] p-3 text-xs italic text-[#4D3F43] leading-relaxed">
                  {currentItem.leadQuote}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#5C4A4F] leading-relaxed">
                  {currentItem.teaser}
                </p>

                {/* Highlights List */}
                <div className="mt-5 pt-4 border-t border-[#F0E6E8]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#735F64] mb-2.5">
                    Leistungsmerkmale:
                  </h4>
                  <div className="space-y-2">
                    {currentItem.keyHighlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#3E3236]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience Hint */}
                <div className="mt-4 rounded-xl bg-[#FAF5F6] p-3 text-xs text-[#5C4A4F] border border-[#F0E6E8]">
                  <strong className="text-[#2B2326] font-semibold">Für wen:</strong> {currentItem.forWhom}
                </div>
              </div>

              {/* Bottom Actions: Deep-Dive Modal Button & Doctolib */}
              <div className="mt-6 pt-5 border-t border-[#F0E6E8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSchwerpunkt(currentItem)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E8D2D7] bg-white px-4 py-2.5 text-xs font-bold text-pink-700 shadow-2xs hover:bg-pink-700 hover:text-white hover:border-pink-700 transition-all cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Ausführliche Details lesen</span>
                </button>

                <a
                  href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-pink-700 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-pink-800 transition-colors"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Termin vereinbaren</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Schwerpunkte Thumbnail Visual Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SCHWERPUNKTE_DATA.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`group relative overflow-hidden rounded-xl border p-2 text-left transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-pink-700 bg-white ring-2 ring-pink-700/25 shadow-xs'
                  : 'border-[#F0E6E8] bg-white/70 hover:bg-white hover:border-[#E8D2D7]'
              }`}
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-cover transition-transform duration-300 ${
                    currentIndex === idx ? 'scale-105' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'
                  }`}
                  loading="lazy"
                />
                {currentIndex === idx && (
                  <div className="absolute inset-0 bg-pink-700/10 border-2 border-pink-700 rounded-lg pointer-events-none" />
                )}
              </div>
              <div className="mt-2 truncate px-0.5">
                <p className={`text-xs font-bold truncate ${
                  currentIndex === idx ? 'text-pink-700' : 'text-[#2B2326]'
                }`}>
                  {item.title}
                </p>
                <p className="text-[10px] text-[#735F64] truncate">
                  Schwerpunkt {item.number}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Comprehensive Schwerpunkt Detail Modal */}
      {selectedSchwerpunkt && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 text-left"
          onClick={() => setSelectedSchwerpunkt(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-[#F0E6E8] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="relative bg-gradient-to-r from-[#FAF5F6] via-white to-[#FCF8F9] border-b border-[#F0E6E8] p-5 sm:p-7 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedSchwerpunkt(null)}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-500 hover:text-[#2B2326] hover:bg-white shadow-sm border border-[#E8D2D7] transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pr-10">
                <div className="h-16 w-24 sm:h-20 sm:w-32 rounded-xl overflow-hidden border border-[#E8D2D7] bg-white shrink-0 shadow-2xs">
                  <img
                    src={selectedSchwerpunkt.image}
                    alt={selectedSchwerpunkt.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-0.5 text-xs font-bold text-pink-700 border border-pink-200">
                    <Sparkles className="h-3 w-3" />
                    {selectedSchwerpunkt.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2B2326] mt-1">
                    {selectedSchwerpunkt.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#5C4A4F]">
                    {selectedSchwerpunkt.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
              
              {/* Lead Quote */}
              <div className="rounded-2xl border border-[#F0E6E8] bg-[#FAF5F6] p-4 text-xs sm:text-sm italic text-[#4D3F43] leading-relaxed font-medium">
                {selectedSchwerpunkt.leadQuote}
              </div>

              {/* In-Depth Text Paragraphs from official practice page */}
              <div className="space-y-3 text-xs sm:text-sm text-[#4D3F43] leading-relaxed">
                <h4 className="font-bold text-[#2B2326] text-sm flex items-center gap-1.5">
                  <HeartHandshake className="h-4 w-4 text-pink-700" />
                  <span>Medizinisches Konzept & Betreuung in unserer Praxis</span>
                </h4>
                {selectedSchwerpunkt.detailedText.map((p, idx) => (
                  <p key={idx} className="bg-white p-3.5 rounded-xl border border-[#F0E6E8] shadow-2xs">
                    {p}
                  </p>
                ))}
              </div>

              {/* Clinical Focus Categories */}
              <div className="space-y-4 pt-2">
                <h4 className="font-bold text-[#2B2326] text-sm flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-pink-700" />
                  <span>Behandlungsspektrum & Diagnostik</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSchwerpunkt.clinicalFocus.map((focusGroup, idx) => (
                    <div key={idx} className="rounded-xl border border-[#E8D2D7] bg-[#FCF8F9] p-4 space-y-2.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-pink-800">
                        {focusGroup.category}
                      </h5>
                      <ul className="space-y-1.5 text-xs text-[#5C4A4F]">
                        {focusGroup.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Praxis Advantage Note */}
              <div className="rounded-xl border border-pink-100 bg-pink-50/50 p-4 flex items-start gap-3 text-xs text-[#5C4A4F]">
                <ShieldCheck className="h-4 w-4 text-pink-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B2326] font-semibold block">Besonderheit in unserer Praxis:</strong>
                  <span>{selectedSchwerpunkt.practiceAdvantage}</span>
                </div>
              </div>

              {/* Cost & Insurance hint */}
              {selectedSchwerpunkt.costNote && (
                <div className="rounded-xl border border-[#F0E6E8] bg-[#FAF5F6] p-4 text-xs text-[#735F64] leading-relaxed">
                  <strong className="text-[#2B2326] block font-semibold mb-1">Abrechnung & Krankenkassen:</strong>
                  <p>{selectedSchwerpunkt.costNote}</p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="bg-[#FAF5F6] border-t border-[#F0E6E8] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-[#735F64] font-medium hidden sm:inline">
                Praxis Frauenzeit Brühl · Dr. med. Anika Birkenfeld & Dr. med. Corinna Ledwig
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSchwerpunkt(null)}
                  className="px-4 py-2.5 text-xs font-semibold text-[#5C4A4F] bg-white hover:bg-[#F0E6E8] border border-[#E8D2D7] rounded-xl transition-colors cursor-pointer"
                >
                  Schließen
                </button>

                <a
                  href="https://www.doctolib.de/praxis/bruehl/praxis-frauenzeit-bruehl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-700 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-pink-800 transition-all cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Termin zu diesem Schwerpunkt buchen</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
