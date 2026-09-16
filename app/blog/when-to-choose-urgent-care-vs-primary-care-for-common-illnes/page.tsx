import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Urgent Care vs. Primary Care: How to Choose',
  description: 'How to decide between urgent care and your primary care provider for everyday illnesses, with guidance from Guardian Primary Care in Cape Girardeau, MO.',
  openGraph: {
    title: 'When to Choose Urgent Care vs. Primary Care',
    description: 'How to decide between urgent care and your primary care provider for everyday illnesses, with guidance from Guardian Primary Care in Cape Girardeau, MO.',
    type: 'article',
    url: 'https://www.guardianprimary.com/blog/when-to-choose-urgent-care-vs-primary-care-for-common-illnes',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto mb-6">
            When to Choose Urgent Care vs. Primary Care for Common Illnesses
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
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
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-common-primary-care-referrals.jpg"
              alt="Two small figurines of health care workers standing apart on a plain background, representing the choice between urgent care and primary care."
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-8 leading-relaxed">
              It's 7 PM on a Tuesday. You've been fighting a persistent cough for three days, and now you're wondering: should I head to urgent care, wait to see my primary care provider, or just ride it out at home? This common dilemma faces millions of Americans every year, and making the wrong choice can mean unnecessary costs, longer wait times, or inadequate care. Understanding when to choose urgent care versus primary care can help you get the right treatment at the right time.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              Understanding the Key Differences
            </h2>
            <p className="mb-6">
              Primary care and urgent care serve distinct but complementary roles in the healthcare system. Your primary care provider is your health care home: the clinician who knows your medical history, manages chronic conditions, coordinates specialist referrals and provides preventive care. They're your partner in long-term health management.
            </p>
            <p className="mb-6">
              Urgent care centers, on the other hand, are designed for acute problems that need immediate attention but aren't life-threatening. They operate on a walk-in basis with extended hours, including evenings and weekends, when primary care offices are typically closed. They're equipped to handle conditions that need same-day treatment but don't warrant an emergency room visit.
            </p>
            <p className="mb-6">
              The key distinction lies in continuity of care. While urgent care provides convenient, immediate treatment, your visit is typically isolated, because the urgent care provider will not have access to your complete medical history and won't follow up on your progress unless you return. Primary care builds a comprehensive understanding of your health over time, which often leads to better outcomes and more personalized treatment.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              When Primary Care Is the Right Choice
            </h2>
            <p className="mb-6">
              For most common illnesses and health concerns, your primary care provider should be your first call. This is especially true when:
            </p>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You have an ongoing or chronic condition</strong> that requires monitoring, such as diabetes, hypertension, or asthma</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Your symptoms are manageable</strong> and you can wait a day or two for an appointment</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You need prescription refills or medication adjustments</strong> for conditions your provider is already treating</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You require preventive care</strong> like annual physicals, vaccinations, or health screenings</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You have concerning symptoms</strong> that are not emergencies but need evaluation, such as persistent fatigue, unexplained weight changes or recurring headaches</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You need coordination of care</strong> between multiple specialists or complex treatment plans</span>
                </li>
              </ul>
            </div>
            <p className="mb-6">
              Many primary care practices work hard to keep access open. At Guardian Primary Care in Cape Girardeau, telehealth visits are offered alongside in-office appointments, and Guardian Direct Care members have direct access to their provider plus same or next day sick visits. That gives you prompt care with the continuity of a provider who already knows you.
            </p>

            <div className="font-display bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] text-xl">
              The value of a primary care provider who knows your health history is hard to overstate. Patients with a regular primary care provider tend to have better health outcomes, lower overall costs and more confidence in their care.
            </div>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              When Urgent Care Makes Sense
            </h2>
            <p className="mb-6">
              Urgent care centers fill an important gap in healthcare delivery. They're the right choice when you need prompt treatment for conditions that, while not life-threatening, shouldn't wait for a scheduled appointment. Consider urgent care when:
            </p>
            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Your primary care office is closed</strong> and you need care today, in the evening, on a weekend or on a holiday</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You have minor injuries</strong> like sprains, strains, minor cuts requiring stitches, or suspected fractures</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You're experiencing common acute illnesses</strong> such as flu, strep throat, ear infections, or urinary tract infections that need rapid diagnosis and treatment</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You need diagnostic tests</strong> like X-rays, rapid flu tests, or lab work for acute symptoms</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You have mild allergic reactions</strong> (without severe breathing difficulty, which requires 911)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>You're traveling</strong> and don't have access to your regular provider</span>
                </li>
              </ul>
            </div>
            <p className="mb-6">
              The convenience of urgent care comes with trade-offs. You'll typically pay more out-of-pocket than a primary care visit, and there's no guarantee of continuity. Make sure any urgent care treatment is communicated to your primary care provider, especially if you receive new prescriptions or diagnoses that may affect your ongoing care.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              Common Illnesses: A Decision Guide
            </h2>
            <p className="mb-6">
              Let's break down some common scenarios to help you make the right choice:
            </p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Cold or Flu Symptoms:</strong> If you can manage symptoms at home and wait a day or two, call your primary care provider. Many respiratory infections resolve with rest and fluids. However, if you develop high fever (over 103°F), severe body aches, or difficulty breathing, urgent care is appropriate, especially after hours.</p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Suspected Strep Throat:</strong> This requires a rapid test and antibiotics if positive. If your primary care office can see you same-day, that's ideal. If not, or if it's the weekend, urgent care can quickly test and treat.</p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Ear Pain:</strong> For adults with new ear pain, either option works depending on availability. For children, especially those with recurrent ear infections, primary care is better because your child&apos;s regular provider can spot patterns and adjust treatment accordingly.</p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Urinary Tract Infection:</strong> Classic UTI symptoms (burning, frequency, urgency) can be handled at either location. If you have kidney pain, fever, or blood in urine, seek care more urgently, either at urgent care or with a same day primary care visit.</p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Skin Rashes:</strong> Most rashes can wait for a primary care appointment where your provider can consider your full medical history and medication list. Urgent care is warranted if the rash is rapidly spreading, accompanied by fever, or if you suspect an allergic reaction.</p>
            <p className="mb-4"><strong className="text-[var(--color-primary)]">Persistent Cough:</strong> A cough lasting more than a few weeks should be evaluated by your primary care provider, who can order appropriate imaging or refer to specialists if needed. A new cough with fever during flu season can go to urgent care if immediate treatment is needed.</p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              When to Skip Both and Call 911
            </h2>
            <p className="mb-6">
              It's crucial to recognize true emergencies that require immediate hospital care. Call 911 or go to the emergency room for:
            </p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="text-[var(--color-ink)]">• Chest pain or pressure, especially with shortness of breath or radiating pain</li>
              <li className="text-[var(--color-ink)]">• Severe difficulty breathing or inability to speak in full sentences</li>
              <li className="text-[var(--color-ink)]">• Signs of stroke (face drooping, arm weakness, speech difficulty)</li>
              <li className="text-[var(--color-ink)]">• Severe allergic reactions with swelling or difficulty breathing</li>
              <li className="text-[var(--color-ink)]">• Uncontrolled bleeding or major trauma</li>
              <li className="text-[var(--color-ink)]">• Loss of consciousness or severe confusion</li>
              <li className="text-[var(--color-ink)]">• Severe, sudden headache unlike any you've experienced before</li>
              <li className="text-[var(--color-ink)]">• Suspected poisoning or drug overdose</li>
            </ul>
            <p className="mb-6">
              Neither primary care nor urgent care is equipped to handle these life-threatening conditions. When in doubt, err on the side of caution and seek emergency care.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              Building a Partnership with Your Primary Care Provider
            </h2>
            <p className="mb-6">
              The best healthcare strategy involves establishing a strong relationship with a primary care provider before you get sick. This gives you several advantages:
            </p>
            <p className="mb-6">
              First, when acute illnesses arise, you have someone who knows you and can provide context-appropriate care. Your provider understands which medications have worked for you in the past, what allergies you have, and what other conditions might complicate treatment.
            </p>
            <p className="mb-6">
              Second, some practices keep access unusually open. At Guardian Primary Care, telehealth is available to our patients, and Guardian Direct Care members have direct access to their provider along with same or next day sick visits. For many everyday concerns, that removes the need for an urgent care trip.
            </p>
            <p className="mb-6">
              Third, your primary care provider serves as your healthcare quarterback, coordinating all aspects of your care. When you do need urgent care, having a primary care home ensures there's someone tracking all your medical encounters and maintaining comprehensive records.
            </p>
            <p className="mb-6">
              Finally, preventive care from your primary care provider can help you avoid many acute illnesses altogether. Annual flu vaccines, appropriate screenings, and management of chronic conditions all reduce your likelihood of needing urgent or emergency care.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
              Making the Right Choice for Your Health
            </h2>
            <p className="mb-6">
              The decision between urgent care and primary care doesn't have to be stressful. The general rule is simple: when you have time to plan and your regular provider is available, choose primary care for the continuity and personalized attention. When you need immediate treatment and your provider&apos;s office is closed or cannot fit you in quickly, urgent care is there to fill the gap.
            </p>
            <p className="mb-6">
              The key is understanding that these are not competing options: they are complementary parts of a complete health care system. Use urgent care when you need it, but always follow up with your primary care provider to ensure continuity. Share records from urgent care visits with your primary care provider, and make sure any new diagnoses or prescriptions are folded into your overall care plan.
            </p>
            <p className="mb-6">
              Most importantly, don't let uncertainty prevent you from seeking care when you need it. If you're unsure whether your symptoms warrant urgent care or can wait for a primary care appointment, call your primary care office. Many practices have nurses or triage systems that can help you make the right decision based on your specific symptoms and situation.
            </p>
            <p className="text-lg font-medium text-[var(--color-primary)] mt-8">
              If you are looking for comprehensive primary care in Cape Girardeau, Missouri, Guardian Primary Care offers personalized, relationship-based medicine built around your needs. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer predictable monthly pricing. Call (573) 200-6143 and our care team will help you get started.
            </p>
          </div>
        </div>
      </article>

      <div className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium text-[var(--color-ink)] mb-2">Written by the Guardian Primary Care Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Primary care for every stage of life in Cape Girardeau, Missouri. Our care team is led by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.</p>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl mb-8 text-[var(--color-ink)] font-light text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog/understanding-direct-primary-care-is-it-right-for-you" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Understanding Direct Primary Care: Is It Right for You?</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">How Guardian Direct Care works alongside insurance, and who tends to benefit from it.</p>
              </div>
            </a>

            <a href="/blog/telehealth-vs-in-person-visits-choosing-the-right-option" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Telehealth vs. In-Person Visits</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">When a video visit is enough, and when it is better to be seen in the office.</p>
              </div>
            </a>

            <a href="/blog/building-a-relationship-with-your-primary-care-provider" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Building a Relationship with Your Provider</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">Why a provider who knows your history leads to better care over the long run.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our care team is here to help you navigate your health care with confidence.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Schedule an Appointment
            </a>
            <a href="tel:+15732006143" className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/30">
              Call (573) 200-6143
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Visits are by appointment. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you prefer predictable monthly pricing.
          </p>
        </div>
      </section>
    </main>
  )
}