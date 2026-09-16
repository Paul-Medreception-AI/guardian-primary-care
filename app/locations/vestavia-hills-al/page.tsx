import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care Near Vestavia Hills, AL | Guardian Primary Care',
  description: 'Guardian Primary Care serves patients from Vestavia Hills, AL with expert DPC services. Convenient access from Vestavia Hills and surrounding communities.',
  openGraph: {
    title: 'Primary Care Near Vestavia Hills, AL | Guardian Primary Care',
    description: 'Serving Vestavia Hills patients with comprehensive primary care and direct primary care services.',
    url: 'https://guardianprimary.com/locations/vestavia-hills-al',
  },
}

export default function VestavaHillsPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white">Vestavia Hills, AL</span>
          </nav>
          
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            Primary Care Near Vestavia Hills, AL
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
            Serving patients from Vestavia Hills and surrounding Alabama communities. Expert primary care is closer than you think.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            Schedule in Vestavia Hills
          </Link>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-10 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the Vestavia Hills Area
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Guardian Primary Care is conveniently located in Birmingham, AL, just a short drive from Vestavia Hills. Our practice serves patients throughout the greater Birmingham area, making it easy for Vestavia Hills residents to access comprehensive primary care and direct primary care services. Whether you're coming from downtown Vestavia Hills or the surrounding neighborhoods, our office is easily accessible via US-31 and I-65, typically just 10-15 minutes away.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed">
              Many Vestavia Hills patients choose Guardian Primary Care because we offer a different approach to healthcare. Our direct primary care model means more time with your doctor, same-day or next-day appointments, and 24/7 access to your care team. We also understand that busy schedules can make office visits challenging, which is why we offer telehealth appointments for our Vestavia Hills patients who prefer the convenience of virtual care.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Conveniently located near Vestavia Hills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to Vestavia Hills Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Direct Primary Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Comprehensive primary care with unlimited visits, 24/7 access to your physician, and no insurance hassles. A modern approach to healthcare.
              </p>
              <Link href="/services/direct-primary-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Preventive Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Annual physicals, health screenings, vaccinations, and wellness programs designed to keep you healthy and prevent future health issues.
              </p>
              <Link href="/services/preventive-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <svg className="w-12 h-12 mb-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Expert management of diabetes, hypertension, heart disease, and other chronic conditions with personalized treatment plans.
              </p>
              <Link href="/services/chronic-care" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors">
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
              Can't Make the Drive? We Offer Telehealth
            </h2>
            
            <p className="text-[var(--color-ink)] leading-relaxed mb-6 text-center">
              For Vestavia Hills residents who prefer the convenience of virtual care or have difficulty traveling to our Birmingham office, we offer comprehensive telehealth services. Our secure video appointments allow you to receive the same high-quality care from the comfort of your home, office, or anywhere with an internet connection.
            </p>
            
            <p className="text-[var(--color-ink)] leading-relaxed text-center">
              Most insurance plans cover telehealth visits, and our direct primary care membership includes unlimited virtual consultations at no additional cost. Perfect for follow-up appointments, medication management, and many acute care needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                How far is Guardian Primary Care from Vestavia Hills?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our Birmingham office is conveniently located just 10-15 minutes from downtown Vestavia Hills via US-31 and I-65. The short commute makes it easy for Vestavia Hills residents to access our comprehensive primary care services without significant travel time.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                What are the best directions from Vestavia Hills?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From Vestavia Hills, take US-31 (Montgomery Highway) north toward Birmingham. Our office is easily accessible from I-65 and I-459 as well. We recommend calling our office at the time of scheduling for specific directions based on your starting location, and we'll provide detailed turn-by-turn guidance.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Do you offer telehealth for Vestavia Hills patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer comprehensive telehealth services for all our patients, including those from Vestavia Hills. Virtual appointments are perfect for follow-ups, medication management, minor acute issues, and routine consultations. Our direct primary care members have unlimited telehealth access included in their membership.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Is parking available at your Birmingham location?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we offer ample free parking for all patients at our Birmingham location. Our facility is fully accessible with convenient entrance access, and we're committed to making your visit as comfortable and stress-free as possible from the moment you arrive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from Vestavia Hills
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Experience personalized primary care that puts you first. Schedule your appointment today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-5 rounded-lg transition-all hover:scale-105 text-lg"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>

    </main>
  )
}