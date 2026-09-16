import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urgent Care vs. Primary Care: Where to Go for Common Health Concerns | Guardian Primary Care',
  description: 'Confused about whether to visit urgent care or your primary care doctor? Learn the key differences, costs, and which option is best for your health concerns in Birmingham, AL.',
}

export default function UrgentCareVsPrimaryCare() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl font-light leading-tight mb-6">
            Urgent Care vs. Primary Care: Where to Go for Common Health Concerns
          </h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Making the right choice for your health starts with understanding your options. Learn which type of care is best for your situation.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Urgent Care</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Primary Care</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Acute, non-life-threatening issues that need immediate attention</div>
              <div className="p-6 border-l border-[var(--color-border)]">Ongoing health management, preventive care, chronic conditions</div>
            </div>

            {/* Common Conditions */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Common Conditions</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minor injuries, sprains, cuts requiring stitches, fever, flu, strep throat</div>
              <div className="p-6 border-l border-[var(--color-border)]">Diabetes, hypertension, wellness exams, vaccinations, mental health</div>
            </div>

            {/* Wait Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Wait Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">Walk-in available; typically 30-60 minutes</div>
              <div className="p-6 border-l border-[var(--color-border)]">Scheduled appointments; often same-day or next-day availability</div>
            </div>

            {/* Continuity of Care */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Continuity of Care</div>
              <div className="p-6 border-l border-[var(--color-border)]">One-time visit; no ongoing relationship</div>
              <div className="p-6 border-l border-[var(--color-border)]">Long-term relationship; doctor knows your complete health history</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">$150-$300+ per visit; often higher copays</div>
              <div className="p-6 border-l border-[var(--color-border)]">Varies by insurance; DPC models offer unlimited visits for flat monthly fee</div>
            </div>

            {/* Medical Records */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Medical Records</div>
              <div className="p-6 border-l border-[var(--color-border)]">Limited access to your health history</div>
              <div className="p-6 border-l border-[var(--color-border)]">Complete medical records and health history tracking</div>
            </div>

            {/* Hours */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Hours</div>
              <div className="p-6 border-l border-[var(--color-border)]">Extended hours including evenings and weekends</div>
              <div className="p-6 border-l border-[var(--color-border)]">Typically business hours; some offer extended availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Urgent Care */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-8">
            Understanding Urgent Care
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
            <p>
              Urgent care centers fill an important gap in the healthcare system, providing immediate medical attention for conditions that are too serious to wait for a scheduled appointment but don't require a trip to the emergency room. These facilities are designed for walk-in patients and typically offer extended hours, including evenings and weekends.
            </p>
            
            <p>
              The typical urgent care visit involves treatment for acute conditions such as minor fractures, sprains, lacerations requiring stitches, fever, flu symptoms, strep throat, ear infections, urinary tract infections, and minor burns. Many urgent care centers also provide services like X-rays, lab tests, and basic diagnostic procedures on-site, making them convenient for immediate diagnostic needs.
            </p>
            
            <p>
              However, urgent care has limitations. The providers you see likely won't have access to your complete medical history, don't know your baseline health status, and won't be involved in your long-term care. Each visit is treated as an isolated event, which can lead to fragmented care, duplicate testing, and potential drug interactions if medications aren't properly coordinated with your primary care physician.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive - Primary Care */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-8">
            Understanding Primary Care
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
            <p>
              Primary care is the foundation of a comprehensive healthcare strategy. Your primary care physician serves as your medical home—a trusted partner who knows your complete health history, understands your lifestyle and goals, and coordinates all aspects of your care. This continuity is invaluable for both preventing disease and managing existing conditions.
            </p>
            
            <p>
              Primary care physicians in Birmingham, AL handle everything from annual wellness exams and vaccinations to chronic disease management for conditions like diabetes, hypertension, high cholesterol, and thyroid disorders. They provide preventive screenings, mental health support, nutritional counseling, and coordinate with specialists when needed. The relationship-based model means your doctor can spot subtle changes in your health over time that might be missed in one-time urgent care visits.
            </p>
            
            <p>
              Modern primary care, especially Direct Primary Care (DPC) models, offers enhanced access including same-day or next-day appointments, longer visit times, direct communication with your physician via phone or text, and often urgent care-level services right in the office. This means many conditions traditionally sent to urgent care can be handled by your own doctor who knows you best—often at a lower total cost and with better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] text-center mb-12">
              How to Decide Where to Go
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Choose Urgent Care If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have a minor injury requiring immediate attention (sprain, cut, burn)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Your primary care office is closed and you need care today</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You don't have an established primary care relationship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need an X-ray or basic diagnostic test immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You suspect strep throat, flu, or another acute infection</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Choose Primary Care If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have a chronic condition requiring ongoing management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Your symptoms have been ongoing or recurring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need preventive care, screenings, or vaccinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want coordinated care with a doctor who knows your history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You can wait for a scheduled appointment (same-day often available)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Pro Tip:</p>
              <p className="text-[var(--color-muted)]">
                Call your primary care office first before heading to urgent care. Many conditions can be handled same-day by your own physician, often with better outcomes and lower cost. At Guardian Primary Care in Birmingham, AL, we offer same-day and next-day appointments for urgent concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Can I go to urgent care if I have a primary care doctor?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, you can visit urgent care anytime. However, it's usually better to contact your primary care office first. Many primary care practices offer same-day appointments for urgent concerns, and your own doctor will have access to your complete medical history, current medications, and can provide better continuity of care. If you do visit urgent care, make sure the visit notes are sent to your primary care physician.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Is urgent care more expensive than primary care?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Generally, yes. Urgent care visits typically cost $150-$300 or more, and insurance copays are often higher than primary care visits. With Direct Primary Care models, you have unlimited access to your physician for a flat monthly fee, making many urgent concerns much more affordable to address with your own doctor. Even with traditional insurance, primary care copays are usually lower than urgent care.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>What conditions should never go to urgent care?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Life-threatening emergencies require the emergency room, not urgent care. Go to the ER for: chest pain or signs of heart attack, stroke symptoms, severe head injury, major trauma or broken bones, difficulty breathing, severe burns, sudden vision loss, seizures, suspected poisoning, or uncontrolled bleeding. When in doubt about severity, call 911 or go directly to the ER.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Will urgent care have my medical records?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Usually not. Urgent care centers typically don't have access to your complete medical history, previous test results, or current medication list unless you provide it. This is why it's important to know your medications, allergies, and major health conditions when visiting urgent care. In contrast, your primary care physician has your complete health record and can make more informed treatment decisions.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>How quickly can I see my primary care doctor for an urgent issue?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many primary care practices, especially Direct Primary Care models, offer same-day or next-day appointments for urgent concerns. At Guardian Primary Care in Birmingham, AL, we prioritize urgent patient needs and often can see you the same day you call. We also provide direct communication with your physician via phone or text, which can resolve many concerns without an office visit. Always call your primary care office first before seeking urgent care elsewhere.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl text-[var(--color-ink)] mb-6">
            Not Sure Where to Go?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            Our team at Guardian Primary Care in Birmingham, AL is here to help you make the right decision for your health. We offer same-day appointments for urgent concerns and can guide you on the best course of action.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Discuss Your Options
          </a>
          <p className="mt-6 text-[var(--color-muted)]">
            Call us anytime to speak with our care team
          </p>
        </div>
      </section>
    </main>
  )
}