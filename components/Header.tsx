
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand-primary tracking-wider">
          Aura Designs
        </h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#gallery" className="text-gray-700 hover:text-brand-accent transition-colors duration-300 font-medium">Work</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-brand-accent transition-colors duration-300 font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
