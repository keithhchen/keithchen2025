import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 px-4 md:px-8 bg-white dark:bg-dark-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
        {t.footer}
      </div>
    </footer>
  );
};
