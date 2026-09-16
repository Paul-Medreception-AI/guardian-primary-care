import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Managing Multiple Chronic Conditions Together',
  description: 'Why treating conditions one at a time fails, and how coordinated primary care unifies medications, care plans and specialists around the whole person.',
  openGraph: {
    title: 'Managing Multiple Chronic Conditions Together',
    description: 'Why treating conditions one at a time fails, and how coordinated primary care unifies medications, care plans and specialists around the whole person.',
    type: 'article',
    url: 'https://www.guardianprimary.com/blog/managing-multiple-chronic-conditions-a-coordinated-care-appr',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight text-center mb-8">
            Managing Multiple Chronic Conditions: A Coordinated Care Approach
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Guardian Primary Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-role-of-holistic-integrative-care.jpg"
              alt="A calm consultation setting, illustrating care that looks at the whole person rather than one condition at a time"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="bg-white pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're managing diabetes, high blood pressure, and heart disease simultaneously, you're not alone. Millions of American adults live with multiple chronic conditions, a situation that grows more common as we age. What many don't realize is that managing several conditions at once isn't simply about treating each disease separately. It requires a fundamentally different approach to healthcare, one that looks at the whole person rather than isolated diagnoses.
            </p>
            <p className="mb-6">
              The challenge of managing multiple chronic conditions, often called multimorbidity, can feel overwhelming. Different specialists, conflicting medication schedules, and competing treatment priorities create a complex healthcare landscape that's difficult to navigate alone. But there's a better way, one that places you at the center of a coordinated care team working together toward your overall health and wellbeing.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Understanding Multimorbidity
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Multimorbidity is defined as having two or more chronic conditions at the same time. These conditions might include diabetes, heart disease, chronic kidney disease, arthritis, depression, asthma, or any combination of long-term health issues. According to the Centers for Disease Control and Prevention, more than a quarter of U.S. adults live with multiple chronic conditions, and the share climbs steeply with age.
            </p>
            <p className="mb-6">
              What makes multimorbidity particularly challenging is that chronic conditions often interact with each other in complex ways. Diabetes can worsen heart disease. Depression can make it harder to manage physical conditions. Arthritis can limit the exercise needed to control blood sugar. Each condition influences the others, creating a web of interconnected health challenges that require comprehensive, coordinated management.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            The Problem with Fragmented Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Traditional healthcare often treats each condition in isolation. You might see a cardiologist for your heart, an endocrinologist for your diabetes, and a rheumatologist for your arthritis. Each specialist focuses on their area of expertise, prescribing medications and treatments based on their specific condition. While each specialist provides excellent care within their own field, the lack of coordination between them can create real problems.
            </p>
            <p className="mb-6">
              Fragmented care leads to medication conflicts, duplicated tests, contradictory advice, and treatment plans that don't account for your other conditions. You become responsible for coordinating your own care, keeping track of multiple appointments, remembering which provider said what, and trying to reconcile conflicting recommendations. This burden not only creates stress but can lead to medication errors, missed appointments, and worse health outcomes.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light">
              "Coordinated care isn't just about treating diseases, it's about caring for the whole person and ensuring that all aspects of your health work together rather than against each other."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            What Coordinated Care Looks Like
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Coordinated care places a primary care provider at the center of your healthcare team. That provider knows your complete medical history, understands how your conditions interact, and works to keep every part of your care aligned with your overall health goals. Rather than managing conditions in silos, coordinated care takes a holistic approach that considers the whole person.
            </p>
            <p className="mb-6">
              In a coordinated care model, your primary care provider communicates regularly with your specialists, reviews all medications to prevent interactions, helps you prioritize treatments when time and money are limited, and makes sure care plans from different offices complement rather than contradict each other. Your provider becomes the point person for the whole team, keeping everyone working toward the same goals.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, Missouri, this is the everyday work of primary care. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available as an alternative if you would rather pay a flat monthly rate with direct access to your provider. Longer visits and steady communication are what make managing several conditions at once workable.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Key Components of Effective Coordination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Successful management of multiple chronic conditions requires several essential elements working together:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold">Comprehensive Medication Management:</span> Regular review of all medications to identify interactions, eliminate duplicates, and ensure each medication serves a clear purpose without creating additional problems.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold">Unified Care Planning:</span> A single, comprehensive care plan that addresses all conditions simultaneously, with clear priorities and realistic goals that account for the complexity of managing multiple diseases.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold">Regular Monitoring and Adjustment:</span> Frequent check-ins to assess how treatments are working, identify new concerns early, and adjust care plans as conditions evolve or new challenges emerge.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold">Patient Education and Support:</span> Clear, practical information about each condition, how they interact, and what you can do to manage them effectively at home.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold">Lifestyle Integration:</span> Practical strategies for diet, exercise, stress management, and daily habits that support all conditions rather than focusing on just one.
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            The Role of Technology in Coordination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Modern healthcare technology plays an important role in coordinating care for multiple chronic conditions. Electronic health records allow all providers to access your complete medical history, lab results, and medication lists in real time. Patient portals enable secure communication with your care team, making it easier to ask questions, report symptoms, and stay engaged in your care between appointments.
            </p>
            <p className="mb-6">
              Remote monitoring devices can track vital signs, blood sugar levels, weight, and other important metrics, alerting your care team to concerning trends before they become emergencies. This technology enables more proactive management and helps prevent hospitalizations by catching problems early.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Taking an Active Role in Your Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While coordinated care requires a provider willing to lead the team, your active participation matters just as much. You are the only person who experiences all aspects of your health every day, making your observations and concerns invaluable to the care team.
            </p>
            <p className="mb-6">
              Practical steps you can take include keeping a current list of all medications including dosages, tracking symptoms or concerning changes in a journal, preparing questions before appointments, being honest about challenges you face in following treatment plans, and reporting side effects or new symptoms promptly rather than waiting for your next scheduled visit.
            </p>
            <p className="mb-6">
              Remember that managing multiple chronic conditions is a marathon, not a sprint. Some days will be harder than others. What matters is consistent effort over time, supported by a care team that understands your unique situation and works with you toward realistic, meaningful goals.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Managing multiple chronic conditions doesn't have to feel overwhelming or impossible. With coordinated care that places you at the center of an integrated team, it's possible to not just manage your conditions but to thrive despite them. The key is finding a primary care provider who has the time, the expertise, and the commitment to see you as a whole person rather than a collection of diagnoses.
            </p>
            <p>
              If you're struggling to coordinate care across several offices, or you feel lost in a fragmented system, it may be time for a different approach. Call Guardian Primary Care in Cape Girardeau, Missouri at <a href="tel:+15732006143" className="text-[var(--color-primary)] underline">(573) 200-6143</a> and we will start by getting the whole picture in one place.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Nurse practitioner led primary care in Cape Girardeau, Missouri. Reviewed by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center font-light">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/blog/managing-type-2-diabetes-lifestyle-changes-that-make-a-diffe" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Health Management
                </div>
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing Type 2 Diabetes: Lifestyle Changes That Make a Difference
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Practical strategies for managing type 2 diabetes with coordinated primary care support.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/blog/heart-disease-prevention-small-changes-that-protect-your-hea" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Preventive Care
                </div>
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Heart Disease Prevention: Small Changes That Protect Your Heart
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How proactive primary care helps prevent and manage cardiovascular disease.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/blog/the-role-of-exercise-in-chronic-disease-management" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Patient Education
                </div>
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Role of Exercise in Chronic Disease Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How movement supports several conditions at once, and how to start at any fitness level.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our care team in Cape Girardeau, Missouri is here to bring your care together in one place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/70 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Call (573) 200-6143
            </a>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Guardian Primary Care &middot; 2441 Myra Dr, Cape Girardeau, MO 63703 &middot; By Appointment
          </p>
        </div>
      </section>
    </main>
  )
}