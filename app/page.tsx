import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <Image 
          src="/images/660c67a10cb64912abb115da_2F6a1256338f34ca7e12ee57d3_Main_20w.jpg" 
          alt="Guardian Primary Care" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 to-primary/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight font-cormorant">
            Comprehensive Primary Care Built Around You and Your Family
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Guardian Primary Care offers compassionate, personalized healthcare for every stage of life, from childhood through retirement. Whether you prefer traditional insurance or direct primary care, we deliver accessible, evidence-based care when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Schedule an Appointment
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Board-Certified Providers</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">In-Network With Most Major Insurances</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Direct Primary Care Available</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">Telehealth and In-Person Visits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive care tailored to you and your family's unique needs at every stage of life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Primary Care */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Family Primary Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Comprehensive primary care services for patients of all ages, from pediatric wellness exams to geriatric management. We provide routine check-ups, sick visits, chronic disease management, and preventative care tailored to each family member's unique needs.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Dementia & Aging Adult Care */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                <path d="M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Dementia & Aging Adult Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Specialized care for older adults and families affected by dementia and related conditions. Our compassionate approach focuses on evidence-based treatment, caregiver support, and maintaining dignity and quality of life throughout the care journey.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Wellness & Prevention */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg className="w-10 h-10 stroke-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Wellness & Prevention
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Proactive health optimization including nutrition counseling, cancer screenings, mental health support, and exercise guidance. We help you take preventative steps to live a long, happy life as the best version of yourself.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
                Healthcare That Puts People First
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                Guardian Primary Care was founded on the belief that exceptional healthcare begins with a strong patient-provider relationship built on trust, accessibility, and thoughtful attention. We understand that navigating the healthcare system can be overwhelming, which is why we've created a practice that prioritizes your time, your concerns, and your individual health goals. Whether you're managing a chronic condition, seeking preventative care, or supporting an aging loved one, our team is committed to delivering evidence-based medicine with genuine compassion.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Our practice offers the flexibility to choose the care model that works best for you. For patients who prefer traditional insurance-based care, we proudly accept most major commercial insurances, Medicare, and Medicaid. For those seeking a more personalized experience with enhanced access, our Guardian Direct Care membership model eliminates insurance barriers and provides same-day or next-day appointments, extended visit times, and direct communication with your provider. This dual approach ensures that every patient receives the level of care and attention they deserve.
              </p>
              <Link href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg className="w-20 h-20 stroke-[var(--color-primary)] opacity-40" viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 01 */}
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">01</div>
              <h3 className="font-cormorant text-2xl mb-4">Schedule Your Visit</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Contact us by phone or through our patient portal to book your appointment. We offer flexible scheduling with same-day availability for urgent concerns and both in-person and telehealth options to fit your needs.
              </p>
            </div>

            {/* Step 02 */}
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">02</div>
              <h3 className="font-cormorant text-2xl mb-4">Meet Your Provider</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                During your visit, our licensed and experienced providers take time to understand your health history, current concerns, and wellness goals. We believe in collaborative care where you're an active partner in every decision about your health.
              </p>
            </div>

            {/* Step 03 */}
            <div className="text-center">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">03</div>
              <h3 className="font-cormorant text-2xl mb-4">Receive Ongoing Care</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Healthcare doesn't end when you leave our office. We provide continuous support through follow-up appointments, care coordination, and accessible communication to ensure you stay on track with your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">
            Access, Trust, and Thoughtful Care for Life
          </h2>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}