// Quiz Data
const quizQuestions = [
  // Leicht
  {
    id: 1,
    text: 'Was sind Zölle?',
    type: 'short-answer',
    difficulty: 'leicht',
    correctAnswer: 'Abgaben, die auf Waren erhoben werden, wenn sie über internationale Grenzen hinweg gehandelt werden'
  },
  {
    id: 2,
    text: 'Nennen Sie drei Aufgaben des Zolls.',
    type: 'short-answer',
    difficulty: 'leicht',
    correctAnswer: 'Staatseinnahmen, Sicherheit, Handel'
  },
  {
    id: 3,
    text: 'Wie hoch ist der Standard-Steuersatz für die Einfuhrumsatzsteuer (EUSt)?',
    type: 'multiple-choice',
    difficulty: 'leicht',
    options: ['7%', '18%', '19%', '21%'],
    correctAnswer: 2
  },
  {
    id: 4,
    text: 'Der Pauschalsatz für private Urlaubsmitbringsel beträgt 21%.',
    type: 'true-false',
    difficulty: 'leicht',
    options: ['Wahr', 'Falsch'],
    correctAnswer: 0
  },
  {
    id: 5,
    text: 'Wann wurden Zölle erstmals erhoben?',
    type: 'multiple-choice',
    difficulty: 'leicht',
    options: ['Im 18. Jahrhundert', 'Im Mittelalter', 'Im 20. Jahrhundert', 'In der Antike'],
    correctAnswer: 1
  },

  // Mittel
  {
    id: 6,
    text: 'Erklären Sie, wie Zölle den Handel regulieren und heimische Industrien schützen.',
    type: 'short-answer',
    difficulty: 'mittel',
    correctAnswer: 'Zölle regulieren Importe und machen ausländische Waren teurer, um heimische Industrien zu schützen'
  },
  {
    id: 7,
    text: 'Was ist der ermäßigte EUSt-Satz und für welche Waren gilt er?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: ['5% für Lebensmittel', '7% für bestimmte Waren', '10% für Medikamente', '12% für elektronische Geräte'],
    correctAnswer: 1
  },
  {
    id: 8,
    text: 'Welche Art von grenzüberschreitender Kriminalität bekämpft der Zoll?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: ['Nur Drogenschmuggel', 'Drogenschmuggel, Waffenschmuggel und Schwarzarbeit', 'Nur Waffenschmuggel', 'Nur Schwarzarbeit'],
    correctAnswer: 1
  },
  {
    id: 9,
    text: 'Wie regelt die EU ihre Zollpolitik?',
    type: 'short-answer',
    difficulty: 'mittel',
    correctAnswer: 'Durch gemeinsame Handelspolitik mit einheitlichem Zolltarif für alle Mitgliedsstaaten'
  },
  {
    id: 10,
    text: 'Zölle werden nur zur Generierung von Staatseinnahmen verwendet.',
    type: 'true-false',
    difficulty: 'mittel',
    options: ['Wahr', 'Falsch'],
    correctAnswer: 1
  },
  {
    id: 11,
    text: 'Der Zoll bekämpft auch grenzüberschreitende Kriminalität wie Drogenschmuggel.',
    type: 'true-false',
    difficulty: 'mittel',
    options: ['Wahr', 'Falsch'],
    correctAnswer: 0
  },
  {
    id: 12,
    text: 'Welche Auswirkungen haben Zölle auf Verbraucherpreise?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: ['Zölle senken immer die Preise', 'Zölle können zu höheren Verbraucherpreisen führen', 'Zölle beeinflussen niemals die Preise', 'Zölle halbieren die Preise'],
    correctAnswer: 1
  },

  // Schwer
  {
    id: 13,
    text: 'Vergleichen Sie den Standard-EUSt-Satz (19%) mit dem ermäßigten Satz (7%) und erklären Sie den Unterschied in der Anwendung.',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Der Standard-Satz (19%) gilt für die meisten Waren, der ermäßigte Satz (7%) für bestimmte Waren'
  },
  {
    id: 14,
    text: 'Wie hoch war der Sonderzoll auf bestimmte US-Fahrzeugteile und bis wann galt dieser Satz?',
    type: 'multiple-choice',
    difficulty: 'schwer',
    options: ['18% bis Januar 2026', '29.9% bis August 2025', '25% bis Dezember 2025', '35% bis Juni 2026'],
    correctAnswer: 1
  },
  {
    id: 15,
    text: 'Erklären Sie, wie Zolleinnahmen zur Finanzierung öffentlicher Dienste beitragen.',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Zolleinnahmen sichern dem Bund Einnahmen für Bildung, Infrastruktur und Sozialsysteme'
  },
  {
    id: 16,
    text: 'Welche Rolle spielen Zölle auf Technologieprodukte in der modernen Wirtschaft?',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Sie beeinflussen die Kosten für Verbraucher und die Wettbewerbsfähigkeit von Herstellern in verschiedenen Ländern'
  },
  {
    id: 17,
    text: 'Wie berücksichtigt die moderne Zollpolitik Nachhaltigkeit?',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Zölle werden verwendet, um Produkte mit hohen Umweltstandards zu bevorzugen oder Länder mit schlechteren Umweltpraktiken zu benachteiligen'
  },
  {
    id: 18,
    text: 'Welche der folgenden Aussagen beschreibt am besten die Beziehung zwischen Zöllen und internationalen Handelsnegotiationen?',
    type: 'multiple-choice',
    difficulty: 'schwer',
    options: [
      'Zölle spielen keine Rolle in Handelsnegotiationen',
      'Zölle spielen eine wichtige Rolle in internationalen Handelsnegotiationen zwischen Ländern und Handelsblöcken',
      'Zölle werden nur zwischen Nachbarländern verhandelt',
      'Zölle werden automatisch von der EU festgelegt'
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    text: 'Welche Institution verhandelt Handelsabkommen und setzt Zollsätze in der EU fest?',
    type: 'multiple-choice',
    difficulty: 'schwer',
    options: ['Die Europäische Zentralbank', 'Das Europäische Parlament', 'Die Europäische Kommission', 'Der Europäische Rat'],
    correctAnswer: 2
  },
  {
    id: 20,
    text: 'Wie haben sich Zollsysteme im Laufe der Zeit entwickelt?',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Sie haben sich entwickelt und wurden standardisiert, um fairen Handel zu fördern'
  },

  // Neue Fragen - Handelsabkommen
  {
    id: 21,
    text: 'Was sind Handelsabkommen?',
    type: 'multiple-choice',
    difficulty: 'leicht',
    options: [
      'Privatverträge zwischen Unternehmen',
      'Völkerrechtliche Verträge zwischen Staaten zur Erleichterung des internationalen Handels',
      'Geheime Absprachen zwischen Ländern',
      'Verträge über die Preisgestaltung von Waren'
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    text: 'Welche Ziele verfolgen typischerweise Handelsabkommen?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      'Nur Zollabbau',
      'Abbau von Zöllen, Vereinfachung von Grenzformalitäten, Schutz von Investitionen und wirtschaftliche Zusammenarbeit',
      'Nur Preisregulierung',
      'Nur Arbeitsplatzschutz'
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    text: 'Nennen Sie ein Beispiel für ein multilaterales Handelsabkommen.',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      'Bilaterales Abkommen USA-Kanada',
      'EU-Binnenmarkt oder EFTA',
      'Vertrag zwischen zwei Personen',
      'Unternehmenspakt'
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: 'Was ist der Unterschied zwischen bilateralen und multilateralen Handelsabkommen?',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Bilaterale Abkommen sind zwischen zwei Staaten, multilaterale zwischen vielen Staaten'
  },
  {
    id: 25,
    text: 'CETA ist ein Handelsabkommen zwischen welchen Partnern?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      'EU und USA',
      'EU und Kanada',
      'USA und Kanada',
      'EU und Mexiko'
    ],
    correctAnswer: 1
  },

  // Neue Fragen - Trumps Zölle
  {
    id: 26,
    text: 'Welchen wirtschaftlichen Ansatz verfolgte Trump hauptsächlich?',
    type: 'multiple-choice',
    difficulty: 'leicht',
    options: [
      'Freihandel',
      'Protektionismus',
      'Kommunismus',
      'Anarchie'
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    text: 'Auf welche Länder richteten sich Trumps Zölle hauptsächlich?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      'Nur auf europäische Länder',
      'China und die EU',
      'Nur auf Südamerika',
      'Nur auf Afrika'
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    text: 'Wie hoch war der Zoll, den Trump auf Stahlimporte erhob?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      '10%',
      '15%',
      '25%',
      '35%'
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    text: 'Welche negative Folge hatten Trumps Zölle für amerikanische Exportunternehmen?',
    type: 'short-answer',
    difficulty: 'mittel',
    correctAnswer: 'Gegenzölle anderer Länder belasteten amerikanische Exporteure, besonders Landwirte'
  },
  {
    id: 30,
    text: 'Erklären Sie, warum Ökonomen Trumps Zölle überwiegend kritisieren.',
    type: 'short-answer',
    difficulty: 'schwer',
    correctAnswer: 'Sie erzeugten langfristig wirtschaftliche Nachteile durch Handelskonflikte, gestörte Lieferketten und Verbraucherpreiserhöhungen'
  },
  {
    id: 31,
    text: 'Welche positiven Effekte versuchte Trump mit seinen Zöllen zu erreichen?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      'Globalisierung vorantreiben',
      'Schutz von US-Industrien, Reduzierung des Handelsdefizits und Druck auf China',
      'Preise für Verbraucher senken',
      'Internationale Zusammenarbeit stärken'
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    text: 'Wie reagierten andere Länder auf Trumps Zölle?',
    type: 'multiple-choice',
    difficulty: 'mittel',
    options: [
      'Sie akzeptierten die Zölle ohne Gegenmaßnahmen',
      'Sie erhoben Gegenzölle und verschärften Handelskonflikte',
      'Sie forcierten mehr Freihandel',
      'Sie unternahmen nichts'
    ],
    correctAnswer: 1
  }
];

// Info Card Data
const infoData = [
  {
    title: "Freihandel",
    content: "Freihandel beschreibt ein Wirtschaftssystem, in dem der internationale Handel möglichst ohne staatliche Eingriffe stattfindet. Das bedeutet: keine oder nur sehr geringe Zölle, keine Importbeschränkungen und keine Handelshemmnisse.\nZiel ist es, den Austausch von Waren und Dienstleistungen zu erleichtern, Wettbewerb zu fördern und die Preise für Verbraucher zu senken.\nFreihandel basiert auf der Idee, dass Länder sich auf die Produktion der Güter spezialisieren, die sie besonders effizient herstellen können.",
    advantages: [
      "größere Produktvielfalt",
      "niedrigere Preise",
      "effizientere Produktion durch Spezialisierung",
      "wirtschaftliches Wachstum durch offenen Handel"
    ],
    advantagesLabel: "Typische Vorteile",
    examples: [
      "EU-Binnenmarkt",
      "USMCA (USA–Mexiko–Kanada)",
      "EFTA (Europäische Freihandelsassoziation)"
    ],
    examplesLabel: "Beispiele"
  },
  {
    title: "Protektionismus",
    content: "Protektionismus ist das Gegenteil von Freihandel. Staaten greifen aktiv in den Handel ein, um die eigene Wirtschaft zu schützen.\nDas geschieht durch Maßnahmen wie Zölle, Importverbote, Subventionen oder strenge Produktstandards.",
    advantages: [
      "Schutz heimischer Unternehmen vor ausländischer Konkurrenz",
      "Sicherung von Arbeitsplätzen",
      "Aufbau neuer Industrien",
      "Schutz strategisch wichtiger Branchen"
    ],
    advantagesLabel: "Ziele des Protektionismus",
    examples: [
      "höhere Preise für Verbraucher",
      "weniger Auswahl",
      "geringerer Wettbewerb",
      "mögliche Handelskonflikte mit anderen Ländern"
    ],
    examplesLabel: "Kritikpunkte"
  },
  {
    title: "Folgen von Zöllen",
    content: "Zölle sind eine der wichtigsten protektionistischen Maßnahmen. Sie wirken sich auf verschiedene Bereiche aus.",
    advantages: [
      "heimische Unternehmen werden vor billigen Importen geschützt",
      "Staat erzielt zusätzliche Einnahmen",
      "Aufbau neuer Industrien wird erleichtert"
    ],
    advantagesLabel: "Positive Folgen (aus Sicht des Inlandes)",
    examples: [
      "höhere Preise für Verbraucher",
      "geringere Produktvielfalt",
      "ausländische Unternehmen können mit Gegenzöllen reagieren → Handelskonflikte",
      "ineffiziente Unternehmen werden künstlich am Leben gehalten",
      "internationale Lieferketten werden gestört"
    ],
    examplesLabel: "Negative Folgen"
  },
  {
    title: "Verschiedene Zollarten",
    content: "Zölle treten in unterschiedlichen Formen auf. Die wichtigsten Arten sind:",
    advantages: [
      "Wertzoll (Ad-Valorem-Zoll): Der Zoll wird als Prozentsatz des Warenwerts berechnet",
      "Spezifischer Zoll: Ein fester Betrag pro Mengeneinheit",
      "Mischzoll: Kombination aus Wertzoll und spezifischem Zoll"
    ],
    advantagesLabel: "Zollarten nach Berechnung",
    examples: [
      "Schutzzoll: Dient dem Schutz der heimischen Wirtschaft vor ausländischer Konkurrenz",
      "Fiskalzoll: Ziel ist die Einnahmeerhöhung für den Staat",
      "Antidumpingzoll: Wird erhoben, wenn ein Land Produkte künstlich billig exportiert"
    ],
    examplesLabel: "Zollarten nach Zweck"
  },
  {
    title: "Was sind Handelsabkommen?",
    content: "Handelsabkommen sind völkerrechtliche Verträge zwischen zwei oder mehreren Staaten, die den internationalen Handel erleichtern sollen. Sie legen fest, wie Waren und Dienstleistungen zwischen den beteiligten Ländern gehandelt werden dürfen.\nHandelsabkommen können bilateral (zwischen zwei Staaten) oder multilateral (zwischen vielen Staaten) sein.",
    advantages: [
      "Abbau von Zöllen",
      "Vereinfachung von Grenzformalitäten",
      "Schutz von Investitionen",
      "Regelungen zu Produktstandards",
      "Stärkung wirtschaftlicher Zusammenarbeit"
    ],
    advantagesLabel: "Typische Ziele",
    examples: [
      "EU-Binnenmarkt – eines der umfassendsten Freihandels- und Wirtschaftsabkommen weltweit",
      "USMCA – Handelsabkommen zwischen USA, Mexiko und Kanada",
      "CETA – Abkommen zwischen der EU und Kanada",
      "EFTA – Europäische Freihandelsassoziation"
    ],
    examplesLabel: "Beispiele"
  },
  {
    title: "Trumps Zölle – Hintergrund und Auswirkungen",
    content: "Während seiner Amtszeit setzte Donald Trump stark auf Protektionismus, also den Schutz der eigenen Wirtschaft durch staatliche Eingriffe. Ein zentrales Mittel waren Zölle, besonders gegenüber China und der EU.",
    advantages: [
      "Schutz amerikanischer Industrien (z. B. Stahl- und Aluminiumproduktion)",
      "Reduzierung des Handelsdefizits",
      "Druck auf China, um unfaire Handelspraktiken zu ändern",
      "Stärkung der nationalen Sicherheit"
    ],
    advantagesLabel: "Begründung für Zölle",
    examples: [
      "25 % Zoll auf Stahlimporte",
      "10 % Zoll auf Aluminiumimporte",
      "Zusätzliche Strafzölle auf chinesische Waren im Wert von hunderten Milliarden Dollar",
      "Gegenzölle anderer Länder folgten (z. B. von China und der EU)"
    ],
    examplesLabel: "Eingeführte Zölle"
  }
];

// Sources Data
const sources = [
  {
    title: "Wikipedia - Handelsabkommen",
    url: "https://de.wikipedia.org/wiki/Handelsabkommen",
    category: "Allgemein"
  },
  {
    title: "Gabler Wirtschaftslexikon - Handelsabkommen",
    url: "https://wirtschaftslexikon.gabler.de/definition/handelsabkommen-36738",
    category: "Allgemein"
  },
  {
    title: "Grenzlotsen - Handelsabkommen",
    url: "https://www.grenzlotsen.de/handelsabkommen",
    category: "Allgemein"
  },
  {
    title: "EFV - Handelsabkommen",
    url: "https://www.efv.admin.ch/efv/de/home/themen/wirtschaftspolitik/handelsabkommen.html",
    category: "Allgemein"
  },
  {
    title: "BPB - Handelsabkommen Lexikon",
    url: "https://www.bpb.de/themen/wirtschaft/lexikon-der-wirtschaft/200883/Handelsabkommen",
    category: "Allgemein"
  },
  {
    title: "ZDF - Trump Strafzölle",
    url: "https://www.zdf.de/nachrichten/wirtschaft/trump-strafzoelle-100.html",
    category: "Trump"
  },
  {
    title: "Bloomberg - Trump Tariffs Steel Aluminum",
    url: "https://www.bloomberg.com/news/articles/2018-03-08/trump-tariffs-steel-aluminum",
    category: "Trump"
  },
  {
    title: "BPB - Handelspolitik USA",
    url: "https://www.bpb.de/themen/wirtschaft/weltwirtschaft/handelspolitik-usa/",
    category: "Trump"
  },
  {
    title: "Handelsblatt - Handelsstreit Trump",
    url: "https://www.handelsblatt.com/politik/international/handelsstreit-trumps-strafzoelle-und-die-folgen/",
    category: "Trump"
  },
  {
    title: "DIW - Trump Zölle und Weltwirtschaft",
    url: "https://www.diw.de/de/diw_01.c.590566.de/themen_nachrichten/trumps_zoelle_belasten_die_weltwirtscha",
    category: "Trump"
  }
];

// Sticky Notes Data for Homepage
const stickyNotesData = [
  // Row 1
  {
    header: "Was sind Zölle?",
    text: "Zölle sind Abgaben, die auf Waren erhoben werden, wenn sie über internationale Grenzen hinweg gehandelt werden. Sie dienen dazu, den Handel zu regulieren, heimische Industrien zu schützen und Einnahmen für den Staat zu generieren.",
    x: 50,
    y: 50,
    rotation: -5,
    width: 320,
    height: 300,
    colors: ["#5B0311", "#647981"]
  },
  {
    header: "Diagramm",
    text: "EU-Importe ab August 2025: 18%\nEinfuhrumsatzsteuer (EUSt) Standard: 19%\nEUSt ermäßigter Satz: 7%\nPauschalsatz für private Urlaubsmitbringsel: 21%\nSonderzoll auf bestimmte US-Fahrzeugteile (bis August 2025): 29.9%",
    x: 450,
    y: 0,
    rotation: 0,
    width: 500,
    height: 500,
    colors: ["#5B0311", "#647981"]
  },
  {
    header: "Aufgaben vom Zoll",
    text: "Staatseinnahmen: Der Zoll sichert dem Bund Einnahmen für Bildung, Infrastruktur und Sozialsysteme.\n\nSicherheit: Er bekämpft grenzüberschreitende Kriminalität wie Drogenschmuggel, Waffenschmuggel und Schwarzarbeit.\n\nHandel: Er gewährleistet einen reibungslosen und sicheren Warenverkehr.",
    x: 1100,
    y: 30,
    rotation: 5,
    width: 320,
    height: 450,
    colors: ["#5B0311", "#647981"]
  },
  // Row 2
  {
    header: "Geschichte der Zölle",
    text: "Zölle gibt es schon seit Jahrhunderten. Bereits im Mittelalter wurden Handelssteuern auf Waren erhoben, die internationale Grenzen überschritten. Im Laufe der Zeit haben sich Zollsysteme entwickelt und wurden standardisiert, um fairen Handel zu fördern.",
    x: 100,
    y: 50,
    rotation: -3,
    width: 300,
    height: 280,
    colors: ["#5B0311", "#647981"],
    row: 2
  },
  {
    header: "Zölle in der EU",
    text: "Die EU regelt Zölle durch gemeinsame Handelspolitik. Der Zolltarif ist einheitlich für alle Mitgliedsstaaten. Die Europäische Kommission verhandelt Handelsabkommen und setzt Zollsätze fest, um die Wirtschaft zu schützen und Wachstum zu fördern.",
    x: 550,
    y: 100,
    rotation: -2,
    width: 340,
    height: 300,
    colors: ["#5B0311", "#647981"],
    row: 2
  },
  {
    header: "Auswirkungen von Zöllen",
    text: "Zölle beeinflussen Preise von Importwaren, können Arbeitsplätze im Inland schützen, aber auch zu höheren Verbraucherpreisen führen. Sie spielen eine wichtige Rolle in internationalen Handelsnegotiationen zwischen Ländern und Handelsblöcken.",
    x: 1100,
    y: 60,
    rotation: 4,
    width: 320,
    height: 320,
    colors: ["#5B0311", "#647981"],
    row: 2
  },
  // Row 3
  {
    header: "Technologie & Zölle",
    text: "In der modernen Wirtschaft spielen Zölle auf Technologieprodukte eine große Rolle. Diese können die Kosten für Verbraucher erhöhen, beeinflussen aber auch die Wettbewerbsfähigkeit von Herstellern in verschiedenen Ländern.",
    x: 200,
    y: 50,
    rotation: 3,
    width: 300,
    height: 280,
    colors: ["#5B0311", "#647981"],
    row: 3
  },
  {
    header: "Nachhaltigkeit & Zölle",
    text: "Moderne Zollpolitik berücksichtigt zunehmend Nachhaltigkeit. Zölle können verwendet werden, um Produkte mit hohen Umweltstandards zu bevorzugen oder um Länder mit schlechteren Umweltpraktiken zu benachteiligen.",
    x: 700,
    y: 50,
    rotation: -4,
    width: 320,
    height: 300,
    colors: ["#5B0311", "#647981"],
    row: 3
  }
];
