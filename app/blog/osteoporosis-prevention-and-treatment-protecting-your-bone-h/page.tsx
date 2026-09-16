import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Osteoporosis: Prevention, Screening and Treatment',
  description: 'Evidence-based ways to protect your bone health: risk factors, bone density screening, calcium and vitamin D, exercise, and treatment options explained.',
  openGraph: {
    title: 'Osteoporosis: Prevention, Screening and Treatment',
    description: 'Evidence-based ways to protect your bone health: risk factors, bone density screening, calcium and vitamin D, exercise, and treatment options explained.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
    authors: ['Guardian Primary Care Clinical Team'],
  },
}

export default function OsteoporosisArticlePage() {
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Osteoporosis Prevention and Treatment: Protecting Your Bone Health
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Guardian Primary Care Team</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-osteoporosis.jpg"
              alt="An older adult walking outdoors in daylight, a reminder that weight-bearing activity helps protect bone density"
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
          {/* Opening Paragraph */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Imagine bones so fragile that a simple sneeze, a gentle hug, or bending to tie your shoes could result in a fracture. For millions of Americans living with osteoporosis, this isn't a worst-case scenario, it's a daily reality. Often called the "silent disease," osteoporosis quietly weakens bones over years, giving no warning until a sudden break changes everything. But here's the empowering truth: osteoporosis doesn't have to be inevitable. With the right knowledge and proactive care, you can protect your bone health and maintain your independence and quality of life for years to come.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            At Guardian Primary Care in Cape Girardeau, Missouri, we believe prevention is the cornerstone of lasting wellness. Understanding osteoporosis (what causes it, who is at risk, and how to prevent or manage it) matters for everyone, and it matters more as we age. Let's explore the science behind bone health and the practical steps you can take today to build and maintain strong bones for life.
          </p>

          {/* Section 1 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            What Is Osteoporosis?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Osteoporosis is a bone disease that occurs when the body loses too much bone mass, makes too little bone, or both. The result is bones that become weak, brittle, and prone to fractures. The name itself comes from Latin: "osteo" meaning bone and "porosis" meaning porous, so literally, porous bones.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Throughout our lives, our bones are constantly being broken down and rebuilt in a process called remodeling. In our youth and early adulthood, new bone is created faster than old bone is removed, leading to increased bone mass. Most people reach their peak bone mass around age 30. After that, bone remodeling continues, but we begin to lose slightly more bone mass than we gain. When this loss becomes significant and bone density drops below a certain threshold, osteoporosis develops.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            According to the National Osteoporosis Foundation, approximately 10 million Americans have osteoporosis, and another 44 million have low bone density (osteopenia), placing them at increased risk. What makes this disease particularly dangerous is that it progresses silently, and most people don't know they have it until they experience their first fracture, often in the hip, spine, or wrist.
          </p>

          {/* Section 2 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Who Is at Risk?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While osteoporosis can affect anyone, certain factors significantly increase your risk. Understanding these risk factors is the first step toward prevention:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Age:</strong> Risk increases significantly after age 50, particularly for women after menopause when estrogen levels drop dramatically</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Gender:</strong> Women are four times more likely to develop osteoporosis than men, though men are certainly not immune</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Family History:</strong> Having a parent or sibling with osteoporosis or a history of fractures increases your risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Body Frame:</strong> People with small, thin frames have less bone mass to draw from as they age</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Lifestyle Factors:</strong> Smoking, excessive alcohol consumption, sedentary lifestyle, and poor nutrition all contribute to bone loss</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Medications:</strong> Long-term use of corticosteroids and certain other medications can weaken bones</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Medical Conditions:</strong> Thyroid disorders, rheumatoid arthritis, celiac disease, and other conditions can affect bone health</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="font-display text-[var(--color-ink)] italic text-xl leading-relaxed">
              "The best time to start protecting your bone health was 20 years ago. The second best time is today. It's never too early, or too late, to take action."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Prevention: Building Strong Bones for Life
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The foundation of osteoporosis prevention begins long before we reach our senior years. The bone mass we build in our youth serves as a reserve we'll draw from later in life. However, it's never too late to adopt bone-healthy habits. Here are the evidence-based strategies that make the biggest difference:
          </p>

          <h3 className="text-xl text-[var(--color-ink)] mt-8 mb-4 font-semibold">
            Nutrition: Feed Your Bones
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Calcium</strong> is the building block of bone tissue. Adults need 1,000-1,200 mg daily, depending on age and gender. Excellent sources include dairy products, leafy greens, sardines with bones, fortified foods, and almonds. While supplements can help, calcium from food is generally better absorbed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Vitamin D</strong> is equally crucial, because it helps your body absorb calcium. Most adults need 600-800 IU daily, though many experts recommend higher amounts, especially for those with limited sun exposure. Few foods naturally contain vitamin D (fatty fish, egg yolks, fortified milk), so supplementation is often necessary. We recommend having your vitamin D levels checked to ensure you're getting enough.
          </p>

          <h3 className="text-xl text-[var(--color-ink)] mt-8 mb-4 font-semibold">
            Exercise: Use It or Lose It
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Weight-bearing and resistance exercises are vital for bone health. These activities force your bones to work against gravity or resistance, stimulating them to maintain or increase their density. Effective exercises include walking, jogging, dancing, tennis, strength training, and yoga. Aim for at least 30 minutes of weight-bearing activity most days of the week, combined with strength training twice weekly. The key is consistency, since bones respond to regular mechanical stress by becoming stronger.
          </p>

          <h3 className="text-xl text-[var(--color-ink)] mt-8 mb-4 font-semibold">
            Lifestyle Modifications
          </h3>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Quit smoking:</strong> Tobacco use is directly toxic to bone cells and interferes with calcium absorption</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Limit alcohol:</strong> More than 2-3 drinks daily can accelerate bone loss</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Prevent falls:</strong> Remove tripping hazards at home, ensure good lighting, use handrails, and maintain good vision and balance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Maintain healthy weight:</strong> Being underweight increases osteoporosis risk, while healthy weight supports bone strength</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Screening and Diagnosis
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Because osteoporosis is silent until a fracture occurs, screening is essential. The gold standard test is a DEXA (dual-energy X-ray absorptiometry) scan, a quick, painless procedure that measures bone mineral density. The U.S. Preventive Services Task Force recommends bone density screening for:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6 text-[var(--color-ink)] leading-loose">
            <li>All women age 65 and older</li>
            <li>Women under 65 who are postmenopausal and have risk factors</li>
            <li>Men age 70 and older</li>
            <li>Younger men with risk factors or conditions affecting bone health</li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Your DEXA results are reported as a T-score, comparing your bone density to that of a healthy 30-year-old. A T-score of -1.0 or above is normal; between -1.0 and -2.5 indicates osteopenia (low bone mass); and -2.5 or below indicates osteoporosis. These numbers help guide treatment decisions and monitor progress over time.
          </p>

          {/* Section 5 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Treatment Options: When Prevention Isn't Enough
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're diagnosed with osteoporosis or significant osteopenia, several effective treatment options are available. The goal of treatment is to slow bone loss, increase bone density, and prevent fractures.
          </p>

          <h3 className="text-xl text-[var(--color-ink)] mt-8 mb-4 font-semibold">
            Medications
          </h3>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Bisphosphonates</strong> are the most commonly prescribed osteoporosis medications. They work by slowing the breakdown of bone, allowing bone-building cells to work more effectively. Common examples include alendronate (Fosamax), risedronate (Actonel), and zoledronic acid (Reclast). These medications have been shown to significantly reduce fracture risk.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Hormone therapy</strong> may be appropriate for some postmenopausal women, as estrogen helps maintain bone density. However, this approach requires careful consideration of individual risks and benefits.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
            <strong>Newer medications</strong> include denosumab (Prolia), which works differently than bisphosphonates, and anabolic agents like teriparatide (Forteo) and romosozumab (Evenity), which actually stimulate new bone formation. These are typically reserved for people at very high risk of fracture.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            The choice of medication depends on many factors including your bone density, fracture risk, other health conditions, and personal preferences. Your primary care provider will work with you to determine the best approach for your individual situation.
          </p>

          {/* Section 6 */}
          <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
            Living Well with Osteoporosis
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A diagnosis of osteoporosis or osteopenia doesn't mean the end of an active, fulfilling life. With proper management, most people with osteoporosis can continue doing the things they love while protecting their bones. The key is striking the right balance between staying active (which benefits your bones) and avoiding activities that significantly increase fracture risk.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Working with your healthcare team, you can develop a comprehensive plan that includes appropriate exercise, nutrition, medication if needed, and strategies to prevent falls. Regular follow-up with bone density testing helps monitor your progress and adjust treatment as needed.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-8">
            Remember, managing osteoporosis is a marathon, not a sprint. The habits you build today (eating calcium-rich foods, staying active, taking prescribed medications consistently) accumulate over time to make a real difference in your bone health and quality of life.
          </p>

          {/* Closing */}
          <div className="bg-[var(--color-light)] rounded-xl p-8 mt-12">
            <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4 font-light">
              Partner with Us for Your Bone Health
            </h3>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              At Guardian Primary Care in Cape Girardeau, Missouri, we take a proactive, personal approach to osteoporosis prevention and treatment. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available as an alternative if you would rather pay a flat monthly rate. Whichever route you choose, we take the time to assess your risk factors, talk through your concerns, and build a bone health plan around your needs and goals.
            </p>
            <p className="text-[var(--color-ink)] leading-loose text-base">
              Whether you're interested in prevention, need screening, or are managing an existing diagnosis, we're here to support you every step of the way. Don't wait for a fracture to take your bone health seriously. Call us at <a href="tel:+15732006143" className="text-[var(--color-primary)] underline">(573) 200-6143</a> to schedule a bone health assessment.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Guardian Primary Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Nurse practitioner led primary care in Cape Girardeau, Missouri. Reviewed by Preston Holifield, DNP, APRN, FNP-C, a nationally certified family nurse practitioner working with a Missouri licensed collaborating physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl mb-8 text-[var(--color-ink)] font-light text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog/heart-disease-prevention-small-changes-that-protect-your-hea" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Heart Disease Prevention: Small Changes That Protect Your Heart
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Evidence-based habits that protect your cardiovascular health and lower your risk.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog/vitamin-d-deficiency-symptoms-testing-and-supplementation" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Vitamin D Deficiency: Symptoms, Testing, and Supplementation
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why vitamin D matters for bone strength, how it is tested, and how much most adults need.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog/the-importance-of-annual-wellness-exams-for-adults" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Importance of Annual Wellness Exams for Adults
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why a yearly visit is the appointment most likely to catch a problem early.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our care team in Cape Girardeau, Missouri is here to help you protect your bone health.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105"
            >
              Schedule Your Consultation
            </a>
            <a
              href="tel:+15732006143"
              className="inline-block border border-white/70 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300"
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