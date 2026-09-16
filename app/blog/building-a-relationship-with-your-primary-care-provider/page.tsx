import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Building a Relationship with Your Provider | Guardian',
  description: 'How to build a trusting, lasting relationship with your primary care provider, why continuity of care matters, and what to do when the fit is wrong.',
  openGraph: {
    title: 'Building a Relationship with Your Primary Care Provider',
    description: 'How to build a trusting, lasting relationship with your primary care provider, why continuity of care matters, and what to do when the fit is wrong.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
    authors: ['Guardian Primary Care'],
  },
}

export default function BlogArticle() {
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8 font-display">
            Building a Relationship with Your Primary Care Provider
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
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
              src="/images/site/hero-family.jpg"
              alt="A provider at Guardian Primary Care smiling with a mother and her baby during an office visit"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[var(--color-muted)] text-sm mt-4 text-center leading-relaxed">
            Continuity is the point: seeing the same provider over time is what lets small changes in your health get noticed early.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Paragraph */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When was the last time you felt truly heard by a healthcare provider? In a fast-paced medical environment, the relationship between provider and patient can start to feel transactional: rushed appointments, hurried explanations, and little room for real conversation. Yet a steady, trusting relationship with your primary care provider is one of the most useful things you can build for your own health, and it shapes both the care you receive and how satisfied you are with it.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            Building that relationship does not happen overnight, but the investment pays off in care that fits you, in prevention that actually happens, and in peace of mind. Whether you are new to a practice or have been seeing the same provider for years, a few habits make the partnership work better.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            Why the Relationship Matters
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Your primary care provider is more than someone who treats you when you're sick. They're your advocate, your health detective, and often the quarterback of your entire medical team. A strong relationship with this provider creates a foundation of trust that enables:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Better communication:</strong> When you trust your provider, you're more likely to share honest information about symptoms, lifestyle, and concerns.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Personalized care:</strong> A provider who knows your history, values, and goals can tailor recommendations to your unique situation.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Continuity of care:</strong> Long-term relationships mean your provider can spot subtle changes over time that might signal health issues.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Better follow-through:</strong> When you trust the person you built the plan with, and understand why it is the plan, it is easier to stick with it.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Continuity is not a soft benefit. A provider who has seen you well is the one best placed to notice when something is off, to connect a new symptom to an old one, and to spare you the work of explaining your history from the beginning every time. The relationship itself is part of the treatment.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed font-display">
              &ldquo;The relationship between a provider and a patient is the foundation of effective healthcare. When patients feel heard, understood and respected, they become active partners in their own care.&rdquo;
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            Finding the Right Provider
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            The first step in building a strong relationship is finding a provider who's a good fit. This goes beyond credentials and insurance acceptance. Consider:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Communication style:</strong> Do you prefer a provider who is directive, or one who works through decisions with you? Look for someone whose approach matches how you like to decide.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Availability:</strong> Can you get an appointment when you need one? Does the practice offer same or next day sick visits and telehealth?</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Philosophy of care:</strong> Some practices emphasize prevention and lifestyle medicine, others focus more on treating problems as they arise. Look for alignment with what you value.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Time and attention:</strong> Ask how long a routine visit is scheduled for. Practices that keep smaller patient panels, including direct-care models such as Guardian Direct Care, are usually able to give a visit more room.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Don't be afraid to schedule a "meet and greet" appointment or ask questions during your first visit. This is a relationship worth investing in from the start.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            Be an Active Participant
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            A strong provider relationship is a two-way street. While your provider brings medical expertise, you bring essential knowledge about your body, lifestyle, and goals. Here's how to be an engaged partner:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Come prepared:</strong> Before appointments, write down symptoms, questions, and concerns. Prioritize what's most important to discuss.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Be honest:</strong> Share the full picture, including habits you're not proud of. Your provider can't help what they don't know about.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Ask questions:</strong> If you don't understand a diagnosis, treatment, or recommendation, speak up. Good providers welcome questions.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Follow through:</strong> If you're prescribed a medication or advised to make lifestyle changes, do your best to follow through, or communicate barriers if you can't.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Keep records:</strong> Maintain a personal health record with test results, medications, and family history. This helps your provider give better care.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Remember, your provider wants you to succeed. They're not there to judge, they're there to help you achieve your best health.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            Communication Beyond the Exam Room
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Building a relationship doesn't end when you leave the appointment. Modern primary care offers multiple ways to stay connected:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Patient portals</strong> let you message your provider, view results and request refills between visits. Many patients find this lowers anxiety, because a non-urgent question does not have to wait for the next appointment. Guardian patients use the <a href="https://www.patientally.com/login" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]">Patient Ally portal</a>, and existing patients can self-schedule there.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Telehealth visits</strong> are convenient for follow-ups, minor concerns and medication adjustments. They strengthen the relationship by making it easier to stay in touch. Guardian offers telehealth alongside in-office visits.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Proactive communication</strong> is key. If something changes with your health between appointments, don't wait, reach out. If you're having trouble with a medication or treatment plan, let your provider know sooner rather than later.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Direct-care models are usually built around this kind of access. Guardian Direct Care, for example, includes direct access to your provider and to your medical records, which removes a common barrier to getting a question answered.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            Consistency Is Key
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            One of the biggest threats to the provider relationship is fragmented care. When you see different providers each visit, or only seek care at urgent care clinics, no single person has the full picture of your health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            When one provider follows you over time rather than meeting you cold each visit, several things get easier:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Problems get raised earlier, while they are still small</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fewer trips elsewhere for something your own provider could handle</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Chronic conditions are tracked over time, not judged from a single snapshot</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Less repeating your history, and fewer tests you have already had</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Make it a priority to see your primary care provider for routine care, preventive visits, and new concerns. Think of them as your first call, not your last resort.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            What to Do When Things Aren't Working
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Not every provider-patient relationship is a perfect match. If you consistently feel unheard, dismissed, or uncomfortable, it may be time to address the issue, or consider a change.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            First, try direct communication. Many misunderstandings can be resolved by simply saying, "I don't feel like we're on the same page. Can we talk about how to improve our communication?"
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            If concerns persist, it's okay to seek a new provider. Your health is too important to settle for a relationship that doesn't serve you. Look for warning signs like:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Feeling rushed or dismissed during appointments</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Lack of follow-up on test results or referrals</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Difficulty getting appointments or responses to questions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>A provider who doesn't listen to your concerns or preferences</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Finding the right fit may take time, but it's worth the effort for your long-term health and wellbeing.
          </p>

          {/* Closing Paragraph */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-display">
            The Bottom Line
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Building a strong relationship with your primary care provider is one of the most useful investments you can make in your health. It takes effort, communication and consistency, and the payoff is care that is personal, proactive and built around your own needs and goals.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            In a fragmented, rushed healthcare system, a trusting provider relationship is a refuge, a place where you are seen, heard and supported. Whether you are managing a chronic condition, keeping up with preventive care, or simply want peace of mind, your primary care provider should be your partner and your advocate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you are looking for a practice in Cape Girardeau, Missouri that puts the relationship first, Guardian Primary Care is accepting new patients. We are in-network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available for patients who would rather pay a flat monthly fee. Visits are by appointment: call (573) 200-6143 or request a time online. When care is built on trust, connection and continuity, everyone does better.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1 font-display">
                Written by the Guardian Primary Care team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri Licensed Collaborating Physician, serving Cape Girardeau and Southeast Missouri.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center font-display">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Preventive Care
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  The Importance of Annual Wellness Exams for Adults
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how yearly checkups help catch issues early and keep you healthy for the long term.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog/managing-type-2-diabetes-lifestyle-changes-that-make-a-diffe" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Chronic Disease
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Managing Type 2 Diabetes: Lifestyle Changes That Help
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Strategies for managing type 2 diabetes in partnership with your provider.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog/understanding-direct-primary-care-is-it-right-for-you" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Direct Primary Care: Is It Right for You?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  How Guardian Direct Care compares with using your insurance benefits here in Cape Girardeau.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 font-display">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team in Cape Girardeau is here to help you build a lasting relationship centered on your health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
            >
              Schedule Your Visit
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