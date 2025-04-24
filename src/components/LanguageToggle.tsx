import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="flex items-center px-3 py-1.5 rounded-lg transition-colors duration-200
                 bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 hover:text-orange-600
                 dark:hover:bg-gray-700 dark:hover:text-orange-400"
      aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      <span className={`font-medium ${language === 'en' ? 'text-orange-500' : ''}`}>EN</span>
      <span className="mx-1.5 text-gray-400">/</span>
      <span className={`font-medium ${language === 'zh' ? 'text-orange-500' : ''}`}>中文</span>
    </button>
  );
};