import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, phoneNumbers, instagramUrl } from '../data/mockData';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleInstagram = () => {
    window.open(instagramUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.callUs}</h3>
                </div>
                <div className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <Button
                      key={index}
                      onClick={() => handleCall(phone)}
                      variant="outline"
                      className="w-full justify-start text-lg h-14 border-2 border-gray-200 hover:border-sky-600 hover:bg-sky-50 transition-all"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      {phone}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.visitUs}</h3>
                </div>
                <p className="text-lg text-gray-700">
                  {t.location}
                </p>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.openHours}</h3>
                </div>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{t.mondayToSaturday}:</span>
                    <span className="text-gray-900 font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{t.sunday}:</span>
                    <span className="text-gray-900 font-semibold">8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instagram & Map */}
          <div className="space-y-6">
            {/* Instagram */}
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-50 to-purple-50">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.followUs}</h3>
                </div>
                <p className="text-lg text-gray-700">
                  {language === 'rw' ? 'Dukurikire kuri Instagram urebe ibisubizo byacu, ibikorwa byihariye, n\'amakuru mashya!' : 'Follow us on Instagram for updates, special offers, and more!'}
                </p>
                <Button
                  onClick={handleInstagram}
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @step_town_supermarket
                </Button>
              </CardContent>
            </Card>

            {/* Visual Element */}
            <Card className="shadow-lg border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-12 text-white text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border-4 border-white/30">
                    <MapPin className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Step Town Supermarket</h3>
                    <p className="text-lg opacity-90">Runda - Ruyenzi, Rwanda</p>
                    <p className="text-sm opacity-75 max-w-sm mx-auto">
                      {language === 'rw' ? 'Isoko rya kijyambere rifite serivisi zose mu cyaro' : 'Your modern all-in-one food & lifestyle hub in the community'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
