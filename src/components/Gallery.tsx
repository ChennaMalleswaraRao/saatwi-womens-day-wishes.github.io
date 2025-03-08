
import React from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Sample gallery items (replace with real photos in production)
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      title: "Beautiful Moments",
      description: "Every moment with you is precious"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Your Smile",
      description: "Your smile brightens my day"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Our Journey",
      description: "Every step of our journey is magical"
    }
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-dancing text-love-700 text-center mb-8">
        Our Beautiful Memories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-love-200">
            <div className="aspect-w-4 aspect-h-3 relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-dancing">{item.title}</h3>
                <p className="text-white/80 text-sm font-montserrat">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-love-500 font-montserrat italic">
          Our gallery of memories continues to grow each day...
        </p>
      </div>
    </div>
  );
};

export default Gallery;
