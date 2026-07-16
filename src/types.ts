export interface Speaker {
  id: string;
  name: string;
  photoUrl: string;
  videoUrl?: string;
  country: string;
  institution: string;
  academicTitle: string; // e.g., "Prof. Dra." or "PhD"
  professionalTitle: string; // e.g., "Pesquisadora de IA e Neurociência"
  shortBio: string;
  fullBio: string;
  lectureTitle: string;
  topics: string[]; // e.g. ["Educação", "Inteligência Artificial", "Ética"]
  quote: string;
  displayLocations: string[]; // "hero" | "featured_1" | "featured_2" | "featured_morin" | "grid" | "featured_final"
  featured: boolean;
  order: number;
}

export interface ScheduleActivity {
  id: string;
  dayId: string;
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  type: 'Abertura' | 'Palestra' | 'Mesa-Redonda' | 'Minicurso' | 'Painel';
  location: string;
  speakerIds: string[]; // associated speaker IDs
  status: 'active' | 'scheduled' | 'canceled';
  order: number;
}

export interface ScheduleDay {
  id: string;
  date: string; // e.g., "2026-09-15"
  title: string; // e.g., "Dia 01"
  description: string; // e.g., "Solenidade Oficial de Abertura"
  dateFormatted: string; // e.g., "15 de setembro"
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface EventConfig {
  title: string;
  subtitle: string;
  themeDescription: string;
  detailedAbout: string;
  dateRange: string;
  timeString: string;
  formatString: string;
  certificationText: string;
  registrationPrice: number;
  originalPrice: number;
  registrationLink: string;
  countdownDate: string; // ISO string or YYYY-MM-DD HH:MM:SS
  showCountdown: boolean;
  // Metrics (hidden if counts are 0, as per guidelines)
  participantsCount: number;
  speakersCount: number;
  institutionsCount: number;
  countriesCount: number;
}

export interface SiteContent {
  morinSectionTitle: string;
  morinSectionSubtitle: string;
  morinSectionText: string;
  morinDetails: string;
  morinTime: string;
  saberes: {
    id: string;
    number: string;
    title: string;
    description: string;
    connectionToAI: string;
  }[];
}

export interface AppState {
  config: EventConfig;
  speakers: Speaker[];
  days: ScheduleDay[];
  activities: ScheduleActivity[];
  faqs: FAQItem[];
  content: SiteContent;
}
