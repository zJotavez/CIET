import React, { useState } from 'react';
import { Award, Globe, Filter, MapPin } from 'lucide-react';
import { Speaker } from '../types';

interface SpeakersGridProps {
  speakers: Speaker[];
  onOpenSpeakerModal: (speaker: Speaker) => void;
}

export default function SpeakersGrid({ speakers, onOpenSpeakerModal }: SpeakersGridProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>("Todos");

  const topicsList = ["Todos", "Educação", "Inteligência Artificial", "Desenvolvimento Humano", "Ética", "Tecnologia", "Futuro"];

  // Filter speakers based on selected topic
  const filteredSpeakers = speakers.filter(speaker => {
    if (selectedTopic === "Todos") return true;
    return speaker.topics.includes(selectedTopic);
  }).sort((a, b) => {
    // Sort so featured ones come first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.order - b.order;
  });

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8" id="speakers-grid-section">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-cyan-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Grade de Convidados</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Grandes vozes. Diferentes perspectivas. Uma discussão essencial.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Pesquisadores, intelectuais e educadores brasileiros e internacionais reunidos para tecer as linhas éticas de um destino comum:
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-white/5">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mr-2 font-mono">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            Filtrar por Tema:
          </span>
          {topicsList.map((topic) => {
            const isActive = selectedTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer backdrop-blur-sm ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-white/5 text-slate-300 border-white/10 hover:text-white hover:bg-white/10"
                }`}
                id={`filter-btn-${topic.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid Layout */}
        {filteredSpeakers.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 text-slate-400 backdrop-blur-sm">
            <p className="text-sm font-semibold">Nenhum palestrante cadastrado para este tema no momento.</p>
            <p className="text-xs text-slate-500 mt-1 font-light">Nossos organizadores estão vinculando novos nomes constantemente.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {filteredSpeakers.map((speaker) => {
              // Featured speakers take half grid (col-span-6), normal ones take col-span-4 (on desktop)
              const cardSpan = speaker.featured ? "lg:col-span-6 md:col-span-12" : "lg:col-span-4 md:col-span-6";

              return (
                <div
                  key={speaker.id}
                  onClick={() => onOpenSpeakerModal(speaker)}
                  className={`${cardSpan} col-span-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start text-left cursor-pointer transition-all duration-300 group shadow-lg relative overflow-hidden backdrop-blur-sm`}
                  id={`grid-card-${speaker.id}`}
                >
                  {/* Outer delicate glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Photo representation */}
                  <div className="relative shrink-0 w-20 h-20 md:w-28 md:h-28">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-20 group-hover:opacity-50 transition-opacity blur-sm"></div>
                    <img
                      src={speaker.photoUrl}
                      alt={speaker.name}
                      referrerPolicy="no-referrer"
                      className="relative w-full h-full rounded-full object-cover border border-white/10 bg-slate-950 group-hover:scale-102 transition-transform"
                    />
                    <span className="absolute bottom-0 right-0 px-1.5 py-0.5 bg-slate-950 border border-white/10 text-[9px] uppercase font-bold text-cyan-400 rounded shadow">
                      {speaker.country}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="flex-1 space-y-2 flex flex-col justify-between h-full">
                    <div>
                      {speaker.featured && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded mb-2">
                          <Award className="w-3 h-3 text-cyan-400" />
                          Destaque Acadêmico
                        </span>
                      )}
                      
                      <h4 className="text-sm sm:text-base md:text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                        {speaker.academicTitle} {speaker.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-300 line-clamp-1 mt-0.5">{speaker.institution}</p>
                      <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight font-light">{speaker.professionalTitle}</p>
                    </div>

                    <div className="pt-3 border-t border-white/5 mt-2 flex flex-wrap gap-1">
                      {speaker.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="text-[9px] font-mono font-semibold bg-white/5 px-2 py-0.5 rounded text-slate-400 border border-white/10"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
