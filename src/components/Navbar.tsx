import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 transition-all duration-300
                    ${
                      isScrolled
                        ? "bg-white/90 dark:bg-dark-950/90 backdrop-blur-sm shadow-sm"
                        : "bg-transparent"
                    }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Name */}
        <a
          href="#"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-orange-500 
                    dark:hover:text-orange-400 transition-colors"
        >
          Keith Chen
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 
                      transition-colors font-medium"
          >
            {t.navHome}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 
                      transition-colors font-medium"
          >
            {t.navAbout}
          </button>
          <button
            onClick={() => scrollToSection("connect")}
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 
                      transition-colors font-medium"
          >
            {t.navConnect}
          </button>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-3">
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-lg md:hidden bg-gray-100 dark:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-950 shadow-lg py-4 px-4 
                       transition-all duration-200 ease-in-out"
        >
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 
                        transition-colors font-medium py-2"
            >
              {t.navHome}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 
                        transition-colors font-medium py-2"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => scrollToSection("connect")}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 
                        transition-colors font-medium py-2"
            >
              {t.navConnect}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
