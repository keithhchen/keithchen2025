import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section 
      id="about" 
      className="py-20 px-4 md:px-8 bg-white dark:bg-dark-950 relative overflow-hidden"
    >
      {/* Gradient Circle */}
      <div className="gradient-circle w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-500/5 
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center
                     [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] animate-slide-up">
          {t.about.title}
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl 
                      p-8 shadow-lg transition-all duration-300 hover:shadow-xl animate-slide-up
                      hover:translate-y-[-2px]">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.about.paragraph1}
          </p>
          
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.about.paragraph2}
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-start group transition-transform duration-300 hover:translate-x-2">
              <CheckCircle className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0 transition-colors duration-300" />
              <p className="ml-3 text-gray-700 dark:text-gray-300">
                {t.about.bullet1}
              </p>
            </div>
            
            <div className="flex items-start group transition-transform duration-300 hover:translate-x-2">
              <CheckCircle className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0 transition-colors duration-300" />
              <p className="ml-3 text-gray-700 dark:text-gray-300">
                {t.about.bullet2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};