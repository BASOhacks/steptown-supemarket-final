import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, phoneNumbers, instagramUrl } from '../data/mockData';
import { Instagram, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold">
                ST
              </div>
              <div>
                <h3 className="font-bold text-lg">Step Town</h3>
                <p className="text-xs text-gray-400">Supermarket</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footerAboutText}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t.footerQuickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catering')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.catering}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('delivery')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t.delivery}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t.footerServices}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{t.supermarket}</li>
              <li>{t.bakery}</li>
              <li>{t.coffee}</li>
              <li>{t.butcher}</li>
              <li>{t.fastFood}</li>
              <li>{t.cateringService}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t.footerContact}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">{t.location}</p>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm space-y-1">
                  {phoneNumbers.map((phone, index) => (
                    <p key={index}>{phone}</p>
                  ))}
                </div>
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="text-sm">@step_town_supermarket</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Step Town Supermarket. {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
};
