import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Asthma Management: Controlling Symptoms for Better Quality of Life | Guardian Primary Care',
  description: 'Learn evidence-based strategies for managing asthma symptoms, preventing flare-ups, and improving your quality of life. Expert guidance from Guardian Primary Care in Birmingham, AL.',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-center text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Patient Education</div>
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Asthma Management: Controlling Symptoms for Better Quality of Life
          </h1>
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
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6">
              For the millions of Americans living with asthma, everyday activities like climbing stairs, playing with children, or even laughing can trigger uncomfortable and frightening symptoms. But asthma doesn't have to control your life. With proper management, most people with asthma can live full, active lives with minimal symptoms and limitations.
            </p>

            <p className="mb-6">
              Understanding your condition and working closely with your healthcare provider to develop an effective management plan can make all the difference between constantly struggling to breathe and enjoying life to the fullest.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Asthma: More Than Just Shortness of Breath
            </h2>

            <p className="mb-6">
              Asthma is a chronic inflammatory disease of the airways that affects approximately 25 million Americans, including 5 million children. When you have asthma, your airways are constantly inflamed and overly sensitive to certain triggers. During an asthma episode or "attack," three things happen simultaneously:
            </p>

            <ul className="mb-6 space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The muscles around your airways tighten (bronchospasm)</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The lining of your airways becomes more swollen and inflamed</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your airways produce extra mucus that clogs the narrowed passages</span>
              </li>
            </ul>

            <p className="mb-6">
              This combination makes it difficult for air to flow through your airways, resulting in wheezing, coughing, chest tightness, and shortness of breath. The severity and frequency of these symptoms vary widely from person to person.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Identifying Your Personal Triggers
            </h2>

            <p className="mb-6">
              One of the most important steps in managing asthma is identifying what triggers your symptoms. Common triggers include:
            </p>

            <ul className="mb-6 space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Allergens:</strong> Pollen, dust mites, pet dander, mold, and cockroach droppings</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Irritants:</strong> Tobacco smoke, air pollution, strong odors, and chemical fumes</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Respiratory infections:</strong> Colds, flu, and sinus infections</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Physical activity:</strong> Exercise-induced asthma is common but manageable</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Weather changes:</strong> Cold air, humidity, and thunderstorms</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Emotional factors:</strong> Stress, anxiety, and strong emotions</span>
              </li>
            </ul>

            <p className="mb-6">
              Keeping an asthma diary can help you track when symptoms occur and identify patterns. Note the time of day, what you were doing, where you were, and what the weather was like. Share this information with your healthcare provider to develop targeted avoidance strategies.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-serif">
                "Well-controlled asthma means being able to do everything you want to do without thinking about your breathing. It's absolutely achievable with the right treatment plan and self-management strategies."
              </p>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Two Types of Asthma Medications
            </h2>

            <p className="mb-6">
              Effective asthma management typically involves two categories of medications, each serving a distinct purpose:
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Controller Medications (Long-term Control)</strong>
            </p>
            <p className="mb-6">
              These are taken daily, even when you feel fine, to reduce inflammation and prevent symptoms from occurring. The most common are inhaled corticosteroids, which are highly effective and safe when used as prescribed. Other options include long-acting bronchodilators, leukotriene modifiers, and biologic therapies for severe asthma.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Quick-Relief Medications (Rescue Inhalers)</strong>
            </p>
            <p className="mb-6">
              These provide fast relief during an asthma attack by quickly relaxing the muscles around your airways. Short-acting beta-agonists like albuterol work within minutes. However, if you're using your rescue inhaler more than twice a week, it's a sign your asthma isn't well-controlled and your treatment plan needs adjustment.
            </p>

            <p className="mb-6">
              Many people make the mistake of relying solely on their rescue inhaler while avoiding daily controller medications due to concerns about side effects or the inconvenience of daily use. This approach is like only calling the fire department when your house is on fire rather than installing smoke detectors and fire extinguishers. Daily controller medications prevent the "fires" from starting in the first place.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Creating Your Asthma Action Plan
            </h2>

            <p className="mb-6">
              An Asthma Action Plan is a written, personalized set of instructions that tells you how to manage your asthma daily and how to handle worsening symptoms. Working with your healthcare provider in Birmingham to develop this plan is crucial for successful asthma management.
            </p>

            <p className="mb-6">
              Your plan should include three zones, similar to traffic lights:
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Green Zone (Doing Well):</strong> No symptoms, peak flow at 80-100% of personal best. Continue taking controller medications as prescribed.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Yellow Zone (Caution):</strong> Some symptoms present, peak flow at 50-79% of personal best. Follow instructions for increasing medication temporarily.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Red Zone (Medical Alert):</strong> Severe symptoms, peak flow below 50% of personal best. Take rescue medication immediately and contact your provider or seek emergency care.
            </p>

            <p className="mb-6">
              Peak flow monitoring—using a simple device that measures how fast you can blow air out of your lungs—provides objective data about your lung function and can detect problems before you feel symptoms.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Lifestyle Strategies for Better Control
            </h2>

            <p className="mb-6">
              Beyond medications, several lifestyle modifications can significantly improve asthma control:
            </p>

            <ul className="mb-6 space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reduce indoor allergens:</strong> Use allergen-proof covers on pillows and mattresses, wash bedding weekly in hot water, maintain humidity below 50%, and consider removing carpeting</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Avoid tobacco smoke:</strong> Don't smoke and avoid secondhand smoke exposure completely</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay active safely:</strong> Exercise is beneficial for asthma when done correctly. Warm up properly, use your inhaler before exercise if prescribed, and choose activities that work for you</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain a healthy weight:</strong> Excess weight can worsen asthma symptoms and reduce medication effectiveness</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage stress:</strong> Practice relaxation techniques, as stress can trigger or worsen symptoms</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Get vaccinated:</strong> Annual flu shots and pneumonia vaccines when appropriate can prevent respiratory infections that trigger asthma</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              When to Seek Help
            </h2>

            <p className="mb-6">
              Regular follow-up with your healthcare provider is essential, typically every 3-6 months when your asthma is stable, and more frequently if you're having trouble with control. Contact your provider sooner if:
            </p>

            <ul className="mb-6 space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're using your rescue inhaler more than twice a week</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Symptoms are waking you at night</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're limiting activities because of asthma</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your peak flow numbers are declining</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You're concerned about medication side effects</span>
              </li>
            </ul>

            <p className="mb-6">
              Seek emergency care immediately if you experience severe shortness of breath, your rescue inhaler isn't helping, or you have difficulty walking or talking due to breathlessness.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Living Well with Asthma
            </h2>

            <p className="mb-6">
              The good news is that asthma management has improved dramatically in recent decades. With modern medications and management strategies, most people with asthma can expect to:
            </p>

            <ul className="mb-6 space-y-3">
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experience few or no symptoms day or night</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Participate fully in sports and physical activities</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Miss little or no work or school</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoid emergency room visits and hospitalizations</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use minimal quick-relief medication</span>
              </li>
            </ul>

            <p className="mb-6">
              The key is working in partnership with your healthcare team, following your treatment plan consistently, and communicating openly about what's working and what isn't. Asthma management is not one-size-fits-all; it requires ongoing adjustment and personalization.
            </p>

            <p className="mb-6">
              If you're struggling with asthma symptoms, don't accept them as inevitable. Effective control is possible, and our team at Guardian Primary Care in Birmingham is here to help you develop a comprehensive management plan tailored to your individual needs and lifestyle. Better breathing and a better quality of life are within reach.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
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
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Allergies: Causes and Management</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn how allergies and asthma are connected and strategies for managing both conditions effectively.</p>
              </div>
            </a>
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Exercise and Breathing: Staying Active Safely</h4>
                <p className="text-[var(--color-muted)] text-sm">Practical tips for maintaining an active lifestyle while managing respiratory conditions.</p>
              </div>
            </a>
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-[var(--color-light)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Creating a Healthy Home Environment</h4>
                <p className="text-[var(--color-muted)] text-sm">How to reduce indoor triggers and allergens to improve respiratory health at home.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you breathe easier and live better.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}