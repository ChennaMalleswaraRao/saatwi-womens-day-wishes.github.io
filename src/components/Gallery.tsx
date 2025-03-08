
import React from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Gallery = () => {
  // Real gallery items with uploaded images
  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/69afb25e-9a7d-424a-9823-3aad8af92f1d.png",
      title: "Beautiful Rose",
      description: "Your beauty is like this rose in your hair"
    },
    {
      id: 2,
      image: "/lovable-uploads/19a236df-a745-403f-99e1-d69743d048fe.png",
      title: "Sweet Embrace",
      description: "Every moment in your arms is precious"
    },
    {
      id: 3,
      image: "/lovable-uploads/08123903-7c9f-4892-8238-34de364ad334.png",
      title: "Sunny Days Together",
      description: "Your smile brightens even the sunniest days"
    },
    {
      id: 4,
      image: "/lovable-uploads/c4514323-f7eb-4389-b361-e55eb38f8e16.png",
      title: "Sunset Views",
      description: "Every sunset is more beautiful with you by my side"
    }
  ];

  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-dancing text-love-700 text-center mb-8">
        Our Beautiful Memories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-love-200">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-dancing mb-2">{item.title}</h3>
                <p className="text-white/90 text-base font-montserrat">{item.description}</p>
                <div className="absolute top-4 right-4 bg-love-500/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-love-600 font-montserrat italic">
          Our journey together is filled with beautiful moments, and I cherish each one of them with you...
        </p>
      </div>
    </div>
  );
};

export default Gallery;
