
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-secondary text-brand-primary font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
