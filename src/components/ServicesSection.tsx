import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck, 
  X, 
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Activity,
  Phone,
  Stethoscope
} from 'lucide-react';
import { SectionBackToTop } from './SectionBackToTop';

export interface LeistungItem {
  id: 
    | 'allgemeine-gynaekologie' 
    | 'maedchensprechstunde' 
    | 'empfaengnisverhuetung' 
    | 'kinderwunsch' 
    | 'schwangerschaft' 
    | 'krebsfrueherkennung' 
    | 'krebsnachsorge' 
    | 'impfungen' 
    | 'hormone' 
    | 'menopause' 
    | 'ernaehrung' 
    | 'betterpelvi' 
    | 'igel';
  number: string;
  category: 'schwerpunkt' | 'gynaekologie';
  categoryLabel: string;
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

export const LEISTUNGEN_DATA: LeistungItem[] = [
  {
    id: 'allgemeine-gynaekologie',
    number: '01',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Allgemeine Gynäkologie',
    subtitle: 'Zeit für Ihre Anliegen · Diagnostik & einfühlsame Behandlung',
    badge: 'Gynäkologische Grundversorgung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/allgemeine-gynaekologie.jpg`,
    alt: 'Allgemeine Gynäkologie und einfühlsame Beratung in der Praxis Frauenzeit Brühl',
    leadQuote: '„In unserer allgemeinen gynäkologischen Sprechstunde nehmen wir uns Zeit für Ihre Anliegen und behandeln Sie bei Beschwerden und gynäkologischen Erkrankungen. Unser Ziel ist es, die Ursachen Ihrer Beschwerden zu erkennen und gemeinsam mit Ihnen einen passenden Behandlungsweg zu finden.“',
    teaser: 'Ob Regelschmerzen, Endometriose und Adenomyose, Hormonstörungen oder die Nachsorge nach Krankenhausaufenthalten: Wir gehen den Ursachen auf den Grund und finden gemeinsam die optimale Therapie.',
    detailedText: [
      'In unserer allgemeinen gynäkologischen Sprechstunde nehmen wir uns bewusst Zeit für Ihre Anliegen und behandeln Sie bei allen akuten wie chronischen Beschwerden sowie gynäkologischen Erkrankungen. Unser Ziel ist es, die Ursachen zu erkennen und gemeinsam mit Ihnen einen passenden Behandlungsweg zu finden.',
      'Wir unterstützen Sie verlässlich bei Regelschmerzen und Unterleibsbeschwerden, Endometriose und Adenomyose – Erkrankungen, die oft spät erkannt werden und mit starken Schmerzen, Blutungsstörungen oder unerfülltem Kinderwunsch einhergehen können. Wir begleiten Sie von der fundierten Diagnosestellung bis zur langfristigen Betreuung.',
      'Ebenso übernehmen wir die ambulante Nachsorge und Wundkontrolle nach stationären Krankenhausaufenthalten und gynäkologischen Operationen. Auch bei Schmerzen beim Geschlechtsverkehr, Sexualstörungen oder chronischen Unterbauchschmerzen bieten wir Ihnen einen vertrauensvollen, geschützten Rahmen.',
      'Weitere Schwerpunkte umfassen Beckenboden- und Blasenschwäche, Infektionen der Geschlechtsorgane und Harnwege, Veränderungen der Vulva sowie gutartige Veränderungen von Gebärmutter und Eierstöcken (Myome, Zysten, Polypen).'
    ],
    keyHighlights: [
      'Gründliche Abklärung von Regelschmerzen & Unterleibsbeschwerden',
      'Diagnostik & langfristige Begleitung bei Endometriose und Adenomyose',
      'Ambulante Nachsorge & Kontrollen nach Operationen und Klinikaufenthalten',
      'Einfühlsame Hilfe bei Dyspareunie (Schmerzen beim Geschlechtsverkehr) & Sexualstörungen',
      'Behandlung von Infektionen, Vulva-Veränderungen & gutartigen Organbefunden'
    ],
    clinicalFocus: [
      {
        category: 'Wir unterstützen Sie unter anderem bei',
        items: [
          'Regelschmerzen und Unterleibsbeschwerden (Ursachenabklärung & Therapie)',
          'Endometriose und Adenomyose (von Diagnosestellung bis Dauerbegleitung)',
          'Hormonstörungen & Zyklusunregelmäßigkeiten',
          'Nachsorge nach Krankenhausaufenthalten und gynäkologischen Operationen',
          'Schmerzen beim Geschlechtsverkehr und Sexualstörungen',
          'Chronischen Unterbauchschmerzen'
        ]
      },
      {
        category: 'Organische Diagnostik & Organbefunde',
        items: [
          'Beckenboden- und Blasenschwäche (Senkungsbeschwerden, Harninkontinenz)',
          'Infektionen der inneren/äußeren Geschlechtsorgane und ableitenden Harnwege',
          'Veränderungen der Vulva & Beschwerden im Intimbereich (Juckreiz, Brennen)',
          'Gutartige Veränderungen der Gebärmutter und Eierstöcke (Myome, Zysten, Polypen)'
        ]
      }
    ],
    forWhom: 'Frauen aller Altersgruppen bei Beschwerden, Schmerzen, Infektionen, nach Operationen oder mit chronischen gynäkologischen Fragestellungen.',
    practiceAdvantage: 'Verbindung leitliniengerechter Facharztmedizin mit ganzheitlicher Zuwendung und ausreichend Zeit für das persönliche Gespräch.',
    costNote: 'Die allgemeine gynäkologische Untersuchung und Behandlung ist Bestandteil der vertragsärztlichen Versorgung (gesetzliche Krankenkasse).'
  },
  {
    id: 'maedchensprechstunde',
    number: '02',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Mädchensprechstunde',
    subtitle: 'Ein guter Start in die Frauengesundheit · Für Mädchen & Teenager',
    badge: 'Jugendgesundheit · Einfühlsam & Vertraulich',
    image: `${import.meta.env.BASE_URL}assets/aistudio/teenager-maedchensprechstunde_9c585e35.jpg`,
    alt: 'Mädchen liest entspannt in der Natur – Mädchensprechstunde Praxis Frauenzeit Brühl',
    leadQuote: '„Der erste Besuch bei der Frauenärztin ist für viele junge Mädchen ein besonderer Moment – verbunden mit Neugier, Fragen oder auch Unsicherheit. Uns ist es wichtig, dass du dich bei uns wohlfühlst und einen geschützten Raum findest, in dem alle deine Fragen Platz haben.“',
    teaser: 'Keine Angst vor dem ersten Termin: Eine körperliche Untersuchung auf dem Stuhl ist beim Kennenlernen meist gar nicht nötig! Wir nehmen uns Zeit für alle deine Fragen zu Pubertät, Periode, Liebe & Verhütung.',
    detailedText: [
      'Der erste Besuch bei der Frauenärztin ist ein ganz besonderer Schritt – verbunden mit vielen Fragen, Neugier, aber oft auch ein wenig Nervosität. In unserer Mädchen-Sprechstunde schaffen wir einen entspannten, geschützten Raum, in dem du offen über alles sprechen kannst.',
      'Wir nehmen uns viel Zeit, dich kennenzulernen und dir zuzuhören. Dabei geht es vor allem um Vertrauen, gegenseitiges Kennenlernen und verständliche Erklärungen rund um deinen Körper. Eine körperliche Untersuchung ist beim ersten Besuch in den allermeisten Fällen nicht erforderlich.',
      'Du entscheidest selbst, welche Themen du besprechen möchtest und ob du allein kommen möchtest oder in Begleitung – zum Beispiel mit deiner besten Freundin, deinem Freund oder deiner Mutter.',
      'Unser Ziel ist es, dich auf deinem Weg zu einer selbstbestimmten und gesunden Entwicklung zu begleiten – mit viel Verständnis und auf Augenhöhe.'
    ],
    keyHighlights: [
      'Erster Praxisbesuch ohne Untersuchungszwang – Fokus auf Gespräch & Vertrauen',
      'Beratung zu Veränderungen in der Pubertät, Körper & Menstruationszyklus',
      'Offene Aufklärung zu Verhütung, Sexualität & Schutz vor Infektionen',
      'Kostenfreies Chlamydien-Screening bis zum vollendeten 25. Lebensjahr',
      'HPV-Impfberatung & Impfpass-Check für langfristigen Schutz'
    ],
    clinicalFocus: [
      {
        category: 'Wir sprechen unter anderem über',
        items: [
          'Veränderungen in der Pubertät (körperliche Entwicklung, erste Regelblutung, Zyklus)',
          'Menstruation und Umgang mit der Periode (Hygieneprodukte, Körpergefühl)',
          'Zyklusbeschwerden (starke Regelschmerzen, unregelmäßige Blutungen, PMS)',
          'Haut, Haare und Hormone (Akne, Haarausfall, hormonelle Schwankungen)'
        ]
      },
      {
        category: 'Sexualität & Prävention',
        items: [
          'Verhütung und Sexualität (Pille, Alternativen, erste Liebe, Schutz vor STIs)',
          'Chlamydien-Screening bis zum vollendeten 25. Lebensjahr als Kassenleistung',
          'Impfungen und Vorsorge (insbesondere die HPV-Impfung)',
          'Vertrauliche Gespräche ganz ohne Begleitperson auf Wunsch'
        ]
      }
    ],
    forWhom: 'Mädchen und junge Frauen (ca. 11 bis 25 Jahre) – allein oder mit Begleitperson ihrer Wahl.',
    practiceAdvantage: 'Verständnisvolles Ärztinnen-Team ohne Vorurteile oder Tabus, das medizinische Sachverhalte leicht verständlich erklärt.',
    costNote: 'Vollständige Kassenleistung: Beratung, Impfungen und Chlamydien-Screening bis 25 Jahre werden von den gesetzlichen Krankenkassen übernommen.'
  },
  {
    id: 'empfaengnisverhuetung',
    number: '03',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Empfängnisverhütung',
    subtitle: 'Die passende Verhütung – so individuell wie Ihr Leben',
    badge: 'Familienplanung & Schutz',
    image: `${import.meta.env.BASE_URL}assets/leistungen/empfaengnisverhuetung.jpg`,
    alt: 'Individuelle Beratung zur Empfängnisverhütung und Familienplanung – Praxis Frauenzeit Brühl',
    leadQuote: '„Die Wahl der richtigen Verhütungsmethode ist eine sehr persönliche Entscheidung. Alter, Familienplanung, gesundheitliche Voraussetzungen und persönliche Wünsche spielen dabei eine wichtige Rolle.“',
    teaser: 'Von hormonfreien Alternativen über moderne Spiralen (Kupfer & Hormon) bis zu Mikropillen: Wir beraten Sie unabhängig, evidenzbasiert und abgestimmt auf Ihre aktuelle Lebenssituation.',
    detailedText: [
      'Die Wahl der richtigen Verhütungsmethode ist eine sehr persönliche Entscheidung. Alter, persönliche Familienplanung, Vorerkrankungen, gesundheitliche Voraussetzungen und individuelle Wünsche greifen hier ineinander.',
      'Wir nehmen uns Zeit, Ihre Fragen ausführlich zu beantworten und gemeinsam mit Ihnen die Methode zu finden, die ideal zu Ihrem Alltag und Ihrem Wohlbefinden passt. Dabei informieren wir Sie detailliert über die verschiedenen Möglichkeiten, deren Wirkweise sowie Vor- und Nachteile.',
      'Zu unserem Beratungsangebot gehören hormonelle Methoden (Pille, Vaginalring, Pflaster), intrauterine Systeme (hormonhaltige Spiralen wie Mirena/Kyleena/Jaydess sowie hormonfreie Kupferspiralen) und Barrieremethoden.',
      'Auch wenn sich Ihre Lebenssituation verändert, begleiten wir Sie weiter: Bei der Umstellung oder Beendigung einer bisherigen Methode, bei Fragen zu Zyklus und Fruchtbarkeit oder bei beginnendem Kinderwunsch.'
    ],
    keyHighlights: [
      'Unabhängige, bedürfnisorientierte Beratung ohne Dogmen',
      'Hormonelle Verhütungsmethoden: Pille, Vaginalring & weitere Präparate',
      'Intrauterine Systeme (Spirale): Hormonspirale & hormonfreie Kupferspirale',
      'Schonende Einlage mit präziser Ultraschall-Lagekontrolle',
      'Barrieremethoden & Schutz vor sexuell übertragbaren Infektionen'
    ],
    clinicalFocus: [
      {
        category: 'Zu unserem Beratungsangebot gehören unter anderem',
        items: [
          'Hormonelle Verhütungsmethoden (Pille, Vaginalring, hormonelle Präparate – Hemmung des Eisprungs)',
          'Intrauterine Verhütung / Spirale (Hormonspirale sowie hormonfreie Kupferspirale)',
          'Barrieremethoden (z. B. Kondom für Verhütung plus Schutz vor vielen STIs)',
          'Notfallkontrazeption & zeitnahe Beratung im Akutfall'
        ]
      },
      {
        category: 'Lebensphasen & Umstellung',
        items: [
          'Verhütung in der Stillzeit und nach einer Entbindung',
          'Verhütung in der Perimenopause und bei hormonellen Schwankungen',
          'Begleitung bei der Beendigung der Verhütung und Vorbereitung auf eine Schwangerschaft',
          'Beratung zu Zyklusbeobachtung und natürlicher Fruchtbarkeit'
        ]
      }
    ],
    forWhom: 'Frauen und Paare in allen Lebensphasen vom Beginn der Sexualität über die Familienphase bis zu den Wechseljahren.',
    practiceAdvantage: 'Moderne hochauflösende Sonographie zur exakten Passformprüfung und Lagekontrolle bei Spiralen.',
    costNote: 'Verhütungsberatung ist Kassenleistung. Verschreibungspflichtige Verhütungsmittel werden bis zum 22. Geburtstag von den gesetzlichen Kassen erstattet.'
  },
  {
    id: 'kinderwunsch',
    number: '04',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Kinderwunsch',
    subtitle: 'Gemeinsam auf dem Weg zu Ihrem Wunschkind · Vorbereitung & Diagnostik',
    badge: 'Präkonzeptionelle Begleitung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/schwangerschaftsbegleitung.jpg`,
    alt: 'Schlafendes Neugeborenes – Erfüllter Kinderwunsch in der Praxis Frauenzeit Brühl',
    leadQuote: '„Der Wunsch nach einem Kind ist für viele Frauen und Paare eine ganz besondere Zeit – voller Vorfreude, Hoffnung und neuer Pläne. Wir begleiten Sie gerne bereits vor einer geplanten Schwangerschaft und unterstützen Sie dabei, gute Voraussetzungen für eine gesunde Schwangerschaft zu schaffen.“',
    teaser: 'Gute Voraussetzungen für eine gesunde Schwangerschaft schaffen: Von Zyklus- und Hormondiagnostik über Ernährung und Mikronährstoffe bis zur Begleitung bei Endometriose oder PCOS.',
    detailedText: [
      'Der Wunsch nach einem Kind ist für Frauen und Paare eine intensive Lebensphase voller Vorfreude, Hoffnung und Gedanken an die Zukunft. Wir begleiten Sie gerne bereits im Vorfeld, um Ihren Körper bestmöglich auf die Empfängnis vorzubereiten.',
      'In einem persönlichen, ruhigen Gespräch nehmen wir uns Zeit für Ihre Fragen. Wir betrachten Ihre persönliche Situation, Ihren Zyklus, Ihren Lebensstil und eventuelle Vorerkrankungen.',
      'Bei Zyklusunregelmäßigkeiten, hormonellen Dysbalancen oder bekannten Erkrankungen wie Endometriose und Adenomyose leiten wir eine zielgerichtete Diagnostik ein und behandeln mögliche Ursachen.',
      'Sollten weiterführende Untersuchungen oder eine spezielle reproduktionsmedizinische Kinderwunschbehandlung erforderlich sein, arbeiten wir eng mit spezialisierten Kinderwunschzentren im Rheinland zusammen.'
    ],
    keyHighlights: [
      'Beratung zur Schwangerschaftsplanung (Zyklus, fruchtbare Tage, Timing)',
      'Fundierte Zyklus- & Hormondiagnostik bei unregelmäßigen Blutungen',
      'Ernährungsmedizin & Mikronährstoffversorgung (Folsäure, Jod, Vitamin D, Eisen)',
      'Gesundheits- & Impfstatuscheck vor Eintritt der Schwangerschaft',
      'Begleitung bei Endometriose, Adenomyose & PMOS / PCOS'
    ],
    clinicalFocus: [
      {
        category: 'Zu unserer Kinderwunschbegleitung gehören unter anderem',
        items: [
          'Beratung zur Schwangerschaftsplanung (Zyklusphasen, optimaler Empfängniszeitpunkt)',
          'Zyklus- und Hormonberatung bei Unregelmäßigkeiten oder Lutealinsuffizienz',
          'Ernährung und Lebensstil (Mikronährstoffversorgung, Schlaf, Stressregulation)',
          'Gesundheitscheck vor der Schwangerschaft (Impfstatus, Blutwerte, Folsäure)',
          'Begleitung bei besonderen Fragestellungen (Endometriose, Adenomyose, PCOS)'
        ]
      },
      {
        category: 'Spezialisierte Vernetzung',
        items: [
          'Ovulationsmonitoring mittels hochauflösendem Ultraschall',
          'Kooperation mit regionalen Kinderwunschzentren in Köln und Bonn',
          'Unterstützung bei psychosozialen Belastungen während der Kinderwunschzeit',
          'Nahtloser Übergang in die Schwangerschaftsbegleitung bei erfolgreicher Empfängnis'
        ]
      }
    ],
    forWhom: 'Frauen und Paare mit Kinderwunsch – von der ersten Planung bis zur Abklärung bei verzögertem Eintritt.',
    practiceAdvantage: 'Verzahnung von gynäkologischer Pränatalmedizin, DEGUM I Ultraschall und ärztlicher Ernährungsmedizin.',
    costNote: 'Die präkonzeptionelle Beratung und medizinische Zyklusdiagnostik ist eine Leistung der gesetzlichen Krankenkassen.'
  },
  {
    id: 'schwangerschaft',
    number: '05',
    category: 'schwerpunkt',
    categoryLabel: 'Schwerpunkt',
    title: 'Schwangerschaft',
    subtitle: 'Einfühlsame & ganzheitliche Schwangerschaftsbegleitung',
    badge: 'Schwerpunkt · Pränatale Begleitung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/schwangerschaft-vorsorge.jpg`,
    alt: 'Schwangere Frau berührt liebevoll ihren Babybauch im sonnendurchfluteten Raum – Schwangerschaftsbegleitung Praxis Frauenzeit Brühl',
    leadQuote: '„Mit Ihrer Schwangerschaft beginnt ein neuer Lebensabschnitt – voller Vorfreude, Veränderungen und einzigartiger Momente.“',
    teaser: 'Vom positiven Schwangerschaftstest über alle Trimester bis ins Wochenbett: Wir begleiten Sie mit medizinischer Kompetenz, hoher Feindiagnostik-Expertise (DEGUM I) und herzlicher Fürsorge.',
    detailedText: [
      'Herzlichen Glückwunsch zu Ihrer Schwangerschaft! Neben den regulären medizinischen Vorsorgeuntersuchungen nehmen wir uns bewusst ausreichend Zeit für Ihre Fragen, Gedanken und individuellen Wünsche. Uns ist eine vertrauensvolle Betreuung auf Augenhöhe besonders wichtig, damit Sie gut informiert und mit einem sicheren Gefühl durch Ihre Schwangerschaft gehen.',
      'Die Schwangerschaftsvorsorge beginnt in der Regel ab der 7. Schwangerschaftswoche (bei besonderen Fragestellungen selbstverständlich auch früher). Bis zur 30. Schwangerschaftswoche finden die Vorsorgeuntersuchungen alle vier Wochen statt, anschließend alle zwei Wochen bis zur Geburt.',
      'Bei jedem Termin kontrollieren wir sorgfältig Blutdruck, Gewicht, Urin und führen die vorgesehenen Blutuntersuchungen durch. Zwischen der 24. und 28. Schwangerschaftswoche erfolgt das Screening auf Schwangerschaftsdiabetes (oraler Glukosetoleranztest).',
      'In regelmäßigen Patientinnenseminaren rund um Schwangerschaft, Geburt und Ernährung erhalten Sie fundierte Informationen und praktische Tipps in entspannter Praxisatmosphäre.'
    ],
    keyHighlights: [
      'Mutterschaftsvorsorge nach aktuellen Richtlinien & Leitlinien',
      'DEGUM I Ultraschalldiagnostik & fetomaternale Sonographie',
      'Screening auf Gestationsdiabetes (oraler Glukosetoleranztest)',
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
          'Doppler-Ultraschall zur Beurteilung der Durchblutung',
          'Infektionsdiagnostik (CMV, Toxoplasmose, B-Streptokokken)'
        ]
      }
    ],
    forWhom: 'Werdende Mütter & Paare vom Kinderwunsch über alle Trimester bis zur Entbindung & ins Wochenbett.',
    practiceAdvantage: 'Hochqualifizierte Betreuung durch ehemalige Oberärztin & DEGUM I zertifizierte Pränatalmedizinerin mit Zweitmonitor für Eltern.',
    costNote: 'Die reguläre Schwangerschaftsvorsorge ist Kassenleistung. Spezialisierte Pränataltests (z. B. NIPT ohne Indikation, erweitertes Ersttrimesterscreening) sind Wahlleistungen (IGeL).'
  },
  {
    id: 'krebsfrueherkennung',
    number: '06',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Krebsfrüherkennung',
    subtitle: 'Früher erkennen. Besser behandeln. · Regelmäßige Vorsorge rettet Leben',
    badge: 'Prävention & Früherkennung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/krebsfrueherkennung.jpg`,
    alt: 'Einfühlsame Krebsfrüherkennung und gynäkologische Vorsorgeuntersuchung – Praxis Frauenzeit Brühl',
    leadQuote: '„Viele gynäkologische Krebserkrankungen verursachen in frühen Stadien keine Beschwerden. Regelmäßige Früherkennungsuntersuchungen ermöglichen es, Zellveränderungen oder Erkrankungen frühzeitig zu entdecken und dadurch die Heilungschancen deutlich zu verbessern.“',
    teaser: 'Regelmäßige gynäkologische Früherkennung: Jährliche Vorsorge, Pap-Abstrich, HPV-Co-Test ab 35 und Tastuntersuchung der Brust in vertrauensvoller Atmosphäre.',
    detailedText: [
      'Viele gynäkologische Krebserkrankungen verursachen in frühen Stadien keinerlei Beschwerden oder Schmerzen. Regelmäßige Früherkennungsuntersuchungen ermöglichen es, Zellveränderungen oder Vorstufen zu entdecken, lange bevor ernsthafte Probleme auftreten – dadurch steigen die Heilungschancen signifikant.',
      'Im Rahmen der gesetzlichen Krebsfrüherkennung bieten wir Ihnen die jährliche gynäkologische Vorsorgeuntersuchung mit Spekulumeinstellung, Zellabstrich vom Gebärmutterhals und Brusttastuntersuchung.',
      'Ab dem 35. Lebensjahr erfolgt alle drei Jahre die Kombination aus HPV-Test und Zellabstrich (Co-Testing) als Leistung der gesetzlichen Krankenkassen. Ab dem 50. Lebensjahr beraten wir Sie zum Mammographie-Screening sowie zur Darmkrebsfrüherkennung.',
      'Vorsorge bedeutet, die Gesundheit aktiv zu schützen (Lebensstil, Ernährung, Bewegung); Früherkennung spürt unbemerkte Zellveränderungen rechtzeitig auf. Unser Ziel ist es, Ihre Gesundheit langfristig zu erhalten.'
    ],
    keyHighlights: [
      'Jährliche gynäkologische Untersuchung & Spekulumeinstellung',
      'Zellabstrich vom Gebärmutterhals (Pap-Test) zur Früherkennung',
      'Ab 35 Jahren: HPV-Test kombiniert mit Zellabstrich (Co-Test) alle 3 Jahre',
      'Gründliche Tastuntersuchung der Brust und regionalen Lymphknoten',
      'Aufklärung & Beratung zum Mammographie-Screening und zur Darmkrebsvorsorge'
    ],
    clinicalFocus: [
      {
        category: 'Im Rahmen der gesetzlichen Krebsfrüherkennung bieten wir Ihnen',
        items: [
          'Jährliche gynäkologische Vorsorgeuntersuchung mit Spekulumeinstellung und Zellabstrich',
          'Sorgfältige Tastuntersuchung der Brustdrüsen und Lymphabflusswege',
          'Ab dem 35. Lebensjahr: HPV-Test in Kombination mit Zellabstrich (Co-Test) alle drei Jahre',
          'Ab dem 50. Lebensjahr: Mammographie-Screening und Darmkrebsfrüherkennung (iFOBT-Stuhltest)'
        ]
      },
      {
        category: 'Vorsorge vs. Früherkennung',
        items: [
          'Vorsorge: Aktive Gesundheitsförderung durch gesunden Lebensstil und Risikominimierung',
          'Früherkennung: Frühzeitiges Entdecken bereits bestehender, symptomloser Zellveränderungen',
          'Ergänzende Ultraschallfrüherkennung auf Wunsch (Mammasonographie & Beckenultraschall)',
          'Feinfühlige, schmerzarme Untersuchungstechnik'
        ]
      }
    ],
    forWhom: 'Alle Frauen ab 20 Jahren zur regelmäßigen lebenslangen Gesundheitserhaltung.',
    practiceAdvantage: 'Verbindung von Zytologie-Expertise, moderner Mikroskopie und schonender Untersuchungsmethode.',
    costNote: 'Die reguläre Krebsfrüherkennung ist eine vollständige Pflichtleistung aller gesetzlichen und privaten Krankenkassen.'
  },
  {
    id: 'krebsnachsorge',
    number: '07',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Krebsnachsorge',
    subtitle: 'Gemeinsam zurück in den Alltag · Verlässliche Begleitung mit Herz',
    badge: 'Onkologische Nachsorge & Fürsorge',
    image: `${import.meta.env.BASE_URL}assets/leistungen/brustsprechstunde.jpg`,
    alt: 'Einfühlsames Gespräch zur Krebsnachsorge in der Praxis Frauenzeit Brühl',
    leadQuote: '„Die Diagnose einer Krebserkrankung verändert das Leben oft von einem Tag auf den anderen. In unserer Krebsnachsorge stehen nicht nur medizinische Kontrolluntersuchungen im Mittelpunkt, sondern vor allem Sie als Mensch. Wir nehmen uns Zeit, hören zu und unterstützen Sie.“',
    teaser: 'Nach Abschluss der Akutbehandlung (OP, Chemo, Bestrahlung) begleiten wir Sie leitliniengerecht über mindestens fünf Jahre – medizinisch kompetent, psychosomatisch stärkend und einfühlsam.',
    detailedText: [
      'Die Diagnose einer Krebserkrankung verändert das Leben fundamental. Doch auch nach Abschluss der primären Behandlung bleiben oft Fragen, Ängste, körperliche Erschöpfung oder Beschwerden zurück, und der Wunsch nach verlässlicher medizinischer Begleitung wächst.',
      'In unserer Krebsnachsorge stehen nicht nur die medizinischen Kontrolluntersuchungen im Mittelpunkt, sondern vor allem Sie als ganzer Mensch. Wir nehmen uns Zeit, hören zu und unterstützen Sie dabei, Schritt für Schritt wieder Vertrauen in Ihren Körper und Ihren Alltag zu gewinnen.',
      'Die Nachsorge beginnt nach Abschluss der Erstbehandlung (z. B. nach Operation, Chemotherapie oder Strahlentherapie) und erfolgt leitliniengerecht in regelmäßigen Abständen, in der Regel über einen Zeitraum von fünf Jahren.',
      'Sie müssen diesen Weg nicht allein gehen: Wir begleiten Sie mit medizinischer Fachkompetenz, viel Einfühlungsvermögen und dem Ziel, Ihnen Sicherheit, Orientierung und Zuversicht zu geben.'
    ],
    keyHighlights: [
      'Strukturierte Nachsorge nach aktuellen onkologischen Leitlinien (S3)',
      'Regelmäßige Ultraschallkontrollen der Brust (Mammasonographie) & Beckenorgane',
      'Begleitung bei körperlichen, seelischen und sozialen Herausforderungen',
      'Behandlung und Linderung von Therapiefolgen & Nebenwirkungen (z.B. Hormonentzug, Fatigue)',
      'Frühzeitiges Erkennen eines möglichen Rückfalls oder neuer Veränderungen'
    ],
    clinicalFocus: [
      {
        category: 'Ziele der Krebsnachsorge',
        items: [
          'Unterstützung bei der Rückkehr in den Alltag sowie ins Berufsleben',
          'Begleitung bei körperlichen, seelischen und sozialen Herausforderungen',
          'Behandlung und Linderung von Beschwerden sowie möglicher Therapiefolgen',
          'Frühzeitiges Erkennen eines möglichen Rückfalls oder neuer Veränderungen'
        ]
      },
      {
        category: 'Leitliniengerechte Untersuchungsintervalle',
        items: [
          '1. bis 3. Jahr: Vierteljährliche Kontroll- und Beratungsuntersuchungen',
          '4. und 5. Jahr: Halbjährliche Kontrollen',
          'Körperliche Untersuchung, Narbenkontrolle & gezielte Ultraschalluntersuchung',
          'Enge Kooperation mit zertifizierten Brustzentren und onkologischen Praxen'
        ]
      }
    ],
    forWhom: 'Frauen nach Abschluss der Erstbehandlung einer gynäkologischen Krebserkrankung oder von Brustkrebs.',
    practiceAdvantage: 'Langjährige oberärztliche Erfahrung im Brustzentrum sowie qualifizierte psychosomatische Grundversorgung.',
    costNote: 'Die strukturierte onkologische Krebsnachsorge ist eine vollständige Leistung der gesetzlichen und privaten Krankenkassen.'
  },
  {
    id: 'impfungen',
    number: '08',
    category: 'gynaekologie',
    categoryLabel: 'Gynäkologie & Vorsorge',
    title: 'Impfungen',
    subtitle: 'Schutz für Ihre Gesundheit – heute und in der Zukunft',
    badge: 'Präventiver Infektionsschutz',
    image: `${import.meta.env.BASE_URL}assets/leistungen/impfungen.jpg`,
    alt: 'Fachgerechte Schutzimpfung und Impfpass-Beratung – Praxis Frauenzeit Brühl',
    leadQuote: '„Impfungen gehören zu den wichtigsten Maßnahmen der Gesundheitsvorsorge. Sie schützen nicht nur vor bestimmten Infektionskrankheiten, sondern können auch dazu beitragen, schwerwiegende Folgeerkrankungen zu verhindern.“',
    teaser: 'Von der HPV-Impfung zum Schutz vor Gebärmutterhalskrebs über Impfungen vor und in der Schwangerschaft bis zum kostenfreien Impfpass-Check bei jedem Praxisbesuch.',
    detailedText: [
      'Impfungen gehören zu den wirksamsten Maßnahmen der modernen Gesundheitsvorsorge. Sie schützen nicht nur vor Infektionskrankheiten, sondern verhindern oft lebensbedrohliche Folgeerkrankungen.',
      'Ein besonderer Schwerpunkt in der Frauenheilkunde ist die HPV-Impfung. Humane Papillomviren (HPV) gehören zu den häufigsten sexuell übertragbaren Viren. Bestimmte HPV-Typen können Zellveränderungen verursachen und an der Entstehung von Gebärmutterhalskrebs sowie Genitalwarzen beteiligt sein. Die Impfung bietet hochwirksamen Schutz – besonders im Jugendalter, aber auch darüber hinaus.',
      'Gerade vor einer geplanten Schwangerschaft ist es sinnvoll, den Impfstatus frühzeitig zu überprüfen (z. B. Röteln, Windpocken, Masern), um das ungeborene Kind vor Infektionen zu schützen.',
      'Bringen Sie einfach zu jedem Termin Ihren Impfausweis mit – wir überprüfen ihn gerne und führen empfohlene Impfungen direkt durch.'
    ],
    keyHighlights: [
      'HPV-Impfung für Mädchen, Jungen und junge Erwachsene',
      'Überprüfung und Vervollständigung des Impfstatus nach aktuellen STIKO-Empfehlungen',
      'Impfberatung vor der Schwangerschaft (Ausschluss von Impflücken)',
      'Empfohlene Schutzimpfungen in der Schwangerschaft (z.B. Keuchhusten & Grippe)',
      'Auffrischimpfungen und Standardimpfungen für Erwachsene (Tetanus, Diphtherie, Polio)'
    ],
    clinicalFocus: [
      {
        category: 'Wir beraten Sie gerne zu',
        items: [
          'HPV-Impfung für Mädchen, Jungen und junge Erwachsene (Schutz vor Gebärmutterhalskrebs)',
          'Überprüfung und Vervollständigung des Impfstatus nach STIKO-Richtlinien',
          'Impfungen in der Schwangerschaft sowie optimale Vorbereitung auf eine Schwangerschaft',
          'Auffrischungsimpfungen und fehlende Standardimpfungen im Erwachsenenalter'
        ]
      },
      {
        category: 'Service in der Praxis Frauenzeit',
        items: [
          'Kostenloser Impfpass-Check bei regulären Vorsorgeterminen',
          'Verfügbarkeit gängiger Impfstoffe direkt in der Praxis',
          'Umfassende Aufklärung über Verträglichkeit und Schutzdauer',
          'Schutz der Familie durch die sogenannte Kokon-Strategie'
        ]
      }
    ],
    forWhom: 'Teenager, junge Erwachsene, Frauen mit Kinderwunsch, Schwangere und alle Patientinnen zur Auffrischung.',
    practiceAdvantage: 'Unkomplizierte Durchführung im Rahmen regulärer Praxisbesuche ohne zusätzliche Termine.',
    costNote: 'STIKO-empfohlene Schutzimpfungen (einschließlich HPV-Impfung in der Regel bis zum 18. bzw. 26. Lebensjahr) sind vollständige Kassenleistungen.'
  },
  {
    id: 'hormone',
    number: '09',
    category: 'schwerpunkt',
    categoryLabel: 'Schwerpunkt',
    title: 'Hormonsprechstunde',
    subtitle: 'Präzise Diagnostik & einfühlsame Therapie hormoneller Dysbalancen',
    badge: 'Schwerpunkt · Hormonelle Balance',
    image: `${import.meta.env.BASE_URL}assets/leistungen/hormonsprechstunde.jpg`,
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
    number: '10',
    category: 'schwerpunkt',
    categoryLabel: 'Schwerpunkt',
    title: 'Menopausensprechstunde',
    subtitle: 'Individuelle, moderne Begleitung durch die Wechseljahre',
    badge: 'Schwerpunkt · Wechseljahresbegleitung',
    image: `${import.meta.env.BASE_URL}assets/leistungen/menopausensprechstunde.jpg`,
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
    id: 'ernaehrung',
    number: '11',
    category: 'schwerpunkt',
    categoryLabel: 'Schwerpunkt',
    title: 'Ernährungsmedizin',
    subtitle: 'Wissenschaftlich fundierte Ernährungstherapie & Vitalstoffberatung',
    badge: 'Schwerpunkt · Ganzheitliche Vitalität',
    image: `${import.meta.env.BASE_URL}assets/leistungen/ernaehrungsmedizin.jpg`,
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
    id: 'betterpelvi',
    number: '12',
    category: 'schwerpunkt',
    categoryLabel: 'Schwerpunkt',
    title: 'BetterPelvi- Therapie',
    subtitle: 'Innovative Beckenbodentherapie mit Magnetstimulation für Sie & Ihn',
    badge: 'Schwerpunkt · Beckenbodengesundheit',
    image: `${import.meta.env.BASE_URL}assets/leistungen/betterpelvi-therapie.jpg`,
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
    number: '13',
    category: 'schwerpunkt',
    categoryLabel: 'Schwerpunkt',
    title: 'Wahlleistungen (IGeL)',
    subtitle: 'Sinnvolle individuelle Zusatzuntersuchungen für maximale Sicherheit',
    badge: 'Schwerpunkt · Individuelle Vorsorge',
    image: `${import.meta.env.BASE_URL}assets/leistungen/wahlleistungen-igel.jpg`,
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
  const [activeFilter, setActiveFilter] = useState<'alle' | 'schwerpunkt' | 'gynaekologie'>('alle');
  const [selectedItem, setSelectedItem] = useState<LeistungItem | null>(null);

  const filteredItems = LEISTUNGEN_DATA.filter(item => {
    if (activeFilter === 'schwerpunkt') return item.category === 'schwerpunkt';
    if (activeFilter === 'gynaekologie') return item.category === 'gynaekologie';
    return true;
  });

  const currentModalIndex = selectedItem 
    ? filteredItems.findIndex(i => i.id === selectedItem.id) 
    : -1;

  const handlePrevModal = () => {
    if (currentModalIndex === -1 || filteredItems.length === 0) return;
    const prevIndex = currentModalIndex === 0 ? filteredItems.length - 1 : currentModalIndex - 1;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNextModal = () => {
    if (currentModalIndex === -1 || filteredItems.length === 0) return;
    const nextIndex = (currentModalIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevModal();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextModal();
      } else if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentModalIndex, filteredItems]);

  useEffect(() => {
    const handleOpenService = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const targetId = customEvent.detail;
      const found = LEISTUNGEN_DATA.find((item) => item.id === targetId);
      if (found) {
        setSelectedItem(found);
      }
    };

    window.addEventListener('open-service', handleOpenService);
    return () => window.removeEventListener('open-service', handleOpenService);
  }, []);

  return (
    <section id="leistungen" className="relative overflow-hidden py-16 sm:py-24 border-b border-[#F0E6E8] bg-[#FAF5F6]/40 scroll-mt-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-700">
            <Stethoscope className="h-3.5 w-3.5" />
            <span>Medizinisches Angebot</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl lg:text-4xl">
            Leistungen
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C4A4F] leading-relaxed">
            Vorsorge, Begleitung und moderne Spezialtherapien: Wir verbinden fundierte Schulmedizin mit ganzheitlicher Zuwendung für Frauen in allen Lebensphasen.
          </p>
        </div>

        {/* Filter Tabs: Clean, simplified 3-button filter */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
          <button
            type="button"
            onClick={() => setActiveFilter('alle')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'alle'
                ? 'bg-pink-700 text-white shadow-xs'
                : 'bg-white text-[#5C4A4F] border border-[#F0E6E8] hover:border-pink-300'
            }`}
          >
            Alle Leistungen ({LEISTUNGEN_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('schwerpunkt')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'schwerpunkt'
                ? 'bg-pink-700 text-white shadow-xs'
                : 'bg-white text-[#5C4A4F] border border-[#F0E6E8] hover:border-pink-300'
            }`}
          >
            Schwerpunkte & Spezialtherapien (6)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('gynaekologie')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'gynaekologie'
                ? 'bg-pink-700 text-white shadow-xs'
                : 'bg-white text-[#5C4A4F] border border-[#F0E6E8] hover:border-pink-300'
            }`}
          >
            Gynäkologische Versorgung & Vorsorge (7)
          </button>
        </div>

        {/* Clean Responsive Service Cards Grid (3 cols on lg, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F0E6E8] bg-white p-5 sm:p-6 text-left shadow-2xs transition-all duration-300 hover:border-[#E8D2D7] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#FAF5F6] border border-[#F0E6E8]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const imgSrc = item.image;
                      if (imgSrc && !target.src.includes('public/')) {
                        const rel = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
                        target.src = `./public/${rel}`;
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#2B2326] group-hover:text-pink-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-pink-700">
                    {item.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#5C4A4F] leading-relaxed line-clamp-3">
                    {item.teaser}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5 border-t border-[#F0E6E8] pt-3">
                    {item.keyHighlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4D3F43]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-5 pt-3 border-t border-[#F0E6E8] flex items-center justify-between">
                <span className="text-xs font-bold text-pink-700 group-hover:underline flex items-center gap-1">
                  <span>Details ansehen</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Comprehensive Leistung Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 text-left"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Desktop Floating Prev/Next Buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevModal();
            }}
            className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2B2326] shadow-xl hover:bg-white hover:text-pink-700 hover:scale-110 active:scale-95 transition-all border border-[#E8D2D7] cursor-pointer"
            aria-label="Vorherige Leistung"
            title="Vorherige Leistung (Pfeiltaste links)"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNextModal();
            }}
            className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#2B2326] shadow-xl hover:bg-white hover:text-pink-700 hover:scale-110 active:scale-95 transition-all border border-[#E8D2D7] cursor-pointer"
            aria-label="Nächste Leistung"
            title="Nächste Leistung (Pfeiltaste rechts)"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-[#F0E6E8] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="relative bg-gradient-to-r from-[#FAF5F6] via-white to-[#FCF8F9] border-b border-[#F0E6E8] p-3.5 sm:p-7 shrink-0">
              {/* Modal Navigation & Close Controls */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1 sm:gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevModal}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 hover:text-pink-700 hover:bg-white shadow-xs border border-[#E8D2D7] transition-all cursor-pointer"
                  aria-label="Vorherige Leistung"
                  title="Vorherige Leistung (Pfeiltaste links)"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextModal}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 hover:text-pink-700 hover:bg-white shadow-xs border border-[#E8D2D7] transition-all cursor-pointer"
                  aria-label="Nächste Leistung"
                  title="Nächste Leistung (Pfeiltaste rechts)"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-neutral-500 hover:text-[#2B2326] hover:bg-white shadow-xs border border-[#E8D2D7] transition-all cursor-pointer ml-0.5 sm:ml-1"
                  aria-label="Schließen"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              <div className="flex flex-row items-center gap-3.5 sm:gap-4 pr-24 sm:pr-28">
                <div className="h-14 w-20 sm:h-20 sm:w-32 rounded-xl overflow-hidden border border-[#E8D2D7] bg-white shrink-0 shadow-2xs">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-2xl font-bold text-[#2B2326] truncate sm:whitespace-normal">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#5C4A4F] mt-0.5 line-clamp-1 sm:line-clamp-none">
                    {selectedItem.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
              
              {/* Lead Quote */}
              <div className="rounded-2xl border border-[#F0E6E8] bg-[#FAF5F6] p-4 text-xs sm:text-sm italic text-[#4D3F43] leading-relaxed font-medium">
                {selectedItem.leadQuote}
              </div>

              {/* In-Depth Text Paragraphs from official practice page */}
              <div className="space-y-3 text-xs sm:text-sm text-[#4D3F43] leading-relaxed">
                <h4 className="font-bold text-[#2B2326] text-sm flex items-center gap-1.5">
                  <HeartHandshake className="h-4 w-4 text-pink-700" />
                  <span>Medizinisches Konzept & Betreuung in unserer Praxis</span>
                </h4>
                {selectedItem.detailedText.map((p, idx) => (
                  <p key={idx} className="bg-white p-3.5 rounded-xl border border-[#F0E6E8] shadow-2xs">
                    {p}
                  </p>
                ))}
              </div>

              {/* Clinical Focus Categories */}
              <div className="space-y-4 pt-2">
                <h4 className="font-bold text-[#2B2326] text-sm flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-pink-700" />
                  <span>Behandlungsspektrum & Schwerpunkte</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedItem.clinicalFocus.map((focusGroup, idx) => (
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
                  <span>{selectedItem.practiceAdvantage}</span>
                </div>
              </div>

              {/* Cost & Insurance hint */}
              {selectedItem.costNote && (
                <div className="rounded-xl border border-[#F0E6E8] bg-[#FAF5F6] p-4 text-xs text-[#735F64] leading-relaxed">
                  <strong className="text-[#2B2326] block font-semibold mb-1">Abrechnung & Krankenkassen:</strong>
                  <p>{selectedItem.costNote}</p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Discreet corner up arrow */}
      <SectionBackToTop />
    </section>
  );
}
