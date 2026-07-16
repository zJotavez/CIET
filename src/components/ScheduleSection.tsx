import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Award, User, Laptop } from 'lucide-react';
import { ScheduleDay, ScheduleActivity, Speaker } from '../types';

interface ScheduleProps {
  days: ScheduleDay[];
  activities: ScheduleActivity[];
  speakers: Speaker[];
  onOpenSpeakerModal: (speaker: Speaker) => void;
}

export default function ScheduleSection({ days, activities, speakers, onOpenSpeakerModal }: ScheduleProps) {
  const [selectedDayId, setSelectedDayId] = useState<string>(days[0]?.id || 'day-1');

  // Filter activities for selected day, sorted by order/time
  const dayActivities = activities
    .filter(act => act.dayId === selectedDayId)
    .sort((a, b) => a.order - b.order);

  const selectedDay = days.find(d => d.id === selectedDayId);

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden" id="schedule-section">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-section.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617]"></div>
      </div>

      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Programação Oficial</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Três noites para compreender o presente e pensar o futuro.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Navegue pelos dias do congresso abaixo para conhecer as conferências magnas, debates temáticos e mesas-redondas confirmadas:
          </p>
        </div>

        {/* Days Tab Selector */}
        <div className="flex justify-center p-1.5 bg-[#020617] rounded-2xl max-w-lg mx-auto mb-12 border border-white/10">
          {days.map((day) => {
            const isActive = selectedDayId === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setSelectedDayId(day.id)}
                className={`flex-1 py-3 text-center rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-cyan-500/10"
                    : "text-slate-400 hover:text-slate-200 font-semibold text-xs sm:text-sm"
                }`}
                id={`schedule-day-tab-${day.id}`}
              >
                <div className="text-[9px] uppercase tracking-[0.15em] leading-none mb-1 opacity-80 font-mono">{day.title}</div>
                <div className="text-xs sm:text-sm font-display">{day.dateFormatted}</div>
              </button>
            );
          })}
        </div>

        {/* Activities List */}
        <div className="space-y-6">
          {dayActivities.length === 0 ? (
            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10 text-slate-400 backdrop-blur-sm shadow-xl">
              <Laptop className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-semibold">Atividades sendo catalogadas para este dia.</p>
              <p className="text-xs text-slate-500 mt-1 font-light">Acompanhe as atualizações acadêmicas oficiais em breve.</p>
            </div>
          ) : (
            dayActivities.map((activity) => {
              // Get connected speakers
              const activitySpeakers = speakers.filter(sp => activity.speakerIds.includes(sp.id));

              return (
                <div
                  key={activity.id}
                  className="bg-white/5 border border-white/10 hover:border-cyan-500/20 p-3 md:p-4 rounded-xl shadow-xl transition-all text-left flex flex-col md:flex-row gap-3 items-start backdrop-blur-sm"
                  id={`schedule-activity-card-${activity.id}`}
                >
                  
                  {/* Left block: Times & Format tag */}
                  <div className="md:w-1/4 shrink-0 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-xs md:text-sm font-bold">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{activity.startTime} - {activity.endTime}</span>
                    </div>
                    
                    <span className="inline-block px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-md text-[8px] font-bold uppercase tracking-wider font-mono">
                      {activity.type}
                    </span>

                    <p className="text-[8px] text-slate-500 font-mono flex items-center gap-1 uppercase tracking-wider">
                      <MapPin className="w-2.5 h-2.5 shrink-0" />
                      {activity.location}
                    </p>
                  </div>

                  {/* Right block: Title, description, and speakers */}
                  <div className="flex-1 space-y-1.5">
                    <h4 className="text-sm md:text-base font-bold text-white font-display leading-snug">
                      {activity.title}
                    </h4>
                    
                    <p className="text-[10px] sm:text-xs text-slate-400 leading-normal text-justify font-light">
                      {activity.description}
                    </p>

                    {/* Associated Speakers */}
                    {activitySpeakers.length > 0 && (
                      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:items-center">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                          Responsável / Convidados:
                        </span>
                        
                        <div className="flex flex-wrap gap-4">
                          {activitySpeakers.map((sp) => (
                            <button
                              key={sp.id}
                              onClick={() => onOpenSpeakerModal(sp)}
                              className="inline-flex items-center gap-2 p-1 pr-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-left cursor-pointer group backdrop-blur-sm"
                            >
                              <img
                                src={sp.photoUrl}
                                alt={sp.name}
                                referrerPolicy="no-referrer"
                                className="w-6 h-6 rounded-full object-cover bg-slate-950 ring-1 ring-white/10 group-hover:scale-105 transition-transform"
                              />
                              <div>
                                <p className="text-xs font-bold text-white leading-none group-hover:text-cyan-400 transition-colors font-display">
                                  {sp.academicTitle} {sp.name}
                                </p>
                                <p className="text-[9px] text-slate-400 leading-none mt-0.5 font-light">{sp.institution}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
