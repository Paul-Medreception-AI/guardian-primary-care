import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cancer Screenings: Which Tests You Need and When',
  description: 'A guide to cancer screening for adults: breast, colorectal, cervical and lung tests, the age to start each one, and how family history changes the plan.',
  keywords: 'cancer screening, preventative care, mammogram, colonoscopy, cancer prevention, Cape Girardeau primary care, health screenings',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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
            Preventative Cancer Screenings: Which Tests You Need and When
          </h1>

          {/* Meta Info */}
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
          <div className="relative h-80 w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/site/cond-cancer-screenings.jpg"
              alt="A clinician in a white coat holding a red cancer awareness ribbon"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Early detection saves lives. It's a simple truth that carries profound weight when it comes to cancer care. Many cancers, when caught in their earliest stages, are highly treatable, and in some cases, even preventable. Yet confusion about which screenings to get, when to start, and who really needs them often keeps people from taking this crucial step in protecting their health.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, MO, we believe that knowledge empowers action. Understanding the recommended cancer screenings for your age, risk factors, and personal health history is one of the most important conversations you can have with your healthcare provider. Let's walk through the essential screenings, demystify the recommendations, and help you take control of your preventative care journey.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Cancer Screenings Matter
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cancer screenings are medical tests performed on people who have no symptoms but may be at risk for certain types of cancer. The goal is to detect cancer early, before it causes symptoms and when treatment is most likely to be successful.
            </p>
            <p className="mb-6">
              Research consistently shows that screening saves lives. Colorectal cancer screening finds polyps that can be removed before they ever become cancer, and it catches cancers at an earlier, more treatable stage. Regular mammography lowers the risk of dying from breast cancer. Behind those findings are real people, families, and futures preserved through early detection.
            </p>
            <p className="mb-6">
              But screening isn't one-size-fits-all. Your personal risk factors, including age, family history, genetic predisposition, lifestyle factors, and previous medical conditions, all influence which screenings you need and when to start them.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="font-display text-[var(--color-ink)] italic text-xl">
              Early detection through appropriate screening is one of the most powerful tools we have in cancer prevention. The key is knowing which tests you need and staying consistent with your screening schedule.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Breast Cancer Screening
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Breast cancer is the most common cancer among women in the United States, aside from skin cancer. Mammography, an X-ray of the breast, is the primary screening tool.
            </p>
            <p className="mb-6">
              <strong>General Guidelines:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ages 40-44:</strong> Women have the option to start annual screening</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ages 45-54:</strong> Annual mammograms are recommended</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Age 55+:</strong> Transition to every 2 years, or continue annually</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High risk:</strong> Earlier and more frequent screening, possibly including MRI</span>
              </li>
            </ul>
            <p className="mb-6">
              Women with a family history of breast cancer, known genetic mutations (like BRCA1 or BRCA2), or previous chest radiation should discuss earlier and more intensive screening with their provider.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Colorectal Cancer Screening
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Colorectal cancer is among the leading causes of cancer death in the U.S., yet it's also one of the most preventable through screening. Recent guidelines have lowered the recommended starting age due to rising rates in younger adults.
            </p>
            <p className="mb-6">
              <strong>General Guidelines:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Starting at age 45:</strong> Begin regular screening for average-risk adults</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Colonoscopy:</strong> Every 10 years (gold standard)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>FIT test (stool-based):</strong> Annually</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cologuard (stool DNA):</strong> Every 3 years</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High risk:</strong> Start screening earlier (often age 40 or 10 years before the age a family member was diagnosed)</span>
              </li>
            </ul>
            <p className="mb-6">
              Family history of colorectal cancer or polyps, inflammatory bowel disease, or certain genetic syndromes increase your risk and warrant earlier, more frequent screening.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Cervical Cancer Screening
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Cervical cancer screening has dramatically reduced cervical cancer rates through early detection of precancerous changes. The Pap test and HPV testing are the primary tools.
            </p>
            <p className="mb-6">
              <strong>General Guidelines:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ages 21-29:</strong> Pap test every 3 years</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ages 30-65:</strong> Pap + HPV co-testing every 5 years (preferred), or Pap alone every 3 years</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Age 65+:</strong> May discontinue if adequate prior screening and no high-risk history</span>
              </li>
            </ul>
            <p className="mb-6">
              Women with certain risk factors, such as HIV, a weakened immune system, or a history of cervical precancer, may need more frequent screening.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Lung Cancer Screening
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Lung cancer screening with low-dose CT scans has been shown to reduce lung cancer mortality in high-risk individuals, particularly those with significant smoking history.
            </p>
            <p className="mb-6">
              <strong>General Guidelines:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ages 50-80:</strong> Annual low-dose CT for those with a 20 pack-year smoking history who currently smoke or quit within the past 15 years</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Screening should occur in settings with expertise in lung cancer screening and treatment</span>
              </li>
            </ul>
            <p className="mb-6">
              This screening is specifically for high-risk individuals, it's not recommended for the general population without significant smoking history.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Other Important Screenings
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While the screenings above are recommended for broad populations, other cancer screenings may be appropriate based on individual risk:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prostate cancer:</strong> Discussion about PSA testing for men 50+ (earlier for high-risk individuals)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Skin cancer:</strong> Regular self-exams and provider skin checks, especially for those with many moles or family history</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Genetic counseling:</strong> Consider if you have strong family history of certain cancers</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking Action: Your Next Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Knowledge is only powerful when paired with action. If you're unsure about which screenings you need, when to schedule them, or whether your family history puts you at higher risk, now is the time to have that conversation with your primary care provider.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Cape Girardeau, MO, we take a personalized approach to preventative care. We review your individual risk factors, discuss the benefits and limitations of each screening option, and build a screening schedule that fits you. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you would rather pay a flat monthly fee. Either way, you get unhurried visits and direct access to your provider.
            </p>
            <p className="mb-6">
              Early detection saves lives, but only if you take the first step. Do not wait for symptoms to appear. Call (573) 200-6143 or request a visit online, and take control of your health.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Guardian Primary Care Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Guardian Primary Care is a nurse practitioner led practice in Cape Girardeau, Missouri. Preston Holifield, DNP, APRN, FNP-C is nationally certified by the American Academy of Nurse Practitioners and works with a Missouri Licensed Collaborating Physician.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog/skin-cancer-prevention-and-early-detection" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Skin Cancer Prevention and Early Detection
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Sun safety, the ABCDEs of melanoma, and how to run a thorough skin check at home.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  The Importance of Annual Wellness Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  What to expect during your yearly checkup and how to make the most of your appointment time.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog/women-s-health-after-40-what-screenings-you-need-and-when" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Women&apos;s Health After 40
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  The screenings women need after 40, what each one looks for, and when to start.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you create a personalized screening plan based on your unique health needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Visit Today
          </a>
          <p className="mt-6 text-white/90">
            Guardian Primary Care, 2441 Myra Dr, Cape Girardeau, MO 63703. Call{' '}
            <a href="tel:+15732006143" className="underline hover:text-white">(573) 200-6143</a>. Visits are by appointment.
          </p>
        </div>
      </section>
    </main>
  )
}