import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              alt="Home Care Services"
              width={40}
              height={40}
              className="rounded-lg shadow-2xl"
            />
            <h3 className="text-xl font-bold">Sehat Sathi</h3>
          </div>
          <p className="text-gray-400">
            Providing quality home care services with professional caregivers
            and compassionate support for your family's health and wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+91" className="hover:text-white transition">
                +91-80032 02028
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>📧</span>
              <a
                href="mailto:info@seatsathi.com"
                className="hover:text-white transition"
              >
                info.sehatsathi@gmail.com
              </a>
            </p>
            <p className="flex items-start gap-2 mt-4">
              <span>📍</span>
              <span>
                Jhunjhunu, Rajasthan
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 py-8">
        <div className="mb-6">
          <SocialLinks />
        </div>
        <div className="text-center text-gray-400">
          <p>
            &copy; {currentYear} Sehat Sathi. All rights reserved. |
            <a href="#privacy" className="hover:text-white transition ml-2">
              Privacy Policy
            </a>{" "}
            |
            <a href="#terms" className="hover:text-white transition ml-2">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
