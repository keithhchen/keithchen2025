import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 px-4 md:px-8 flex flex-col justify-center
                 bg-gradient-to-br from-gray-50 to-gray-100
                 dark:from-dark-950 dark:to-dark-900 relative overflow-hidden"
    >
      {/* Gradient Circles */}
      <div
        className="gradient-circle w-[500px] h-[500px] bg-orange-500/20 dark:bg-orange-500/10 
                    absolute top-[-100px] right-[-100px]"
      />
      <div
        className="gradient-circle w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-500/10 
                    absolute bottom-[-200px] left-[-200px]"
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="max-w-3xl animate-slide-up">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight
                       [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] transition-colors duration-300"
          >
            {t.hero.heading}
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">
            {t.hero.subheading}
            {language === "en" && (
              <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400 ml-2 transition-colors duration-300"></span>
            )}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {t.hero.description}
          </p>

          <a
            href="mailto:keithhchen@icloud.com"
            className="mt-8 inline-flex items-center px-6 py-3 rounded-xl bg-orange-500 text-white 
                     font-medium text-lg transition-all duration-300 hover:bg-orange-600 hover:scale-[1.03] 
                     active:scale-[0.97] shadow-lg hover:shadow-xl shadow-orange-500/20
                     hover:shadow-orange-500/30 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 
                          transition-transform duration-300 group-hover:scale-x-[1.1]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
