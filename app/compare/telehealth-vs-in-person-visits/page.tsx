import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telehealth vs. In-Person Visits: When Each Makes Sense for Primary Care | Guardian Primary Care',
  description: 'Compare telehealth and in-person primary care visits in Birmingham, AL. Learn when each option is most effective, costs, convenience, and how to choose the right care approach for your needs.',
}

export default function TelehealthVsInPersonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home › Resources › Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Telehealth vs. In-Person Visits: When Each Makes Sense for Primary Care
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Understanding the benefits and limitations of virtual and traditional primary care visits to make the best choice for your health in Birmingham, AL
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-6 border-r border-white/20">Factor</div>
              <div className="p-6 border-r border-white/20">Telehealth Visits</div>
              <div className="p-6">In-Person Visits</div>
            </div>
            
            {/* Convenience */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Convenience
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                High – no travel, flexible scheduling, from anywhere
              </div>
              <div className="p-6">
                Moderate – requires travel, office hours, time commitment
              </div>
            </div>
            
            {/* Scope of Care */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Scope of Care
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Limited – consultations, follow-ups, prescription refills, minor concerns
              </div>
              <div className="p-6">
                Comprehensive – full exams, diagnostic tests, procedures, acute conditions
              </div>
            </div>
            
            {/* Physical Examination */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Physical Examination
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Not possible – visual assessment only
              </div>
              <div className="p-6">
                Complete – hands-on exam, vital signs, diagnostic tools
              </div>
            </div>
            
            {/* Wait Times */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Wait Times
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Minimal – often same-day availability
              </div>
              <div className="p-6">
                Variable – depends on scheduling, may wait days or weeks
              </div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Cost
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Lower – typically $40-75 per visit, no travel costs
              </div>
              <div className="p-6">
                Higher – co-pays, deductibles, parking, time off work
              </div>
            </div>
            
            {/* Technology Requirements */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Technology Requirements
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Required – smartphone/computer, internet connection
              </div>
              <div className="p-6">
                None – just show up
              </div>
            </div>
            
            {/* Privacy */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Privacy
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Flexible – can be done from private space at home
              </div>
              <div className="p-6">
                Guaranteed – private exam rooms, professional setting
              </div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] border-r border-[var(--color-border)] bg-[var(--color-cream)]">
                Best For
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Follow-ups, medication management, mental health, chronic condition monitoring, minor illnesses
              </div>
              <div className="p-6">
                New symptoms, physical exams, lab work, vaccinations, complex conditions, urgent concerns
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Telehealth */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)]">
                Telehealth Visits: Virtual Care Delivered
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-muted)]">
              <p className="text-lg leading-relaxed mb-6">
                Telehealth has revolutionized access to primary care in Birmingham and beyond, allowing patients to connect with their physician via video call from the comfort of their home, office, or anywhere with internet access. This modality excels for consultations that don't require hands-on examination – medication refills, follow-up appointments, mental health support, chronic disease management, and evaluation of minor symptoms that can be assessed visually.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Studies show that telehealth visits achieve comparable outcomes to in-person care for many common conditions, including upper respiratory infections, urinary tract infections, skin rashes, and mental health concerns. Patients appreciate the time savings (no commute, no waiting room), reduced exposure to illness, and the ability to schedule appointments around work and family obligations. The average telehealth visit takes 15-20 minutes from login to completion.
              </p>
              
              <p className="text-lg leading-relaxed">
                Ideal candidates for telehealth include established patients with stable chronic conditions, those needing prescription renewals, individuals seeking mental health counseling, and anyone with minor concerns that don't require physical touch (cough evaluation, allergy symptoms, mild rashes visible on camera). It's also excellent for busy professionals, parents with young children, and patients with mobility challenges who find travel difficult.
              </p>
            </div>
          </div>

          {/* Deep Dive: In-Person */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)]">
                In-Person Visits: Comprehensive Traditional Care
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-[var(--color-muted)]">
              <p className="text-lg leading-relaxed mb-6">
                In-person visits remain the gold standard for comprehensive primary care in Birmingham, particularly when physical examination is essential for accurate diagnosis and treatment. This includes listening to heart and lung sounds, palpating the abdomen, checking reflexes, examining the ears and throat, measuring vital signs with calibrated equipment, and performing procedures like joint injections or wound care. Many conditions simply cannot be properly evaluated through a screen.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Traditional office visits also allow for on-site diagnostic testing – blood draws, urinalysis, EKGs, rapid strep tests, and other point-of-care procedures that provide immediate results and enable same-visit treatment decisions. For new patients, an initial in-person visit establishes a baseline physical examination and builds the physician-patient relationship through face-to-face interaction, which many patients find more personal and reassuring than video calls.
              </p>
              
              <p className="text-lg leading-relaxed">
                In-person care is essential for acute symptoms (chest pain, severe abdominal pain, injuries), new or unexplained problems, annual physicals with comprehensive screening, patients who prefer hands-on care, and situations requiring procedures or lab work. It's the right choice when you need a thorough physical examination, when symptoms are concerning or unclear, or when building a new relationship with your primary care provider in Birmingham.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide Which Option Is Right for You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Choose Telehealth */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Choose Telehealth If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're an established patient with a known condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need a prescription refill or medication adjustment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're following up on test results or a previous visit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have minor symptoms (cold, allergies, mild rash)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need mental health support or counseling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Travel or scheduling makes office visits difficult</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're managing a stable chronic condition (diabetes, hypertension)</span>
                  </li>
                </ul>
              </div>
              
              {/* Choose In-Person */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Choose In-Person If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're a new patient establishing care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need a physical examination (chest pain, abdominal pain, lumps)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You require lab work, blood draws, or diagnostic tests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're due for an annual physical or preventive screening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need vaccinations or injections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have new or unexplained symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer face-to-face interaction with your doctor</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Hybrid Approach</p>
              <p className="text-[var(--color-muted)]">
                Many patients benefit from a combination of both – in-person visits for comprehensive exams and new problems, telehealth for convenient follow-ups and routine management. At Guardian Primary Care in Birmingham, we offer both options and can help you determine the best approach for each situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            Common Questions About Telehealth vs. In-Person Care
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Is telehealth as effective as in-person care for primary care needs?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Research shows that telehealth achieves comparable outcomes to in-person visits for many common conditions, including respiratory infections, urinary tract infections, skin conditions, mental health concerns, and chronic disease management. The key is appropriate patient selection – telehealth works best when physical examination isn't required. For conditions needing hands-on assessment, lab work, or procedures, in-person visits remain more effective.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Does insurance cover telehealth visits the same as office visits?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most insurance plans now cover telehealth visits at the same rate as in-person visits, particularly since the COVID-19 pandemic expanded virtual care access. However, coverage varies by plan, so it's important to verify with your insurance provider. At Guardian Primary Care, we operate on a Direct Primary Care model with transparent membership fees that include both telehealth and in-person visits without insurance billing complications.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                What technology do I need for a telehealth appointment?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>You'll need a device with a camera and microphone (smartphone, tablet, or computer), a reliable internet connection, and a web browser or telehealth app. Find a private, quiet location with good lighting where you can speak freely. We use HIPAA-compliant video platforms that don't require special technical expertise – if you can make a video call, you can do a telehealth visit.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                Can my doctor prescribe medications during a telehealth visit?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Yes, physicians can prescribe most medications during telehealth visits, including antibiotics, chronic disease medications, and many other treatments. Prescriptions are sent electronically to your pharmacy of choice just as they would be after an in-person visit. Some controlled substances have restrictions that vary by state, but most routine prescriptions can be handled virtually.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group animate-fade-up">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-[var(--color-cream)] transition-colors">
                What if my telehealth visit reveals I need to be seen in person?
                <svg className="w-6 h-6 text-[var(--color-accent)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Your physician will let you know if an in-person evaluation is needed based on your symptoms and exam findings. If that's the case, we'll schedule a follow-up office visit as soon as possible. Sometimes telehealth serves as an efficient first step to determine urgency and next steps. At Guardian Primary Care in Birmingham, we offer same-day or next-day in-person appointments when needed.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light mb-6">
              Not Sure Which Option Is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and help you choose the best care approach – whether in-person, virtual, or a combination of both.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-all hover:scale-105 hover:shadow-xl"
            >
              Discuss Your Options
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}