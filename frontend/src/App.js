import React from "react";
import "./App.css";
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CateringPromo } from './components/CateringPromo';
import { Delivery } from './components/Delivery';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <CateringPromo />
          <Delivery />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;
