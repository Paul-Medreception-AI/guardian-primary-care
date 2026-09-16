import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Annual Physical vs. Wellness Visit: Understanding the Differences | Guardian Primary Care',
  description: 'Compare annual physical exams and wellness visits in Cape Girardeau, MO. Learn the key differences, what is covered, and which appointment type is right for you at Guardian Primary Care.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
            Annual Physical vs. Wellness Visit: Understanding the Differences
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive guide to help you understand which type of appointment is right for your healthcare needs in Cape Girardeau, MO
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-4 font-semibold">Category</div>
              <div className="p-4 font-semibold border-l border-white/20">Annual Physical</div>
              <div className="p-4 font-semibold border-l border-white/20">Wellness Visit</div>
            </div>

            {/* Purpose */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Purpose</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Comprehensive health evaluation and symptom assessment</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Preventive care and health risk assessment</div>
            </div>

            {/* Coverage */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Insurance Coverage</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">May require copay or deductible if symptoms discussed</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Usually processed under your plan&apos;s preventive benefits. Coverage varies by plan</div>
            </div>

            {/* What's Included */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">What's Included</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Physical exam, lab work, symptom treatment, health concerns</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Health screening, risk assessment, preventive care planning</div>
            </div>

            {/* Duration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Typical Visit</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Longer, with time to work through symptoms and history</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Focused on screening and building a prevention plan</div>
            </div>

            {/* Frequency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Recommended Frequency</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Annually or as needed</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Annually (once per calendar year)</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Patients with specific health concerns or chronic conditions</div>
              <div className="p-4 text-[var(--color-muted)] border-l border-[var(--color-border)]">Healthy individuals focused on prevention and screening</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            <Image
              src="/images/site/cond-routine-annual-wellness.jpg"
              alt="A routine annual wellness check being carried out in a bright primary care exam room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>
          <p className="text-sm text-[var(--color-muted)] text-center mt-4">
            Whichever visit you book, our care team makes room for your questions.
          </p>
        </div>
      </section>

      {/* Deep Dive - Annual Physical */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)]">
                Annual Physical: Comprehensive Health Evaluation
              </h2>
            </div>

            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                An annual physical exam is a thorough medical evaluation that goes beyond basic preventive screening. During this appointment, your provider reviews your health in detail, addresses any symptoms or concerns you have, and performs a full physical examination. This type of visit is a good fit when you have specific health issues to discuss or want a complete picture of where your health stands today.
              </p>
              <p>
                The annual physical usually includes vital signs, a head-to-toe physical examination, a review of your medical history and medications, and a conversation about any symptoms or health concerns. Your provider may order laboratory tests, update vaccinations, and recommend treatment for both new and ongoing conditions. Because this visit addresses existing health issues and symptoms, it may involve a copay or count toward your deductible depending on your insurance plan.
              </p>
              <p>
                This appointment is especially valuable for patients managing chronic conditions such as diabetes, high blood pressure or heart disease, anyone with new or ongoing symptoms, people taking several medications that need monitoring, and anyone who wants an evaluation that goes further than basic screening. At Guardian Primary Care in Cape Girardeau, our annual physicals give your provider the time to work through your concerns carefully and build a care plan that fits you.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h2 className="font-display text-4xl font-light text-[var(--color-ink)]">
                Wellness Visit: Preventive Care Focus
              </h2>
            </div>

            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                A wellness visit, also called a preventive care visit or Medicare Annual Wellness Visit, focuses on disease prevention and health maintenance. It is designed to spot risk factors before they become serious problems and to build a prevention plan that fits your age, sex and health history. Most plans process wellness visits under their preventive benefits, frequently at little or no cost to you, though coverage does vary by plan.
              </p>
              <p>
                During a wellness visit, your provider reviews your health history, looks at your risk for developing certain conditions, performs age-appropriate screenings, and builds a prevention plan that may include lifestyle guidance, a screening schedule and vaccination updates. The key difference is that a wellness visit does not include treatment for existing symptoms or acute problems. If something turns up during screening, a follow-up appointment may be needed to address it.
              </p>
              <p>
                Wellness visits suit generally healthy people who want preventive care, patients meeting Medicare&apos;s Annual Wellness Visit requirements, anyone establishing baseline measurements, and anyone focused on early detection. They are a chance to catch potential problems early when they are most treatable, keep cancer screenings and immunizations current, and talk through healthy habits with your provider in Cape Girardeau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-8">
              How to Decide Which Visit You Need
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Annual Physical */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  Choose an Annual Physical if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You have specific symptoms or health concerns to discuss</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You manage chronic conditions requiring monitoring</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You need medication adjustments or new prescriptions</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want a comprehensive health evaluation beyond screening</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You're establishing care with a new primary care provider</span>
                  </li>
                </ul>
              </div>

              {/* Wellness Visit */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Choose a Wellness Visit if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You're generally healthy with no current symptoms</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want to focus on disease prevention and screening</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You qualify for Medicare's Annual Wellness Visit</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want a visit processed under your plan&apos;s preventive benefits</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You need age-appropriate health screenings updated</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">Not sure which to schedule?</strong> Call Guardian Primary Care in Cape Girardeau at <a href="tel:+15732006143" className="text-[var(--color-primary)] hover:underline">(573) 200-6143</a> and our team will help you work out which appointment fits your current health needs and your coverage. Guardian Primary Care is by appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Can I have both an annual physical and a wellness visit in the same year?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, you can schedule both types of appointments in the same calendar year. Many patients use their wellness visit for preventive screening and then book a separate annual physical when they have specific health concerns to address. Check with your insurance plan about coverage limits, since some plans restrict how many preventive visits are covered per year, and our team is glad to help you sort that out.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>What happens if I bring up symptoms during a wellness visit?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you bring up symptoms or existing health problems during a wellness visit, your insurance may reclassify part or all of the appointment as a diagnostic visit rather than preventive care, which can bring a copay or deductible into play. To avoid an unexpected charge, book a separate annual physical if you have specific concerns to discuss, or tell our scheduling team what you want covered when you call.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Are lab tests included in both types of visits?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Both annual physicals and wellness visits may include lab work, but coverage differs. Preventive lab tests ordered during a wellness visit, such as cholesterol screening at recommended intervals, are usually processed under preventive benefits. Lab tests during an annual physical, especially those tied to symptom evaluation or chronic disease monitoring, may involve a copay or count toward your deductible. Your provider will talk through which tests make sense for you, and our team can help you check expected coverage beforehand.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>How does Guardian Direct Care affect these visit types?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, so for most patients the visit types work exactly as described above. If you choose Guardian Direct Care, our membership alternative, the distinction matters less: the membership includes your annual wellness visit and sports physicals along with office visits for active concerns, at a published price with no surprise bills. Either way, our team will tell you what to expect before you are seen.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Which visit type should I schedule if I have not seen a provider in several years?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you have not had recent medical care, an annual physical is usually the better choice for your first appointment. It gives your provider room to do a full evaluation, address anything that has developed, review your complete medical history and establish baseline measurements. After that first visit, wellness visits can carry your ongoing preventive care. Call Guardian Primary Care at (573) 200-6143 and we will recommend the appointment type that fits your situation.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <div className="bg-gradient-to-br from-[var(--color-light)] to-white rounded-2xl p-12 shadow-lg">
            <svg className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <h2 className="font-display text-4xl font-light text-[var(--color-ink)] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
              Our team at Guardian Primary Care in Cape Girardeau is here to help you choose the right appointment type and answer questions about your care options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Discuss Your Options
              </a>
              <a
                href="tel:+15732006143"
                className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-light)] font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Call (573) 200-6143
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}