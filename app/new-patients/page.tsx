import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Patients | Guardian Primary Care, Cape Girardeau MO',
  description:
    'Becoming a patient at Guardian Primary Care in Cape Girardeau, MO. How to schedule, what to bring and what your first visit looks like. Call (573) 200-6143.',
  alternates: { canonical: '/new-patients' },
}

const bringItems = [
  {
    title: 'Photo ID and Insurance Card',
    body: 'A current photo ID and your insurance card, if you are using insurance. Having both on hand lets us confirm your coverage before you are seen.',
  },
  {
    title: 'Your Medication List',
    body: 'Everything you take now, with doses: prescriptions, over the counter medicines, vitamins and supplements. Bringing the bottles works just as well as a list.',
  },
  {
    title: 'Records From Past Providers',
    body: 'Recent lab work, imaging reports or notes from other clinicians, if you have them. They help us understand your history and avoid repeating tests you have already had.',
  },
  {
    title: 'Your Questions',
    body: 'Write down what is on your mind, including anything you have been putting off. Your visit is your time, and we would rather hear it than miss it.',
  },
]

const visitSteps = [
  {
    number: '01',
    title: 'Reach Out',
    body: 'Call us at (573) 200-6143 or schedule your first appointment online. Tell us what you need and we will find a time that works. Visits are by appointment.',
  },
  {
    number: '02',
    title: 'Get Checked In',
    body: 'When you arrive, our team will gather your information, confirm how you would like to pay or bill, and get you settled. Come with your ID, your card and your medication list.',
  },
  {
    number: '03',
    title: 'Sit Down With Your Provider',
    body: 'You will meet your provider, talk through your history and your current concerns, and have a physical exam as needed. The goal is to understand the root cause, not just the symptom.',
  },
  {
    number: '04',
    title: 'Leave With a Plan',
    body: 'Together you will agree on next steps: testing, treatment, lifestyle changes, a referral or a follow up visit. You should leave knowing what happens next and why.',
  },
]

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>New Patients</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">New Patients</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Welcome to Guardian Primary Care. Here is what to expect before your first visit.
          </p>
        </div>
      </section>

      {/* How to schedule */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-4">
            How to Schedule
          </h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-14 leading-relaxed">
            Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, and
            Guardian Direct Care is available if you would rather pay a predictable monthly fee. Either way, getting
            started begins the same way.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">Call Us</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                The quickest way to be seen. Our team will ask a few questions and get you on the calendar.
              </p>
              <a
                href="tel:+15732006143"
                className="font-display text-2xl text-[var(--color-primary)] hover:underline"
              >
                (573) 200-6143
              </a>
            </div>
            <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">Schedule Online</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                New patients can request a first appointment online. Send us your details and we will confirm a time
                with you.
              </p>
              <Link href="/contact" className="font-semibold text-[var(--color-primary)] hover:underline">
                Request an appointment →
              </Link>
            </div>
            <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">Already a Patient?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Current patients can self-schedule on the Patient Ally portal, where you can also review your records.
                Call the office if you need help signing in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your first visit */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/site/parent-child.jpg"
                alt="A parent and child together at a family primary care visit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">What Your First Visit Looks Like</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                You will be seen by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse
                practitioner who works alongside a Missouri Licensed Collaborating Physician, supported by our nursing
                and medical assistant team.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your first visit is mostly a conversation. We want to hear your story, understand what has been going
                on, and look for the root cause rather than treating a symptom in isolation. Guardian should feel like a
                place where you can speak freely.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visitSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              >
                <div className="text-[var(--color-primary)] font-display text-6xl font-light mb-6">{step.number}</div>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">{step.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-14">What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {bringItems.map((item) => (
              <div key={item.title} className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
                <div className="flex items-start gap-4">
                  <svg
                    stroke="currentColor"
                    strokeWidth={1.5}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--color-muted)] mt-10 max-w-2xl mx-auto leading-relaxed">
            If something on this list is hard to track down, come anyway. Call us at{' '}
            <a href="tel:+15732006143" className="text-[var(--color-primary)] hover:underline">(573) 200-6143</a>{' '}
            and we will sort it out with you.
          </p>
        </div>
      </section>

      {/* Coverage and telehealth */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)] animate-fade-up">
            <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">Insurance and Cost</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              We are in-network with most major commercial insurances, Medicare and Medicaid. If you would rather not
              bill insurance for your primary care, Guardian Direct Care offers predictable monthly pricing starting at
              $40 a month, and fee-for-service self-pay pricing is available on request.
            </p>
            <Link href="/insurance" className="font-semibold text-[var(--color-primary)] hover:underline">
              See coverage and pricing →
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)] animate-fade-up">
            <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4">In Person or by Telehealth</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Guardian offers both in-person and telehealth appointments. Some concerns need an in-person exam, and our
              team will help you choose the right kind of visit when you schedule.
            </p>
            <Link href="/telehealth" className="font-semibold text-[var(--color-primary)] hover:underline">
              Learn about telehealth →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Compassionate, comprehensive primary care for every stage of life, right here in Cape Girardeau, Missouri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15732006143"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold transition-colors hover:bg-white/90"
            >
              Call (573) 200-6143
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors backdrop-blur-sm"
            >
              Request an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
