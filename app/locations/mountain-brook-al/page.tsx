import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Primary Care Near Mountain Brook, AL | Guardian Primary Care',
  description: 'Serving patients from Mountain Brook and surrounding AL communities with expert primary care and DPC services. Telehealth available.',
}

export default function MountainBrookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>Mountain Brook, AL</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            Primary Care / DPC Near Mountain Brook, AL
          </h1>
          <p className="text-xl mb-10 text-white/90 max-w-3xl leading-relaxed">
            Serving patients from Mountain Brook and surrounding AL communities. Expert primary care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
          >
            Schedule in Mountain Brook
          </a>
        </div>
      </section>

      {/* Serving Mountain Brook Area */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Serving the Mountain Brook Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12">
            <p>
              Our Birmingham practice is conveniently located just minutes from Mountain Brook, making quality primary care easily accessible to your community. Whether you're commuting from Mountain Brook Village or the surrounding neighborhoods, patients consistently tell us the short drive is well worth it for the personalized, unhurried care they receive at Guardian Primary Care.
            </p>
            <p>
              Many Mountain Brook residents choose our practice over local alternatives because of our Direct Primary Care model, which eliminates the rushed appointments and insurance hassles common at traditional clinics. With same-day or next-day availability, extended appointment times, and direct access to your physician via phone and text, we provide the concierge-level care Mountain Brook families expect. Can't make the trip? We also offer comprehensive telehealth services for your convenience.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] mb-12 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Services Available to Mountain Brook Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow duration-300">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Preventive Care
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Comprehensive wellness exams, screenings, and preventive health plans tailored to your lifestyle and family history.
              </p>
              <a href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow duration-300">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Chronic Disease Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Expert management of diabetes, hypertension, high cholesterol, and other chronic conditions with personalized treatment plans.
              </p>
              <a href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow duration-300">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Direct Primary Care
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-4 leading-relaxed">
                Membership-based care with direct access to your physician, no insurance hassles, and unlimited visits for a flat monthly fee.
              </p>
              <a href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-serif text-3xl font-light text-[var(--color-ink)] mb-6 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
              Can't Make the Drive? We Offer Telehealth
            </h2>
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed text-center mb-6">
              For Mountain Brook residents with busy schedules or mobility concerns, we offer comprehensive telehealth appointments that bring quality primary care directly to your home. Our secure video visits provide the same personalized attention and expert medical guidance as in-person appointments, with the added convenience of no commute.
            </p>
            <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed text-center">
              Telehealth services are fully covered under our Direct Primary Care membership and are also available to traditional insurance patients. Whether you need a routine follow-up, medication management, or consultation for new symptoms, our telehealth platform makes it easy to get the care you need from anywhere in Mountain Brook.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light text-[var(--color-ink)] mb-12 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                How far is Guardian Primary Care from Mountain Brook?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our Birmingham office is conveniently located just a short drive from Mountain Brook, typically 10-15 minutes depending on your starting point and traffic. Many of our Mountain Brook patients find the commute quick and easy, especially given our flexible scheduling and minimal wait times once you arrive.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                What's the best route from Mountain Brook to your practice?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Most Mountain Brook patients take US-280 or Cahaba Road to reach our Birmingham location. We're easily accessible from major Mountain Brook neighborhoods and offer ample parking. When you schedule your first appointment, our team will provide detailed directions and answer any questions about the best route from your specific area.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Do you offer telehealth for Mountain Brook residents?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We offer comprehensive telehealth services for all our Mountain Brook patients. Whether you prefer the convenience of virtual visits or need to alternate between in-person and telehealth appointments, we make it easy to receive quality primary care without the commute. Telehealth is ideal for follow-ups, medication management, and many acute care needs.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Is parking available for Mountain Brook patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Absolutely. We provide ample free parking directly adjacent to our practice, making your visit as convenient as possible. Our facility is fully accessible, with easy entry for patients with mobility concerns. We've designed every aspect of the patient experience to be stress-free, from parking to check-in to your appointment itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Get Expert Care from Mountain Brook
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Join the Mountain Brook families who trust Guardian Primary Care for personalized, unhurried medical care. Schedule your appointment today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </>
  )
}