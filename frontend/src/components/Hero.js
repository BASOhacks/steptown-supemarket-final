import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, images } from '../data/mockData';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {t.heroSubtitle}
              </p>
              <div className="flex items-center space-x-2 text-sky-600">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{t.heroLocation}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                {t.shopNow}
              </Button>
              <Button
                onClick={() => scrollToSection('delivery')}
                size="lg"
                variant="outline"
                className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all"
              >
                {t.orderDelivery}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={images.logo}
                alt="Step Town Supermarket"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
