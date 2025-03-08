
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

const loveMessages = [
  {
    title: "Your Strength",
    message: "Saatwi, your resilience and strength inspire me every day. The way you face challenges with grace is truly remarkable."
  },
  {
    title: "Your Beauty",
    message: "Your beauty radiates from within, illuminating everything around you. You're stunning in every way possible."
  },
  {
    title: "Your Intelligence",
    message: "Your brilliant mind and thoughtful perspective make every conversation with you a delight. I admire how you see the world."
  },
  {
    title: "Your Kindness",
    message: "The compassion you show to others reflects the beautiful soul you have. Your kindness makes this world a better place."
  },
  {
    title: "Your Laughter",
    message: "The sound of your laughter is my favorite melody. It brightens even the darkest days and fills my heart with joy."
  },
];

const LoveMessages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextMessage = () => {
    setCurrentIndex((prev) => (prev === loveMessages.length - 1 ? 0 : prev + 1));
  };
  
  const prevMessage = () => {
    setCurrentIndex((prev) => (prev === 0 ? loveMessages.length - 1 : prev - 1));
  };
  
  const currentMessage = loveMessages[currentIndex];
  
  return (
    <div className="my-12">
      <h2 className="text-3xl font-dancing text-love-700 text-center mb-8">
        What I Love About You
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 border-love-200 shadow-lg bg-white relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-love-100 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-love-500" />
          </div>
          
          <h3 className="text-2xl font-dancing text-love-600 mb-4">
            {currentMessage.title}
          </h3>
          
          <p className="text-love-800 font-montserrat leading-relaxed text-lg mb-8">
            {currentMessage.message}
          </p>
          
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevMessage}
              className="border-love-200 text-love-500 hover:bg-love-100 hover:text-love-600"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <span className="text-love-400 text-sm">
              {currentIndex + 1} / {loveMessages.length}
            </span>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextMessage}
              className="border-love-200 text-love-500 hover:bg-love-100 hover:text-love-600"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoveMessages;
