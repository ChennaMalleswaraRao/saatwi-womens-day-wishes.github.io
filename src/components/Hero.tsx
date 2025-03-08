
import React from "react";
import { Sparkles, Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient with rose image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-love-300/90 to-purple-400/90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: Math.random() > 0.5 ? '#F687B3' : '#D53F8C',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/30 backdrop-blur-sm mb-8 animate-bounce-slow">
          <Sparkles className="w-5 h-5 text-love-700" /> 
          <span className="text-love-800 font-medium text-sm md:text-base">Happy Women's Day</span>
          <Sparkles className="w-5 h-5 text-love-700" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-dancing text-white mb-8 text-shadow">
          To My Beautiful Saatwi
        </h1>
        
        {/* Featured image in a decorative frame */}
        <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
          <img 
            src="/lovable-uploads/69afb25e-9a7d-424a-9823-3aad8af92f1d.png" 
            alt="Saatwi with a rose" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-love-500/30 to-transparent"></div>
          
          {/* Floating hearts around the image */}
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart 
              key={i}
              className="absolute text-love-500 animate-float" 
              fill="#ED64A6"
              style={{
                width: `${Math.random() * 15 + 15}px`,
                height: `${Math.random() * 15 + 15}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-white text-shadow font-montserrat font-light max-w-2xl mx-auto">
          Celebrating the incredible woman you are, today and every day
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-pink-50 z-20"></div>
    </div>
  );
};

export default Hero;
