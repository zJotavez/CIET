import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, GraduationCap, Award, BookOpen, Calendar, Clock } from 'lucide-react';
import { Speaker, ScheduleActivity, ScheduleDay } from '../types';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
  activities: ScheduleActivity[];
  days: ScheduleDay[];
}

export default function SpeakerModal({ speaker, onClose, activities, days }: SpeakerModalProps) {
  if (!speaker) return null;

  // Find lectures connected to this speaker
  const speakerActivities = activities.filter(act => act.speakerIds.includes(speaker.id));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="speaker-modal">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#020617] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-100 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer border border-white/5"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Banner Accent */}
          <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

          <div className="p-6 md:p-8">
            {/* Header info */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-6 border-b border-white/5">
              <div className="relative shrink-0">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-60 blur-sm"></div>
                <img
                  src={speaker.photoUrl}
                  alt={speaker.name}
                  referrerPolicy="no-referrer"
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white/10 bg-slate-950"
                />
                <span className="absolute bottom-0 right-0 px-2 py-0.5 bg-cyan-500 text-[9px] uppercase font-bold tracking-widest rounded-lg text-[#020617] shadow-md font-mono">
                  {speaker.country}
                </span>
              </div>

              <div className="flex-1 text-left">
                <span className="text-[9px] font-semibold tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 uppercase font-mono">
                  Palestrante Confirmado
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 leading-tight">
                  {speaker.academicTitle} {speaker.name}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-1.5 font-light">
                  <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                  {speaker.institution}
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-light">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  {speaker.professionalTitle}
                </p>
              </div>
            </div>

            {/* Main content body */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {/* Left Column: Details & Lecture */}
              <div className="md:col-span-1 space-y-4 text-left">
                <div>
                  <h4 className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest font-mono flex items-center gap-1.5 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Eixos de Atuação
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {speaker.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-white/5 px-2.5 py-1 rounded-lg text-cyan-300 border border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest font-mono flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" /> Origem
                  </h4>
                  <p className="text-xs text-slate-300 bg-white/5 p-2.5 rounded-lg border border-white/10 font-light">
                    {speaker.country} — {speaker.institution}
                  </p>
                </div>
              </div>

              {/* Right Column: Bio & Schedule Activities */}
              <div className="md:col-span-2 space-y-6 text-left">
                <div>
                  <h4 className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest font-mono mb-2">Biografia Acadêmica</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify bg-white/5 p-4 rounded-xl border border-white/10 font-light">
                    {speaker.fullBio || speaker.shortBio}
                  </p>
                </div>

                {/* Associated Activities */}
                {speakerActivities.length > 0 && (
                  <div>
                    <h4 className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest font-mono mb-3">Participação no Congresso</h4>
                    <div className="space-y-3">
                      {speakerActivities.map((act) => {
                        const day = days.find(d => d.id === act.dayId);
                        return (
                          <div
                            key={act.id}
                            className="p-3.5 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/20 transition-colors"
                          >
                            <span className="text-[9px] uppercase font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded-md font-mono">
                              {act.type}
                            </span>
                            <h5 className="text-sm font-semibold text-white mt-1.5 leading-tight font-display">{act.title}</h5>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-400 font-light">
                              {day && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3 text-cyan-400" />
                                  {day.title} ({day.dateFormatted})
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-cyan-400" />
                                {act.startTime} - {act.endTime}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quote Section if exists */}
                {speaker.quote && (
                  <div className="border-l-2 border-cyan-500 pl-4 py-1 italic text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-r-xl border border-white/5 font-light">
                    "{speaker.quote}"
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
