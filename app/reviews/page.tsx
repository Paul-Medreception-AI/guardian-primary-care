import Link from 'next/link'

export const metadata = {
  title: 'Patient Reviews | Guardian Primary Care',
  description: 'Read what patients say about their experience with Guardian Primary Care in Birmingham, AL. Share your feedback and help us continue delivering compassionate, personalized healthcare.',
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Your feedback helps us grow and ensures we continue delivering the compassionate, personalized care you deserve.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-10">
            At Guardian Primary Care, we're committed to providing exceptional, patient-centered healthcare for you and your family. Your honest feedback helps us understand what we're doing well and where we can improve. Whether you'd like to share a testimonial, offer a suggestion, or tell us about your experience, we welcome your voice.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>

          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-6">
            Experience Care Built Around You
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join the Guardian Primary Care family and discover healthcare focused on access, trust, and thoughtful attention at every stage of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule an Appointment
            </Link>
            <Link 
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-medium transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}