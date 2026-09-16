import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'

const PATIENT_LINKS = [
  { href: '/new-patients', label: 'New Patients', blurb: 'What to bring and what to expect on your first visit.' },
  { href: '/insurance', label: 'Insurance & Care Access', blurb: 'In-network plans, Medicare, Medicaid and Guardian Direct Care.' },
  { href: '/telehealth', label: 'Telehealth', blurb: 'Visit from home when an in-person appointment is not needed.' },
  { href: '/faq', label: 'FAQ', blurb: 'Answers to the questions we hear most often.' },
]

const ABOUT_LINKS = [
  { href: '/about', label: 'About Guardian' },
  { href: '/team', label: 'Meet the Team' },
  { href: '/reviews', label: 'Patient Testimonials' },
  { href: '/blog', label: 'Health Library' },
  { href: '/locations/cape-girardeau-mo', label: 'Cape Girardeau Office' },
]

function Caret() {
  return (
    <svg className="nav-caret w-3.5 h-3.5 opacity-60" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d="M3 4.5L6 7.5L9 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SiteHeader() {
  // Split the condition list into three balanced columns for the mega-menu.
  const perCol = Math.ceil(CONDITIONS.length / 3)
  const conditionCols = [
    CONDITIONS.slice(0, perCol),
    CONDITIONS.slice(perCol, perCol * 2),
    CONDITIONS.slice(perCol * 2),
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[104px] flex items-center justify-between gap-4">
        <a href="/" className="shrink-0" aria-label="Guardian Primary Care home">
          <img src="/logo.png" alt="Guardian Primary Care" className="h-[66px] w-auto" width={280} height={80} />
        </a>

        {/* ── Desktop nav ─────────────────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {/* Services */}
          <div className="nav-item relative">
            <a
              href="/services"
              className="nav-trigger flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors"
            >
              Services <Caret />
            </a>
            <div className="nav-panel absolute left-0 top-full pt-3 w-[30rem]">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-3">
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES.map(s => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded-xl px-3 py-2.5 hover:bg-[var(--color-light)] transition-colors"
                    >
                      <span className="block text-sm font-semibold text-[var(--color-ink)]">{s.title}</span>
                    </a>
                  ))}
                </div>
                <a
                  href="/services"
                  className="mt-2 block rounded-xl bg-[var(--color-light)] px-3 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-border)] transition-colors"
                >
                  View all services →
                </a>
              </div>
            </div>
          </div>

          {/* Conditions */}
          <div className="nav-item relative">
            <a
              href="/conditions"
              className="nav-trigger flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors"
            >
              Conditions <Caret />
            </a>
            <div className="nav-panel absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[52rem] max-w-[calc(100vw-2rem)]">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-4">
                <div className="grid grid-cols-3 gap-x-4 gap-y-0.5">
                  {conditionCols.map((col, i) => (
                    <div key={i}>
                      {col.map(c => (
                        <a
                          key={c.slug}
                          href={`/conditions/${c.slug}`}
                          className="block rounded-lg px-3 py-1.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {c.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                <a
                  href="/conditions"
                  className="mt-3 block rounded-xl bg-[var(--color-light)] px-3 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-border)] transition-colors"
                >
                  View all conditions we treat →
                </a>
              </div>
            </div>
          </div>

          {/* Patients */}
          <div className="nav-item relative">
            <a
              href="/new-patients"
              className="nav-trigger flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors"
            >
              Patients <Caret />
            </a>
            <div className="nav-panel absolute left-0 top-full pt-3 w-[24rem]">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-3">
                {PATIENT_LINKS.map(l => (
                  <a key={l.href} href={l.href} className="block rounded-xl px-3 py-2.5 hover:bg-[var(--color-light)] transition-colors">
                    <span className="block text-sm font-semibold text-[var(--color-ink)]">{l.label}</span>
                    <span className="block text-xs text-[var(--color-muted)] mt-0.5 leading-snug">{l.blurb}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About */}
          <div className="nav-item relative">
            <a
              href="/about"
              className="nav-trigger flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors"
            >
              About <Caret />
            </a>
            <div className="nav-panel absolute left-0 top-full pt-3 w-[16rem]">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-3">
                {ABOUT_LINKS.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/contact" className="px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
            Contact
          </a>

          <a
            href="tel:+15732006143"
            className="ml-2 hidden xl:flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            (573) 200-6143
          </a>

          <a
            href="/contact"
            className="ml-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Schedule Appointment
          </a>
        </nav>

        {/* ── Mobile nav (CSS-only disclosure) ────────────────────────── */}
        <input type="checkbox" id="mobile-nav-toggle" className="peer sr-only lg:hidden" aria-hidden="true" />
        <label
          htmlFor="mobile-nav-toggle"
          className="burger lg:hidden cursor-pointer p-2 -mr-2 text-[var(--color-ink)]"
          aria-label="Toggle navigation menu"
        >
          <svg className="burger-open w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
          <svg className="burger-close hidden w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </label>

        <div className="mobile-panel hidden lg:!hidden absolute left-0 right-0 top-[104px] bg-white border-b border-[var(--color-border)] shadow-xl max-h-[calc(100vh-104px)] overflow-y-auto">
          <nav className="px-5 py-5 space-y-5" aria-label="Mobile">
            <a
              href="/contact"
              className="block text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Schedule Appointment
            </a>
            <a
              href="tel:+15732006143"
              className="block text-center border border-[var(--color-border)] text-[var(--color-primary)] px-5 py-3 rounded-xl font-semibold text-sm"
            >
              Call (573) 200-6143
            </a>

            <details className="border-t border-[var(--color-border)] pt-4">
              <summary className="cursor-pointer font-semibold text-[var(--color-ink)] text-sm">Services</summary>
              <div className="mt-2 space-y-1 pl-3">
                {SERVICES.map(s => (
                  <a key={s.slug} href={`/services/${s.slug}`} className="block py-1.5 text-sm text-[var(--color-muted)]">{s.title}</a>
                ))}
                <a href="/services" className="block py-1.5 text-sm font-semibold text-[var(--color-primary)]">All services →</a>
              </div>
            </details>

            <details className="border-t border-[var(--color-border)] pt-4">
              <summary className="cursor-pointer font-semibold text-[var(--color-ink)] text-sm">Conditions</summary>
              <div className="mt-2 space-y-1 pl-3">
                {CONDITIONS.map(c => (
                  <a key={c.slug} href={`/conditions/${c.slug}`} className="block py-1.5 text-sm text-[var(--color-muted)]">{c.title}</a>
                ))}
                <a href="/conditions" className="block py-1.5 text-sm font-semibold text-[var(--color-primary)]">All conditions →</a>
              </div>
            </details>

            <details className="border-t border-[var(--color-border)] pt-4">
              <summary className="cursor-pointer font-semibold text-[var(--color-ink)] text-sm">Patients</summary>
              <div className="mt-2 space-y-1 pl-3">
                {PATIENT_LINKS.map(l => (
                  <a key={l.href} href={l.href} className="block py-1.5 text-sm text-[var(--color-muted)]">{l.label}</a>
                ))}
              </div>
            </details>

            <details className="border-t border-[var(--color-border)] pt-4">
              <summary className="cursor-pointer font-semibold text-[var(--color-ink)] text-sm">About</summary>
              <div className="mt-2 space-y-1 pl-3">
                {ABOUT_LINKS.map(l => (
                  <a key={l.href} href={l.href} className="block py-1.5 text-sm text-[var(--color-muted)]">{l.label}</a>
                ))}
              </div>
            </details>

            <a href="/contact" className="block border-t border-[var(--color-border)] pt-4 font-semibold text-[var(--color-ink)] text-sm">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
