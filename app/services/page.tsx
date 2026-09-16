import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Guardian Primary Care | Birmingham, AL',
  description: 'Comprehensive primary care services including family medicine, dementia care, wellness & prevention, women\'s health, physicals, and direct primary care membership in Birmingham, AL.',
}

export default function ServicesPage() {
  const services = [
    {
      name: "Family Primary Care",
      description: "Comprehensive primary care services for patients of all ages, from pediatric wellness exams to geriatric management. We provide routine check-ups, sick visits, chronic disease management, and preventative care tailored to each family member's unique needs.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      name: "Dementia & Aging Adult Care",
      description: "Specialized care for older adults and families affected by dementia and related conditions. Our compassionate approach focuses on evidence-based treatment, caregiver support, and maintaining dignity and quality of life throughout the care journey.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      name: "Wellness & Prevention",
      description: "Proactive health optimization including nutrition counseling, cancer screenings, mental health support, and exercise guidance. We help you take preventative steps to live a long, happy life as the best version of yourself.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      name: "Women's Wellness",
      description: "Comprehensive women's health services including annual exams, preventive screenings, reproductive health, and hormone management. We provide personalized, empowering care for women at every life stage.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      name: "School, Sports & Employment Physicals",
      description: "Convenient physical exams and health screenings for school enrollment, athletic participation, and employment requirements. We ensure students and employees meet all health clearance requirements efficiently and thoroughly.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    },
    {
      name: "Guardian Direct Care",
      description: "Our direct primary care membership model offers enhanced access, longer appointments, and affordable care without insurance billing complexities. Experience a healthcare relationship built on trust, time, and personalized attention.",
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-[var(--color-primary)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Schedule Your Visit",
      description: "Contact us by phone or through our patient portal to book your appointment. We offer flexible scheduling with same-day availability for urgent concerns and both in-person and telehealth options to fit your needs."
    },
    {
      number: "02",
      title: "Meet Your Provider",
      description: "During your visit, our licensed and experienced providers take time to understand your health history, current concerns, and wellness goals. We believe in collaborative care where you're an active partner in every decision about your health."
    },
    {
      number: "03",
      title: "Receive Ongoing Care",
      description: "Healthcare doesn't end when you leave our office. We provide continuous support through follow-up appointments, care coordination, and accessible communication to ensure you stay on track with your health goals."
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
          <h1 className="font-serif text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto mt-4">
            Comprehensive, personalized care designed to meet your health needs at every stage of life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-4">
            Comprehensive Care for Every Need
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            From preventive care to specialized treatment, our services are designed to support your health journey with compassion and expertise
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
              >
                <div className="flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mt-5 text-center">
                  {service.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  {service.description}
                </p>
                <div className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline text-center">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-4">
            How It Works
          </h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            Getting started with Guardian Primary Care is simple and straightforward
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-up">
                <div className="lg:px-8">
                  <div className="font-serif text-7xl text-[var(--color-primary)] opacity-50 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-px h-32 bg-[var(--color-border)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-4">Ready to Begin?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Take the first step toward personalized, comprehensive healthcare that puts you first
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}