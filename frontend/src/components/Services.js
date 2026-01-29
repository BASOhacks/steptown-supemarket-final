import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, services } from '../data/mockData';
import { ShoppingCart, Cake, Coffee, Beef, Pizza, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const serviceIcons = {
  supermarket: ShoppingCart,
  bakery: Cake,
  coffee: Coffee,
  butcher: Beef,
  fastFood: Pizza,
  cateringService: Users
};

const serviceColors = {
  supermarket: 'from-emerald-500 to-teal-600',
  bakery: 'from-amber-500 to-orange-600',
  coffee: 'from-orange-700 to-amber-800',
  butcher: 'from-red-500 to-rose-600',
  fastFood: 'from-yellow-500 to-amber-600',
  cateringService: 'from-sky-500 to-blue-600'
};

export const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.key];
            const gradient = serviceColors[service.key];
            
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-none overflow-hidden"
              >
                <CardContent className="p-8 space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {t[service.key]}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t[service.key + 'Desc']}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
