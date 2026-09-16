import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Women's Health After 40: Screenings You Need",
  description: "Which screenings women need after 40: mammograms, blood pressure, cholesterol, Pap and HPV tests, colon cancer screening and bone density, and when to start.",
  openGraph: {
    title: "Women's Health After 40: What Screenings You Need and When",
    description: "Which screenings women need after 40: mammograms, blood pressure, cholesterol, Pap and HPV tests, colon cancer screening and bone density, and when to start.",
    type: 'article',
    url: 'https://www.guardianprimary.com/blog/women-s-health-after-40-what-screenings-you-need-and-when',
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
          
          <h1 className="font-display text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Women's Health After 40: What Screenings You Need and When
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>8 min read</span>
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
              src="/images/site/cond-womens-wellness.jpg"
              alt="A woman stretching on a yoga mat outdoors under a clear blue sky"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl leading-relaxed mb-8">
              Turning 40 is a milestone worth celebrating, and it's also the perfect time to take a proactive approach to your health. While you may feel great, your body's needs are changing, and preventive screenings become more important than ever. The good news? Catching potential health issues early dramatically improves outcomes. This guide will walk you through the essential screenings every woman should prioritize after 40, empowering you to take control of your health for decades to come.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Why Preventive Screenings Matter More After 40
            </h2>
            
            <p className="mb-6">
              Many chronic conditions, including heart disease, diabetes, and certain cancers, become more common as we age. The risk factors that seemed distant in your 30s can become very real in your 40s and beyond. Preventive screenings are designed to detect these conditions before symptoms appear, when they're most treatable.
            </p>
            
            <p className="mb-6">
              Think of screenings as your health insurance policy (not the financial kind, but the kind that protects your quality of life). Regular testing creates a baseline for your health and helps your healthcare provider spot changes early. Early detection can mean the difference between a simple intervention and a complex treatment plan.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-display">
              Prevention is not just about avoiding disease, it is about preserving your vitality, independence, and ability to enjoy life on your terms.
            </div>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Mammograms: Your First Line of Defense Against Breast Cancer
            </h2>
            
            <p className="mb-6">
              Breast cancer is the most common cancer among women, with risk increasing significantly after age 40. Guidelines differ on exactly when mammogram screening should begin. The American Cancer Society says women at average risk have the option to begin annual mammograms at 40, and recommends annual screening from 45. Your provider can help you decide what is right for your history.
            </p>
            
            <p className="mb-6">
              A mammogram uses low-dose X-rays to detect lumps or abnormalities in breast tissue, often before they can be felt during a physical exam. When breast cancer is found early, before it has spread, treatment is far more likely to succeed and the options are usually simpler.
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

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Cardiovascular Health: Blood Pressure, Cholesterol, and Heart Disease Risk
            </h2>
            
            <p className="mb-6">
              Heart disease is the leading cause of death for women in the United States, and risk factors often emerge or worsen after 40. Hormonal changes during perimenopause and menopause can affect cholesterol levels, blood pressure, and blood sugar, all key indicators of cardiovascular health.
            </p>
            
            <p className="mb-6">
              Regular blood pressure checks are essential, high blood pressure often has no symptoms but dramatically increases your risk of heart attack and stroke. Cholesterol testing (lipid panel) should be done at least every five years, more frequently if you have risk factors like diabetes, obesity, or a family history of heart disease.
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

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
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

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Colorectal Cancer Screening: Starting at 45
            </h2>
            
            <p className="mb-6">
              Colorectal cancer rates have been rising among younger adults, prompting updated guidelines that now recommend screening begin at age 45 for people at average risk. Several screening options are available, from at-home stool tests to colonoscopy.
            </p>
            
            <p className="mb-6">
              Colonoscopy remains the gold standard, it can both detect and remove precancerous polyps during the same procedure. If your colonoscopy is normal and you have no risk factors, you typically won't need another for 10 years. However, if you have a family history of colorectal cancer or polyps, you may need to start screening earlier and more frequently.
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
                  <span>FIT (fecal immunochemical test) annually (an at-home stool test)</span>
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

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Bone Density Testing and Osteoporosis Prevention
            </h2>
            
            <p className="mb-6">
              Women begin losing bone density during perimenopause due to declining estrogen levels. By age 65, all women should have a bone density test (DEXA scan) to screen for osteoporosis. However, if you have risk factors, such as low body weight, smoking, family history, or early menopause, your provider may recommend screening earlier, sometimes as early as age 40.
            </p>
            
            <p className="mb-6">
              Osteoporosis is a "silent disease" with no symptoms until a fracture occurs. A hip fracture after age 65 can be life-altering, affecting mobility and independence. Early detection through bone density screening allows for interventions, including calcium and vitamin D supplementation, weight-bearing exercise, and medications, that can significantly reduce fracture risk.
            </p>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
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
                  <span><strong>Skin cancer screening:</strong> Annual full-body skin exams, with a referral to a dermatology specialist if you have many moles or a history of significant sun exposure</span>
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

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-display">
              Your 40s are a decade of empowerment, the perfect time to advocate for your health and establish the habits that will serve you for years to come.
            </div>

            <h2 className="font-display text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Creating Your Personalized Screening Schedule
            </h2>
            
            <p className="mb-6">
              While these general guidelines provide a framework, your individual screening schedule should be personalized based on your health history, family history, lifestyle factors, and risk profile. This is where having a trusted primary care provider becomes invaluable.
            </p>
            
            <p className="mb-6">
              During your annual wellness visit, review your screening schedule with your provider. Bring a list of any family health history updates, symptoms you've been experiencing, and questions about screenings you've heard about. Don't be afraid to advocate for yourself, if something doesn't feel right, speak up.
            </p>
            
            <p className="mb-6">
              Keep a health binder or digital file with all your test results, vaccination records, and screening dates. Set calendar reminders for upcoming screenings so nothing falls through the cracks. Many healthcare systems now offer patient portals where you can track appointments and access results, so take advantage of these tools.
            </p>

            <p className="text-lg mt-12 mb-6">
              Taking charge of your health after 40 isn't about fearing what might be found, it's about empowering yourself with knowledge and early detection. The screenings outlined in this guide have saved countless lives by catching diseases in their earliest, most treatable stages. You deserve to feel confident, vibrant, and healthy for decades to come. By staying on top of preventive care, you're investing in your future self.
            </p>

            <p className="text-lg mb-6">
              If you are not sure which screenings you need or when to schedule them, our team at Guardian Primary Care in Cape Girardeau, Missouri is here to help. We take the time to understand your health history and build a prevention plan that fits your life. We are in network with most major commercial insurances, Medicare and Medicaid, and Guardian Direct Care is available if you would rather pay a flat monthly fee. Call (573) 200-6143 to schedule your wellness visit.
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
                Written by the Guardian Primary Care Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Guardian Primary Care is a nurse practitioner led practice in Cape Girardeau, Missouri. Preston Holifield, DNP, APRN, FNP-C is nationally certified by the American Academy of Nurse Practitioners and works with a Missouri Licensed Collaborating Physician.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog/hormone-changes-and-menopause-what-to-expect-and-how-to-mana" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Hormone Changes and Menopause
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  What to expect during perimenopause and menopause, and the treatment and lifestyle options that help.
                </p>
              </div>
            </a>

            <a href="/blog/preventative-cancer-screenings-which-tests-you-need-and-when" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preventative Cancer Screenings
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Which cancer screenings you need, when to start them, and how family history changes the schedule.
                </p>
              </div>
            </a>

            <a href="/blog/osteoporosis-prevention-and-treatment-protecting-your-bone-h" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Osteoporosis Prevention and Treatment
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  How to protect your bone health with screening, nutrition and weight bearing exercise.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you build a screening plan that fits your history, and to answer your questions about preventive care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[var(--color-cream)] hover:scale-105"
          >
            Schedule Your Wellness Visit
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