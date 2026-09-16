import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sports Physicals: What Parents Need to Know | Guardian',
  description: 'What a sports physical covers, when to schedule it, how to prepare your young athlete, and what happens if something turns up, in Cape Girardeau, MO.',
  openGraph: {
    title: 'Sports Physicals for Young Athletes: What Parents Need to Know',
    description: 'What a sports physical covers, when to schedule it, how to prepare your young athlete, and what happens if something turns up, in Cape Girardeau, MO.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
    authors: ['Guardian Primary Care'],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight mb-6 text-center font-display">
            Sports Physicals for Young Athletes: What Parents Need to Know
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Guardian Primary Care Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/site/cond-school-sports-employment-screenings.jpg"
              alt="A young volleyball player holding a ball on the court before a match"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-4 text-center leading-relaxed">
            Guardian Primary Care provides school, sports and employment screenings for families across Cape Girardeau and Southeast Missouri.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The permission slip is signed, the equipment is ready, and your child cannot wait for the season to start. There is one more step before they get onto the field, court or track: the sports physical. It can look like just another box to tick on a busy parent&apos;s list, but the exam does real work in keeping young athletes safe through a competitive season.
            </p>
            <p className="mb-6">
              For families in Cape Girardeau, Missouri, knowing what a sports physical covers (and why it matters) helps make sure your child gets the care they need to play safely.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            What Is a Sports Physical?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A sports physical, formally known as a pre-participation physical examination (PPE), is a specialized medical assessment designed to evaluate whether a child or adolescent is healthy enough to safely participate in organized sports. Unlike a routine annual physical, which takes a broad look at overall health, a sports physical focuses specifically on aspects of health that could affect athletic performance or put an athlete at risk during physical activity.
            </p>
            <p className="mb-6">
              Missouri schools and athletic programs generally require a current sports physical on file before a student may participate. The exam has two main parts: a detailed medical history review and a physical examination.
            </p>
            <p className="mb-6">
              The medical history portion covers previous injuries, chronic conditions, medications, family history of heart problems, and any symptoms that occur during exercise such as chest pain, dizziness, or unusual shortness of breath. The physical exam assesses vital signs, heart and lung function, vision, musculoskeletal system, and overall physical development.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Why Sports Physicals Matter
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The main goals of a sports physical are preventing injury and catching conditions that could become dangerous during hard exercise. Sudden cardiac events in young athletes are rare, but they are a leading cause of sudden death during sports participation, and a careful history and exam can pick up warning signs of a heart condition that would otherwise go unnoticed.
            </p>
            <p className="mb-6">
              Beyond the cardiac screening, the exam helps identify musculoskeletal problems that lead to injury. Your provider may notice muscle imbalances, limited flexibility, or an old injury that never fully healed, all of which raise the risk of the next one. Catching them early makes room for targeted work: physical therapy, strength training, or a change to the training plan.
            </p>
            <p className="mb-6">
              These examinations also provide an opportunity to address other health concerns that can affect athletic performance, including asthma, allergies, nutrition, hydration, concussion history, and mental health. For many young athletes, the sports physical is their primary healthcare touchpoint each year, making it an important opportunity for comprehensive wellness screening.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light font-display">
              &ldquo;A sports physical is not just about getting clearance. It is about supporting your child&apos;s health and performance, and lowering the risk of injury across a whole athletic career.&rdquo;
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            When to Schedule Your Child's Sports Physical
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Timing matters. Each school and athletic program sets its own window for how recent the exam has to be, so check the dates printed on your child&apos;s form rather than assuming last year&apos;s physical still counts. Whatever the window, booking the appointment several weeks before the season starts is the better plan.
            </p>
            <p className="mb-6">
              That buffer leaves room to deal with anything the exam turns up. If your child needs follow-up testing, a specialist consultation, physical therapy or treatment for a condition, you will have time to get it done before tryouts or the first practice. Waiting until the last minute is how an athlete ends up missing the start of a season.
            </p>
            <p className="mb-6">
              Some families combine the sports physical with their child&apos;s annual wellness exam, and others prefer to keep them separate. Both work. If you combine them, tell the office when you book that you also need sports clearance, and bring the forms from your child&apos;s school or athletic program.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            How to Prepare for the Appointment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A little preparation can help ensure your child's sports physical is thorough and efficient. Here's what you should bring and review before the appointment:
            </p>
            
            <div className="space-y-3 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Completed medical history forms from your child's school or athletic program</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Immunization records to ensure vaccines are up to date</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">List of current medications, supplements, and vitamins</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Information about any previous injuries or surgeries</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Family health history, especially heart conditions or sudden deaths in relatives under age 50</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">Glasses or contact lenses if your child wears them</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed">A list of questions or concerns you want to discuss</span>
              </div>
            </div>

            <p className="mb-6 mt-6">
              Encourage your child to be honest about anything they have felt during exercise, even if it seems minor. Chest pain, unusual fatigue, dizziness, fainting and trouble breathing are all worth reporting, even if they happened only once or twice.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            What Happens If Issues Are Found
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Most young athletes clear their sports physical without any concerns. If your provider does find something, it does not automatically mean your child cannot play. Usually it means some additional evaluation or treatment comes first.
            </p>
            <p className="mb-6">
              Common findings that might require follow-up include uncontrolled asthma requiring medication adjustment, high blood pressure needing monitoring, heart murmurs requiring cardiology evaluation, previous concussion needing neurological clearance, or musculoskeletal issues requiring physical therapy or orthopedic consultation.
            </p>
            <p className="mb-6">
              Your provider will guide you through next steps and help coordinate any necessary referrals. In some cases, conditional clearance may be granted, allowing your child to participate in certain activities while evaluation continues. The goal is always to enable safe participation while protecting your child's health.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Beyond the Physical: Supporting Your Young Athlete
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the sports physical provides medical clearance, supporting your young athlete's health is an ongoing commitment throughout the season. Proper nutrition, adequate hydration, sufficient sleep, appropriate training progression, and attention to mental health all play crucial roles in athletic performance and injury prevention.
            </p>
            <p className="mb-6">
              Watch for warning signs during the season: pain that does not improve with rest, a drop in performance or enthusiasm, signs of overtraining such as fatigue or mood changes, or any symptom that shows up during or after exercise. Call your provider when something concerns you, because early attention keeps small problems from becoming season-ending ones.
            </p>
            <p className="mb-6">
              Remember that sports should be a positive experience that promotes physical health, life skills, and enjoyment. The sports physical is just the beginning of a season-long commitment to keeping your young athlete healthy, safe, and performing their best.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If your young athlete is getting ready for a season in Cape Girardeau, Missouri, the sports physical is the first thing to book. Guardian Primary Care provides school, sports and employment screenings, and our team takes the time to do the exam properly rather than treating it as a form to sign. We are in-network with most major commercial insurances, Medicare and Medicaid, and for families on <a href="/services/guardian-direct-care" className="text-[var(--color-primary)] underline">Guardian Direct Care</a> the children&apos;s plan includes annual and sports physicals.
            </p>
            <p>
              Do not leave it until the last week. Visits are by appointment: call (573) 200-6143 or request an appointment online, and bring your child&apos;s school forms along. Our team is glad to talk through what your family needs before you book.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-[var(--color-ink)] mb-1">
                Written by the Guardian Primary Care team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri Licensed Collaborating Physician, caring for families in Cape Girardeau and Southeast Missouri.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center font-display">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Preventive Care
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  The Importance of Annual Wellness Exams for Adults
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How a yearly check-in catches problems early and keeps the rest of your family&apos;s care on track.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/flu-vaccines-myths-facts-and-why-you-should-get-one" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Youth Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Flu Vaccines: Myths, Facts, and Why You Should Get One
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What the flu shot does, what it does not do, and when to get one before the season starts.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/sleep-and-health-why-quality-sleep-matters-for-overall-welln" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Healthy Habits
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Sleep and Health: Why Quality Sleep Matters
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why rest is part of training, and how poor sleep shows up in mood, performance and recovery.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 font-display">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your athlete&apos;s pre-participation exam with our team in Cape Girardeau, and bring the school forms with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Schedule Your Sports Physical
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/60 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
            >
              Call (573) 200-6143
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Visits are by appointment.
          </p>
        </div>
      </section>
    </main>
  )
}