import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, phoneNumbers } from '../data/mockData';
import { Button } from './ui/button';
import { Car, Sparkles, Phone, Calendar } from 'lucide-react';

export const CateringPromo = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleMoreInfo = () => {
    window.location.href = `tel:${phoneNumbers[0]}`;
  };

  const handleBookNow = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="catering" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-amber-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-2 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>{t.cateringPromoTitle}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 sm:p-12 space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.cateringPromoHeading}
              </h2>
              
              <p className="text-lg text-gray-700">
                {t.cateringPromoText}
              </p>

              {/* Main Offer */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border-2 border-sky-200 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-sky-600 p-2 rounded-lg">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-gray-900">
                      {t.cateringPromoBenefit}
                    </p>
                    <p className="text-gray-600 mt-1">
                      {t.cateringPromoUse}
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <p className="text-sm text-gray-500 italic">
                {t.cateringPromoTerms}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleMoreInfo}
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.moreInfo}</span>
                </Button>
                <Button
                  onClick={handleBookNow}
                  size="lg"
                  variant="outline"
                  className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 flex items-center justify-center space-x-2 transform hover:scale-105 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t.bookNow}</span>
                </Button>
              </div>
            </div>

            {/* Image/Visual Side */}
            <div className="relative bg-gradient-to-br from-sky-400 to-blue-600 p-12 flex items-center justify-center">
              <div className="text-center space-y-6 text-white">
                <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border-4 border-white/30">
                  <Car className="w-16 h-16" />
                </div>
                <div className="space-y-2">
                  <p className="text-6xl font-bold">2</p>
                  <p className="text-2xl font-semibold">Toyota Land Cruisers</p>
                  <p className="text-lg opacity-90">FREE for a full day!</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
