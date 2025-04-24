import React, { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export const Connect: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showQRCode, setShowQRCode] = useState(false);

  const wechatQRCode =
    "https://media-hosting.imagekit.io/88872442bc044f15/wechat_qr.jpg?Expires=1840121310&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J633nVlsLtzrcBZ67gfOKDlQ98-tXYE-5ByY83RNLKngAzoiQ7LAfv4Y~e7pvUtmPd5KD3qlHv31J-yTh5PZ1JSKLrDH-ZTPHyjdrR1ktYV~0AoviUNfxP8MJ29mE8lnVcrq53vz~BSzJcXT~xadgmP6far1VOWukO8tVXHNBlMoH9JBfpIYtR0U1GJZq4hEh9ZOdcyeyLi7z5cQZ-dZb~HpLs3ZUckEU3L6eAcq0dBaov8BwLpabutvaOS2wsBhgV4KoeceS~CUcYJrd9amBG~YRRRKVBNeaeUZGUHoFpw02i-QDG7r~oZy5tlglRQKINnI3MrwY05qdlMQapLnlQ__";

  return (
    <section
      id="connect"
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-dark-950 relative overflow-hidden"
    >
      {/* Gradient Circles */}
      <div
        className="gradient-circle w-[600px] h-[600px] bg-green-500/10 dark:bg-green-500/5 
                    absolute top-[-100px] right-[-100px]"
      />
      <div
        className="gradient-circle w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 
                    absolute bottom-[-50px] left-[-50px]"
      />

      <div className="max-w-7xl mx-auto relative">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center
                     [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] animate-slide-up"
        >
          {t.connect.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Xiaohongshu */}
          <a
            href="https://www.xiaohongshu.com/user/profile/6268beb4000000002102335a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                     flex flex-col items-center text-center transition-all duration-300 
                     hover:scale-105 hover:shadow-xl animate-slide-up group"
          >
            <div
              className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center 
                          justify-center mb-4 transition-transform duration-300 group-hover:rotate-12"
            >
              <span className="text-red-500 text-2xl font-bold">小</span>
            </div>
            <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">
              {language === "en" ? "Xiaohongshu" : "小红书"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.connect.xiaohongshu}
            </p>
          </a>

          {/* WeChat */}
          <div
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                     flex flex-col items-center text-center relative cursor-pointer
                     transition-all duration-300 hover:shadow-xl animate-slide-up group"
            onMouseEnter={() => setShowQRCode(true)}
            onMouseLeave={() => setShowQRCode(false)}
          >
            <div
              className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center 
                          justify-center mb-4 transition-transform duration-300 group-hover:rotate-12"
            >
              <MessageSquare className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">
              WeChat
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.connect.wechat}
            </p>

            {/* QR Code Overlay */}
            <div
              className={`absolute inset-0 bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm rounded-2xl 
                         flex items-center justify-center transition-all duration-300 p-4
                         ${
                           showQRCode
                             ? "opacity-100 scale-100"
                             : "opacity-0 scale-95 pointer-events-none"
                         }`}
            >
              <img
                src={wechatQRCode}
                alt="WeChat QR Code"
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Email */}
          <a
            href="mailto:keithhchen@icloud.com"
            className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
                     flex flex-col items-center text-center transition-all duration-300 
                     hover:scale-105 hover:shadow-xl animate-slide-up group"
          >
            <div
              className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center 
                          justify-center mb-4 transition-transform duration-300 group-hover:rotate-12"
            >
              <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-2">
              {t.connect.email}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 break-all">
              keithhchen@icloud.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
