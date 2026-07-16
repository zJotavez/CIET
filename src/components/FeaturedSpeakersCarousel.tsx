import React from 'react';
import { Award, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { Speaker } from '../types';

interface FeaturedCarouselProps {
  speakers: Speaker[];
  onOpenSpeakerModal: (speaker: Speaker) => void;
}

export default function FeaturedSpeakersCarousel({ speakers, onOpenSpeakerModal }: FeaturedCarouselProps) {
  // Get speakers for Moment 3 (featured_2)
  const featuredSpeakers = speakers.filter(s => s.displayLocations.includes('featured_2'));

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="speakers-carousel-section">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Professores Convidados</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Quem conduzirá essas reflexões?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Pesquisadores renomados internacionalmente de instituições de ponta reunidos para aprofundar as discussões éticas e pedagógicas da era cibernética:
          </p>
        </div>

        {/* Speakers Grid for Moment 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:scale-[1.01] transition-all duration-300 flex flex-col group h-full shadow-xl relative backdrop-blur-sm"
              id={`featured-card-${speaker.id}`}
            >
              {/* Country Badge top right */}
              <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-[#020617]/85 border border-white/10 text-[9px] font-mono uppercase font-bold text-cyan-400 rounded-lg tracking-widest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {speaker.country}
              </div>

              {/* Styled Photo Area */}
              <div className="relative aspect-square overflow-hidden bg-[#020617]">
                <img
                  src={speaker.photoUrl}
                  alt={speaker.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/10 to-transparent" />
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-cyan-400 uppercase font-bold flex items-center gap-1 tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    {speaker.academicTitle} Convidado
                  </p>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
                    {speaker.academicTitle} {speaker.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-semibold leading-tight line-clamp-1 font-light">{speaker.institution}</p>
                  <p className="text-[11px] text-slate-400 leading-tight line-clamp-2 font-light">{speaker.professionalTitle}</p>
                  
                  {/* Topic badge */}
                  <div className="pt-2">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Eixo de Atuação</p>
                    <p className="text-xs text-slate-300 font-medium mt-0.5 inline-flex items-center gap-1 font-light">
                      <BookOpen className="w-3 h-3 text-cyan-400" />
                      Tema: {speaker.topics.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => onOpenSpeakerModal(speaker)}
                    className="w-full py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all hover:bg-white/10 cursor-pointer backdrop-blur-sm"
                    id={`featured-card-btn-${speaker.id}`}
                  >
                    Ver participação completa
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
