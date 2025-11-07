
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">Mazı Plise ile Tanışın</h2>
          <p className="max-w-2xl mx-auto text-brand-light/80">
            Koleksiyonlarımıza dair numune, proje planlama ya da iş birliği talepleriniz için atölyemiz her zaman açık.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6">
            <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-brand-dark/50 text-brand-light p-4 border border-brand-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
            <input type="email" placeholder="E-posta Adresiniz" className="w-full bg-brand-dark/50 text-brand-light p-4 border border-brand-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
            <textarea placeholder="Projenizden bahsedin..." rows={5} className="w-full bg-brand-dark/50 text-brand-light p-4 border border-brand-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"></textarea>
            <button type="submit" className="w-full bg-brand-gold text-brand-dark px-6 py-4 rounded-sm hover:bg-opacity-80 transition duration-300 font-bold text-lg">
              Mesaj Gönder
            </button>
          </form>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-brand-gold mt-1" size={24} />
              <div>
                <h3 className="text-xl text-white font-semibold">E-posta</h3>
                <p className="text-brand-light/80">atelier@maziplise.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-brand-gold mt-1" size={24} />
              <div>
                <h3 className="text-xl text-white font-semibold">Telefon</h3>
                <p className="text-brand-light/80">+90 252 645 0094</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-brand-gold mt-1" size={24} />
              <div>
                <h3 className="text-xl text-white font-semibold">Adres</h3>
                <p className="text-brand-light/80">Mazı Mah. Atölye Sok. No:4, Bodrum / Muğla, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
