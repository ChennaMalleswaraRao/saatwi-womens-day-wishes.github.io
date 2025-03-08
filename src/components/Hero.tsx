
import React from "react";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-love-300/70 to-purple-300/70"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              backgroundColor: Math.random() > 0.5 ? '#F687B3' : '#D53F8C',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 text-love-700" /> 
          <span className="text-love-800 font-medium text-sm">Happy Women's Day</span>
          <Sparkles className="w-4 h-4 text-love-700" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-dancing text-white mb-6 text-shadow">
          To My Beautiful Saatwi
        </h1>
        
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
