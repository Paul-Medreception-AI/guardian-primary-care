import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Near Hoover, AL | Guardian Primary Care',
  description: 'Expert Primary Care and DPC services for Hoover, AL residents. Convenient access from Hoover to our Birmingham practice, plus telehealth options available.',
  openGraph: {
    title: 'Primary Care Near Hoover, AL | Guardian Primary Care',
    description: 'Expert Primary Care and DPC services for Hoover, AL residents. Convenient access from Hoover to our Birmingham practice, plus telehealth options available.',
    type: 'website',
    url: 'https://guardianprimary.com/locations/hoover-al',
  },
}

export default function HooverALPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Hoover, AL</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Primary Care Near Hoover, AL
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Serving patients from Hoover and surrounding AL communities. Expert primary care is closer than you think.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Schedule in Hoover
            </Link>
          </div>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Serving the Hoover Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Located just minutes from Hoover, Guardian Primary Care provides comprehensive primary care and direct primary care services to patients throughout the greater Birmingham area. Our practice is conveniently accessible via I-459 and US-31, making your commute from Hoover straightforward and stress-free. Most patients find us within 15-20 minutes of central Hoover locations.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Hoover residents choose Guardian Primary Care because we offer personalized, unhurried appointments with experienced providers who take the time to truly understand your health needs. Whether you prefer in-person visits at our Birmingham office or the convenience of telehealth from your Hoover home, we're committed to delivering exceptional care that fits your lifestyle. Our direct primary care model means more time with your doctor, same-day or next-day appointments, and 24/7 access to your care team.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to Hoover Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Annual Wellness Exams
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive preventive care and health screenings tailored to your age and risk factors, helping you stay healthy year-round.
              </p>
              <Link href="/services/wellness-exams" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert management of diabetes, hypertension, heart disease, and other chronic conditions with personalized treatment plans.
              </p>
              <Link href="/services/chronic-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Direct Primary Care
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Unlimited access to your physician with same-day appointments, no copays, and 24/7 communication for one affordable monthly fee.
              </p>
              <Link href="/services/direct-primary-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-[var(--color-ink)] text-lg leading-relaxed mb-6">
            For Hoover residents with busy schedules, mobility concerns, or who simply prefer the convenience of virtual care, Guardian Primary Care offers comprehensive telehealth services. Connect with your provider from the comfort of your Hoover home through secure video appointments that deliver the same personalized, expert care as in-person visits.
          </p>
          <p className="text-[var(--color-ink)] text-lg leading-relaxed">
            Our telehealth services are covered by most major insurance plans and are ideal for routine follow-ups, medication management, chronic disease monitoring, and acute care consultations. Schedule your virtual appointment today and experience quality primary care without leaving Hoover.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How far is Guardian Primary Care from Hoover?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Birmingham office is approximately 10-15 miles from central Hoover, typically a 15-20 minute drive via I-459 or US-31. We're conveniently located for patients throughout the Hoover area and offer ample parking at our facility.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What's the best route from Hoover to your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Hoover, take I-459 North or US-31 North toward Birmingham. Detailed directions will be provided when you schedule your appointment. Our staff is happy to help with specific directions from your location in Hoover.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Hoover patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer full telehealth services for Hoover residents, including new patient consultations, follow-up visits, medication management, and urgent care consultations. Virtual visits are covered by most insurance plans and provide the same quality care without the commute.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available for Hoover patients visiting your office?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Absolutely. We provide free, accessible parking directly adjacent to our office entrance. Our facility is fully accessible for patients with mobility needs, and we're happy to accommodate any special requirements you may have.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 animate-fade-up">
            Get Expert Care from Hoover
          </h2>
          <p className="text-xl mb-10 opacity-95 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Join the many Hoover residents who trust Guardian Primary Care for comprehensive, personalized primary care services.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
            >
              Schedule Your Appointment
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}