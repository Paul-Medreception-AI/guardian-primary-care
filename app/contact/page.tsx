import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Guardian Primary Care, Cape Girardeau MO',
  description:
    'Reach Guardian Primary Care at 2441 Myra Dr, Cape Girardeau, MO 63703. Call (573) 200-6143, fax (573) 755-0706 or email myprovider@guardianprimary.com. Visits are by appointment.',
  alternates: { canonical: '/contact' },
}

const MAPS_URL = 'https://maps.google.com/?q=2441+Myra+Dr,+Cape+Girardeau,+MO+63703'

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Contact</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">Contact Guardian Primary Care</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We would love to hear from you. Call, email or send us a note, and our team will help you take the next step.
          </p>
        </div>
      </section>

      {/* Quick contact strip: the three fastest ways to reach the clinic. */}
      <section className="bg-white border-b border-[var(--color-border)] py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--color-muted)] mb-2">Call the office</p>
            <a href="tel:+15732006143" className="font-display text-2xl text-[var(--color-primary)] hover:underline">
              (573) 200-6143
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--color-muted)] mb-2">Email us</p>
            <a
              href="mailto:myprovider@guardianprimary.com"
              className="font-display text-2xl text-[var(--color-primary)] hover:underline break-all"
            >
              myprovider@guardianprimary.com
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--color-muted)] mb-2">Fax records</p>
            <p className="font-display text-2xl text-[var(--color-ink)]">(573) 755-0706</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] animate-fade-up"
              id="form"
            >
              <h2 className="font-display text-3xl mb-4 text-[var(--color-ink)]">Send Us a Message</h2>
              <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
                Use this form for general questions about the practice, Guardian Direct Care or insurance. If you need
                an appointment soon, calling us at{' '}
                <a href="tel:+15732006143" className="text-[var(--color-primary)] hover:underline">(573) 200-6143</a>{' '}
                is the fastest way to reach our team.
              </p>
              {/* Routes to the practice's own published inbox. TODO(launch): swap in the practice's
                  hosted form endpoint once one exists, so submissions land in their workflow.
                  Do NOT point this at a third-party form service without a signed BAA. */}
              <form
                method="POST"
                action="mailto:myprovider@guardianprimary.com"
                encType="text/plain"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      How can we help?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow"
                    >
                      <option value="">Select a topic...</option>
                      <option value="New Patient Appointment">New patient appointment</option>
                      <option value="Existing Patient Appointment">Existing patient appointment</option>
                      <option value="Guardian Direct Care">Guardian Direct Care</option>
                      <option value="Insurance Question">Insurance or billing question</option>
                      <option value="Telehealth">Telehealth visit</option>
                      <option value="Employer Plan">Employer or business plan</option>
                      <option value="Other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none transition-shadow resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white py-4 rounded-xl font-semibold transition-colors mt-2"
                  >
                    Send Message
                  </button>

                  <p className="text-[var(--color-muted)] text-xs mt-4 leading-relaxed">
                    Please do not include sensitive medical information in this form. To share health details securely,
                    use the <a href="https://www.patientally.com/login" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]">Patient Ally portal</a> or call the office. If this is a medical emergency, call 911.
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[var(--color-primary)] mb-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-3">Visit Us</h3>
                <address className="not-italic text-[var(--color-ink)] leading-relaxed text-lg">
                  Guardian Primary Care
                  <br />
                  2441 Myra Dr
                  <br />
                  Cape Girardeau, MO 63703
                </address>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Get directions on Google Maps →
                </a>
                <p className="text-[var(--color-muted)] text-sm mt-4 leading-relaxed">
                  We serve Cape Girardeau and the surrounding Southeast Missouri communities, including Jackson, Scott
                  City, Perryville and Sikeston.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[var(--color-primary)] mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-3">Call, Fax or Email</h3>
                <p className="text-[var(--color-ink)] text-lg mb-2">
                  Phone:{' '}
                  <a href="tel:+15732006143" className="text-[var(--color-primary)] hover:underline font-semibold">
                    (573) 200-6143
                  </a>
                </p>
                <p className="text-[var(--color-ink)] text-lg mb-2">Fax: (573) 755-0706</p>
                <p className="text-[var(--color-ink)] text-lg break-all">
                  Email:{' '}
                  <a
                    href="mailto:myprovider@guardianprimary.com"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    myprovider@guardianprimary.com
                  </a>
                </p>
              </div>

              <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
                <svg
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[var(--color-primary)] mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-3">Office Hours</h3>
                <p className="text-[var(--color-ink)] text-lg font-semibold mb-2">By Appointment</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Closed on US major holidays. Call us and we will find a time that fits your schedule, in the office or
                  by telehealth.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-[var(--color-primary)] mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-3">Already a Patient?</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Current patients can self-schedule appointments and review their records on the <a href="https://www.patientally.com/login" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]">Patient Ally portal</a>.
                  If you need help signing in, call the office and our team will walk you through it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic photo + directions */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/site/care-access.jpg"
              alt="A Guardian Primary Care team member welcoming a patient at the clinic in Cape Girardeau, Missouri"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">Find Us in Cape Girardeau</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our clinic is at 2441 Myra Dr in Cape Girardeau, Missouri. Visits are scheduled by
              appointment, so give us a call and we will get you on the calendar.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              New to Guardian? Our{' '}
              <Link href="/new-patients" className="text-[var(--color-primary)] hover:underline">
                new patient page
              </Link>{' '}
              walks through what to bring and what your first visit looks like. Questions about coverage or cost are
              answered on our{' '}
              <Link href="/insurance" className="text-[var(--color-primary)] hover:underline">
                Care Access page
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15732006143"
                className="inline-block text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Call (573) 200-6143
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center border border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-light)] font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
