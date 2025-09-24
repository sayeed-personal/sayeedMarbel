
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-brand-secondary">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Aura Designs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
