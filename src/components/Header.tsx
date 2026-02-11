"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className="bg-white shadow-md sticky top-0 z-50 transition-transform duration-300"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 flex justify-between items-center">
        <a href="tel:+918003202028" className="flex items-center justify-center gap-2 hover:opacity-80 transition">
          <svg className="w-6 h-5" fill="red" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.482 1.329 1.427 2.799 2.519 3.892 1.238 1.238 2.597 2.158 3.902 2.545l.771-1.546a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="text-lg font-semibold">{t("phone")}</span>
        </a>

        {/* Language Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded font-semibold transition ${
              language === "en"
                ? "bg-white text-primary"
                : "hover:bg-white hover:bg-opacity-20"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hi")}
            className={`px-3 py-1 rounded font-semibold transition ${
              language === "hi"
                ? "bg-white text-primary"
                : "hover:bg-white hover:bg-opacity-20"
            }`}
          >
            हिंदी
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Home Care Services"
            width={40}
            height={40}
            className="rounded-lg shadow-2xl"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("brandName")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            href="#home"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            {t("home")}
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            {t("services")}
          </Link>
          <Link
            href="#privacy"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            {t("privacy")}
          </Link>
          <Link
            href="#terms"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            {t("terms")}
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden md:flex">
          <SocialLinks />
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 space-y-2">
          <Link
            href="#home"
            className="block text-gray-700 hover:text-primary py-2 font-medium"
          >
            {t("home")}
          </Link>
          <Link
            href="#services"
            className="block text-gray-700 hover:text-primary py-2 font-medium"
          >
            {t("services")}
          </Link>
          <Link
            href="#privacy"
            className="block text-gray-700 hover:text-primary py-2 font-medium"
          >
            {t("privacy")}
          </Link>
          <Link
            href="#terms"
            className="block text-gray-700 hover:text-primary py-2 font-medium"
          >
            {t("terms")}
          </Link>
          <Link
            href="#contact"
            className="block text-gray-700 hover:text-primary py-2 font-medium"
          >
            {t("contact")}
          </Link>
        </div>
      )}
    </header>
  );
}
