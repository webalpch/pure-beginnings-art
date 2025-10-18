import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./ui/button";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Preload first 6 images for immediate display
  useEffect(() => {
    const preloadImages = (imageData: Array<{src: string, alt: string}>, count: number = 6) => {
      imageData.slice(0, count).forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = image.src;
        document.head.appendChild(link);
      });
    };

    preloadImages(images);
  }, []);

  const images = [
    {
      src: "/lovable-uploads/603c3419-969c-425a-be2d-1ba728fc8c48.png",
      alt: "Bateau traditionnel cambodgien sur les eaux calmes"
    },
    {
      src: "/lovable-uploads/faea70f3-f441-49ae-9a9f-e4a3113b66aa.png",
      alt: "Temple de Banteay Srei avec son architecture khmer"
    },
    {
      src: "/lovable-uploads/a3e679fa-ae39-4436-87c7-5af329d32319.png",
      alt: "Cascade tropicale dans la jungle cambodgienne"
    },
    {
      src: "/lovable-uploads/9d959f27-0e40-4801-a4f1-8bf27246eeaf.png",
      alt: "Temple ancien d'Angkor entouré de verdure"
    },
    {
      src: "/lovable-uploads/b659861e-07e5-43e8-9d2d-2c3a399f637f.png",
      alt: "Grande statue de Bouddha sur son piédestal"
    },
    {
      src: "/lovable-uploads/d2c7e6e3-744a-4ee8-965a-2942ac992139.png",
      alt: "Bateau de pêche traditionnel sur le lac Tonlé Sap"
    },
    {
      src: "/lovable-uploads/df0e3489-ee16-410e-ba76-1a9063f1df71.png",
      alt: "Temple de Banteay Srei au coucher du soleil"
    },
    {
      src: "/lovable-uploads/6af8bd38-e228-4c51-8d5d-812fb9901e8a.png",
      alt: "Angkor Wat illuminé la nuit avec ses rayons de lumière"
    },
    {
      src: "/lovable-uploads/6543a2cf-0620-49f9-81f1-ee5cc3a4d463.png",
      alt: "Ruines du temple Ta Prohm envahies par la nature"
    },
    {
      src: "/lovable-uploads/b51c812d-5a61-4266-95cb-a4d9f1c78a09.png",
      alt: "Maisons sur pilotis colorées du village flottant"
    },
    {
      src: "/lovable-uploads/bf69f8c9-8b47-4866-b083-e4e210d22a8c.png",
      alt: "Maison traditionnelle cambodgienne sur pilotis au toit de chaume"
    },
    {
      src: "/lovable-uploads/985f7d9a-bc44-4b2e-ba23-d66573babd9a.png",
      alt: "Habitant du village flottant dans son bateau traditionnel"
    },
    {
      src: "/lovable-uploads/81f2be3b-7026-41d6-8978-bf4992cfc5a9.png",
      alt: "Enfants cambodgiens dans un bateau du village flottant"
    },
    {
      src: "/lovable-uploads/palm-beach-cambodia.jpg",
      alt: "Palmier sur une plage tropicale cambodgienne avec vue sur la mer"
    },
    {
      src: "/lovable-uploads/pier-beach-cambodia.jpg",
      alt: "Ponton en bois traditionnel et plage de sable blanc au Cambodge"
    },
    {
      src: "/lovable-uploads/countryside-cattle.jpg",
      alt: "Paysage rural cambodgien avec troupeau de bovins dans les rizières"
    },
    {
      src: "/lovable-uploads/cambodian-child-rice-field.jpg",
      alt: "Enfant cambodgienne dans une rizière inondée avec palmiers à sucre"
    },
    {
      src: "/lovable-uploads/farmer-rice-field.jpg",
      alt: "Agriculteur cambodgien travaillant dans les rizières verdoyantes"
    },
    {
      src: "/lovable-uploads/hammock-floating-village.jpg",
      alt: "Hamac sur terrasse avec vue sur le village flottant du Tonlé Sap"
    },
    {
      src: "/lovable-uploads/fishing-boat-tonle-sap.jpg",
      alt: "Bateau de pêche traditionnel sur les eaux du lac Tonlé Sap"
    },
    {
      src: "/lovable-uploads/ta-prohm-tree-ruins.jpg",
      alt: "Arbre géant enlaçant les ruines du temple Ta Prohm d'Angkor"
    },
    {
      src: "/lovable-uploads/angkor-wat-approach.jpg",
      alt: "Allée d'approche majestueuse menant au temple d'Angkor Wat"
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 px-2">
            Galerie Photo
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-4">
            Découvrez la beauté du Cambodge à travers notre collection d'images authentiques
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openImage(index)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-1 sm:p-2">
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium">Cliquez pour agrandir</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour l'image agrandie */}
        <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
          <DialogContent className="max-w-5xl w-[95vw] sm:w-full h-[85vh] sm:h-[90vh] p-0 border-0">
            {selectedImage !== null && (
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                <button
                  onClick={closeImage}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="w-full h-full flex items-center justify-center p-2 sm:p-0">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full max-w-[90vw]">
                  <p className="text-xs sm:text-sm text-center line-clamp-2">{images[selectedImage].alt}</p>
                  <p className="text-[10px] sm:text-xs text-center opacity-75">
                    {selectedImage + 1} / {images.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;