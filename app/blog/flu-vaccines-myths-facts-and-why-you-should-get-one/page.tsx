import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flu Vaccines: Myths, Facts, and Why You Should Get One | Guardian Primary Care',
  description: 'Separate fact from fiction about flu vaccines. Learn why annual flu shots are important, debunk common myths, and discover how vaccination protects you and your community in Birmingham, AL.',
  openGraph: {
    title: 'Flu Vaccines: Myths, Facts, and Why You Should Get One',
    description: 'Separate fact from fiction about flu vaccines. Learn why annual flu shots are important, debunk common myths, and discover how vaccination protects you and your community.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
}

export default function FluVaccinesBlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-white/80 text-sm mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>
          
          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Flu Vaccines: Myths, Facts, and Why You Should Get One
          </h1>
          
          {/* Meta Information */}
          <div className="flex justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Care Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every fall, the same questions emerge: "Do I really need a flu shot this year?" "Didn't I get one last year?" "Can the vaccine actually give me the flu?" These concerns are understandable, but they're often based on misconceptions that can put your health—and the health of those around you—at risk.
            </p>
            <p className="mb-6">
              The flu is far more than just a bad cold. Each year, influenza causes millions of illnesses, hundreds of thousands of hospitalizations, and tens of thousands of deaths in the United States alone. Yet despite the serious nature of this illness, misinformation about flu vaccines persists, leaving many people vulnerable to a disease that is largely preventable.
            </p>
            <p>
              Let's separate fact from fiction and explore why getting your annual flu vaccine is one of the most important steps you can take to protect yourself and your community in Birmingham, AL.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding the Flu and How Vaccines Work
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Influenza is a contagious respiratory illness caused by flu viruses. Unlike the common cold, the flu comes on suddenly and can cause severe illness, particularly in young children, older adults, pregnant women, and people with chronic health conditions like asthma, diabetes, or heart disease.
            </p>
            <p className="mb-6">
              The flu vaccine works by introducing your immune system to inactive or weakened flu viruses (or even just specific proteins from the virus). This exposure allows your body to develop antibodies—proteins that recognize and fight off the actual flu virus if you encounter it later. It typically takes about two weeks after vaccination for your body to build full protection.
            </p>
            <p>
              Because flu viruses constantly evolve and change, scientists reformulate the vaccine each year to match the strains most likely to circulate during that flu season. This is why you need a new flu shot annually—last year's vaccine won't protect you against this year's viruses.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Myths About Flu Vaccines—Debunked
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6 font-semibold">
              Myth #1: "The flu vaccine can give you the flu."
            </p>
            <p className="mb-6">
              <strong>Fact:</strong> This is impossible. The flu shot contains either inactivated (killed) virus or no virus at all—just proteins that help your immune system recognize the flu. The nasal spray vaccine contains weakened viruses that cannot cause full flu illness. Some people experience mild side effects like soreness at the injection site or low-grade fever, which are signs that your immune system is responding to the vaccine, not signs of actual flu infection.
            </p>
            
            <p className="mb-6 font-semibold">
              Myth #2: "I got the flu shot last year, so I'm still protected."
            </p>
            <p className="mb-6">
              <strong>Fact:</strong> Flu viruses mutate rapidly, and immunity from previous vaccinations wanes over time. Each year's vaccine is specifically designed to protect against the strains predicted to be most common that season. Annual vaccination is essential for optimal protection.
            </p>
            
            <p className="mb-6 font-semibold">
              Myth #3: "Healthy people don't need flu shots."
            </p>
            <p className="mb-6">
              <strong>Fact:</strong> While certain groups are at higher risk for complications, anyone can get severely ill from the flu—even healthy adults. Moreover, getting vaccinated protects vulnerable people around you who may not be able to get vaccinated or who are more susceptible to serious illness. This concept, called "herd immunity," is crucial for community health.
            </p>
            
            <p className="mb-6 font-semibold">
              Myth #4: "The flu vaccine doesn't work well, so why bother?"
            </p>
            <p className="mb-6">
              <strong>Fact:</strong> Vaccine effectiveness varies from year to year depending on how well the vaccine matches circulating strains, but even in years when the match isn't perfect, vaccination significantly reduces the severity of illness, hospitalizations, and deaths. Studies consistently show that vaccinated people who do get sick have milder symptoms and recover faster than unvaccinated people.
            </p>
            
            <p className="mb-6 font-semibold">
              Myth #5: "Natural immunity from getting the flu is better than vaccine immunity."
            </p>
            <p>
              <strong>Fact:</strong> While recovering from flu does provide some immunity, it comes at a high cost—the risk of severe illness, complications like pneumonia, and even death. Vaccination provides protection without the danger of serious disease. Plus, there are multiple flu strains circulating each season; having immunity to one doesn't protect you from others.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "Getting your flu shot isn't just about protecting yourself—it's about protecting your family, coworkers, and the most vulnerable members of our Birmingham community."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The Real Benefits of Flu Vaccination
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The evidence supporting flu vaccination is overwhelming. Research published in leading medical journals demonstrates that annual flu shots:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduce your risk of flu illness</strong> by 40-60% when the vaccine is well-matched to circulating strains</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Significantly lower the risk of hospitalization</strong> from flu, especially among high-risk groups like older adults and people with chronic conditions</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduce the severity of illness</strong> if you do get sick, resulting in fewer missed days of work or school</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Protect pregnant women and their babies</strong> for several months after birth, when infants are too young to be vaccinated</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Lower the risk of dangerous complications</strong> like pneumonia, sepsis, heart attacks, and strokes that can follow flu illness</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduce ICU admissions and deaths</strong> from flu, saving thousands of lives each year</span>
              </li>
            </ul>
            <p>
              For children, flu vaccination has been shown to be life-saving, significantly reducing the risk of flu-related death. For adults with heart disease, getting vaccinated reduces the risk of heart attack in the months following vaccination. These are real, measurable benefits that go far beyond just avoiding a few days of feeling unwell.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Should Get Vaccinated (Spoiler: Almost Everyone)
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The CDC recommends annual flu vaccination for everyone 6 months of age and older, with rare exceptions. Vaccination is especially important for people at higher risk of serious flu complications:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="text-[var(--color-ink)]">• Adults 65 years and older</li>
              <li className="text-[var(--color-ink)]">• Children under 5 years, especially those under 2</li>
              <li className="text-[var(--color-ink)]">• Pregnant women (during any trimester)</li>
              <li className="text-[var(--color-ink)]">• People with chronic health conditions (asthma, diabetes, heart disease, weakened immune systems, obesity, etc.)</li>
              <li className="text-[var(--color-ink)]">• Residents of nursing homes and long-term care facilities</li>
              <li className="text-[var(--color-ink)]">• Healthcare workers and caregivers</li>
              <li className="text-[var(--color-ink)]">• People who live with or care for high-risk individuals</li>
            </ul>
            <p className="mb-6">
              If you have concerns about whether flu vaccination is right for you—such as a history of severe allergic reactions or certain medical conditions—talk with your healthcare provider. They can help determine the best approach for your specific situation.
            </p>
            <p>
              The ideal time to get vaccinated is early fall, before flu season begins in earnest, but getting vaccinated later in the season still provides valuable protection. It's never too late to get your flu shot.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect When You Get Your Flu Shot
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Getting a flu vaccine is quick, safe, and convenient. The shot itself takes just seconds, and most people experience few or no side effects. Common side effects are mild and may include:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="text-[var(--color-ink)]">• Soreness, redness, or swelling at the injection site</li>
              <li className="text-[var(--color-ink)]">• Low-grade fever</li>
              <li className="text-[var(--color-ink)]">• Mild aches</li>
              <li className="text-[var(--color-ink)]">• Slight fatigue</li>
            </ul>
            <p className="mb-6">
              These symptoms typically resolve within a day or two and are signs that your body is building protection. Serious side effects are extremely rare.
            </p>
            <p>
              You can get your flu vaccine at your primary care provider's office, pharmacies, clinics, and health departments throughout Birmingham, AL. Many employers and schools also offer vaccination clinics for convenience. No matter where you choose to get vaccinated, the important thing is that you do.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Beyond Vaccination: Other Ways to Protect Yourself
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While vaccination is the most effective way to prevent the flu, combining it with good health habits provides even stronger protection:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Wash your hands frequently</strong> with soap and water for at least 20 seconds, especially after being in public places</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Avoid touching your face</strong>, particularly your eyes, nose, and mouth, where viruses can enter</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay home when you're sick</strong> to avoid spreading illness to others</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cover coughs and sneezes</strong> with a tissue or your elbow</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Clean and disinfect frequently-touched surfaces</strong> like doorknobs, light switches, and phones</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain a healthy lifestyle</strong> with adequate sleep, nutritious food, regular exercise, and stress management to support your immune system</span>
              </li>
            </ul>
            <p>
              If you do develop flu symptoms—sudden fever, body aches, fatigue, cough, sore throat—contact your healthcare provider right away. Antiviral medications can reduce the severity and duration of flu if taken within the first 48 hours of symptom onset.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              The flu is a serious disease, but it's also largely preventable. By getting your annual flu vaccine, you're taking a simple, safe, and effective step to protect not only your own health but also the health of your loved ones and community members who are most vulnerable.
            </p>
            <p>
              Don't let myths and misinformation stand in the way of protection. The science is clear: flu vaccines save lives. If you have questions or concerns about flu vaccination, our team at Guardian Primary Care in Birmingham, AL is here to provide evidence-based guidance tailored to your individual health needs. Schedule your flu shot today and take control of your health this flu season.
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
              <div className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Guardian Primary Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Primary Care / DPC
              </div>
              <p className="text-[var(--color-ink)] text-sm leading-relaxed">
                Our team of experienced healthcare providers is dedicated to delivering personalized, comprehensive primary care to the Birmingham community. We combine evidence-based medicine with a patient-centered approach to help you achieve optimal health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2 font-semibold">
                  Preventive Care
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Importance of Annual Wellness Visits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover why regular check-ups are essential for catching health issues early and maintaining optimal wellness throughout your life.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2 font-semibold">
                  Patient Education
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Your Vaccination Schedule
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn which vaccines you need at every life stage and why staying up-to-date with immunizations protects your health and community.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2 font-semibold">
                  Chronic Disease
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Managing Chronic Conditions Through Preventive Care
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Explore how proactive management and preventive strategies can help you thrive while living with chronic health conditions.
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
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you protect your health this flu season and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Schedule Your Flu Shot
            </a>
            <a 
              href="/blog" 
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/30"
            >
              More Health Resources
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}