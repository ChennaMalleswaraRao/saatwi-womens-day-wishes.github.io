
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Gift, Flower } from "lucide-react";
import Hero from "@/components/Hero";
import LoveMessages from "@/components/LoveMessages";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show a welcome toast
    toast({
      title: "Welcome to Saatwi's Women's Day Celebration!",
      description: "Explore this page made with love just for you ❤️",
    });
  }, [toast]);

  const handleSpecialButton = () => {
    setShowConfetti(true);
    toast({
      title: "You're Amazing, Saatwi!",
      description: "You deserve to be celebrated every day, not just on Women's Day!",
    });
    
    // Turn off confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <span
              key={i}
              className="absolute block w-2 h-2 rounded-full animate-spark"
              style={{
                backgroundColor: ['#ED64A6', '#D53F8C', '#F687B3', '#FBB6CE', '#FFF5F7'][Math.floor(Math.random() * 5)],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm shadow-xl border-love-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-dancing text-love-700 mb-4">Celebrating You Today</h2>
              <p className="text-love-600 mb-4">
                Saatwi, on this Women's Day, I want you to know how special you are to me.
                Your strength, grace, and beauty inspire me every day.
              </p>
              <Button 
                onClick={handleSpecialButton}
                className="bg-love-500 hover:bg-love-600 text-white group"
              >
                Click For A Special Surprise
                <Sparkles className="ml-2 w-4 h-4 group-hover:animate-spin" />
              </Button>
            </div>
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-full bg-love-100 flex items-center justify-center animate-float">
                <Heart className="w-20 h-20 text-love-500 animate-heartbeat" />
              </div>
            </div>
          </div>
        </Card>

        <Countdown />
        
        <LoveMessages />
        
        <Gallery />
        
        <div className="text-center mt-12 mb-8">
          <h2 className="text-3xl font-dancing text-love-700 mb-4">Always Yours</h2>
          <div className="flex justify-center items-center gap-2 text-love-500">
            <Flower className="w-5 h-5" />
            <span className="font-montserrat">Forever and Always</span>
            <Flower className="w-5 h-5" />
          </div>
          <p className="text-love-600 mt-3 font-montserrat text-sm">Made with love for the most amazing woman</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
