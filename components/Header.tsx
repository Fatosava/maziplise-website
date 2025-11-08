
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: '/hakkimizda', label: 'Hakkımızda' },
    { to: '/islerimiz', label: 'İşlerimiz' },
    { to: '/projelerimiz', label: 'Projelerimiz' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-espresso/90 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-brand-dark/95 to-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-0 text-brand-cream">
          <img
            src="/logo-Photoroom.png"
            alt="Mazı Plise logosu"
            className="w-40 h-40 object-contain"
          />
          <div>
            <span className="text-lg font-bold font-serif tracking-wider text-brand-cream">MAZI PLİSE</span>
            <p className="text-sm tracking-[0.2em] text-brand-light/80">Kumaşta Asalet Dokusu</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="text-brand-light hover:text-brand-gold transition duration-300">
              {link.label}
            </Link>
          ))}
          <Link to="/iletisim" className="bg-brand-gold text-brand-dark px-4 py-2 rounded-sm hover:bg-opacity-80 transition duration-300 font-medium">
            İletişime Geç
          </Link>
        </nav>
        <button
          className="md:hidden text-brand-light p-2 rounded-sm border border-brand-light/30"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Menüyü aç/kapat"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-espresso border-t border-brand-gold/20">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className="block text-brand-light text-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={handleNavClick}
              className="block text-center bg-brand-gold text-brand-dark px-4 py-3 rounded-sm font-semibold"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
