import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Vitamin D Deficiency: Symptoms, Testing, Treatment',
  description: 'Signs of low vitamin D, who should be tested, what the lab numbers mean and how supplementation works. Guardian Primary Care, Cape Girardeau, Missouri.',
  openGraph: {
    title: 'Vitamin D Deficiency: Symptoms, Testing, Treatment',
    description: 'Comprehensive guide to recognizing, testing, and treating vitamin D deficiency.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  },
}

export default function VitaminDDeficiencyBlogPost() {
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8 font-display">
            Vitamin D Deficiency: Symptoms, Testing, and Supplementation
          </h1>

          {/* Meta Information */}
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
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/cond-osteoporosis.jpg"
              alt="An anatomical model of the lower spine and pelvis, illustrating the link between vitamin D and bone health"
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              You're exhausted despite getting enough sleep. Your bones ache for no apparent reason. You catch every cold that comes your way. These seemingly unrelated symptoms might all point to one common culprit: vitamin D deficiency, a common condition that often goes undiagnosed for years.
            </p>
            <p className="mb-6">
              Vitamin D isn't just another vitamin on the supplement shelf. It's a hormone-like nutrient that influences nearly every cell in your body, from your immune system to your bones, heart, and even your mood. When levels drop too low, the consequences ripple through your entire health. The good news? With proper testing and treatment, restoring healthy vitamin D levels is straightforward and can dramatically improve how you feel.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            What Is Vitamin D and Why Does It Matter?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Vitamin D is unique among vitamins because your body can produce it when your skin is exposed to sunlight, specifically UVB rays. It exists in two primary forms: D2 (ergocalciferol) from plant sources and D3 (cholecalciferol) from animal sources and sun exposure. Once in your body, vitamin D undergoes conversions in the liver and kidneys to become its active form, calcitriol.
            </p>
            <p className="mb-4">
              This active form plays critical roles throughout your body:
            </p>
            <ul className="space-y-3 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Bone health:</strong> Regulates calcium absorption and bone mineralization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Immune function:</strong> Enhances pathogen-fighting effects of immune cells</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Muscle function:</strong> Supports muscle strength and reduces fall risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Mood regulation:</strong> Influences neurotransmitter synthesis and brain function</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Cardiovascular health:</strong> Helps regulate blood pressure and inflammation</span>
              </li>
            </ul>
            <p>
              Without adequate vitamin D, these systems can't function optimally, leading to a cascade of health problems that often develop slowly and insidiously.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Recognizing the Signs of Vitamin D Deficiency
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Vitamin D deficiency symptoms are often subtle and nonspecific, which is why the condition frequently goes unrecognized. Many people attribute these symptoms to stress, aging, or other conditions. Common signs include:
            </p>
            <ul className="space-y-3 ml-6 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Persistent fatigue:</strong> Feeling tired despite adequate rest</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Bone and back pain:</strong> Aching bones, particularly in the lower back, hips, and legs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Frequent infections:</strong> Getting sick more often, especially respiratory infections</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Mood changes:</strong> Depression, anxiety, or seasonal mood shifts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Muscle weakness:</strong> Difficulty with stairs, getting up from chairs, or general weakness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Slow wound healing:</strong> Cuts and scrapes take longer to recover</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Hair loss:</strong> Thinning or excessive shedding, particularly in women</span>
              </li>
            </ul>
            <p>
              In children, vitamin D deficiency can lead to rickets, which leaves bones soft, weak, and prone to deformity. In adults, severe long-term deficiency can cause osteomalacia (soft bones) and contribute to osteoporosis. The condition has also been linked to increased risk of cardiovascular disease, certain cancers, autoimmune conditions, and cognitive decline.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-display">
            "Low vitamin D is one of the most common findings in primary care, yet many people never get tested. A simple blood test can reveal whether this quiet deficiency is affecting your health."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Who Is at Risk for Vitamin D Deficiency?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              While vitamin D deficiency can affect anyone, certain populations face elevated risk:
            </p>
            <p className="mb-4">
              <strong>Geographic and lifestyle factors:</strong> People living in northern latitudes (above 37 degrees), those who spend most of their time indoors, and individuals who consistently use sunscreen or wear covering clothing have reduced sun exposure. Here in Cape Girardeau, we're at the cusp where seasonal variations significantly impact vitamin D production.
            </p>
            <p className="mb-4">
              <strong>Skin pigmentation:</strong> Melanin reduces the skin's ability to produce vitamin D from sunlight. People with darker skin tones need considerably more sun exposure to produce the same amount of vitamin D as those with lighter skin, which places them at higher risk.
            </p>
            <p className="mb-4">
              <strong>Age-related factors:</strong> As we age, our skin becomes less efficient at producing vitamin D, and our kidneys become less effective at converting it to its active form. Adults over 65 are at particular risk.
            </p>
            <p className="mb-4">
              <strong>Weight and absorption issues:</strong> Vitamin D is fat-soluble, and obesity can sequester it in fat tissue, reducing bioavailability. People with conditions affecting fat absorption (including Crohn's disease, celiac disease, and a history of gastric bypass surgery) often struggle to absorb adequate vitamin D.
            </p>
            <p className="mb-4">
              <strong>Kidney and liver disease:</strong> Since these organs convert vitamin D to its active form, disease affecting them can impair vitamin D metabolism.
            </p>
            <p>
              <strong>Certain medications:</strong> Anticonvulsants, glucocorticoids, and some cholesterol-lowering drugs can interfere with vitamin D metabolism.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Testing for Vitamin D: What You Need to Know
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              The most accurate way to assess vitamin D status is through a blood test measuring 25-hydroxyvitamin D [25(OH)D], the form that reflects both dietary intake and sun-produced vitamin D. This test is simple, requiring only a standard blood draw.
            </p>
            <p className="mb-4">
              <strong>Understanding the numbers:</strong>
            </p>
            <ul className="space-y-2 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Deficient:</strong> Less than 20 ng/mL (50 nmol/L)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Insufficient:</strong> 20-30 ng/mL (50-75 nmol/L)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Sufficient:</strong> 30-50 ng/mL (75-125 nmol/L)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Potentially excessive:</strong> Above 100 ng/mL (250 nmol/L)</span>
              </li>
            </ul>
            <p className="mb-4">
              While the Institute of Medicine defines sufficiency as levels above 20 ng/mL, many experts recommend maintaining levels between 30-50 ng/mL for optimal health. The Endocrine Society suggests that individuals at risk for deficiency maintain levels above 30 ng/mL.
            </p>
            <p className="mb-4">
              <strong>Who should be tested?</strong> While universal screening isn't currently recommended, testing is appropriate for individuals with risk factors, unexplained symptoms consistent with deficiency, osteoporosis or frequent fractures, malabsorption disorders, chronic kidney or liver disease, and those taking medications that affect vitamin D metabolism.
            </p>
            <p>
              At Guardian Primary Care in Cape Girardeau, we take a personalized approach to vitamin D testing, considering your individual risk factors, symptoms, and health goals. We are in network with most major commercial insurances, Medicare and Medicaid, and we also offer Guardian Direct Care, so there is time in the visit to work out whether testing is right for you.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Evidence-Based Supplementation Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Once deficiency is identified, supplementation is usually the most practical solution. Here's what the evidence tells us about effective supplementation:
            </p>
            <p className="mb-4">
              <strong>Choosing the right form:</strong> Vitamin D3 (cholecalciferol) is generally more effective than D2 (ergocalciferol) at raising and maintaining blood levels. Most supplements and medical treatments use D3.
            </p>
            <p className="mb-4">
              <strong>Dosing guidelines:</strong> The recommended dietary allowance is 600-800 IU daily for most adults. However, correcting deficiency often requires higher doses:
            </p>
            <ul className="space-y-2 ml-6 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Maintenance:</strong> 1,000-2,000 IU daily for those with adequate levels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Insufficiency correction:</strong> 2,000-4,000 IU daily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-semibold">•</span>
                <span><strong>Deficiency treatment:</strong> 6,000-10,000 IU daily or 50,000 IU weekly for 8-12 weeks, followed by maintenance dosing</span>
              </li>
            </ul>
            <p className="mb-4">
              <strong>Timing and absorption:</strong> Vitamin D is fat-soluble, so taking it with a meal containing fat enhances absorption. There's no strong evidence that time of day matters, so choose whatever time you'll remember consistently.
            </p>
            <p className="mb-4">
              <strong>Cofactors matter:</strong> Vitamin D works synergistically with other nutrients. Adequate magnesium is essential for vitamin D metabolism, and a deficiency in one can impair the other. Vitamin K2 helps direct calcium to bones rather than soft tissues. If you're taking high-dose vitamin D, consider whether you're getting adequate magnesium (300-400 mg daily) and vitamin K2.
            </p>
            <p className="mb-4">
              <strong>Monitoring and adjusting:</strong> After starting supplementation, retest in 3-4 months to ensure you're reaching target levels. Once optimal levels are achieved, annual monitoring is typically sufficient for most people.
            </p>
            <p>
              <strong>Safety considerations:</strong> Vitamin D toxicity is rare but possible with excessive supplementation over time. Symptoms include nausea, vomiting, weakness, and serious complications like kidney damage. Toxicity typically occurs only with chronic intake exceeding 10,000 IU daily. This is why testing and medical supervision are important, especially for high-dose supplementation.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Beyond Supplements: Food Sources and Sun Exposure
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              While supplementation is often necessary to correct deficiency, don't overlook natural sources:
            </p>
            <p className="mb-4">
              <strong>Dietary sources</strong> are limited but include fatty fish (salmon, mackerel, sardines), fish liver oils, egg yolks from vitamin D-fed chickens, fortified foods (milk, orange juice, cereals), and beef liver and cheese in small amounts. Even with a vitamin D-rich diet, most people need sun exposure or supplements to maintain optimal levels.
            </p>
            <p className="mb-4">
              <strong>Sun exposure:</strong> Your skin produces vitamin D when exposed to UVB rays. Generally, 10-30 minutes of midday sun exposure several times weekly (without sunscreen, exposing arms, legs, abdomen, or back) can produce adequate vitamin D for lighter-skinned individuals. Darker skin tones need longer exposure.
            </p>
            <p className="mb-4">
              However, factors limiting sun-derived vitamin D include: season and latitude (reduced UVB in winter months and northern areas), time of day (strongest UVB between 10 AM-3 PM), cloud cover and pollution, use of sunscreen (which sharply reduces production), age (decreased skin production efficiency), and skin pigmentation.
            </p>
            <p>
              Balancing vitamin D production with skin cancer risk is important. Brief, regular exposure without burning may be beneficial, but excessive sun exposure increases skin cancer risk. This is why testing and supplementation, rather than prolonged sun exposure, are generally the safest approach to maintaining adequate vitamin D.
            </p>
          </div>

          {/* Closing Section */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light font-display">
            Taking Action: Your Next Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8">
            <p className="mb-4">
              Vitamin D deficiency is one of the most common and most correctable nutritional deficiencies. If you're experiencing persistent fatigue, frequent infections, bone pain, mood changes, or other symptoms, or if you have risk factors like limited sun exposure, darker skin, or certain medical conditions, it's worth discussing testing with your primary care provider.
            </p>
            <p className="mb-4">
              The path forward is straightforward: get tested to know your baseline, work with your provider to determine appropriate supplementation, retest to ensure you're reaching optimal levels, and maintain those levels with ongoing supplementation or lifestyle modifications. When low levels are corrected, people often notice steadier energy, less bone and muscle discomfort, and a better sense of overall wellbeing.
            </p>
            <p>
              At Guardian Primary Care, we take the time to investigate symptoms thoroughly, test appropriately, and develop personalized supplementation strategies based on your unique needs and goals. Visits are built around the time needed to address these important but often overlooked health factors. If you're wondering whether vitamin D deficiency might be affecting your health, we're here to help you find answers and solutions.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Guardian Primary Care team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Led by Preston Holifield, DNP, APRN, FNP-C, a board-certified family nurse practitioner working with a Missouri Licensed Collaborating Physician. Serving Cape Girardeau, MO.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center font-display">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Understanding Your Annual Wellness Visit
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  What to expect during your comprehensive health assessment and why prevention matters.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Chronic Conditions</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-display">
                  Managing High Blood Pressure Naturally
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Lifestyle strategies and medical management for optimal blood pressure control.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Nutrition</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors font-display">
                  The Role of Nutrition in Chronic Disease Prevention
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Evidence-based dietary strategies for long-term health and disease prevention.
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
            Our care team in Cape Girardeau, Missouri can help you find out whether low vitamin D is part of what you are feeling. We see patients by appointment, so call <a href="tel:+15732006143" className="font-semibold underline underline-offset-4 hover:text-white">(573) 200-6143</a> and we will find a time.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Request an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}