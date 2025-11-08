
import React from 'react';

interface WorkCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ imageSrc, title, description }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg bg-brand-espresso/40">
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-brand-light">
      <p className="text-sm uppercase tracking-[0.3em] text-white drop-shadow mb-1">Mazı Plise</p>
      <h3 className="text-2xl font-serif font-semibold text-brand-cream mb-2">{title}</h3>
      <p className="text-brand-light/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>
  </div>
);

const WorksSection: React.FC = () => {
  const works = [
    {
      title: "Zarafetin Kıvrımı: Mikro Plise Dokular",
      description:
        "İnce kıvrımlarıyla kumaşta ışık ve hareket yaratan mikro pliseler, modern tasarımların sessiz lüksünü yansıtır. Mazi Plise atölyesinde şekillenen her dokuda, zarafet ustalıkla buluşur.",
      imageSrc: "/81fZ-1+MfOL.jpg"
    },
    {
      title: "Işığın İzinde: Kristal Plise",
      description:
        "Keskin hatları ve ışıltılı yüzeyiyle kristal pliseler, kumaşta derinlik ve hareket yaratır. Mazi Plise’nin ustalığıyla şekillenen bu dokular, lüksün en sade hâlidir.",
      imageSrc: "/Sf87b90daf2144d36bb7642101e66625dL.avif"
    },
    {
      title: "Altın Akış: Dalga Plise",
      description:
        "Hareketli formu ve ışıltılı dokusuyla dalga pliseler, kumaşta zarafetin akışını temsil eder. Mazi Plise’nin ustalığıyla şekillenen bu model, her projeye sahne ışıltısı kazandırır.",
      imageSrc: "/il_fullxfull.5734812999_gdk1.jpg"
    },
    {
      title: "Zamansız Form: Geniş Plise",
      description:
        "Geniş kıvrımlarıyla kumaşa heykelsi bir duruş kazandıran geniş pliseler, formunu yıllarca korur. Mazi Plise’nin ustalığıyla şekillenen bu dokular, zarafeti sade çizgilerle anlatır.",
      imageSrc: "/S745e8191a3224eb6bfee59752963d8caY.avif"
    }
  ];

  return (
    <section id="works" className="py-20 md:py-32 bg-brand-espresso/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-gold uppercase tracking-[0.5em] text-xs mb-3">İşlerimiz</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-cream mb-4">Mazı Plise Atölye Seçkisi</h2>
          <p className="max-w-2xl mx-auto text-brand-cream/80 mt-4 text-lg">
            Işığın, kumaşın ve ustalığın buluştuğu noktada her plise bir hikâye anlatır. Mazı Plise’nin farklı alanlardaki özgün dokularını keşfedin.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
