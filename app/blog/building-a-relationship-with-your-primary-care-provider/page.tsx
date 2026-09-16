import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building a Relationship with Your Primary Care Provider | Guardian Primary Care',
  description: 'Learn how to build a strong, trusting relationship with your primary care provider for better health outcomes and personalized care in Birmingham, AL.',
  openGraph: {
    title: 'Building a Relationship with Your Primary Care Provider | Guardian Primary Care',
    description: 'Learn how to build a strong, trusting relationship with your primary care provider for better health outcomes and personalized care in Birmingham, AL.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Building a Relationship with Your Primary Care Provider
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2024</span>
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
          {/* Opening Paragraph */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When was the last time you felt truly heard by a healthcare provider? In today's fast-paced medical environment, the doctor-patient relationship can sometimes feel transactional—rushed appointments, hurried diagnoses, and little time for meaningful conversation. Yet research consistently shows that a strong, trusting relationship with your primary care provider is one of the most powerful tools for better health outcomes, higher satisfaction with care, and even longer life expectancy.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            Building this relationship doesn't happen overnight, but the investment pays dividends in personalized care, preventive health, and peace of mind. Whether you're new to a practice or have been seeing the same provider for years, understanding how to cultivate this partnership can transform your healthcare experience.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
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
              <span><strong>Improved adherence:</strong> Studies show patients are more likely to follow treatment plans when they have a trusting relationship with their provider.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Research published in the Journal of General Internal Medicine found that patients with a continuous relationship with their primary care provider had 25% lower mortality rates compared to those without such continuity. The relationship itself is therapeutic.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'Cormorant, serif' }}>
              "The doctor-patient relationship is the foundation of effective healthcare. When patients feel heard, understood, and respected, they become active partners in their own health journey."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
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
              <span><strong>Communication style:</strong> Do you prefer a provider who's directive or one who collaborates on decisions? Look for someone whose approach matches your preferences.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Availability:</strong> Can you get appointments when needed? Does the practice offer same-day visits or telehealth options?</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Philosophy of care:</strong> Some practices emphasize preventive care and lifestyle medicine; others focus more on acute treatment. Find alignment with your values.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Time and attention:</strong> In traditional practices, appointments may be rushed. Direct Primary Care models often allow for longer visits and more personalized attention.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Don't be afraid to schedule a "meet and greet" appointment or ask questions during your first visit. This is a relationship worth investing in from the start.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
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
              <span><strong>Be honest:</strong> Share the full picture—including habits you're not proud of. Your provider can't help what they don't know about.</span>
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
              <span><strong>Follow through:</strong> If you're prescribed a medication or advised to make lifestyle changes, do your best to follow through—or communicate barriers if you can't.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Keep records:</strong> Maintain a personal health record with test results, medications, and family history. This helps your provider give better care.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Remember, your provider wants you to succeed. They're not there to judge—they're there to help you achieve your best health.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Communication Beyond the Exam Room
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Building a relationship doesn't end when you leave the appointment. Modern primary care offers multiple ways to stay connected:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Patient portals</strong> allow you to message your provider, view test results, and request prescription refills between visits. Many patients find this reduces anxiety—you don't have to wait weeks for answers to non-urgent questions.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Telehealth visits</strong> offer convenience for follow-ups, minor concerns, or medication adjustments. They can strengthen the relationship by making care more accessible.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Proactive communication</strong> is key. If something changes with your health between appointments, don't wait—reach out. If you're having trouble with a medication or treatment plan, let your provider know sooner rather than later.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            In Direct Primary Care models, many providers offer direct phone or text access, removing barriers to communication and fostering even stronger relationships.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Consistency Is Key
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            One of the biggest threats to the provider relationship is fragmented care. When you see different providers each visit, or only seek care at urgent care clinics, no single person has the full picture of your health.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Studies show that patients with a consistent primary care provider have:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Lower hospitalization rates</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fewer emergency room visits</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Better management of chronic conditions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Higher satisfaction with care</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Make it a priority to see your primary care provider for routine care, preventive visits, and new concerns. Think of them as your first call, not your last resort.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Do When Things Aren't Working
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Not every provider-patient relationship is a perfect match. If you consistently feel unheard, dismissed, or uncomfortable, it may be time to address the issue—or consider a change.
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
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Bottom Line
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            Building a strong relationship with your primary care provider is one of the most impactful investments you can make in your health. It requires effort, communication, and consistency—but the payoff is care that's personalized, proactive, and centered around your unique needs and goals.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            In an era of fragmented, rushed healthcare, a trusting provider relationship is a refuge—a place where you're seen, heard, and supported on your health journey. Whether you're managing chronic conditions, navigating preventive care, or simply seeking peace of mind, your primary care provider should be your partner and advocate.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            If you're looking for a practice in Birmingham, AL that prioritizes relationships and offers the time and attention you deserve, consider exploring Direct Primary Care models like Guardian Primary Care. When healthcare is built on trust, connection, and continuity, everyone thrives.
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-1" style={{ fontFamily: 'Cormorant, serif' }}>
                Written by the Guardian Primary Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Primary Care / DPC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Preventive Care
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Importance of Annual Wellness Visits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how yearly checkups help catch issues early and keep you healthy for the long term.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Chronic Disease
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Managing Diabetes with Your Primary Care Team
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn strategies for effective diabetes management through partnership with your provider.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Education
                </div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  What to Expect at Your First DPC Appointment
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A comprehensive guide to your first visit at a Direct Primary Care practice in Birmingham.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you build a lasting relationship centered on your health and wellbeing.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>
    </main>
  )
}