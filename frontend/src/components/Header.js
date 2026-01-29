import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/mockData';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ST
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Step Town</h1>
              <p className="text-xs text-gray-600">Supermarket</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              {t.home}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('catering')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              {t.catering}
            </button>
            <button onClick={() => scrollToSection('delivery')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              {t.delivery}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              {t.contact}
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'rw' ? 'RW' : 'EN'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-600 font-medium text-left">
                {t.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-sky-600 font-medium text-left">
                {t.services}
              </button>
              <button onClick={() => scrollToSection('catering')} className="text-gray-700 hover:text-sky-600 font-medium text-left">
                {t.catering}
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-gray-700 hover:text-sky-600 font-medium text-left">
                {t.delivery}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-600 font-medium text-left">
                {t.contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
