import type { Locale } from "./config"

type Entry = { title: string; description: string }

export type Dictionary = {
  meta: {
    title: string
    description: string
    ogAlt: string
  }
  nav: {
    work: string
    experience: string
    stack: string
    about: string
    contact: string
    switchLanguage: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    role: string
    headline: string
    intro: string
    ctaWork: string
    ctaContact: string
    ctaCv: string
    availability: string
    imageAlt: string
    scroll: string
  }
  focus: {
    eyebrow: string
    title: string
    lead: string
    cards: Record<"frontend" | "ai", { title: string; body: string; points: string[] }>
    domainLabel: string
    domainTitle: string
    domainBody: string
    aside: string
  }
  projects: {
    eyebrow: string
    title: string
    lead: string
    otherTitle: string
    otherLead: string
    live: string
    code: string
    showAll: string
    showLess: string
    items: Record<string, Entry>
  }
  experience: {
    eyebrow: string
    title: string
    lead: string
    current: string
    items: Record<string, { role: string; period: string; description: string }>
  }
  skills: {
    eyebrow: string
    title: string
    lead: string
    core: string
    supporting: string
    groups: Record<string, string>
  }
  reference: {
    eyebrow: string
    title: string
    quote: string
    author: string
    authorRole: string
    meta: string
    cta: string
    translated: string | null
  }
  background: {
    eyebrow: string
    title: string
    lead: string
    education: string
    community: string
    certifications: string
    languages: string
    educationItems: Record<string, string>
    communityItems: Record<string, string>
    certificationItems: Record<string, string>
    languageItems: Record<string, string>
    levels: Record<string, string>
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    emailLabel: string
    locationLabel: string
    location: string
    followLabel: string
    formTitle: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
  }
  footer: {
    rights: string
    built: string
  }
}

const en: Dictionary = {
  meta: {
    title: "Dorsane Zertit — Frontend Developer & AI Engineer",
    description:
      "Frontend developer specialising in React and Next.js, and AI engineer for health and life sciences. MSc Biotechnology student. I ship production interfaces and the machine learning behind them — Badis AI, Twin Covia.",
    ogAlt: "Dorsane Zertit — Frontend Developer & AI Engineer",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    about: "About",
    contact: "Contact",
    switchLanguage: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    role: "Frontend Developer & AI Engineer · Health & life sciences",
    headline: "I build fast, accessible interfaces — and the AI behind them.",
    intro:
      "For the past year I shipped production frontend and AI features at Badis AI, and I'm building Twin Covia, a deep-learning platform for precision oncology. I'm also an MSc Biotechnology student, which is why my work keeps landing in health and science products. If you need someone who can design an interface, build it properly in React, and wire it to a real model — that's the job I do.",
    ctaWork: "See selected work",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
    availability: "Open to frontend & AI roles — remote or on-site",
    imageAlt: "Portrait of Dorsane Zertit",
    scroll: "Scroll",
  },
  focus: {
    eyebrow: "Focus",
    title: "What I do",
    lead: "Two things, done well, rather than ten done adequately.",
    cards: {
      frontend: {
        title: "Frontend engineering",
        body: "Production React and Next.js. I design in Figma and ship the code myself, so nothing gets lost between the mockup and the browser.",
        points: [
          "Component architecture & design systems",
          "TypeScript, Tailwind CSS, Framer Motion",
          "Accessibility (WCAG) and Core Web Vitals",
          "Responsive layouts down to 320px",
        ],
      },
      ai: {
        title: "AI engineering",
        body: "Models that end up in front of real users, not just in a notebook — training, serving, and the interface that makes the output readable.",
        points: [
          "Model training & evaluation in Python",
          "LLM and RAG pipelines",
          "FastAPI inference services",
          "Turning predictions into usable UI",
        ],
      },
    },
    domainLabel: "Domain",
    domainTitle: "Health & life sciences",
    domainBody:
      "I'm an MSc Biotechnology student, health specialisation — and that's not a side note, it's what points my engineering somewhere specific. I can read a multi-omics dataset, talk to researchers and clinicians in their own vocabulary, and design interfaces that don't overstate what a model actually predicts. Twin Covia — drug-sensitivity prediction for precision oncology — is that combination in a single product.",
    aside:
      "I also have backend experience, and I've led teams and run tech events. Useful, but not what I'm selling.",
  },
  projects: {
    eyebrow: "Work",
    title: "Selected work",
    lead: "A short list, chosen for what it shows rather than how long it is.",
    otherTitle: "Everything else",
    otherLead: "Client sites, hackathon builds and learning projects.",
    live: "Live site",
    code: "Code",
    showAll: "Show all projects",
    showLess: "Show fewer",
    items: {
      "twin-covia": {
        title: "Twin Covia — AI for precision oncology",
        description:
          "My own startup. A deep-learning platform that predicts drug sensitivity (IC50) from a molecule's SMILES string and a cancer cell line's multi-omics profile, using a Bi-Interaction neural network trained on CCLE data. I built the model, the FastAPI inference service, and the entire Next.js product: 3D molecule viewer, batch virtual screening, uncertainty estimates and training dashboards.",
      },
      "badis-ai": {
        title: "Badis AI — administrative assistant",
        description:
          "Built as Software Engineer at SARL Badis AI. A conversational assistant that walks Algerian users through administrative procedures — AADL housing, CNAS, national ID, passport. I worked on the React chat interface and the retrieval pipeline that grounds every answer in official documents.",
      },
      activmaths: {
        title: "ActivMaths — EdTech platform",
        description:
          "Interactive maths courses plus a full learning-management system. I owned the UI/UX end to end — Figma design system through to the React implementation — for both the student course platform and the progress-tracking dashboard.",
      },
      "elite-sante-dentaire": {
        title: "Elite Santé Dentaire — dental practice",
        description:
          "Site for a multidisciplinary dental practice in Constantine: treatments, documented before/after cases and online booking. Dark editorial layout, bilingual French/Arabic.",
      },
      fynliq: {
        title: "Fynliq — student finance landing page",
        description:
          "Landing page for a product that reads a student's own aid award and shows what it actually leaves them. React, on a hand-written token-based design system.",
      },
      "copro-performance": {
        title: "Copro Performance Conseil",
        description:
          "Site for an independent French condominium-advisory firm. A hand-built multi-page static site that routes three visitor profiles to their own track.",
      },
      techwaves: {
        title: "TechWaves",
        description:
          "Website for the TechWaves student tech club at ENSB. Motion-led design, fully responsive, built in Next.js.",
      },
      biovatech: {
        title: "BiovaTech Innovation Days",
        description:
          "Site for the biotech hackathon I founded — 72 hours, three tracks, from brief to production in a week.",
      },
      fakenews: {
        title: "Fake news detector",
        description:
          "Hackathon project: an NLP classifier that scores the credibility of news articles, with a React interface over a Python API.",
      },
      "lms-activmaths": {
        title: "ActivMaths LMS",
        description:
          "The learning-management side of ActivMaths: course administration, student progress tracking and role-based dashboards. I built the interface layer.",
      },
      "portfolio-mahinar": {
        title: "Portfolio — Mahinar",
        description:
          "A client portfolio: brand direction, layout and motion design, delivered as a Next.js site.",
      },
      northstar: {
        title: "NorthStar",
        description:
          "Fashion e-commerce front end — product grid, filtering and cart, hand-written in HTML, CSS and JavaScript.",
      },
      fourniro: {
        title: "Fourniro",
        description:
          "Storefront for a contemporary furniture collection: editorial layout over a product catalogue.",
      },
      "buy-your-plant": {
        title: "Buy Your Plant",
        description: "Plant shop front end with an interactive catalogue and care guides.",
      },
      pisca: {
        title: "Pisca — burn-care cream",
        description:
          "Product landing page for a tilapia-based burn treatment: indications, usage and contact, in a clean medical layout.",
      },
      "idak-car": {
        title: "Idak Car",
        description:
          "Site for a car dealership — services, inventory presentation and a client contact flow.",
      },
      "login-ui": {
        title: "Sign-in interface",
        description:
          "A gradient sign-in screen built as a CSS exercise in form layout, focus states and validation feedback.",
      },
      "todo-app": {
        title: "To-do app",
        description:
          "Task manager in vanilla JavaScript: add, sort, filter, and persist to localStorage.",
      },
      sofa: {
        title: "Sofa Fournitures",
        description: "Furniture storefront with an order-management flow. Not publicly deployed.",
      },
      "carl-dor": {
        title: "Carl Dor Broderie",
        description:
          "Showcase site for an artisanal embroidery workshop, built around a gallery of pieces. Not publicly deployed.",
      },
      "adidas-clone": {
        title: "Adidas — layout clone",
        description:
          "A close rebuild of the Adidas homepage, done as a responsive-layout exercise. Not publicly deployed.",
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked",
    lead: "Roles where I shipped code that other people depend on.",
    current: "Current",
    items: {
      "badis-ai": {
        role: "Software Engineer",
        period: "Aug 2025 — May 2026",
        description:
          "Shipped frontend and AI features across Badis AI's products, including the Badis conversational assistant. The company issued a written certificate of good performance at the end of the collaboration, citing quality, deadlines and commitment.",
      },
      "twin-covia": {
        role: "Founder & Lead Engineer",
        period: "2025 — Present",
        description:
          "Building Twin Covia end to end: the predictive model, the inference API, and the product interface.",
      },
      casa: {
        role: "Web Designer & Developer",
        period: "May 2024 — 2025",
        description:
          "Designed and built client websites end to end, ran the discovery workshops, and handled deployment on Vercel and Netlify.",
      },
      armadacom: {
        role: "Graphic Designer",
        period: "Dec 2023 — Apr 2024",
        description: "Brand assets and marketing visuals for B2B clients.",
      },
    },
  },
  skills: {
    eyebrow: "Stack",
    title: "What I work with",
    lead: "The tools I reach for every week.",
    core: "Core",
    supporting: "Supporting",
    groups: {
      frontend: "Frontend",
      ai: "AI & Machine Learning",
      design: "Design",
      tooling: "Tooling",
    },
  },
  reference: {
    eyebrow: "Reference",
    title: "What my manager said",
    quote:
      "Ms. Dorsane Zertit, working as a Software Engineer, carried out the projects assigned to her with professionalism and rigour. All planned deliverables were provided in line with expectations in terms of quality, deadlines and commitment. We commend her seriousness, her availability and the quality of her work throughout the collaboration.",
    author: "Nadir Krid",
    authorRole: "Manager, SARL Badis AI",
    meta: "Certificate of good performance — Oran, 18 June 2026",
    cta: "View the certificate",
    translated: "Translated from the French original.",
  },
  background: {
    eyebrow: "About",
    title: "Background",
    lead: "The rest of the picture — useful context, not the headline.",
    education: "Education",
    community: "Community & leadership",
    certifications: "Certifications",
    languages: "Languages",
    educationItems: {
      master: "MSc Biotechnology (health)",
      licence: "BSc Biotechnology",
    },
    communityItems: {
      biovatech: "Founder — biotech hackathon",
      techwaves: "Club leader — TechWaves",
      huawei: "Silver Ambassador",
      webexpo: "Event coordinator",
    },
    certificationItems: {
      ml: "Machine Learning Fundamentals",
      webdev: "Web Development Bootcamp",
      cisco: "IT Essentials — Get Connected",
      google: "Google Tools Manager",
    },
    languageItems: {
      ar: "Arabic",
      fr: "French",
      en: "English",
      tr: "Turkish",
    },
    levels: {
      native: "Native",
      fluent: "Fluent",
      intermediate: "Intermediate",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    lead: "I'm looking for a frontend or AI engineering role — remote, hybrid or on-site. Freelance projects welcome too. I usually reply within a day.",
    emailLabel: "Email",
    locationLabel: "Based in",
    location: "Constantine, Algeria — open to remote",
    followLabel: "Elsewhere",
    formTitle: "Send me a message",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    subject: "Subject",
    subjectPlaceholder: "What's this about?",
    message: "Message",
    messagePlaceholder: "Tell me about the role or the project…",
    send: "Send message",
  },
  footer: {
    rights: "All rights reserved",
    built: "Designed and coded by Dorsane Zertit",
  },
}

const fr: Dictionary = {
  meta: {
    title: "Dorsane Zertit — Développeuse Frontend & Ingénieure IA",
    description:
      "Développeuse frontend spécialisée React et Next.js, et ingénieure IA pour la santé et les sciences du vivant. Étudiante en Master 2 Biotechnologie. Je construis des interfaces en production et les modèles qui les alimentent — Badis AI, Twin Covia.",
    ogAlt: "Dorsane Zertit — Développeuse Frontend & Ingénieure IA",
  },
  nav: {
    work: "Projets",
    experience: "Expérience",
    stack: "Stack",
    about: "À propos",
    contact: "Contact",
    switchLanguage: "Changer de langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    role: "Développeuse Frontend & Ingénieure IA · Santé & sciences du vivant",
    headline: "Je construis des interfaces rapides et accessibles — et l'IA derrière.",
    intro:
      "Pendant un an j'ai livré des fonctionnalités frontend et IA en production chez Badis AI, et je développe Twin Covia, une plateforme de deep learning pour l'oncologie de précision. Je suis aussi étudiante en Master 2 Biotechnologie, ce qui explique pourquoi mon travail atterrit systématiquement sur des produits santé et science. Si vous cherchez quelqu'un qui sait concevoir une interface, la coder proprement en React et la brancher sur un vrai modèle — c'est mon métier.",
    ctaWork: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaCv: "Télécharger le CV",
    availability: "Disponible pour des postes frontend & IA — remote ou sur site",
    imageAlt: "Portrait de Dorsane Zertit",
    scroll: "Défiler",
  },
  focus: {
    eyebrow: "Spécialité",
    title: "Ce que je fais",
    lead: "Deux choses bien faites, plutôt que dix faites correctement.",
    cards: {
      frontend: {
        title: "Développement frontend",
        body: "React et Next.js en production. Je conçois sur Figma et j'écris le code moi-même : rien ne se perd entre la maquette et le navigateur.",
        points: [
          "Architecture de composants & design systems",
          "TypeScript, Tailwind CSS, Framer Motion",
          "Accessibilité (WCAG) et Core Web Vitals",
          "Responsive jusqu'à 320px",
        ],
      },
      ai: {
        title: "Ingénierie IA",
        body: "Des modèles qui finissent devant de vrais utilisateurs, pas seulement dans un notebook — entraînement, mise en service, et l'interface qui rend le résultat lisible.",
        points: [
          "Entraînement & évaluation de modèles en Python",
          "Pipelines LLM et RAG",
          "Services d'inférence FastAPI",
          "Transformer des prédictions en interface utilisable",
        ],
      },
    },
    domainLabel: "Domaine",
    domainTitle: "Santé & sciences du vivant",
    domainBody:
      "Je suis étudiante en Master 2 Biotechnologie, spécialité santé — et ce n'est pas une note de bas de page : c'est ce qui donne une direction précise à mon travail d'ingénieure. Je sais lire un jeu de données multi-omique, parler aux chercheurs et aux cliniciens dans leur vocabulaire, et concevoir des interfaces qui ne surinterprètent pas ce qu'un modèle prédit réellement. Twin Covia — prédiction de sensibilité aux médicaments pour l'oncologie de précision — c'est exactement cette combinaison dans un seul produit.",
    aside:
      "J'ai aussi de l'expérience backend, et j'ai encadré des équipes et organisé des événements tech. Utile, mais ce n'est pas ce que je vends.",
  },
  projects: {
    eyebrow: "Projets",
    title: "Projets sélectionnés",
    lead: "Une liste courte, choisie pour ce qu'elle démontre plutôt que pour sa longueur.",
    otherTitle: "Tout le reste",
    otherLead: "Sites clients, projets de hackathon et projets d'apprentissage.",
    live: "Voir le site",
    code: "Code",
    showAll: "Voir tous les projets",
    showLess: "Réduire",
    items: {
      "twin-covia": {
        title: "Twin Covia — l'IA au service de l'oncologie de précision",
        description:
          "Ma startup. Une plateforme de deep learning qui prédit la sensibilité à un médicament (IC50) à partir de la chaîne SMILES d'une molécule et du profil multi-omique d'une lignée cellulaire cancéreuse, via un réseau de neurones Bi-Interaction entraîné sur les données CCLE. J'ai construit le modèle, le service d'inférence FastAPI et tout le produit Next.js : visualiseur de molécules 3D, criblage virtuel par lots, estimation d'incertitude et tableaux de bord d'entraînement.",
      },
      "badis-ai": {
        title: "Badis AI — assistant administratif",
        description:
          "Réalisé en tant que Software Engineer chez SARL Badis AI. Un assistant conversationnel qui guide les usagers algériens dans leurs démarches — logement AADL, CNAS, carte nationale, passeport. J'ai travaillé sur l'interface de chat React et sur le pipeline de recherche documentaire qui ancre chaque réponse dans les documents officiels.",
      },
      activmaths: {
        title: "ActivMaths — plateforme EdTech",
        description:
          "Cours de mathématiques interactifs et un LMS complet. J'ai pris en charge l'UI/UX de bout en bout — du design system Figma à l'implémentation React — pour la plateforme de cours et le tableau de bord de suivi des progrès.",
      },
      "elite-sante-dentaire": {
        title: "Elite Santé Dentaire — cabinet dentaire",
        description:
          "Site d'un cabinet dentaire pluridisciplinaire à Constantine : soins, cas avant/après documentés et prise de rendez-vous en ligne. Mise en page éditoriale sombre, bilingue français/arabe.",
      },
      fynliq: {
        title: "Fynliq — landing page finance étudiante",
        description:
          "Landing page d'un produit qui lit la notification de bourse d'un étudiant et montre ce qu'elle lui laisse réellement. En React, sur un design system de tokens écrit à la main.",
      },
      "copro-performance": {
        title: "Copro Performance Conseil",
        description:
          "Site d'un cabinet de conseil indépendant en copropriété. Un site statique multi-pages construit à la main, qui oriente trois profils de visiteurs vers leur propre parcours.",
      },
      techwaves: {
        title: "TechWaves",
        description:
          "Site du club tech étudiant TechWaves à l'ENSB. Design porté par le mouvement, entièrement responsive, en Next.js.",
      },
      biovatech: {
        title: "BiovaTech Innovation Days",
        description:
          "Site du hackathon biotech que j'ai fondé — 72 heures, trois thématiques, du brief à la production en une semaine.",
      },
      fakenews: {
        title: "Détecteur de fake news",
        description:
          "Projet de hackathon : un classifieur NLP qui évalue la crédibilité d'articles de presse, avec une interface React sur une API Python.",
      },
      "lms-activmaths": {
        title: "LMS ActivMaths",
        description:
          "Le volet gestion de l'apprentissage d'ActivMaths : administration des cours, suivi des progrès et tableaux de bord par rôle. J'ai construit la couche interface.",
      },
      "portfolio-mahinar": {
        title: "Portfolio — Mahinar",
        description:
          "Portfolio client : direction de marque, mise en page et design d'animation, livré en Next.js.",
      },
      northstar: {
        title: "NorthStar",
        description:
          "Front-end e-commerce mode — grille produits, filtres et panier, écrit à la main en HTML, CSS et JavaScript.",
      },
      fourniro: {
        title: "Fourniro",
        description:
          "Boutique en ligne pour une collection de mobilier contemporain : mise en page éditoriale sur un catalogue produits.",
      },
      "buy-your-plant": {
        title: "Buy Your Plant",
        description:
          "Front-end de boutique de plantes avec catalogue interactif et conseils d'entretien.",
      },
      pisca: {
        title: "Pisca — crème pour brûlures",
        description:
          "Landing page produit pour un traitement des brûlures à base de tilapia : indications, mode d'emploi et contact, dans une mise en page médicale sobre.",
      },
      "idak-car": {
        title: "Idak Car",
        description:
          "Site pour un concessionnaire automobile — services, présentation du parc et parcours de contact client.",
      },
      "login-ui": {
        title: "Interface de connexion",
        description:
          "Écran de connexion en dégradé, réalisé comme exercice CSS sur la mise en page de formulaire, les états de focus et les retours de validation.",
      },
      "todo-app": {
        title: "Application to-do",
        description:
          "Gestionnaire de tâches en JavaScript natif : ajout, tri, filtrage et persistance via localStorage.",
      },
      sofa: {
        title: "Sofa Fournitures",
        description:
          "Boutique de mobilier avec parcours de gestion des commandes. Non déployé publiquement.",
      },
      "carl-dor": {
        title: "Carl Dor Broderie",
        description:
          "Site vitrine pour un atelier de broderie artisanale, construit autour d'une galerie de créations. Non déployé publiquement.",
      },
      "adidas-clone": {
        title: "Adidas — clone de mise en page",
        description:
          "Reproduction fidèle de la page d'accueil Adidas, réalisée comme exercice de mise en page responsive. Non déployé publiquement.",
      },
    },
  },
  experience: {
    eyebrow: "Expérience",
    title: "Mon parcours",
    lead: "Les postes où j'ai livré du code dont d'autres dépendent.",
    current: "En cours",
    items: {
      "badis-ai": {
        role: "Software Engineer",
        period: "Août 2025 — Mai 2026",
        description:
          "Livraison de fonctionnalités frontend et IA sur les produits Badis AI, dont l'assistant conversationnel Badis. L'entreprise a délivré une attestation de bonne exécution en fin de collaboration, saluant la qualité, le respect des délais et l'implication.",
      },
      "twin-covia": {
        role: "Fondatrice & Lead Engineer",
        period: "2025 — Aujourd'hui",
        description:
          "Développement de Twin Covia de bout en bout : le modèle prédictif, l'API d'inférence et l'interface produit.",
      },
      casa: {
        role: "Web Designer & Développeuse",
        period: "Mai 2024 — 2025",
        description:
          "Conception et développement de sites clients de bout en bout, animation des ateliers de cadrage, déploiement sur Vercel et Netlify.",
      },
      armadacom: {
        role: "Graphiste",
        period: "Déc. 2023 — Avr. 2024",
        description: "Création d'assets de marque et de visuels marketing pour des clients B2B.",
      },
    },
  },
  skills: {
    eyebrow: "Stack",
    title: "Mes outils",
    lead: "Les technologies que j'utilise chaque semaine.",
    core: "Principal",
    supporting: "Complémentaire",
    groups: {
      frontend: "Frontend",
      ai: "IA & Machine Learning",
      design: "Design",
      tooling: "Outils",
    },
  },
  reference: {
    eyebrow: "Référence",
    title: "Ce qu'en dit mon responsable",
    quote:
      "Madame Dorsane Zertit, ayant exercé en qualité de Software Engineer, a accompli avec professionnalisme et rigueur les projets assignés pour le compte de l'entreprise. L'ensemble des livrables prévus ont été fournis conformément aux attentes en termes de qualité, de délais et d'implication. Nous saluons son sérieux, sa disponibilité ainsi que la qualité de son travail tout au long de la collaboration.",
    author: "Nadir Krid",
    authorRole: "Gérant, SARL Badis AI",
    meta: "Attestation de bonne exécution — Oran, le 18 juin 2026",
    cta: "Voir l'attestation",
    translated: null,
  },
  background: {
    eyebrow: "À propos",
    title: "Parcours",
    lead: "Le reste du tableau — un contexte utile, pas l'argument principal.",
    education: "Formation",
    community: "Communauté & leadership",
    certifications: "Certifications",
    languages: "Langues",
    educationItems: {
      master: "Master 2 Biotechnologie (santé)",
      licence: "Licence Biotechnologie",
    },
    communityItems: {
      biovatech: "Fondatrice — hackathon biotech",
      techwaves: "Responsable du club TechWaves",
      huawei: "Silver Ambassador",
      webexpo: "Coordinatrice d'événements",
    },
    certificationItems: {
      ml: "Machine Learning Fundamentals",
      webdev: "Web Development Bootcamp",
      cisco: "IT Essentials — Get Connected",
      google: "Google Tools Manager",
    },
    languageItems: {
      ar: "Arabe",
      fr: "Français",
      en: "Anglais",
      tr: "Turc",
    },
    levels: {
      native: "Langue maternelle",
      fluent: "Courant",
      intermediate: "Intermédiaire",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Travaillons ensemble",
    lead: "Je cherche un poste en développement frontend ou en ingénierie IA — remote, hybride ou sur site. Les missions freelance sont également les bienvenues. Je réponds généralement sous 24 h.",
    emailLabel: "Email",
    locationLabel: "Basée à",
    location: "Constantine, Algérie — ouverte au remote",
    followLabel: "Ailleurs",
    formTitle: "Envoyez-moi un message",
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "Email",
    emailPlaceholder: "vous@entreprise.com",
    subject: "Sujet",
    subjectPlaceholder: "De quoi s'agit-il ?",
    message: "Message",
    messagePlaceholder: "Parlez-moi du poste ou du projet…",
    send: "Envoyer le message",
  },
  footer: {
    rights: "Tous droits réservés",
    built: "Conçu et codé par Dorsane Zertit",
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, fr }
