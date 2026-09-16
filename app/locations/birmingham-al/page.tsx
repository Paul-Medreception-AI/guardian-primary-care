import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Primary Care in Birmingham, AL | Guardian Primary Care',
  description: 'Guardian Primary Care serves Birmingham, AL with expert Primary Care and DPC services. Convenient location, telehealth options, and personalized care for Birmingham residents.',
}

export default function BirminghamLocationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <span className="mx-2">›</span>
            <span>Birmingham, AL</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Primary Care / DPC Near Birmingham, AL
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl">
            Serving patients from Birmingham and surrounding AL communities. Expert psychiatric care is closer than you think.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule in Birmingham
          </Link>
        </div>
      </section>

      {/* Serving Birmingham Area */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-8 text-center">
            Serving the Birmingham Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 mb-12">
            <p>
              Guardian Primary Care is proud to serve patients throughout Birmingham, AL and the surrounding communities. Whether you're located downtown, in Mountain Brook, Homewood, Vestavia Hills, or Hoover, our practice offers convenient access to comprehensive Primary Care and Direct Primary Care services. We understand that finding quality healthcare close to home matters, and we've made it easy for Birmingham residents to receive the personalized, expert care they deserve without lengthy commutes.
            </p>
            <p>
              Patients from Birmingham choose Guardian Primary Care because of our commitment to individualized treatment, extended appointment times, and a relationship-based approach to healthcare. Unlike crowded urgent care centers or impersonal large hospital systems, we take the time to truly understand your health goals and concerns. For those with busy schedules or transportation challenges, we also offer secure telehealth appointments, bringing quality Primary Care directly to your home or office in Birmingham.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Conveniently located to serve Birmingham, AL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Services Available to Birmingham Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-4">
                Comprehensive Health Assessments
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Thorough evaluations and personalized treatment plans tailored to your unique health needs and goals.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-4">
                Direct Primary Care
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Membership-based care with extended visits, same-day appointments, and direct access to your physician.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-4">
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Ongoing support and evidence-based treatment for diabetes, hypertension, heart disease, and other chronic conditions.
              </p>
              <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-['Cormorant'] text-3xl md:text-4xl font-light text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)]/80">
            <p>
              For Birmingham residents with busy schedules, mobility challenges, or who simply prefer the convenience of virtual care, Guardian Primary Care offers comprehensive telehealth services. Through secure video appointments, you can receive the same high-quality Primary Care and DPC services from the comfort of your Birmingham home or office.
            </p>
            <p>
              Our telehealth visits are covered by most major insurance plans and provide an excellent option for follow-up appointments, medication management, and ongoing care coordination. You'll work with the same dedicated provider who takes the time to understand your health journey, ensuring continuity of care whether you visit in person or connect virtually.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Schedule a Telehealth Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-3">
                How far is Guardian Primary Care from Birmingham?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Guardian Primary Care is conveniently located to serve all Birmingham residents and surrounding communities. Most patients from Birmingham, Mountain Brook, Homewood, Vestavia Hills, and Hoover find our practice easily accessible with a short commute. Contact us for specific directions from your Birmingham neighborhood.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-3">
                What are the best directions from Birmingham to your practice?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We're easily accessible from all major Birmingham routes. Whether you're coming from downtown Birmingham, the Summit area, or I-65/I-459 corridors, our location offers convenient access with ample parking. Call our office for turn-by-turn directions specific to your starting point in Birmingham.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-3">
                Do you offer telehealth for Birmingham patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! Guardian Primary Care offers secure telehealth appointments for Birmingham residents. Virtual visits are ideal for follow-ups, medication management, and many primary care needs. Telehealth provides the same personalized care you'd receive in person, without the drive. Most insurance plans cover telehealth services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 animate-fade-up">
              <h3 className="font-['Cormorant'] text-2xl font-light text-[var(--color-ink)] mb-3">
                Is your office accessible for Birmingham patients with mobility concerns?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Absolutely. Our practice is fully accessible with convenient parking close to the entrance, wheelchair accessibility, and accommodations for patients with mobility challenges. We strive to make every Birmingham patient's visit comfortable and stress-free. Please let us know if you have specific accessibility needs when scheduling your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6">
            Get Expert Care from Birmingham
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Experience personalized Primary Care and DPC services designed around your needs. Schedule your appointment today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-lg font-semibold transition-colors"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}