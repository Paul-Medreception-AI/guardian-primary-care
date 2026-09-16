import type { Metadata } from 'next'
import { Marcellus, Lato } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

// Typefaces are the ones Guardian specifies in its own published brand guidelines:
// Marcellus for headings, Lato for body.
const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'], variable: '--font-marcellus', display: 'swap' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'], variable: '--font-lato', display: 'swap' })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Guardian Primary Care | Cape Girardeau, MO Family Practice',
  description:
    'Guardian Primary Care provides routine, sick and preventative care for every stage of life in Cape Girardeau, Missouri. In-network with most major insurances, Medicare and Medicaid, with Guardian Direct Care available.',
  metadataBase: new URL('https://www.guardianprimary.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Guardian Primary Care',
    locale: 'en_US',
    images: ['/images/site/hero-family.jpg'],
  },
}

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Guardian Primary Care',
  url: 'https://www.guardianprimary.com',
  logo: 'https://www.guardianprimary.com/logo.png',
  image: 'https://www.guardianprimary.com/images/site/hero-family.jpg',
  telephone: '+1-573-200-6143',
  faxNumber: '+1-573-755-0706',
  email: 'myprovider@guardianprimary.com',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2441 Myra Dr',
    addressLocality: 'Cape Girardeau',
    addressRegion: 'MO',
    postalCode: '63703',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Cape Girardeau' },
    { '@type': 'City', name: 'Jackson' },
    { '@type': 'City', name: 'Scott City' },
    { '@type': 'AdministrativeArea', name: 'Southeast Missouri' },
  ],
  medicalSpecialty: 'PrimaryCare',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61567210552076',
    'https://www.instagram.com/guardianprimary/',
    'https://www.youtube.com/@GuardianHealthMO',
    'https://www.youtube.com/@PrestonNP',
    'https://linkedin.com/company/guardian-primary-care',
    'https://www.tiktok.com/@guardianhealthmo',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${lato.variable}`}>
      <body className="font-[family-name:var(--font-lato)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:bg-white focus:text-[var(--color-primary)] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main">{children}</main>

        <SiteFooter />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
