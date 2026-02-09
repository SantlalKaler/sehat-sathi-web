'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
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
                Quality Home Care at Your Doorstep
              </h1>
              <p className="text-xl text-blue-100">
                Professional and compassionate home care services for you and your family. We provide trusted caregiving solutions with experienced healthcare professionals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleBookService}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  Book Service
                </button>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-blue-100">Happy Families</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-blue-100">Professionals</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-blue-100">Available</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 flex items-center gap-2">
                <span className="text-blue-100">Follow us:</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive home care solutions tailored to your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1665203568927-bf0e58ee3d20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Elder Care"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">👴 Elder Care</h3>
                  <p className="text-gray-600">Compassionate care for seniors with experienced caregivers providing daily assistance and support.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🏥 Post-Surgery Care</h3>
                  <p className="text-gray-600">Professional post-operative care with skilled nurses and caregivers for faster recovery.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">⚕️ Chronic Disease</h3>
                  <p className="text-gray-600">Expert management and care for chronic conditions with regular monitoring and support.</p>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1725870953863-4ad4db0acfc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nursing Care"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🩺 Nursing Care</h3>
                  <p className="text-gray-600">Qualified nurses providing professional medical care and medication management at home.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🧠 Dementia Care</h3>
                  <p className="text-gray-600">Specialized care for dementia and Alzheimer's patients with trained caregivers.</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🤝 Personal Assistance</h3>
                  <p className="text-gray-600">Daily living assistance including bathing, dressing, meal prep, and household support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sehat Sathi</h2>
              <p className="text-xl text-gray-600">We are committed to your health and wellness</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Certified Professionals</h3>
                  <p className="mt-2 text-gray-600">All caregivers and nurses are certified and trained with years of experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">24/7 Availability</h3>
                  <p className="mt-2 text-gray-600">Round-the-clock support and care whenever you need us.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Affordable Pricing</h3>
                  <p className="mt-2 text-gray-600">Transparent pricing with flexible payment options for all budgets.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Home Safety</h3>
                  <p className="mt-2 text-gray-600">Background checked professionals ensuring safety and trust in your home.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Information Collection</h3>
                <p>We collect personal information that you provide to us directly, such as your name, contact information, and health details necessary for providing our home care services.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Protection</h3>
                <p>All personal and health information is protected with industry-standard encryption and secure storage. We never share your information with third parties without your consent.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal information at any time. Contact us for any privacy-related requests or concerns.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cookie Policy</h3>
                <p>We use cookies to enhance your browsing experience. You can disable cookies in your browser settings if you prefer.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h3>
                <p>For privacy inquiries, please contact us at <a href="mailto:privacy@seatsathi.com" className="text-primary hover:underline">privacy@seatsathi.com</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section id="terms" className="py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Agreement</h3>
                <p>By using our services, you agree to our Terms & Conditions. Sehat Sathi provides home care services as described in our service agreements with clients.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Caregiver Standards</h3>
                <p>All our caregivers undergo thorough background checks and training. We maintain high professional standards and adhere to healthcare regulations.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Limitation of Liability</h3>
                <p>Sehat Sathi provides services to the best of our ability. However, we are not responsible for medical conditions that are beyond the scope of home care services.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cancellation Policy</h3>
                <p>Services can be cancelled with 24 hours notice. Refunds will be processed according to our cancellation policy.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Modifications</h3>
                <p>We reserve the right to modify these terms. Any changes will be communicated to you in advance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">We'd love to hear from you. Contact us today!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  <a href="tel:+91" className="hover:text-primary transition">
                    +91-80032 02028
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@seatsathi.com" className="hover:text-primary transition">
                    info.seatsathi@gmail.com
                  </a>
                </p>
              </div>

              {/* Location */}
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Jhunjhunu, Rajasthan</p>
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
