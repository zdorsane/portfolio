import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/context'
import { RevealFailsafe } from '@/components/reveal-failsafe'
import { EMAIL, SITE_URL, SOCIALS } from '@/lib/content'
import { dictionaries } from '@/lib/i18n/dictionaries'
import { defaultLocale } from '@/lib/i18n/config'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const dict = dictionaries[defaultLocale]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: dict.meta.title,
  description: dict.meta.description,
  keywords: [
    'frontend developer',
    'React developer',
    'Next.js developer',
    'AI engineer',
    'machine learning engineer',
    'health AI',
    'AI for healthcare',
    'biotechnology',
    'bioinformatics',
    'precision oncology',
    'TypeScript',
    'UI developer',
    'Dorsane Zertit',
    'Algeria',
    'remote',
  ],
  authors: [{ name: 'Dorsane Zertit', url: SITE_URL }],
  creator: 'Dorsane Zertit',
  alternates: {
    canonical: '/',
    languages: { en: '/', fr: '/' },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Dorsane Zertit',
    title: dict.meta.title,
    description: dict.meta.description,
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    images: [{ url: '/images/profile.png', width: 1200, height: 630, alt: dict.meta.ogAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: dict.meta.title,
    description: dict.meta.description,
    images: ['/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dorsane Zertit',
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: 'Frontend Developer & AI Engineer',
  image: `${SITE_URL}/images/profile.png`,
  sameAs: [SOCIALS.github, SOCIALS.linkedin],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'École Nationale Supérieure de Biotechnologie (ENSB), Constantine',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Frontend development',
    'Machine learning',
    'UI/UX design',
    'Biotechnology',
    'Health AI',
    'Bioinformatics',
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Constantine', addressCountry: 'DZ' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {/*
          Every animated section is server-rendered at opacity:0 and only revealed
          once Framer Motion hydrates, which puts ~200KB of JavaScript between the
          reader and any visible content. On a slow phone that is a long black
          screen; if a chunk never arrives, it is a permanently black one. This
          timer reveals the page on its own if the animation layer has not taken
          over in time — <RevealFailsafe /> cancels it as soon as React runs, so a
          normal load never reaches it. ES5 syntax on purpose: a browser too old to
          parse the bundle must still be able to parse this.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;var t=setTimeout(function(){d.className+=' reveal-all'},2500);window.__cancelRevealFailsafe=function(){clearTimeout(t)}})()",
          }}
        />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <RevealFailsafe />
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
