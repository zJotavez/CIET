import React, { useState, useEffect } from 'react';
import { 
  getDraftState, 
  getPublishedState, 
  getPreviewMode, 
  saveDraftState, 
  publishState, 
  savePreviewMode, 
  resetToDefaults 
} from './utils/storage';
import { AppState, Speaker } from './types';
import Hero from './components/Hero';
import AboutEventVideoSection from './components/AboutEventVideoSection';
import AuthorityBar from './components/AuthorityBar';
import FeaturedSpeakerSpotlight from './components/FeaturedSpeakerSpotlight';
import QuotesSlider from './components/QuotesSlider';
import EdgarMorinTribute from './components/EdgarMorinTribute';
import ScheduleSection from './components/ScheduleSection';
import SpeakersGrid from './components/SpeakersGrid';
import InternationalGlobe from './components/InternationalGlobe';
import FAQAccordion from './components/FAQAccordion';
import FooterSection from './components/FooterSection';
import SpeakerModal from './components/SpeakerModal';

import { GraduationCap, Settings, Ticket, Menu, X } from 'lucide-react';

export default function App() {
  const [draftState, setDraftState] = useState<AppState>(() => getDraftState());
  const [publishedState, setPublishedState] = useState<AppState>(() => getPublishedState());
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(() => getPreviewMode());
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Active state is driven by preview mode setting
  const activeState = isPreviewMode ? draftState : publishedState;

  // Track scroll position for header glass effect
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleUpdateDraft = (newState: AppState) => {
    setDraftState(newState);
    saveDraftState(newState);
  };

  const handlePublish = () => {
    publishState(draftState);
    setPublishedState(draftState);
    triggerScrollTop();
  };

  const handleReset = () => {
    resetToDefaults();
    const freshDraft = getDraftState();
    const freshPub = getPublishedState();
    setDraftState(freshDraft);
    setPublishedState(freshPub);
    setIsPreviewMode(false);
    savePreviewMode(false);
    triggerScrollTop();
  };

  const handleTogglePreviewMode = (val: boolean) => {
    setIsPreviewMode(val);
    savePreviewMode(val);
  };

  const triggerScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find featured speakers for spotlight sections
  const featured1 = activeState.speakers.find(s => s.displayLocations.includes('featured_1'));
  const featured2 = activeState.speakers.find(s => s.displayLocations.includes('featured_2'));

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden" id="main-root">
      
      {/* Sleek Theme Ambient Glows & Dot Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-cyan-900 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-900 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-indigo-900 rounded-full blur-[110px]"></div>
        <div className="absolute inset-0 bg-dots"></div>
      </div>
      
      {/* Top Banner indicating preview mode active */}
      {isPreviewMode && (
        <div className="bg-amber-500 text-slate-950 text-xs font-bold py-1 px-4 text-center sticky top-0 z-50 flex items-center justify-center gap-2 shadow-md">
          <span>⚠️ Modo Preview Ativo — Exibindo Rascunho Não Publicado</span>
          <button
            onClick={() => handleTogglePreviewMode(false)}
            className="underline hover:text-slate-800 text-[11px] cursor-pointer"
          >
            Ver Versão Publicada
          </button>
        </div>
      )}

      {/* Global Transparent Header (Floating look) */}
      <header className={`fixed inset-x-0 z-40 transition-all duration-300 pointer-events-none ${
        isPreviewMode ? 'top-6' : 'top-0'
      } py-4 sm:py-5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-12 flex items-center justify-end gap-4 pointer-events-auto">
          {/* Logo Removida a pedido do usuário */}

          {/* Header Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Float Ticket Even3 Link */}
            <a
              href="https://www.even3.com.br/congresso-internacional-de-educacao-tecnologia-e-desenvolvimento-humano-747666/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full transition-all cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] animate-pulse flex items-center gap-2 border border-cyan-400/30"
              id="header-ticket-cta"
            >
              <Ticket className="w-4 h-4" />
              Inscreva-se
            </a>
          </div>

          {/* Mobile menu trigger removed */}

        </div>

        {/* Mobile Navigation Dropdown Menu Removed */}
      </header>

      {/* ==================== CORE EVENT LANDING NARRATIVE ==================== */}
      <main className={`${isPreviewMode ? 'pt-6' : 'pt-0'}`}>
        
        {/* Moment 1: Hero */}
        <Hero
          config={activeState.config}
          speakers={activeState.speakers}
          onScrollToSection={handleScrollToSection}
          onOpenSpeakerModal={setSelectedSpeaker}
        />

        {/* About Event Video Section */}
        <AboutEventVideoSection />

        {/* Continuous marquee of authority figures */}
        <AuthorityBar config={activeState.config} />

        {/* DeepQuestion Removed */}
        {featured1 && (
          <FeaturedSpeakerSpotlight
            type="first"
            speaker={featured1}
            onOpenSpeakerModal={setSelectedSpeaker}
          />
        )}

        {/* Moment 4: About Event */}
        {/* Thematic Axes Removed */}
        {featured2 && (
          <FeaturedSpeakerSpotlight
            type="final"
            speaker={featured2}
            allSpeakers={activeState.speakers}
            onOpenSpeakerModal={setSelectedSpeaker}
          />
        )}

        {/* Automatically sliding quote snippet slider */}
        <QuotesSlider speakers={activeState.speakers} />

        {/* Special tribute: Edgar Morin centenary and 7 knowledges of education */}
        <EdgarMorinTribute content={activeState.content} />

        {/* Moment 7: Interactive Program/Timetable */}
        <ScheduleSection
          days={activeState.days}
          activities={activeState.activities}
          speakers={activeState.speakers}
          onOpenSpeakerModal={setSelectedSpeaker}
        />

        {/* Philosophical big questions, Format layout experience, Target Audience Removed */}



        {/* World coordinate globe & Conversion CTA Section */}
        <InternationalGlobe />

        {/* Collapsible FAQ Accordion */}
        <FAQAccordion faqs={activeState.faqs} />

      </main>

      {/* Footer copyright information & Admin button trigger */}
      <FooterSection
        config={activeState.config}
        onScrollToSection={handleScrollToSection}
      />

      {/* ==================== PORTAL OVERLAYS ==================== */}
      
      {/* Floating Action Button (Mobile Only) */}
      <a
        href="https://www.even3.com.br/congresso-internacional-de-educacao-tecnologia-e-desenvolvimento-humano-747666/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-110 transition-all flex items-center justify-center animate-bounce md:hidden"
      >
        <Ticket className="w-6 h-6" />
      </a>

      {/* 1. Modal for detailed speaker bios */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
          activities={activeState.activities}
          days={activeState.days}
        />
      )}



    </div>
  );
}
