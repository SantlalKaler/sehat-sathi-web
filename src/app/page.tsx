'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import { useLanguage } from '@/lib/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const handleBookService = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-primary via-blue-600 to-secondary text-white py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-xl text-blue-100">
                {t('heroDescription')}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleBookService}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  {t('bookService')}
                </button>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-blue-100">{t('happyFamilies')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-blue-100">{t('professionals')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-blue-100">{t('available')}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 flex items-center gap-2">
                {/* <span className="text-blue-100">{t('followUs')}</span> */}
                <SocialLinks />
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/images/ind_homecare.png"
                alt="Home Care Services"
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
              <p className="text-xl text-gray-600">{t('servicesDescription')}</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                 {/* Service Card 1 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1725870953863-4ad4db0acfc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nursing Care"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🩺 {t('nursingCare')}</h3>
                  <p className="text-gray-600">{t('nursingCareDesc')}</p>
                </div>
              </div>
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1665203568927-bf0e58ee3d20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Elder Care"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">👴 {t('elderCare')}</h3>
                  <p className="text-gray-600">{t('elderCareDesc')}</p>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1753168592433-503e26a7842f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Post-Surgery Care"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🏥 {t('postSurgeryCare')}</h3>
                  <p className="text-gray-600">{t('postSurgeryDesc')}</p>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
                  alt="Chronic Disease Management"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">⚕️ {t('chronicDisease')}</h3>
                  <p className="text-gray-600">{t('chronicDiseaseDesc')}</p>
                </div>
              </div>

           

              {/* Service Card 5 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664474470266-a50eae18ae30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dementia Care"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🧠 {t('dementiaCare')}</h3>
                  <p className="text-gray-600">{t('dementiaCareDesc')}</p>
                </div>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683121662551-53d384be6327?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Personal Assistance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🤝 {t('personalAssistance')}</h3>
                  <p className="text-gray-600">{t('personalAssistanceDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('whyChooseUs')}</h2>
              <p className="text-xl text-gray-600">{t('whyChooseUsDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('certifiedProfessionals')}</h3>
                  <p className="mt-2 text-gray-600">{t('certifiedProfsDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('availability24x7')}</h3>
                  <p className="mt-2 text-gray-600">{t('availabilityDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('affordablePricing')}</h3>
                  <p className="mt-2 text-gray-600">{t('pricingDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('homeSafety')}</h3>
                  <p className="mt-2 text-gray-600">{t('safetyDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('privacyPolicyTitle')}</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('informationCollection')}</h3>
                <p>{t('infoCollectionDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('dataProtection')}</h3>
                <p>{t('dataProtectionDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('yourRights')}</h3>
                <p>{t('yourRightsDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('cookiePolicy')}</h3>
                <p>{t('cookiePolicyDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contactUsPrivacy')}</h3>
                <p>{t('contactUsPrivacyDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section id="terms" className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('termsTitle')}</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('serviceAgreement')}</h3>
                <p>{t('serviceAgreementDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('caregiverStandards')}</h3>
                <p>{t('caregiverStandardsDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('limitationOfLiability')}</h3>
                <p>{t('limitationDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('cancellationPolicy')}</h3>
                <p>{t('cancellationDesc')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('modifications')}</h3>
                <p>{t('modificationsDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('getInTouch')}</h2>
              <p className="text-xl text-gray-600">{t('getInTouchDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('callUs')}</h3>
                <p className="text-gray-600">
                  <a href="tel:+918003202028" className="hover:text-primary transition">
                    +91-80032 02028
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('emailUs')}</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@seatsathi.com" className="hover:text-primary transition">
                    info.seatsathi@gmail.com
                  </a>
                </p>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('visitUs')}</h3>
                <p className="text-gray-600">{t('location')}</p>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
