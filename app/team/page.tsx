import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Team | Guardian Primary Care',
  description: 'Meet the compassionate providers and staff at Guardian Primary Care in Birmingham, AL. Our board-certified team delivers personalized, evidence-based healthcare for every stage of life.',
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Our dedicated team of board-certified providers and compassionate staff are committed to delivering exceptional, personalized care for you and your family at every stage of life.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">
            Our Providers & Staff
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--color-primary)" 
                  strokeWidth={1.5} 
                  className="w-20 h-20 opacity-40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">
                  Our Provider Team
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">
                  Board-Certified Providers
                </p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Experience Personalized Care?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Schedule an appointment with our compassionate team and discover healthcare built around you and your family.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Schedule an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}