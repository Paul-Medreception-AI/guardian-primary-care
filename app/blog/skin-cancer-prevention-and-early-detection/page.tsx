import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skin Cancer Prevention and Early Detection | Guardian Primary Care',
  description: 'Learn evidence-based strategies for preventing skin cancer and detecting it early. Expert guidance from Guardian Primary Care in Birmingham, AL.',
  keywords: 'skin cancer prevention, melanoma detection, UV protection, skin exam, dermatology, Birmingham AL, Guardian Primary Care',
}

export default function SkinCancerPreventionPage() {
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Skin Cancer Prevention and Early Detection
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
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
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every hour, more than two people die from skin cancer in the United States. Yet this is one of the most preventable and treatable cancers when caught early. Whether you're a sun lover, an outdoor worker, or someone who simply wants to protect your family's health, understanding skin cancer prevention and early detection could save your life.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Birmingham, AL, we believe that education and proactive care are your best defenses against skin cancer. Let's explore evidence-based strategies that can help you protect your skin and catch problems early when they're most treatable.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Understanding Skin Cancer: The Basics
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Skin cancer occurs when skin cells are damaged, often by ultraviolet (UV) radiation from the sun or tanning beds, causing them to grow uncontrollably. There are three main types:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Basal cell carcinoma</strong> — the most common type, rarely spreads, often appears as a pearly bump or pink patch</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Squamous cell carcinoma</strong> — the second most common, can spread if untreated, may look like a scaly red patch or open sore</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Melanoma</strong> — the most dangerous type, can spread rapidly, often develops from an existing mole or appears as a new dark spot</span>
              </li>
            </ul>
            <p className="mb-6">
              According to the American Cancer Society, more than 5.4 million cases of basal and squamous cell skin cancers are diagnosed each year in the U.S., while melanoma accounts for about 100,000 new cases annually. The good news? When detected early, the five-year survival rate for melanoma is 99%.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              "When it comes to skin cancer, an ounce of prevention truly is worth a pound of cure. The habits you develop today can dramatically reduce your risk tomorrow."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Who Is at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone can develop skin cancer, certain factors increase your risk:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Fair skin</strong> — lighter skin has less melanin, which provides some natural protection from UV radiation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>History of sunburns</strong> — even one severe sunburn in childhood or adolescence can double your risk of melanoma</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Many moles</strong> — having more than 50 moles increases melanoma risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Family history</strong> — about 10% of melanoma cases run in families</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Excessive sun or tanning bed exposure</strong> — cumulative UV damage over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Weakened immune system</strong> — due to medical conditions or medications</span>
              </li>
            </ul>
            <p className="mb-6">
              It's important to note that people of all skin tones can develop skin cancer. In fact, when skin cancer is diagnosed in people with darker skin, it's often at a more advanced stage because it was detected later. Everyone needs to practice sun safety and perform regular skin checks.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Essential Prevention Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Preventing skin cancer is largely within your control. Here are evidence-based strategies that can significantly reduce your risk:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Use Sunscreen Properly</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Choose broad-spectrum sunscreen with SPF 30 or higher</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Apply 15 minutes before going outdoors and reapply every two hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use enough — most adults need about one ounce (a shot glass full) to cover exposed skin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Don't forget often-missed spots: ears, back of neck, tops of feet, and scalp (if hair is thinning)</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Seek Shade and Dress Smart</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoid peak sun hours (10 a.m. to 4 p.m.) when UV rays are strongest</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Wear protective clothing: long sleeves, pants, and wide-brimmed hats (at least 3 inches)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Choose UV-blocking sunglasses that wrap around to protect the delicate skin around your eyes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consider UPF (Ultraviolet Protection Factor) clothing for extended outdoor activities</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Avoid Tanning Beds</h3>
            <p className="mb-6">
              The World Health Organization classifies UV-emitting tanning devices as carcinogenic to humans. Just one indoor tanning session before age 35 increases melanoma risk by 75%. There is no such thing as a "safe" tan from a tanning bed.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Early Detection: The ABCDEs of Melanoma
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Early detection dramatically improves outcomes. The American Academy of Dermatology recommends using the ABCDE rule to identify potential melanomas:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="bg-[var(--color-primary)] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">A</div>
                <div>
                  <strong className="block">Asymmetry</strong>
                  <span className="text-[var(--color-muted)]">One half of the mole doesn't match the other half</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[var(--color-primary)] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">B</div>
                <div>
                  <strong className="block">Border</strong>
                  <span className="text-[var(--color-muted)]">Edges are irregular, ragged, notched, or blurred</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[var(--color-primary)] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">C</div>
                <div>
                  <strong className="block">Color</strong>
                  <span className="text-[var(--color-muted)]">Color is not uniform; may include shades of brown, black, pink, red, white, or blue</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[var(--color-primary)] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">D</div>
                <div>
                  <strong className="block">Diameter</strong>
                  <span className="text-[var(--color-muted)]">Larger than 6mm (about the size of a pencil eraser), though melanomas can be smaller</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[var(--color-primary)] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">E</div>
                <div>
                  <strong className="block">Evolving</strong>
                  <span className="text-[var(--color-muted)]">The mole is changing in size, shape, color, or elevation, or developing new symptoms like bleeding or itching</span>
                </div>
              </li>
            </ul>
            <p className="mb-6">
              Remember, not all melanomas follow these rules. Any new, changing, or unusual spot on your skin should be evaluated by a healthcare provider.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Performing Self-Exams
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Monthly self-exams can help you detect changes early. Here's how to perform a thorough skin check:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Examine your body in a full-length mirror, front and back, then check both sides with arms raised</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bend elbows and look carefully at forearms, upper arms, and palms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Check the backs of your legs, feet, spaces between toes, and soles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use a hand mirror to examine the back of your neck and scalp (part hair to check thoroughly)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Check your back and buttocks with a hand mirror</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Take photos of moles to track changes over time</span>
              </li>
            </ul>
            <p className="mb-6">
              If you notice anything suspicious, don't wait for your annual physical. Contact your healthcare provider promptly.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            When to See a Doctor
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Schedule an appointment with your healthcare provider if you notice:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A new growth or spot on your skin</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A mole that has changed in size, shape, or color</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A sore that doesn't heal within a few weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A spot that itches, bleeds, or becomes painful</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>A mole that looks significantly different from your other moles (the "ugly duckling" sign)</span>
              </li>
            </ul>
            <p className="mb-6">
              Annual skin checks are especially important if you're at higher risk. Your primary care provider can perform a full-body skin examination and refer you to a dermatologist if needed.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Skin cancer prevention and early detection are within your control. By practicing sun safety, performing regular self-exams, and staying vigilant about changes in your skin, you're taking powerful steps to protect your health. Remember, most skin cancers are highly treatable when caught early, making awareness and action your most valuable tools.
            </p>
            <p className="mb-6">
              At Guardian Primary Care in Birmingham, AL, we're committed to helping you maintain healthy skin throughout your life. Whether you need a skin check, have concerns about a suspicious spot, or simply want guidance on prevention strategies, our team is here to provide personalized, comprehensive care.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Guardian Primary Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Primary Care / DPC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Preventive Care</div>
                <h4 className="text-xl font-light mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  Understanding Your Annual Physical Exam
                </h4>
                <p className="text-[var(--color-muted)] text-sm">What to expect and how to prepare for your yearly checkup</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Chronic Care</div>
                <h4 className="text-xl font-light mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  Managing Chronic Conditions with DPC
                </h4>
                <p className="text-[var(--color-muted)] text-sm">How direct primary care improves outcomes for ongoing health needs</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  The Importance of Health Screenings
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Evidence-based guidelines for cancer and disease prevention</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Visit
          </a>
        </div>
      </section>

    </main>
  )
}