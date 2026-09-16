import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sports Physicals for Young Athletes: What Parents Need to Know | Guardian Primary Care',
  description: 'A comprehensive guide to sports physicals for student athletes in Birmingham, AL. Learn what to expect, why they matter, and how to prepare your child for their pre-participation exam.',
  openGraph: {
    title: 'Sports Physicals for Young Athletes: What Parents Need to Know',
    description: 'A comprehensive guide to sports physicals for student athletes in Birmingham, AL. Learn what to expect, why they matter, and how to prepare your child for their pre-participation exam.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
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
          <h1 className="text-5xl font-light leading-tight mb-6 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Sports Physicals for Young Athletes: What Parents Need to Know
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The permission slip is signed, the equipment is ready, and your child can't wait for the season to start. But there's one crucial step before they step onto the field, court, or track: the sports physical. While it might seem like just another checkbox on a busy parent's to-do list, this examination plays a vital role in keeping young athletes safe and healthy throughout their competitive season.
            </p>
            <p className="mb-6">
              For families in Birmingham, AL, understanding what a sports physical entails—and why it matters—can help ensure your child gets the comprehensive care they need to participate safely in the sports they love.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is a Sports Physical?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A sports physical, formally known as a pre-participation physical examination (PPE), is a specialized medical assessment designed to evaluate whether a child or adolescent is healthy enough to safely participate in organized sports. Unlike a routine annual physical, which takes a broad look at overall health, a sports physical focuses specifically on aspects of health that could affect athletic performance or put an athlete at risk during physical activity.
            </p>
            <p className="mb-6">
              Most schools and athletic programs in Alabama require a current sports physical before allowing students to participate in sports. The examination typically includes two main components: a detailed medical history review and a comprehensive physical examination.
            </p>
            <p className="mb-6">
              The medical history portion covers previous injuries, chronic conditions, medications, family history of heart problems, and any symptoms that occur during exercise such as chest pain, dizziness, or unusual shortness of breath. The physical exam assesses vital signs, heart and lung function, vision, musculoskeletal system, and overall physical development.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Sports Physicals Matter
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The primary goal of a sports physical is injury prevention and early detection of conditions that could become dangerous during athletic activity. While sudden cardiac events in young athletes are rare, they are the leading cause of death in athletes during sports participation. A thorough sports physical can identify warning signs of heart conditions that might otherwise go unnoticed.
            </p>
            <p className="mb-6">
              Beyond cardiac screening, sports physicals help identify musculoskeletal issues that could lead to injury. A provider might notice muscle imbalances, flexibility limitations, or previous injuries that haven't fully healed—all factors that increase injury risk. Early identification allows for targeted interventions like physical therapy, strength training, or modified training protocols.
            </p>
            <p className="mb-6">
              These examinations also provide an opportunity to address other health concerns that can affect athletic performance, including asthma, allergies, nutrition, hydration, concussion history, and mental health. For many young athletes, the sports physical is their primary healthcare touchpoint each year, making it an important opportunity for comprehensive wellness screening.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              "A sports physical isn't just about getting clearance—it's about optimizing your child's health and performance while minimizing injury risk throughout their athletic career."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Schedule Your Child's Sports Physical
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Timing matters when it comes to sports physicals. Most states, including Alabama, require that the examination be completed within a certain timeframe before the athletic season begins—typically within six months to one year. However, scheduling your child's physical six to eight weeks before the season starts is ideal.
            </p>
            <p className="mb-6">
              This buffer period allows time to address any issues that might be discovered during the exam. If your child needs follow-up testing, specialist consultation, physical therapy, or treatment for a condition, you'll have time to complete these steps before tryouts or the first practice. Waiting until the last minute could mean your child misses the start of their season.
            </p>
            <p className="mb-6">
              It's also worth noting that while some families combine the sports physical with their child's annual wellness exam, others prefer to schedule them separately. Both approaches work, but if you choose to combine them, make sure your provider knows that you need sports clearance and has the appropriate forms from your child's school or athletic program.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
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
              Encourage your child to be honest about any symptoms they've experienced during exercise, even if they seem minor. Chest pain, excessive fatigue, dizziness, fainting, or breathing difficulties are all important to report, even if they've only happened once or twice.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Happens If Issues Are Found
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Most young athletes pass their sports physicals without any concerns. However, if the provider identifies a potential issue, it doesn't necessarily mean your child can't play sports—it simply means additional evaluation or treatment may be needed first.
            </p>
            <p className="mb-6">
              Common findings that might require follow-up include uncontrolled asthma requiring medication adjustment, high blood pressure needing monitoring, heart murmurs requiring cardiology evaluation, previous concussion needing neurological clearance, or musculoskeletal issues requiring physical therapy or orthopedic consultation.
            </p>
            <p className="mb-6">
              Your provider will guide you through next steps and help coordinate any necessary referrals. In some cases, conditional clearance may be granted, allowing your child to participate in certain activities while evaluation continues. The goal is always to enable safe participation while protecting your child's health.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Beyond the Physical: Supporting Your Young Athlete
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the sports physical provides medical clearance, supporting your young athlete's health is an ongoing commitment throughout the season. Proper nutrition, adequate hydration, sufficient sleep, appropriate training progression, and attention to mental health all play crucial roles in athletic performance and injury prevention.
            </p>
            <p className="mb-6">
              Pay attention to warning signs during the season, such as persistent pain that doesn't improve with rest, changes in performance or enthusiasm, symptoms of overtraining like fatigue or mood changes, or any symptoms that occur during or after exercise. Don't hesitate to consult your healthcare provider if concerns arise—early intervention can prevent minor issues from becoming serious problems.
            </p>
            <p className="mb-6">
              Remember that sports should be a positive experience that promotes physical health, life skills, and enjoyment. The sports physical is just the beginning of a season-long commitment to keeping your young athlete healthy, safe, and performing their best.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If your young athlete is preparing for an upcoming sports season in Birmingham, AL, scheduling a comprehensive sports physical is an essential first step. At Guardian Primary Care, our team understands the unique healthcare needs of student athletes and provides thorough, personalized evaluations that go beyond simple clearance forms.
            </p>
            <p>
              Don't wait until the last minute—schedule your child's sports physical today and ensure they're ready for a safe, successful season. Contact our team to learn more about our sports physical services and how we can support your family's healthcare needs.
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
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Primary Care / DPC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Preventive Care
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Annual Wellness Exams: Why Prevention Matters
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn how regular checkups can catch health issues early and keep your family healthy.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Youth Health
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Childhood Vaccines: A Parent's Guide
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Understanding immunization schedules and protecting your children's health in Birmingham.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                  Injury Prevention
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Concussion Awareness for Student Athletes
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Recognizing signs, managing recovery, and ensuring safe return to play.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Sports Physical
          </a>
        </div>
      </section>
    </main>
  )
}