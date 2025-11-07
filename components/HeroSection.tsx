
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/91uzlR8o2aL._UF1000,1000_QL80_.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-espresso/95 via-brand-espresso/70 to-brand-dark/40"></div>
      <div className="relative z-10 text-center text-brand-cream p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-gold mb-6 tracking-wider leading-tight">
          Kahve Tonlarında <br /> Pleated Gölge Tasarımı
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-light/90 font-light mb-8">
          Mazı Plise, kameralardan vitrinlere kadar her sahnede sıcak kahve tonlarıyla derinlik katan pliseleri tasarlar, üretir ve uygular.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#works" className="bg-brand-gold text-brand-dark px-8 py-3 rounded-sm font-semibold tracking-wide hover:bg-opacity-90 transition">
            İşlerimizi Keşfet
          </a>
          <a href="#about" className="text-brand-light/80 uppercase tracking-[0.3em]">
            Mazı'dan Hikâyemiz
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ArrowDown size={32} className="text-brand-gold" />
      </a>
    </section>
  );
};

export default HeroSection;
