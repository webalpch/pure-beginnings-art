export interface BlogArticle {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  excerpt: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "h2" | "h3" | "p" | "ul" | "tip";
  text?: string;
  items?: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "visiter-angkor-wat-guide-pratique",
    title: "Visiter Angkor Wat : le guide pratique complet pour un voyage réussi",
    metaDescription:
      "Tout ce qu'il faut savoir pour visiter Angkor Wat : horaires, billets, meilleure saison, lever de soleil, astuces pour éviter les foules. Guide pratique par des experts francophones.",
    date: "2025-03-15",
    readTime: "8 min",
    category: "Conseils voyage",
    coverImage: "/lovable-uploads/angkor-wat-approach.jpg",
    excerpt:
      "Angkor Wat est l'un des sites archéologiques les plus impressionnants du monde. Mais comment le visiter sans se perdre dans les foules ? Voici tout ce qu'il faut savoir.",
    content: [
      {
        type: "p",
        text: "Le complexe d'Angkor Wat, classé au patrimoine mondial de l'UNESCO, attire chaque année des millions de visiteurs venus du monde entier. Construit au XIIe siècle sous le règne du roi Suryavarman II, ce temple hindouiste devenu bouddhiste est le plus grand monument religieux du monde. Mais visiter Angkor Wat demande une bonne préparation pour en profiter pleinement.",
      },
      {
        type: "h2",
        text: "Quand visiter Angkor Wat ?",
      },
      {
        type: "p",
        text: "La meilleure période pour visiter Angkor Wat s'étend de novembre à mars, pendant la saison sèche. Les températures sont plus clémentes (25–30°C) et les risques de pluie sont faibles. Évitez les mois de juillet et août, où les pluies tropicales peuvent rendre les allées glissantes et la chaleur étouffante.",
      },
      {
        type: "tip",
        text: "Conseil de guide : Le lever du soleil sur Angkor Wat (entre 5h30 et 6h00) est un moment magique. Prévoyez d'arriver avant 5h pour trouver une bonne place devant les bassins réflexifs. Un supplément de 25€ est prévu pour cette option avec nos guides.",
      },
      {
        type: "h2",
        text: "Comment acheter les billets d'entrée ?",
      },
      {
        type: "p",
        text: "Les billets s'achètent au guichet officiel de la Autorité pour la Protection et la Gestion d'Angkor (APSARA), situé sur la route d'accès au parc. Les tarifs en 2025 sont les suivants :",
      },
      {
        type: "ul",
        items: [
          "Pass 1 jour : 37 USD par personne",
          "Pass 3 jours : 62 USD par personne (valable sur 10 jours)",
          "Pass 7 jours : 72 USD par personne (valable sur 1 mois)",
          "Gratuit pour les enfants de moins de 12 ans",
        ],
      },
      {
        type: "p",
        text: "Le pass 3 jours est le plus recommandé pour les voyageurs qui souhaitent explorer les temples principaux sans se précipiter. Notez que les billets ne sont pas vendus à l'entrée des temples eux-mêmes — pensez à les acheter la veille pour le lever de soleil.",
      },
      {
        type: "h2",
        text: "Quels temples faut-il absolument voir ?",
      },
      {
        type: "ul",
        items: [
          "Angkor Wat : le temple principal, incontournable au lever ou au coucher du soleil",
          "Angkor Thom : la grande cité royale avec le Bayon et ses 216 visages sculptés",
          "Ta Prohm : le temple envahi par les racines d'arbres géants (temple de Lara Croft)",
          "Preah Khan : vaste complexe monastique, beaucoup moins fréquenté",
          "Banteay Srei : la citadelle des femmes en grès rose, à 25 km de Siem Reap",
        ],
      },
      {
        type: "h2",
        text: "Comment éviter les foules ?",
      },
      {
        type: "p",
        text: "La grande majorité des visiteurs arrive entre 9h et 14h. Pour éviter la foule, le secret est d'adopter la stratégie inverse : visiter les temples principaux en début de matinée (avant 8h) ou en fin d'après-midi (après 16h). Pendant les heures de pointe, dirigez-vous vers les temples moins connus du grand circuit.",
      },
      {
        type: "tip",
        text: "Nos guides connaissent les entrées secondaires et les angles de vue que les touristes ne trouvent jamais seuls. L'entrée Est d'Angkor Wat, par exemple, permet une visite sans la foule de l'entrée principale.",
      },
      {
        type: "h2",
        text: "Se déplacer avec un guide francophone",
      },
      {
        type: "p",
        text: "Visiter Angkor Wat seul est possible, mais vous passeriez à côté de l'essentiel : l'histoire, la symbolique des bas-reliefs, les anecdotes sur la vie des rois khmers. Un guide francophone certifié transforme une simple visite de monuments en une véritable immersion dans la civilisation khmère. Comptez 90€ pour une journée complète avec transport en tuk-tuk pour 1 à 3 personnes.",
      },
    ],
  },
  {
    slug: "meilleure-saison-cambodge",
    title: "Quelle est la meilleure saison pour visiter le Cambodge ?",
    metaDescription:
      "Saison sèche, saison des pluies, chaleur, moussons... Quand partir au Cambodge ? Notre guide complet mois par mois pour planifier votre voyage avec un guide francophone.",
    date: "2025-02-10",
    readTime: "6 min",
    category: "Conseils voyage",
    coverImage: "/lovable-uploads/farmer-rice-field.jpg",
    excerpt:
      "Le Cambodge se visite toute l'année, mais chaque saison a ses avantages. Voici notre guide mois par mois pour choisir la meilleure période selon vos envies.",
    content: [
      {
        type: "p",
        text: "Le Cambodge bénéficie d'un climat tropical chaud et humide, avec deux saisons bien marquées : la saison sèche (novembre à avril) et la saison des pluies (mai à octobre). Chacune offre une expérience différente — et toutes les deux ont leurs charmes.",
      },
      {
        type: "h2",
        text: "La saison sèche (novembre – avril) : la période idéale",
      },
      {
        type: "p",
        text: "C'est la période la plus populaire et la plus recommandée pour voyager au Cambodge. Les températures oscillent entre 25 et 35°C, le ciel est dégagé et les routes sont praticables partout. C'est aussi la période idéale pour visiter les temples d'Angkor et naviguer sur le lac Tonlé Sap.",
      },
      {
        type: "ul",
        items: [
          "Novembre – décembre : Températures idéales (25–28°C), peu de touristes, végétation encore verte après les pluies",
          "Janvier – février : Haute saison, temps sec et agréable. Réservez tôt !",
          "Mars – avril : Chaleur intense (jusqu'à 38°C), fêtes du Nouvel An Khmer en avril",
        ],
      },
      {
        type: "h2",
        text: "La saison des pluies (mai – octobre) : le Cambodge authentique",
      },
      {
        type: "p",
        text: "Souvent sous-estimée, la saison des pluies est en réalité une excellente période pour voyager au Cambodge — à condition de s'y préparer. Les pluies tombent généralement en fin d'après-midi sous forme d'averses courtes et intenses, laissant les matinées dégagées. Les paysages sont d'une verdure exceptionnelle et les rizières en fleur offrent des panoramas somptueux.",
      },
      {
        type: "tip",
        text: "Avantage de la saison des pluies : les prix des hébergements baissent de 30 à 50%, il y a beaucoup moins de touristes dans les temples, et la nature est au maximum de sa beauté.",
      },
      {
        type: "h2",
        text: "Tableau récapitulatif mois par mois",
      },
      {
        type: "ul",
        items: [
          "Janvier ★★★★★ : Temps idéal, haute saison, temples bondés le matin",
          "Février ★★★★★ : Excellent, légèrement moins chargé qu'en janvier",
          "Mars ★★★★ : Chaleur croissante, bonnes conditions",
          "Avril ★★★ : Très chaud, Nouvel An Khmer (fête nationale)",
          "Mai ★★★ : Début des pluies, moins de touristes, bon rapport qualité-prix",
          "Juin – Août ★★★ : Pluies régulières l'après-midi, paysages verdoyants",
          "Septembre – Octobre ★★ : Pluies plus fréquentes, certaines routes inondées",
          "Novembre ★★★★★ : Fin des pluies, nature luxuriante, idéal",
          "Décembre ★★★★★ : Meilleure période, températures parfaites",
        ],
      },
      {
        type: "h2",
        text: "Notre recommandation",
      },
      {
        type: "p",
        text: "Pour une première visite, choisissez novembre ou décembre : les temples sont moins bondés qu'en janvier-février, la végétation est encore verte après les pluies et les températures sont parfaites. Pour un budget serré, optez pour juin ou juillet — vous découvrirez un Cambodge plus authentique et moins touristique.",
      },
    ],
  },
  {
    slug: "village-flottant-tonle-sap",
    title: "Le lac Tonlé Sap et les villages flottants : que voir et comment y aller ?",
    metaDescription:
      "Découvrez le lac Tonlé Sap, le plus grand lac d'Asie du Sud-Est, et ses villages flottants. Guide pratique : comment y aller depuis Siem Reap, quoi voir, conseils de visite.",
    date: "2025-01-20",
    readTime: "7 min",
    category: "Découvertes",
    coverImage: "/lovable-uploads/fishing-boat-tonle-sap.jpg",
    excerpt:
      "Le Tonlé Sap est l'âme du Cambodge. Ce lac géant, dont la superficie quadruple pendant la saison des pluies, abrite des milliers de familles vivant sur l'eau.",
    content: [
      {
        type: "p",
        text: "Le lac Tonlé Sap est un phénomène naturel unique au monde. Pendant la saison des pluies (juin à novembre), le Mékong déverse ses eaux dans ce lac via la rivière Tonlé Sap, faisant passer sa superficie de 2 500 km² à plus de 16 000 km². Ce lac abrite plusieurs villages flottants où des milliers de Cambodgiens vivent sur l'eau depuis des générations.",
      },
      {
        type: "h2",
        text: "Les principaux villages flottants à visiter",
      },
      {
        type: "ul",
        items: [
          "Kampong Pluk : le plus authentique, à 16 km de Siem Reap. En saison sèche, les maisons reposent sur de hauts pilotis dans la forêt inondée — un spectacle unique.",
          "Kampong Khleang : le plus grand village, moins touristique et plus authentique",
          "Chong Kneas : le plus proche de Siem Reap (15 min), populaire mais plus commercial",
          "Prek Toal : réserve ornithologique exceptionnelle, idéale pour l'observation des oiseaux",
        ],
      },
      {
        type: "h2",
        text: "Comment se rendre au lac depuis Siem Reap ?",
      },
      {
        type: "p",
        text: "Depuis Siem Reap, plusieurs options s'offrent à vous. La plus recommandée est de passer par un guide privé qui organise le transport (voiture ou tuk-tuk) jusqu'au débarcadère, puis la traversée en bateau. Comptez environ une demi-journée pour Chong Kneas, ou une journée complète pour Kampong Pluk.",
      },
      {
        type: "tip",
        text: "Notre Option B (circuit 2 jours) inclut une excursion en bateau vers le village flottant de Kampong Pluk. C'est l'une des expériences les plus appréciées par nos voyageurs — un dépaysement total garanti.",
      },
      {
        type: "h2",
        text: "La vie quotidienne sur le lac",
      },
      {
        type: "p",
        text: "Les habitants du Tonlé Sap vivent essentiellement de la pêche. Le lac est l'une des zones de pêche d'eau douce les plus productives au monde. Sur l'eau, on trouve des maisons flottantes, des écoles, des pagodes et même des épiceries — toute une vie organisée sur l'eau. La visite d'un village flottant avec un guide francophone permet de comprendre cette culture unique, ses traditions et ses défis face aux changements climatiques.",
      },
      {
        type: "h2",
        text: "Conseils pratiques",
      },
      {
        type: "ul",
        items: [
          "Préférez la visite en fin d'après-midi pour la lumière et la fraîcheur",
          "Apportez de la crème solaire et un chapeau — il y a peu d'ombre sur le lac",
          "Le billet d'entrée pour le lac est d'environ 5–10 USD selon le village",
          "Respectez les habitants : demandez toujours l'autorisation avant de photographier",
          "Évitez les vendeurs trop insistants et restez avec votre guide",
        ],
      },
    ],
  },
  {
    slug: "guide-francophone-cambodge-pourquoi",
    title: "Pourquoi voyager avec un guide francophone au Cambodge ?",
    metaDescription:
      "Voyager avec un guide francophone au Cambodge change tout : temples, culture, histoire, rencontres. Découvrez pourquoi ce choix est indispensable pour vivre une expérience authentique.",
    date: "2024-12-05",
    readTime: "5 min",
    category: "Conseils voyage",
    coverImage: "/lovable-uploads/ta-prohm-tree-ruins.jpg",
    excerpt:
      "Un guide francophone certifié, c'est bien plus qu'un traducteur. C'est la clé pour comprendre la civilisation khmère, éviter les pièges touristiques et vivre des expériences inoubliables.",
    content: [
      {
        type: "p",
        text: "Beaucoup de voyageurs pensent qu'on peut se débrouiller seul au Cambodge avec un guide papier ou une application mobile. C'est possible, techniquement. Mais après 15 ans à accompagner des francophones à travers le Royaume Khmer, nous pouvons vous affirmer que voyager avec un guide local change radicalement l'expérience.",
      },
      {
        type: "h2",
        text: "1. Comprendre ce que vous voyez",
      },
      {
        type: "p",
        text: "Les temples d'Angkor sont remplis de bas-reliefs racontent des épopées mythologiques, des scènes de batailles navales, des représentations du paradis et de l'enfer bouddhiste. Sans explications, ils restent de belles pierres sculptées. Avec un guide passionné, ils deviennent une fenêtre ouverte sur 1 000 ans de civilisation khmère. Chaque visage du Bayon a une histoire. Chaque allée d'Angkor Wat suit une cosmologie précise.",
      },
      {
        type: "h2",
        text: "2. Accéder aux endroits secrets",
      },
      {
        type: "p",
        text: "Les guides locaux connaissent des angles de vue, des cours intérieures et des chemins de traverse que les touristes lambda ne trouvent jamais. L'entrée Est d'Angkor Wat évite 80% de la foule. Certains temples du grand circuit sont quasiment déserts en milieu de matinée. Ces informations, seul un guide expérimenté peut vous les donner.",
      },
      {
        type: "tip",
        text: "Nos guides Lady et La Dong connaissent Angkor comme leur poche depuis plus de 15 ans. Ils savent exactement où se placer pour le lever de soleil parfait — et où le meilleur café du quartier vous attend après.",
      },
      {
        type: "h2",
        text: "3. Des rencontres authentiques",
      },
      {
        type: "p",
        text: "Avec un guide local, vous ne visitez plus le Cambodge — vous le rencontrez. Visite d'une famille de pêcheurs sur le Tonlé Sap, déjeuner dans un restaurant local loin des zones touristiques, conversation avec des moines dans une pagode de village... Ces moments-là ne s'improvisent pas. Ils se créent avec la confiance et les relations que nos guides ont bâties avec leurs communautés.",
      },
      {
        type: "h2",
        text: "4. La sécurité et la sérénité",
      },
      {
        type: "p",
        text: "Au Cambodge, les arnaques aux touristes existent (tuk-tuk surchargés, restaurants à prix gonflés, faux guides aux temples). Avec un guide certifié par le Ministère du Tourisme, vous êtes protégé. Votre guide gère les transports, les billets, les prix et les situations imprévues — vous n'avez plus qu'à profiter.",
      },
      {
        type: "h2",
        text: "5. Un circuit 100% personnalisé",
      },
      {
        type: "p",
        text: "Contrairement aux circuits de groupe où vous suivez un programme figé avec 30 inconnus, nos tours sont entièrement privés et adaptés à vos envies. Vous préférez les temples moins connus aux sites bondés ? Vous voulez passer plus de temps dans un marché local ? Votre guide s'adapte en temps réel.",
      },
    ],
  },
];
