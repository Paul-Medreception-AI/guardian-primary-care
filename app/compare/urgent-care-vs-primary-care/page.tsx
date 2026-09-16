import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Urgent Care vs. Primary Care: Where to Go for Common Health Concerns | Guardian Primary Care',
  description: 'Not sure whether to visit urgent care or your primary care provider? Learn the key differences, costs, and which option fits your health concern in Cape Girardeau, MO.',
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
          <h1 className="font-display text-5xl font-light leading-tight mb-6">
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
          <h2 className="font-display text-4xl text-[var(--color-ink)] text-center mb-12">
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
              <div className="p-6 border-l border-[var(--color-border)]">Walk-in available, with a wait that depends on how busy the clinic is</div>
              <div className="p-6 border-l border-[var(--color-border)]">Scheduled appointments; Guardian Direct Care includes same-day or next-day sick visits</div>
            </div>

            {/* Continuity of Care */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Continuity of Care</div>
              <div className="p-6 border-l border-[var(--color-border)]">One-time visit; no ongoing relationship</div>
              <div className="p-6 border-l border-[var(--color-border)]">Long-term relationship; your provider knows your complete health history</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">Often billed at a higher rate than a primary care visit, and plan copays are frequently higher</div>
              <div className="p-6 border-l border-[var(--color-border)]">Billed to your plan (Guardian is in-network with most major commercial insurances, Medicare and Medicaid), or covered by a Guardian Direct Care membership with no visit limits</div>
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
              <div className="p-6 border-l border-[var(--color-border)]">By appointment. Guardian Primary Care is closed on US major holidays</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - Urgent Care */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-display text-4xl text-[var(--color-ink)] mb-8">
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
              Urgent care does have limits. The clinician you see likely will not have access to your complete medical history, does not know your baseline health, and will not be involved in your long-term care. Each visit is treated as an isolated event, which can lead to fragmented care, duplicate testing and medication conflicts if prescriptions are not coordinated with your primary care provider.
            </p>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg animate-fade-up">
            <Image
              src="/images/site/handshake-care.jpg"
              alt="A care team member shaking hands with a patient at the start of a primary care visit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-[var(--color-muted)] text-center mt-4">
            An ongoing relationship with one care team is what urgent care cannot replace.
          </p>
        </div>
      </section>

      {/* Deep Dive - Primary Care */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-display text-4xl text-[var(--color-ink)] mb-8">
            Understanding Primary Care
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
            <p>
              Primary care is the foundation of a good health plan. Your primary care provider serves as your medical home, a trusted partner who knows your complete health history, understands your lifestyle and goals, and coordinates every part of your care. That continuity matters just as much for preventing disease as it does for managing a condition you already have.
            </p>
            
            <p>
              Primary care providers in Cape Girardeau, MO handle everything from annual wellness exams and vaccinations to ongoing care for diabetes, high blood pressure, high cholesterol and thyroid conditions. They provide preventive screenings, mental health support and nutrition counseling, and they coordinate with specialists when you need one. Because the relationship builds over time, your provider can notice small changes in your health that a one-time urgent care visit would never catch.
            </p>
            
            <p>
              Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, and also offers Guardian Direct Care for patients who prefer a flat published price. A Direct Care membership includes same-day or next-day sick visits, office visits with no visit limits, direct access to your provider and your medical records, and basic in-office procedures such as wound care, abscess drainage, cryotherapy and skin lesion removal. That means many concerns people take to urgent care can be handled here instead, by a care team that already knows you.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-display text-4xl text-[var(--color-ink)] text-center mb-12">
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
                    <span className="text-[var(--color-muted)]">You want coordinated care from a provider who knows your history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You can be seen at a scheduled appointment (Guardian Direct Care members have same-day or next-day sick visits)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Pro Tip:</p>
              <p className="text-[var(--color-muted)]">
                Call your primary care office before heading to urgent care. Many concerns can be handled by the provider who already knows you, often with better continuity and lower cost. Call Guardian Primary Care in Cape Girardeau at (573) 200-6143 and our team will find you the soonest appointment we have. Guardian Direct Care members have same-day or next-day sick visits included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-display text-4xl text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>Can I go to urgent care if I already have a primary care provider?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes. Urgent care is always an option. It is usually worth calling your primary care office first, though, because your own provider has your complete medical history and current medication list, which makes for safer decisions and better continuity. If you do go to urgent care, ask that the visit notes be sent to your primary care provider so your record stays complete.
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
                Usually, yes. Urgent care is generally billed at a higher rate than a primary care visit, and plan copays for urgent care are frequently higher too. Guardian Primary Care is in-network with most major commercial insurances, Medicare and Medicaid, so many patients simply use their coverage. Guardian Direct Care is also available: a flat published monthly fee that includes office visits with no visit limits, which makes handling an everyday concern here a predictable cost.
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
                Usually not. Urgent care centers generally do not have your complete medical history, previous test results or current medication list unless you bring them. That is why it helps to keep a current list of your medications, allergies and major health conditions with you. Your primary care provider, by contrast, has your full record and can make a better-informed decision because of it.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <span>How quickly can I be seen at Guardian for an urgent concern?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Call our office at (573) 200-6143 and our team will find you the soonest appointment we have. Guardian Primary Care is by appointment, and Guardian Direct Care members have same-day or next-day sick visits included in their membership along with direct access to their provider. Established patients can also self-schedule through the <a href="https://www.patientally.com/login" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold underline underline-offset-2 hover:text-[var(--color-dark)]">Patient Ally portal</a>. Calling us first is almost always the right first step.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-display text-4xl text-[var(--color-ink)] mb-6">
            Not Sure Where to Go?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            Our team at Guardian Primary Care in Cape Girardeau, MO is here to help you make the right call for your health. Tell us what is going on and we will point you to the right next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
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
          <p className="mt-6 text-[var(--color-muted)]">
            Guardian Primary Care is by appointment, and closed on US major holidays.
          </p>
        </div>
      </section>
    </main>
  )
}