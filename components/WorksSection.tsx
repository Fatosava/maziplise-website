
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
      <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80 mb-1">Mazı Plise</p>
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
      title: "Gölge Oyunu Stor Sistemleri",
      description:
        "Kahve tonlu pliselerle hazırlanan gün ışığı kontrolü, boutique otellerde sıcak ve doğal bir atmosfer yaratıyor.",
      imageSrc: "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Atölye Pencere Enstalasyonları",
      description:
        "Mazı'daki atölyemizde üretilen çok katmanlı paneller, mimari projelerde heykelsi yüzeylere dönüşüyor.",
      imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Koleksiyon Çekim Styling",
      description:
        "Kapsül moda çekimleri için hazırlanan özel pliseler, kahve paletindeki geçişleriyle ürün hikâyesini destekliyor.",
      imageSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Yaşam Alanı Panelleri",
      description:
        "Özel üretim katmanlar, rezidans projelerinde hem mahremiyet hem de dekoratif odak noktası sağlıyor.",
      imageSrc: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section id="works" className="py-20 md:py-32 bg-brand-espresso/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-gold uppercase tracking-[0.5em] text-xs mb-3">İşlerimiz</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-cream mb-4">Mazı Plise Atölye Seçkisi</h2>
          <p className="max-w-2xl mx-auto text-brand-light/80">
            Pleated gölgelendirme çözümlerimizin moda, iç mimari ve fotoğraf prodüksiyonlarında aldığı rollere göz atın.
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
