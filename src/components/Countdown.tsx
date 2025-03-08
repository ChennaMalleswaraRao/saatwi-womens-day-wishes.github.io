
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

const Countdown = () => {
  // International Women's Day is March 8th
  const womensDay = new Date(new Date().getFullYear(), 2, 8).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isWomensDay, setIsWomensDay] = useState(false);
  
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = womensDay - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
      days,
      hours,
      minutes,
      seconds,
      total: difference
    };
  }
  
  useEffect(() => {
    // Check if today is Women's Day
    const today = new Date();
    if (today.getMonth() === 2 && today.getDate() === 8) {
      setIsWomensDay(true);
      return;
    }
    
    // Set up countdown timer
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft();
      setTimeLeft(remainingTime);
      
      if (remainingTime.total <= 0) {
        clearInterval(timer);
        setIsWomensDay(true);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Card className="p-6 border-love-200 bg-white/90 backdrop-blur-sm shadow-lg">
      {isWomensDay ? (
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <Gift className="w-10 h-10 text-love-500 animate-bounce" />
          </div>
          <h2 className="text-2xl md:text-3xl font-dancing text-love-700 mb-2">
            Happy Women's Day, Saatwi!
          </h2>
          <p className="text-love-600 font-montserrat">
            Today is all about celebrating the amazing woman you are!
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-dancing text-love-700 text-center mb-4">
            Counting Down to Women's Day
          </h2>
          
          <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <div className="bg-love-100 rounded-lg p-2 md:p-4">
                <span className="block text-2xl md:text-4xl font-bold text-love-600">
                  {timeLeft.days}
                </span>
              </div>
              <span className="text-xs md:text-sm text-love-500 mt-1">Days</span>
            </div>
            
            <div className="text-center">
              <div className="bg-love-100 rounded-lg p-2 md:p-4">
                <span className="block text-2xl md:text-4xl font-bold text-love-600">
                  {timeLeft.hours}
                </span>
              </div>
              <span className="text-xs md:text-sm text-love-500 mt-1">Hours</span>
            </div>
            
            <div className="text-center">
              <div className="bg-love-100 rounded-lg p-2 md:p-4">
                <span className="block text-2xl md:text-4xl font-bold text-love-600">
                  {timeLeft.minutes}
                </span>
              </div>
              <span className="text-xs md:text-sm text-love-500 mt-1">Minutes</span>
            </div>
            
            <div className="text-center">
              <div className="bg-love-100 rounded-lg p-2 md:p-4">
                <span className="block text-2xl md:text-4xl font-bold text-love-600">
                  {timeLeft.seconds}
                </span>
              </div>
              <span className="text-xs md:text-sm text-love-500 mt-1">Seconds</span>
            </div>
          </div>
          
          <p className="text-center text-love-500 mt-4 font-montserrat text-sm">
            Until we celebrate the amazing woman you are!
          </p>
        </div>
      )}
    </Card>
  );
};

export default Countdown;
