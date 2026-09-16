import Link from 'next/link'

export const metadata = {
  title: 'Insurance & Billing | Guardian Primary Care',
  description: 'Transparent pricing and billing information for Guardian Primary Care in Birmingham, AL. We accept most major insurance plans and offer flexible self-pay options.',
}

export default function InsurancePage() {
  const insuranceProviders = [
    'Aetna',
    'BlueCross BlueShield',
    'Cigna',
    'UnitedHealthcare',
    'Humana',
    'Medicare',
    'Medicaid',
    'Tricare',
    'Anthem',
    'Magellan'
  ]

  const billingSteps = [
    {
      title: 'Verify Coverage',
      description: 'We verify your insurance benefits before your appointment to help you understand your coverage and any out-of-pocket costs.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Service Provided',
      description: 'You receive care from our board-certified providers. We document all services, procedures, and diagnoses for accurate billing.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      title: 'Claim Submitted',
      description: 'We submit claims to your insurance company on your behalf and handle all the paperwork and follow-up communications.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: 'You Pay Remainder',
      description: 'After your insurance processes the claim, you receive an Explanation of Benefits (EOB) and we bill you for any remaining balance like co-pays or deductibles.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: 'Do you accept my insurance?',
      answer: 'We are in-network with most major insurance plans including Aetna, BlueCross BlueShield, Cigna, UnitedHealthcare, Humana, Medicare, Medicaid, Tricare, Anthem, and Magellan. We recommend calling our office to verify your specific plan coverage before your first visit.'
    },
    {
      question: 'What is a co-pay and when do I pay it?',
      answer: 'A co-pay is a fixed amount you pay for a covered healthcare service, usually due at the time of your visit. The amount varies by insurance plan and service type. Your insurance card typically lists your co-pay amounts for office visits, specialists, and prescriptions.'
    },
    {
      question: 'What is a deductible?',
      answer: 'A deductible is the amount you must pay out-of-pocket for healthcare services before your insurance begins to pay. For example, if your deductible is $1,500, you pay the full cost of services until you reach that amount, then your insurance starts covering according to your plan benefits.'
    },
    {
      question: 'What is an EOB and why did I receive one?',
      answer: 'An Explanation of Benefits (EOB) is a statement from your insurance company showing what costs they covered for a medical service and what you may owe. It is not a bill. The EOB helps you understand how your insurance processed your claim. You will receive a separate bill from our office for any remaining patient responsibility.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, credit cards (Visa, MasterCard, Discover, American Express), debit cards, and HSA/FSA cards. Payment is expected at the time of service for co-pays and self-pay patients. For balances after insurance processing, we offer flexible payment plans for qualifying patients.'
    }
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Insurance & Billing</h1>
          <p className="text-xl text-white/90">Transparent pricing and billing information</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-16">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up hover:shadow-lg transition-shadow"
              >
                {provider}
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--color-muted)] mt-12 max-w-2xl mx-auto">
            We are in-network with most major insurance plans. If you don't see your insurance provider listed, please contact our office to verify coverage. We are always expanding our network to serve you better.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-16">How Billing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {billingSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="flex justify-center mb-6 text-[var(--color-primary)]">
                  {step.icon}
                </div>
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">{step.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">Understanding Your Bill</h3>
              <div className="space-y-4 text-[var(--color-muted)]">
                <p>
                  <strong className="text-[var(--color-ink)]">Co-pays:</strong> Fixed amounts due at the time of service, as specified by your insurance plan. These are typically required for office visits and are not applied to your deductible.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">Deductibles:</strong> The amount you must pay before your insurance coverage begins. Once met, your insurance will pay according to your plan's coverage levels.
                </p>
                <p>
                  <strong className="text-[var(--color-ink)]">Explanation of Benefits (EOB):</strong> A statement from your insurance showing how they processed your claim. This is not a bill, but explains what your insurance paid and what you may owe. Review it carefully and contact us with any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-6">Self-Pay Options</h3>
            <div className="space-y-6 text-[var(--color-muted)]">
              <p className="text-lg">
                We believe healthcare should be accessible to everyone. For patients without insurance or those who prefer not to use insurance, we offer transparent self-pay pricing and flexible payment options.
              </p>
              
              <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Sliding Scale Fees</h4>
                <p>We offer reduced fees based on household income and family size for qualifying patients. Our goal is to ensure financial barriers don't prevent you from receiving quality care.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Payment Plans</h4>
                <p>For larger balances, we offer interest-free payment plans that allow you to spread costs over several months. Contact our billing team to discuss options that work for your budget.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Good Faith Estimates</h4>
                <p>Under the No Surprises Act, uninsured or self-pay patients have the right to receive a Good Faith Estimate of expected charges before receiving services. Request your estimate when scheduling, and we'll provide a clear breakdown of anticipated costs.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
                <h4 className="font-semibold text-[var(--color-ink)] mb-3">Direct Primary Care Membership</h4>
                <p>Our Guardian Direct Care membership offers unlimited primary care services for a simple monthly fee with no insurance billing. This provides predictable costs and enhanced access to your provider. <Link href="/services" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">Learn more about Direct Primary Care</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-[var(--color-ink)] mb-16">Billing FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden group animate-fade-up"
              >
                <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Questions About Billing?</h2>
          <p className="text-xl text-white/90 mb-12">
            Our billing team is here to help you understand your coverage and answer any questions about costs or payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact Our Billing Team
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-50 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}