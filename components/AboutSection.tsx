
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-[500px]">
          <img src="/He639cb48698c46928829d2c4c1ea13e94.avif" alt="Mazı Plise atölyesinde pile hazırlığı" className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded shadow-2xl"/>
          <img src="/Zelouf-Pleated-Crushed-Velvet-Sewing-DIY-Crafts-Fabric-by-the-Yard-Chocolate-7-Yard_920e0ed0-0c10-491f-9f6b-c21562e125b9.a379b8674e06ab142985d13a76ab75d1.avif" alt="El işçiliği tekstil katmanları" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded shadow-2xl border-4 border-brand-dark"/>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Mazı Plise'nin Hikâyesi</h2>
          <p className="text-brand-light/80 mb-4 leading-relaxed">
            17 yıl önce İstanbul’da küçük bir atölyede iki kardeşin emeğiyle doğdu Mazı Plise. Kurucu ortaklar Aziz Ava ve Emanet Ava, kumaşa yalnızca şekil değil, ruh da veren bir anlayışla yola çıktılar. Her plise kıvrımı, ustalığın ve sabrın bir ifadesi; her dokunuş, yılların birikimiyle işlenmiş bir hikâyedir.
          </p>
          <p className="text-brand-light/80 mb-4 leading-relaxed">
            Mazı Plise bugün, geleneksel katlama tekniklerini modern çizgilerle buluşturan bir atölye kimliğini koruyor. El işçiliğiyle hazırlanan her kumaş, makine soğukluğundan uzak; insan emeğinin sıcaklığını taşıyor.
          </p>
          <p className="text-brand-light/80 leading-relaxed">
            Bizim için kumaş üretmek bir üretim süreci değil, bir zanaattir. Her detayda titizlik, her dokuda bir karakter vardır. Mazı Plise — Kumaşta Asaletin Dokusunu yaşatmaya devam ediyor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
