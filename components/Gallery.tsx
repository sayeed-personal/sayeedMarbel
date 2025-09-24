
import React from 'react';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/800/600?random=1', alt: 'Modern architectural design' },
  { id: 2, src: 'https://picsum.photos/600/800?random=2', alt: 'Interior workspace' },
  { id: 3, src: 'https://picsum.photos/800/600?random=3', alt: 'Creative branding materials' },
  { id: 4, src: 'https://picsum.photos/800/600?random=4', alt: 'Minimalist product design' },
  { id: 5, src: 'https://picsum.photos/600/800?random=5', alt: 'Team collaborating on a project' },
  { id: 6, src: 'https://picsum.photos/800/600?random=6', alt: 'Sleek user interface design' },
];

const GalleryImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg group">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      loading="lazy"
    />
  </div>
);


const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-primary">Our Work</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse into our passion for design and dedication to quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <GalleryImage key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
