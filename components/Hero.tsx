
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
          Crafting Digital Experiences
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
          We build clean, modern, and aesthetic solutions that bring your vision to life.
        </p>
        <a href="#gallery" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
