import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Speaker } from '../types';

interface QuotesSliderProps {
  speakers: Speaker[];
}

export default function QuotesSlider({ speakers }: QuotesSliderProps) {
  // Filter speakers with valid quotes
  const quotesSpeakers = speakers.filter(s => s.quote);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (quotesSpeakers.length <= 1) return;
    
    // O usuário pediu "passando automático". Reduzi de 8s para 4s para ficar mais perceptível
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotesSpeakers.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [quotesSpeakers.length]);

  if (quotesSpeakers.length === 0) return null;

  const currentSpeaker = quotesSpeakers[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + quotesSpeakers.length) % quotesSpeakers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotesSpeakers.length);
  };

  return (
    <section className="relative py-20 bg-transparent overflow-hidden px-4 sm:px-6 lg:px-8 border-y border-white/5" id="quotes-slider-section">
      
      {/* Background Image with Dark Overlay (Adicionado conforme pedido anterior) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-section.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617]/90"></div>
      </div>

      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Quote icon banner decoration */}
        <div className="inline-flex p-3 bg-white/5 border border-white/10 text-cyan-400 rounded-full mb-6 shadow-xl backdrop-blur-sm">
          <Quote className="w-6 h-6 animate-pulse" />
        </div>

        {/* Carousel Content with AnimatePresence */}
        <div className="min-h-[220px] md:min-h-[180px] flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpeaker.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <blockquote className="text-lg md:text-2xl font-display font-medium text-slate-100 italic leading-relaxed max-w-3xl mx-auto">
                "{currentSpeaker.quote}"
              </blockquote>


            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual navigation controls */}
        {quotesSpeakers.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
              id="quote-prev-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-1.5">
              {quotesSpeakers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${currentIndex === idx ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/10'}`}
                  title={`Citação ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
              id="quote-next-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
