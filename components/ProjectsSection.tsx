
import React from 'react';

const projects = [
  {
    category: "Sahil Resort · İç Mimari",
    title: "Bodrum Yansıma Lobisi",
    imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    description: "Mazı Breeze Saten koleksiyonumuzla, resort girişinde gün ışığıyla yaşayan dev pliseli paneller ve perdeler tasarladık."
  },
  {
    category: "Moda Evi · Kapsül Koleksiyonu",
    title: "Ekinoks Couture",
    imageSrc: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80",
    description: "Lagün Organze kumaşlarımız, couture tasarımcısının transparan katmanlı elbiselerinde hareketli siluetler yarattı."
  },
  {
    category: "Sahne Sanatları · Multimedya",
    title: "Göçebe Işık Performansı",
    imageSrc: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    description: "Mercan Metalik pliseler, ışık oyunlarını güçlendiren yansıtıcı yüzeyleriyle turne boyunca performansın imzası oldu."
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">Mazı Plise Projeleri</h2>
          <p className="max-w-2xl mx-auto text-brand-light/80">
            İş ortaklarımızın hikâyelerine Mazı ruhunu taşıyan, sınırlı üretim pliselerimizin sahnedeki yansımaları.
          </p>
        </div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <img src={project.imageSrc} alt={project.title} className="w-full h-auto object-cover rounded-lg shadow-2xl" />
              </div>
              <div className="md:w-1/2">
                <p className="text-brand-gold font-semibold mb-2">{project.category}</p>
                <h3 className="text-3xl font-serif text-white mb-4">{project.title}</h3>
                <p className="text-brand-light/80 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
