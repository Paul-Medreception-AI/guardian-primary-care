import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Managing Chronic Pain Without Opioids: What Works',
  description: 'Evidence-based alternatives to opioids for chronic pain: physical therapy, CBT, non-opioid medication and the lifestyle changes that restore function.',
  keywords: 'chronic pain management, opioid alternatives, pain treatment Cape Girardeau MO, non-opioid pain relief, physical therapy, cognitive behavioral therapy, integrative pain management, primary care Cape Girardeau',
  openGraph: {
    title: 'Managing Chronic Pain Without Opioids: Alternative Approaches',
    description: 'Evidence-based alternatives to opioid therapy for chronic pain management from Guardian Primary Care in Cape Girardeau, MO.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Guardian Primary Care Team'],
  }
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
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Managing Chronic Pain Without Opioids: Alternative Approaches
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
          <div className="relative h-80 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/site/cond-exercise-activity.jpg"
              alt="A runner in a blue shirt moving past a concrete wall, showing how regular activity supports chronic pain relief"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Living with chronic pain is exhausting. It affects every aspect of your life: your work, your relationships, your sleep and your mental health. For decades, opioid medications were routinely prescribed to manage persistent pain, but we now understand the serious risks they carry, including addiction, overdose, and diminishing effectiveness over time. The good news? There are numerous evidence-based approaches that can help you manage chronic pain effectively without relying on opioids.
            </p>
            <p className="mb-6">
              If you're concerned about opioid dependence, seeking alternatives to current prescriptions, or simply want to explore comprehensive pain management strategies, this guide offers practical, science-backed solutions that address pain from multiple angles.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Chronic Pain: More Than Just a Physical Problem
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Chronic pain is defined as pain lasting longer than three months, often persisting well beyond the normal healing time of an injury. Unlike acute pain, which serves as a warning signal for tissue damage, chronic pain involves complex changes in the nervous system that can amplify and perpetuate pain signals even after the original injury has healed.
            </p>
            <p className="mb-6">
              Research shows that chronic pain is not purely a physical phenomenon. It involves psychological, emotional, and social factors that influence how we experience and respond to pain. This understanding has led to the development of multimodal pain management approaches that address the whole person, not just the symptom.
            </p>
            <p className="mb-6">
              Common conditions causing chronic pain include arthritis, fibromyalgia, neuropathy, back and neck injuries, migraines and autoimmune disorders. In Cape Girardeau and across the United States, chronic pain is one of the most common reasons people seek medical care.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Physical Therapy and Movement-Based Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most effective non-opioid treatments for chronic pain is physical therapy. A skilled physical therapist can design a personalized program that strengthens muscles, improves flexibility, corrects movement patterns, and reduces pain through targeted exercises and manual therapy techniques.
            </p>
            <p className="mb-6">
              Studies consistently show that regular, appropriate exercise reduces pain intensity and improves function in people with chronic pain conditions. Movement helps by:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Releasing natural pain-relieving endorphins</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reducing inflammation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strengthening muscles that support painful joints or areas</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Improving sleep quality</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Boosting mood and reducing depression and anxiety</span>
              </li>
            </ul>
            <p className="mb-6">
              Other effective movement therapies include yoga, tai chi, aquatic therapy, and Pilates. These gentle forms of exercise are particularly helpful for people who find traditional exercise too painful or intimidating.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="font-display bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl">
            Pain management is not about eliminating all discomfort. It is about reducing pain to a level that allows you to function, engage in activities you value, and maintain quality of life.
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Cognitive Behavioral Therapy and Mind-Body Techniques
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cognitive Behavioral Therapy (CBT) is one of the most well-researched psychological interventions for chronic pain. CBT helps you identify and change thought patterns and behaviors that amplify pain and interfere with recovery. It teaches practical skills for managing pain flare-ups, reducing catastrophic thinking, and improving coping strategies.
            </p>
            <p className="mb-6">
              A specialized form called Acceptance and Commitment Therapy (ACT) focuses on accepting pain while committing to actions aligned with your values, rather than struggling to eliminate pain entirely. This approach has been shown to reduce pain-related disability and improve quality of life.
            </p>
            <p className="mb-6">
              Other beneficial mind-body approaches include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mindfulness meditation:</strong> Reduces pain intensity by changing the way the brain processes pain signals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Progressive muscle relaxation:</strong> Decreases muscle tension and stress that can worsen pain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Biofeedback:</strong> Teaches conscious control over certain bodily processes to reduce pain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Guided imagery:</strong> Uses visualization to promote relaxation and pain relief</span>
              </li>
            </ul>
            <p className="mb-6">
              These techniques are not about "mind over matter" or suggesting that pain is "all in your head." Rather, they work with the brain's natural pain-modulation systems to reduce suffering and improve function.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Medication Alternatives to Opioids
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While non-pharmacological approaches form the foundation of comprehensive pain management, certain medications can play a helpful supporting role without the risks associated with opioids:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>NSAIDs and acetaminophen:</strong> For mild to moderate pain and inflammation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Topical agents:</strong> Creams, patches, and gels containing lidocaine, capsaicin, or NSAIDs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Antidepressants:</strong> Certain types (like SNRIs and tricyclics) are effective for neuropathic pain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Anti-seizure medications:</strong> Such as gabapentin and pregabalin for nerve pain</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Muscle relaxants:</strong> For pain associated with muscle spasms</span>
              </li>
            </ul>
            <p className="mb-6">
              Your primary care provider can work with you to determine which medications might be appropriate for your specific type of pain, medical history, and other medications you're taking.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Integrative and Interventional Approaches
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond conventional treatments, several complementary and interventional therapies show promise for chronic pain management:
            </p>
            <p className="mb-6">
              <strong>Acupuncture</strong> has substantial research supporting its effectiveness for chronic pain conditions including back pain, neck pain, osteoarthritis, and headaches. It may work by stimulating the release of natural pain-relieving chemicals and modulating pain pathways in the nervous system.
            </p>
            <p className="mb-6">
              <strong>Massage therapy</strong> can reduce muscle tension, improve circulation, and promote relaxation. Regular massage has been shown to decrease pain and improve function in people with chronic back pain, fibromyalgia, and other conditions.
            </p>
            <p className="mb-6">
              <strong>Chiropractic care</strong> may be beneficial for certain types of musculoskeletal pain, particularly lower back and neck pain, through spinal manipulation and other manual therapies.
            </p>
            <p className="mb-6">
              <strong>Interventional procedures</strong> such as nerve blocks, epidural steroid injections, or radiofrequency ablation can provide targeted pain relief for specific conditions when other treatments haven't been sufficient. These are typically performed by pain management specialists.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Lifestyle Factors That Influence Pain
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your daily habits and lifestyle choices play a significant role in chronic pain management:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sleep hygiene:</strong> Poor sleep intensifies pain, while better sleep reduces pain sensitivity. Prioritize consistent sleep schedules and good sleep habits.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Nutrition:</strong> An anti-inflammatory diet rich in fruits, vegetables, omega-3 fatty acids, and whole grains may help reduce pain. Limiting processed foods, sugar, and saturated fats is also beneficial.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Weight management:</strong> Excess weight places additional stress on joints and can increase inflammation, worsening pain conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stress management:</strong> Chronic stress amplifies pain perception. Regular relaxation practices, social connection, and addressing mental health are essential.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Smoking cessation:</strong> Smoking increases pain sensitivity and impairs healing. Quitting can improve pain outcomes.</span>
              </li>
            </ul>
          </div>

          {/* Closing Section */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building Your Personal Pain Management Plan
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Effective chronic pain management rarely involves a single solution. The most successful approaches combine multiple strategies tailored to your unique situation, preferences, and goals. What works for one person may not work for another, so patience and persistence are important as you and your healthcare team find the right combination of treatments.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, Missouri, we take a comprehensive, patient-centered approach to chronic pain management. We work closely with you to develop a personalized plan that addresses not just your pain, but the impact it has on your daily life, mental health and overall wellbeing. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available for patients who prefer a membership option. Either way, we take the time to truly understand your experience and support you through the process of finding effective, sustainable solutions.
            </p>
            <p className="mb-6">
              If you're struggling with chronic pain and want to explore non-opioid treatment options, we're here to help. Together, we can develop a plan that helps you regain function, improve quality of life, and work toward your personal health goals without relying on medications that carry significant risks.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="max-w-3xl mx-auto px-6 my-12">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Primary care in Cape Girardeau, Missouri, led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri Licensed Collaborating Physician.</p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog/managing-arthritis-pain-medications-and-beyond" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Chronic Disease Management</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Managing Arthritis Pain: Medications and Beyond</h4>
                <p className="text-[var(--color-muted)] text-sm">Medications, movement and lifestyle changes that reduce joint pain.</p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog/managing-anxiety-in-primary-care-when-to-seek-additional-sup" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Mental Health</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Managing Anxiety in Primary Care: When to Seek Additional Support</h4>
                <p className="text-[var(--color-muted)] text-sm">Practical strategies for coping with anxiety and improving mental wellbeing.</p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog/sleep-and-health-why-quality-sleep-matters-for-overall-welln" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Wellness</div>
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Sleep and Health: Why Quality Sleep Matters for Overall Wellness</h4>
                <p className="text-[var(--color-muted)] text-sm">Discover how quality sleep affects pain, mood and physical health.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our care team in Cape Girardeau, Missouri is here to help you manage chronic pain and get back to the things that matter. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer a membership option.</p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Schedule an Appointment
          </a>
          <a
            href="tel:+15732006143"
            className="inline-block border border-white/70 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 mt-4 sm:mt-0 sm:ml-4"
          >
            Call (573) 200-6143
          </a>
        </div>
      </section>
    </main>
  )
}