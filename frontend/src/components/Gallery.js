import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, images } from '../data/mockData';
import { Card, CardContent } from './ui/card';

export const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const galleryImages = [
    {
      id: 1,
      src: images.logo,
      alt: 'Step Town Supermarket Building',
      title: t.supermarket
    },
    {
      id: 2,
      src: images.bakery,
      alt: 'Step Town Bakery',
      title: t.bakery
    },
    {
      id: 3,
      src: images.delivery,
      alt: 'Delivery Service',
      title: t.deliveryTitle
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {language === 'rw' ? 'Amafoto Yacu' : 'Our Gallery'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'rw' ? 'Reba ibyo dukora kandi uko tukorera' : 'See what we do and how we serve you'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <Card 
              key={image.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <p className="text-white text-xl font-bold">{image.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
