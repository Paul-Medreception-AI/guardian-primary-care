import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Guardian Primary Care',
  description: 'Guardian Primary Care offers compassionate, personalized healthcare for every stage of life in Birmingham, AL. Board-certified providers dedicated to accessible, evidence-based care.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-sm mb-6 text-white/70">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="text-white">About</span>
          </div>
          <h1 className="text-6xl font-light text-white" style={{fontFamily: 'var(--font-cormorant)'}}>
            Healthcare That Puts People First
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            Delivering compassionate, accessible primary care built on trust, evidence, and genuine relationships with every patient we serve.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-3 lg:pr-12">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Guardian Primary Care was founded on the belief that exceptional healthcare begins with a strong patient-provider relationship built on trust, accessibility, and thoughtful attention. We understand that navigating the healthcare system can be overwhelming, which is why we've created a practice that prioritizes your time, your concerns, and your individual health goals. Whether you're managing a chronic condition, seeking preventative care, or supporting an aging loved one, our team is committed to delivering evidence-based medicine with genuine compassion.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
                Our practice offers the flexibility to choose the care model that works best for you. For patients who prefer traditional insurance-based care, we proudly accept most major commercial insurances, Medicare, and Medicaid. For those seeking a more personalized experience with enhanced access, our Guardian Direct Care membership model eliminates insurance barriers and provides same-day or next-day appointments, extended visit times, and direct communication with your provider. This dual approach ensures that every patient receives the level of care and attention they deserve.
              </p>
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                We take particular pride in our specialized services for aging adults and families affected by dementia. Through partnerships with community organizations dedicated to supporting older adults and caregivers, we deliver coordinated, compassionate care that addresses not just medical needs but also the emotional and practical challenges families face. From comprehensive wellness programs to specialized geriatric care, Guardian Primary Care serves as your healthcare partner through every stage of life, helping you and your loved ones achieve optimal health and well-being.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">In-Network With Most Major Insurances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Direct Primary Care Available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Telehealth and In-Person Visits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Same-Day Appointments for Urgent Concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Specialized Dementia & Aging Adult Care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Family-Centered Care for All Ages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Community Partnerships for Holistic Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-light text-center text-[var(--color-ink)] mb-16" style={{fontFamily: 'var(--font-cormorant)'}}>
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Trust & Transparency
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We believe healthcare decisions should be made collaboratively, with clear communication and honest guidance. Our team ensures you understand every aspect of your care, empowering you to make informed choices about your health and well-being.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Accessibility & Time
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Healthcare shouldn't be rushed or inconvenient. We offer flexible scheduling, extended appointments, and multiple visit options—telehealth or in-person—so you receive the attention you deserve when and how you need it most.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Compassion & Partnership
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Every patient is unique, and so is their healthcare journey. We approach care with empathy and respect, treating you as a partner in achieving your health goals through personalized, evidence-based medicine delivered with genuine compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Experience healthcare that prioritizes you. Schedule your appointment today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Schedule an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}