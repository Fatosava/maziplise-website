
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 py-8">
      <div className="container mx-auto px-6 text-center text-brand-light/60">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://instagram.com/maziplise" className="hover:text-brand-gold transition-colors"><Instagram size={24} /></a>
          <a href="https://www.linkedin.com/company/maziplise" className="hover:text-brand-gold transition-colors"><Linkedin size={24} /></a>
          <a href="https://twitter.com/maziplise" className="hover:text-brand-gold transition-colors"><Twitter size={24} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Mazı Plise Tekstil ve Tasarım Ltd. Şti. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
