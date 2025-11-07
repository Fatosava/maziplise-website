
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-[500px]">
          <img src="https://images.unsplash.com/photo-1467043153537-a4f5700d6eea?auto=format&fit=crop&w=900&q=80" alt="Mazı Plise atölyesinde pile hazırlığı" className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded shadow-2xl"/>
          <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80" alt="El işçiliği tekstil katmanları" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded shadow-2xl border-4 border-brand-dark"/>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Mazı Plise'nin Hikâyesi</h2>
          <p className="text-brand-light/80 mb-4 leading-relaxed">
            Bodrum'un Mazı koyundaki küçük bir aile atölyesinde doğan Mazı Plise, Ege rüzgârını ve Akdeniz güneşini kumaşlarının her kıvrımına taşıyor. El işçiliğiyle hazırlanan pliselerimiz, doğal liflerin sıcaklığını çağdaş tasarım disiplinleriyle birleştiriyor.
          </p>
          <p className="text-brand-light/80 leading-relaxed">
            Haute couture markalardan mimari projelere kadar uzanan geniş bir yelpazede çözüm üretiyor, her partnerimiz için özel katlama teknikleri geliştiriyoruz. İşimizi, yalnızca kumaş üretmek değil, Mazı'nın karakterini sizin hikâyenize taşımak olarak görüyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
