import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's Health After 40: What Screenings You Need and When | Guardian Primary Care",
  description: "A comprehensive guide to essential health screenings for women over 40. Learn what tests you need, when to schedule them, and why they matter for your long-term health.",
  openGraph: {
    title: "Women's Health After 40: What Screenings You Need and When",
    description: "A comprehensive guide to essential health screenings for women over 40. Learn what tests you need, when to schedule them, and why they matter for your long-term health.",
    type: 'article',
    url: 'https://guardianprimary.com/blog/women-s-health-after-40-what-screenings-you-need-and-when',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Women's Health
          </div>
          
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Women's Health After 40: What Screenings You Need and When
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              Turning 40 is a milestone worth celebrating—and it's also the perfect time to take a proactive approach to your health. While you may feel great, your body's needs are changing, and preventive screenings become more important than ever. The good news? Catching potential health issues early dramatically improves outcomes. This guide will walk you through the essential screenings every woman should prioritize after 40, empowering you to take control of your health for decades to come.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Preventive Screenings Matter More After 40
            </h2>
            
            <p className="mb-6">
              Many chronic conditions—including heart disease, diabetes, and certain cancers—become more common as we age. The risk factors that seemed distant in your 30s can become very real in your 40s and beyond. Preventive screenings are designed to detect these conditions before symptoms appear, when they're most treatable.
            </p>
            
            <p className="mb-6">
              Think of screenings as your health insurance policy—not the financial kind, but the kind that protects your quality of life. Regular testing creates a baseline for your health and helps your healthcare provider spot changes early. Early detection can mean the difference between a simple intervention and a complex treatment plan.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
              "Prevention is not just about avoiding disease—it's about preserving your vitality, independence, and ability to enjoy life on your terms."
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Mammograms: Your First Line of Defense Against Breast Cancer
            </h2>
            
            <p className="mb-6">
              Breast cancer is the most common cancer among women, with risk increasing significantly after age 40. The American Cancer Society recommends that women with average risk begin annual mammogram screenings at age 40, though some guidelines suggest starting at 45.
            </p>
            
            <p className="mb-6">
              A mammogram uses low-dose X-rays to detect lumps or abnormalities in breast tissue, often before they can be felt during a physical exam. When breast cancer is detected early—before it spreads—the five-year survival rate is 99%.
            </p>
            
            <div className="my-8 pl-6">
              <p className="font-semibold text-[var(--color-ink)] mb-4">What you need to know:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Schedule mammograms annually starting at age 40 (or earlier if you have a family history)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Avoid scheduling during the week before your period when breasts may be more tender</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consider 3D mammography (tomosynthesis) for more detailed imaging, especially if you have dense breast tissue</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continue monthly breast self-exams and report any changes to your provider immediately</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Cardiovascular Health: Blood Pressure, Cholesterol, and Heart Disease Risk
            </h2>
            
            <p className="mb-6">
              Heart disease is the leading cause of death for women in the United States, and risk factors often emerge or worsen after 40. Hormonal changes during perimenopause and menopause can affect cholesterol levels, blood pressure, and blood sugar—all key indicators of cardiovascular health.
            </p>
            
            <p className="mb-6">
              Regular blood pressure checks are essential—high blood pressure often has no symptoms but dramatically increases your risk of heart attack and stroke. Cholesterol testing (lipid panel) should be done at least every five years, more frequently if you have risk factors like diabetes, obesity, or a family history of heart disease.
            </p>
            
            <div className="my-8 pl-6">
              <p className="font-semibold text-[var(--color-ink)] mb-4">Recommended screening schedule:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blood pressure check at every healthcare visit, at least annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cholesterol screening every 4-6 years (more often if abnormal or if you have risk factors)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blood glucose screening every 3 years starting at age 45 to check for diabetes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Discuss cardiovascular risk assessment with your provider, especially during perimenopause</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Cervical Cancer Screening: HPV and Pap Tests
            </h2>
            
            <p className="mb-6">
              While cervical cancer screening typically begins in your 20s, the recommendations evolve as you age. After 40, the screening interval may change based on your previous results and risk factors.
            </p>
            
            <p className="mb-6">
              For women ages 30-65, the preferred approach is co-testing with both a Pap smear (which looks for abnormal cervical cells) and an HPV test (which detects the virus that causes most cervical cancers) every five years. Alternatively, a Pap test alone can be done every three years.
            </p>
            
            <p className="mb-6">
              If you've had consistent normal results, your provider may recommend less frequent screening. However, if you have a history of abnormal results, a weakened immune system, or were exposed to DES in utero, you may need more frequent monitoring.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Colorectal Cancer Screening: Starting at 45
            </h2>
            
            <p className="mb-6">
              Colorectal cancer rates have been rising among younger adults, prompting updated guidelines that now recommend screening begin at age 45 for people at average risk. Several screening options are available, from at-home stool tests to colonoscopy.
            </p>
            
            <p className="mb-6">
              Colonoscopy remains the gold standard—it can both detect and remove precancerous polyps during the same procedure. If your colonoscopy is normal and you have no risk factors, you typically won't need another for 10 years. However, if you have a family history of colorectal cancer or polyps, you may need to start screening earlier and more frequently.
            </p>
            
            <div className="my-8 pl-6">
              <p className="font-semibold text-[var(--color-ink)] mb-4">Screening options include:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Colonoscopy every 10 years (most comprehensive)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>FIT (fecal immunochemical test) annually—at-home stool test</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cologuard (stool DNA test) every 3 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible sigmoidoscopy or CT colonography at recommended intervals</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Bone Density Testing and Osteoporosis Prevention
            </h2>
            
            <p className="mb-6">
              Women begin losing bone density during perimenopause due to declining estrogen levels. By age 65, all women should have a bone density test (DEXA scan) to screen for osteoporosis. However, if you have risk factors—such as low body weight, smoking, family history, or early menopause—your provider may recommend screening earlier, sometimes as early as age 40.
            </p>
            
            <p className="mb-6">
              Osteoporosis is a "silent disease" with no symptoms until a fracture occurs. A hip fracture after age 65 can be life-altering, affecting mobility and independence. Early detection through bone density screening allows for interventions—including calcium and vitamin D supplementation, weight-bearing exercise, and medications—that can significantly reduce fracture risk.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Additional Screenings to Discuss With Your Provider
            </h2>
            
            <p className="mb-6">
              Beyond the major screenings above, several other tests may be appropriate based on your individual health profile and risk factors:
            </p>
            
            <div className="my-8 pl-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Thyroid function tests:</strong> Thyroid disorders become more common with age, especially in women</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Skin cancer screening:</strong> Annual full-body skin exams by a dermatologist, especially if you have many moles or a history of sun exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Eye exams:</strong> Comprehensive eye exams every 2-4 years to screen for glaucoma, cataracts, and macular degeneration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dental exams:</strong> Biannual cleanings and exams; gum disease has been linked to heart disease and diabetes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Mental health screening:</strong> Depression and anxiety screenings, especially during major life transitions</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-serif">
              "Your 40s are a decade of empowerment—the perfect time to advocate for your health and establish the habits that will serve you for years to come."
            </div>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Creating Your Personalized Screening Schedule
            </h2>
            
            <p className="mb-6">
              While these general guidelines provide a framework, your individual screening schedule should be personalized based on your health history, family history, lifestyle factors, and risk profile. This is where having a trusted primary care provider becomes invaluable.
            </p>
            
            <p className="mb-6">
              During your annual wellness visit, review your screening schedule with your provider. Bring a list of any family health history updates, symptoms you've been experiencing, and questions about screenings you've heard about. Don't be afraid to advocate for yourself—if something doesn't feel right, speak up.
            </p>
            
            <p className="mb-6">
              Keep a health binder or digital file with all your test results, vaccination records, and screening dates. Set calendar reminders for upcoming screenings so nothing falls through the cracks. Many healthcare systems now offer patient portals where you can track appointments and access results—take advantage of these tools.
            </p>

            <p className="text-lg mt-12 mb-6">
              Taking charge of your health after 40 isn't about fearing what might be found—it's about empowering yourself with knowledge and early detection. The screenings outlined in this guide have saved countless lives by catching diseases in their earliest, most treatable stages. You deserve to feel confident, vibrant, and healthy for decades to come. By staying on top of preventive care, you're investing in your future self.
            </p>

            <p className="text-lg mb-6">
              If you're unsure about which screenings you need or when to schedule them, our team at Guardian Primary Care is here to help. We take the time to understand your unique health history and create a personalized prevention plan that works for you. Reach out today to schedule your wellness visit and take the first step toward proactive, comprehensive care.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                Written by the Guardian Primary Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Primary Care / DPC, dedicated to delivering personalized, evidence-based care to women at every stage of life.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Menopause: Symptoms and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Navigate this natural transition with confidence. Learn about hormonal changes, symptom management, and when to seek support.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Complete Guide to Preventive Care at Every Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  From your 20s to your 60s and beyond—a comprehensive roadmap to the screenings and checkups you need to stay healthy.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Making Time for Your Health: Prioritizing Self-Care in a Busy Life
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Practical strategies for busy women to prioritize wellness without guilt. Small changes that make a lasting impact.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you create a personalized screening plan and answer all your questions about preventive care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Schedule Your Wellness Visit
          </a>
        </div>
      </section>
    </main>
  )
}