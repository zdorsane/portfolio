/**
 * Language-neutral content: URLs, tags, images, ids.
 * Anything that needs translating lives in lib/i18n/dictionaries.ts, keyed by the same id.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://dorsanezertit.com"

export const EMAIL = "zertitdorsane233@gmail.com"

export const SOCIALS = {
  github: "https://github.com/zdorsane",
  linkedin: "https://linkedin.com/in/zdorsane",
}

export const CV_URL = "/CV_Zertit_Dorsane.pdf"

/**
 * Scan of the "attestation de bonne exécution" issued by SARL BADIS AI.
 * Drop the PDF at public/documents/attestation-badis-ai.pdf, then set this to
 * "/documents/attestation-badis-ai.pdf" — the download button only renders once it is set.
 */
export const ATTESTATION_URL: string | null = null

export type Repo = { label: string; url: string }

export type Project = {
  id: string
  featured: boolean
  year: string
  image: string | null
  liveUrl: string | null
  repos: Repo[]
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "twin-covia",
    featured: true,
    year: "2025 — 2026",
    image: "/images/projects/twin-covia.png",
    liveUrl: "https://twincovia.itfriendssolutions.com/",
    repos: [
      { label: "Platform", url: "https://github.com/zdorsane/-twin-site" },
      { label: "Model", url: "https://github.com/zdorsane/Twin" },
    ],
    tags: ["Next.js", "TypeScript", "Three.js", "Deep Learning", "FastAPI"],
  },
  {
    id: "dentra",
    featured: true,
    year: "2026",
    image: "/images/projects/dentra.png",
    liveUrl: "https://dentra-gamma.vercel.app/",
    repos: [],
    tags: ["Next.js", "Tailwind CSS", "SaaS", "Healthcare", "AI insights"],
  },
  {
    id: "badis-ai",
    featured: true,
    year: "2025 — 2026",
    image: "/images/projects/badis-ai.png",
    liveUrl: "https://chat.badis.ai/",
    repos: [],
    tags: ["React", "LLM", "RAG", "Python", "NLP"],
  },
  {
    id: "activmaths",
    featured: true,
    year: "2024 — 2026",
    image: "/images/projects/activmaths.png",
    liveUrl: "https://dourous.activmath.dz/",
    repos: [],
    tags: ["Next.js", "React", "Tailwind CSS", "UI/UX"],
  },
  {
    id: "elite-sante-dentaire",
    featured: false,
    year: "2026",
    image: "/images/projects/elite-sante-dentaire.png",
    liveUrl: "https://site-26hf.wandit.app/",
    repos: [],
    tags: ["Next.js", "Healthcare", "FR / AR bilingual", "Responsive"],
  },
  {
    id: "fynliq",
    featured: false,
    year: "2026",
    image: "/images/projects/fynliq.png",
    liveUrl: "https://fynliq-landing.vercel.app/",
    repos: [],
    tags: ["React", "Vite", "Design system", "Landing page"],
  },
  {
    id: "copro-performance",
    featured: false,
    year: "2026",
    image: "/images/projects/copro-performance.png",
    liveUrl: "https://copro-performance-conseil.vercel.app/",
    repos: [],
    tags: ["HTML / CSS", "JavaScript", "Multi-page site", "B2B"],
  },
  {
    id: "techwaves",
    featured: false,
    year: "2025",
    image: "/images/projects/techwaves.png",
    liveUrl: "https://techwaves-website.vercel.app/",
    repos: [],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: "biovatech",
    featured: false,
    year: "2026",
    image: "/images/projects/biovatech.png",
    liveUrl: "https://biovatechhackathon.vercel.app/",
    repos: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "fakenews",
    featured: false,
    year: "2024",
    image: null,
    liveUrl: null,
    repos: [
      { label: "Frontend", url: "https://github.com/rahmazen/team17-fakesnewsfrontend" },
    ],
    tags: ["React", "Python", "Machine Learning", "NLP"],
  },
  {
    id: "lms-activmaths",
    featured: false,
    year: "2024 — 2026",
    image: "/images/projects/lms-activmaths.png",
    liveUrl: "https://lms.activmath.com/app",
    repos: [],
    tags: ["React", "LMS", "Dashboard UI"],
  },
  {
    id: "portfolio-mahinar",
    featured: false,
    year: "2025",
    image: "/images/projects/portfolio-mahinar.png",
    liveUrl: "https://v0-portfolio-mahi-zertit.vercel.app/",
    repos: [],
    tags: ["Next.js", "Framer Motion", "UI/UX"],
  },
  {
    id: "northstar",
    featured: false,
    year: "2024",
    image: "/images/projects/northstar.png",
    liveUrl: "https://frolicking-chaja-cb7f2e.netlify.app/",
    repos: [],
    tags: ["HTML / CSS", "JavaScript", "E-commerce"],
  },
  {
    id: "fourniro",
    featured: false,
    year: "2024",
    image: "/images/projects/fourniro.png",
    liveUrl: "https://dulcet-chaja-cb83d1.netlify.app/",
    repos: [],
    tags: ["HTML / CSS", "JavaScript", "E-commerce"],
  },
  {
    id: "buy-your-plant",
    featured: false,
    year: "2024",
    image: "/images/projects/buy-your-plant.png",
    liveUrl: "https://monumental-marzipan-5517d3.netlify.app/",
    repos: [],
    tags: ["HTML / CSS", "JavaScript", "E-commerce"],
  },
  {
    id: "pisca",
    featured: false,
    year: "2024",
    image: "/images/projects/pisca.png",
    liveUrl: "https://gentle-entremet-f46976.netlify.app/",
    repos: [],
    tags: ["Landing page", "Healthcare", "Responsive"],
  },
  {
    id: "idak-car",
    featured: false,
    year: "2024",
    image: "/images/projects/idak-car.png",
    liveUrl: "https://monumental-wisp-213f48.netlify.app/",
    repos: [],
    tags: ["HTML / CSS", "JavaScript", "Business"],
  },
  {
    id: "login-ui",
    featured: false,
    year: "2024",
    image: "/images/projects/login-ui.png",
    liveUrl: "https://iridescent-marigold-3439ed.netlify.app/",
    repos: [],
    tags: ["UI/UX", "CSS", "Forms"],
  },
  {
    id: "todo-app",
    featured: false,
    year: "2024",
    image: "/images/projects/todo-app.png",
    liveUrl: "https://papaya-fairy-51013c.netlify.app/",
    repos: [],
    tags: ["JavaScript", "localStorage", "App"],
  },
  {
    id: "sofa",
    featured: false,
    year: "2024",
    image: null,
    liveUrl: null,
    repos: [],
    tags: ["E-commerce", "Furniture", "Full Stack"],
  },
  {
    id: "carl-dor",
    featured: false,
    year: "2024",
    image: null,
    liveUrl: null,
    repos: [],
    tags: ["Showcase", "Gallery", "Branding"],
  },
  {
    id: "adidas-clone",
    featured: false,
    year: "2023",
    image: null,
    liveUrl: null,
    repos: [],
    tags: ["HTML / CSS", "Responsive", "Clone"],
  },
]

export type Experience = {
  id: string
  company: string
  location: string
  url: string | null
  current: boolean
}

export const experiences: Experience[] = [
  {
    id: "badis-ai",
    company: "SARL Badis AI",
    location: "Algiers, Algeria",
    url: "https://badis.ai",
    current: false,
  },
  {
    id: "twin-covia",
    company: "Twin Covia",
    location: "Remote",
    url: "https://twincovia.itfriendssolutions.com/",
    current: true,
  },
  {
    id: "casa",
    company: "SARL Casa International",
    location: "Constantine, Algeria",
    url: null,
    current: false,
  },
  {
    id: "armadacom",
    company: "Armadacom",
    location: "Constantine, Algeria",
    url: null,
    current: false,
  },
]

export type SkillGroup = {
  id: string
  primary: boolean
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    primary: true,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS",
      "Responsive & accessible UI",
    ],
  },
  {
    id: "ai",
    primary: true,
    items: [
      "Python",
      "TensorFlow / Keras",
      "scikit-learn",
      "LLM & RAG pipelines",
      "NLP",
      "FastAPI",
    ],
  },
  {
    id: "design",
    primary: false,
    items: ["Figma", "Design systems", "Prototyping", "WCAG accessibility"],
  },
  {
    id: "tooling",
    primary: false,
    items: ["Git & GitHub", "Vercel", "Docker", "PostgreSQL", "REST APIs"],
  },
]

export type Credential = {
  id: string
  issuer: string
  year: string
}

export const certifications: Credential[] = [
  { id: "ml", issuer: "Coursera", year: "2024" },
  { id: "webdev", issuer: "Udemy", year: "2024" },
  { id: "cisco", issuer: "Cisco NetAcad", year: "2024" },
  { id: "google", issuer: "Google", year: "2024" },
]

export type Education = { id: string; school: string; year: string }

export const education: Education[] = [
  { id: "master", school: "ENSB, Constantine", year: "2024 — 2026" },
  { id: "licence", school: "ENSB, Constantine", year: "2020 — 2023" },
]

export type CommunityRole = { id: string; org: string; year: string }

export const community: CommunityRole[] = [
  { id: "biovatech", org: "BiovaTech Innovation Days", year: "2026" },
  { id: "techwaves", org: "ENSB", year: "2024 — 2026" },
  { id: "huawei", org: "Huawei", year: "2025 — 2026" },
  { id: "webexpo", org: "WebExpo · Builtec", year: "2026" },
]

export const languages = [
  { id: "ar", level: "native" },
  { id: "fr", level: "fluent" },
  { id: "en", level: "fluent" },
  { id: "tr", level: "intermediate" },
] as const
