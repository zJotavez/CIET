import { AppState, EventConfig, Speaker, ScheduleDay, ScheduleActivity, FAQItem, SiteContent } from '../types';

export const defaultConfig: EventConfig = {
  title: "III Congresso Internacional de Educação, Tecnologia e Desenvolvimento Humano",
  subtitle: "As Dores do Desenvolvimento Humano na Era da IA",
  themeDescription: "Um encontro internacional de alta relevância acadêmica para compreender como a inteligência artificial está transformando a educação, as relações humanas, o mercado de trabalho e o futuro da própria subjetividade humana.",
  detailedAbout: "O III Congresso Internacional de Educação, Tecnologia e Desenvolvimento Humano (CIETDH 2026) nasce da necessidade urgente de compreender as profundas transformações provocadas pela inteligência artificial. Durante três noites, renomados pesquisadores, educadores, profissionais e estudantes de diversos países estarão conectados para refletir sobre o impacto das novas tecnologias na educação, nas relações humanas, na ética, no conhecimento e na própria condição humana. Mais do que decifrar o funcionamento técnico dos algoritmos, o CIETDH nos convoca à reflexão essencial: quem estamos nos tornando diante do avanço da inteligência artificial?",
  dateRange: "15 a 17 de Setembro de 2026",
  timeString: "A partir das 19h",
  formatString: "100% Online",
  certificationText: "Certificação Internacional de 30 horas inclusa",
  registrationPrice: 49.90,
  originalPrice: 149.90,
  registrationLink: "https://www.even3.com.br/congresso-internacional-de-educacao-tecnologia-e-desenvolvimento-humano-747666/",
  countdownDate: "2026-09-15T19:00:00",
  showCountdown: true,
  participantsCount: 2450,
  speakersCount: 12,
  institutionsCount: 18,
  countriesCount: 6
};

export const defaultSpeakers: Speaker[] = [
  {
    id: "sp-nilson-caetano",
    name: "Nilson Caetano",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    videoUrl: "/Prof. Nilson.mp4",
    country: "Brasil",
    institution: "FUST",
    academicTitle: "Prof. Dr.",
    professionalTitle: "Professor Convidado",
    shortBio: "Doutor e professor da FUST, com vasta experiência em pesquisa sobre inovações educacionais e o avanço da tecnologia aplicada ao desenvolvimento humano.",
    fullBio: "O Prof. Dr. Nilson Caetano é Professor Convidado da FUST. Possui profunda atuação em pesquisa acadêmica e é um dos pilares da instituição na vanguarda do estudo de como as novas tecnologias, incluindo a inteligência artificial, devem ser integradas ao ambiente educacional para impulsionar o desenvolvimento humano sustentável e ético. Sua contribuição é de extrema importância para o avanço da tecnologia e da pesquisa acadêmica.",
    lectureTitle: "O Papel da Universidade no Avanço Tecnológico: Desafios e Oportunidades",
    topics: ["Educação", "Tecnologia", "Inovação"],
    quote: "A tecnologia verdadeira não é aquela que apenas automatiza tarefas, mas a que amplifica nossa capacidade de humanizar a educação.",
    displayLocations: ["hero", "featured_1", "grid"],
    featured: true,
    order: 1
  },
  {
    id: "sp-washington-luiz",
    name: "Washington Luiz",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    videoUrl: "/prof. Washington.mp4",
    country: "Brasil",
    institution: "FUST",
    academicTitle: "Prof. Dr.",
    professionalTitle: "Reitor e Professor Convidado",
    shortBio: "Reitor da FUST e professor convidado, lidera a integração de tecnologias disruptivas e a adaptação do currículo universitário para a era da inteligência artificial.",
    fullBio: "Como Reitor da universidade parceira FUST e Professor Convidado, o Prof. Dr. Washington Luiz está na liderança da revolução tecnológica educacional de nossa geração. Seu foco principal tem sido a inserção ética e prática de ecossistemas digitais para transformar não apenas a sala de aula, mas o desenvolvimento integral de líderes globais, reforçando a extrema qualidade e importância do pensamento crítico na vanguarda da tecnologia.",
    lectureTitle: "Liderança e Visão Estratégica na Era da Inteligência Artificial",
    topics: ["Liderança Global", "Tecnologia", "Desenvolvimento Humano"],
    quote: "Liderar na era digital exige mais do que compreensão técnica; exige a coragem de repensar a essência de como aprendemos e evoluímos juntos.",
    displayLocations: ["hero", "grid", "featured_2"],
    featured: true,
    order: 2
  },
  {
    id: "sp-clara-sterling",
    name: "Dra. Clara Sterling",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    country: "Estados Unidos",
    institution: "MIT Media Lab",
    academicTitle: "Dra.",
    professionalTitle: "Diretora do Grupo de Pesquisa em Interfaces Cognitivas e Aprendizagem Adaptativa",
    shortBio: "Especialista em design de interação humano-computador, investiga como os sistemas generativos de IA mudam os processos criativos e de resolução de problemas.",
    fullBio: "Dra. Clara Sterling leciona no MIT onde lidera projetos que desenvolvem ecossistemas educacionais mediados por inteligências artificiais éticas. Suas teses defendem o aprendizado simbiótico, no qual a IA atua como espelho socrático e provocadora de pensamento crítico, em vez de mera fornecedora de respostas prontas.",
    lectureTitle: "Sistemas de Respostas Rápidas e o Fim da Dúvida: Como Preservar a Investigação Socrática",
    topics: ["Tecnologia", "Educação", "Inteligência Artificial"],
    quote: "Se as respostas estão a um clique, o verdadeiro valor educacional migra totalmente para a capacidade de formular perguntas complexas e sustentar a dúvida.",
    displayLocations: ["hero", "featured_2", "grid"],
    featured: false,
    order: 3
  },
  {
    id: "sp-jean-pierre-girard",
    name: "Dr. Jean-Pierre Girard",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    country: "França",
    institution: "Sorbonne Université",
    academicTitle: "Prof. Dr.",
    professionalTitle: "Catedrático em Sociologia da Complexidade e Antropologia Digital",
    shortBio: "Estudioso proeminente da epistemologia complexa, é reconhecido internacionalmente pela reinterpretação contemporânea da obra de Edgar Morin.",
    fullBio: "O Dr. Jean-Pierre Girard trabalhou diretamente em colaboração com institutos de estudos complexos em Paris. Sua linha de pesquisa integra os 'Sete Saberes para a Educação do Futuro' às dinâmicas algorítmicas modernas, analisando como o reducionismo tecnológico de dados cega a humanidade para as incertezas globais.",
    lectureTitle: "Os Sete Saberes de Edgar Morin na Era dos Algoritmos: Uma Leitura Crítica da Complexidade",
    topics: ["Ética", "Educação", "Desenvolvimento Humano"],
    quote: "O maior risco da Inteligência Artificial não é a sua rebelião contra nós, mas sim aceitarmos passivamente sermos governados por uma lógica puramente calculista e binária.",
    displayLocations: ["featured_morin", "grid"],
    featured: true,
    order: 4
  },
  {
    id: "sp-camila-alencar",
    name: "Dra. Camila de Alencar",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    country: "Brasil",
    institution: "UNICAMP",
    academicTitle: "Dra.",
    professionalTitle: "Livre-Docente em Psicologia do Desenvolvimento e Saúde Mental",
    shortBio: "Pesquisadora focada em saúde mental infantojuvenil, conduz investigações sobre a prevalência de depressão e TDAH na era da mediação por telas e algoritmos.",
    fullBio: "Dra. Camila de Alencar é psicóloga clínica e pesquisadora associada na UNICAMP. Estuda os mecanismos de recompensa de dopamina acionados por redes de IA de alta retenção visual, e desenvolve programas de letramento digital e desintoxicação tecnológica ativa para redes escolares públicas e privadas.",
    lectureTitle: "A Fadiga Psíquica do Algoritmo: Ansiedade, Atenção Fragmentada e Isolamento Social na Juventude",
    topics: ["Desenvolvimento Humano", "Ética", "Educação"],
    quote: "A infância e a adolescência precisam de tédio construtivo e presença analógica. Substituir a exploração espontânea do mundo por trilhas algorítmicas é confinar a mente humana.",
    displayLocations: ["featured_2", "grid"],
    featured: false,
    order: 5
  },
  {
    id: "sp-kenji-tanaka",
    name: "Dr. Kenji Tanaka",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    country: "Japão",
    institution: "University of Tokyo",
    academicTitle: "Dr.",
    professionalTitle: "Ph.D. em Engenharia de Computação e Sistemas Robóticos Empáticos",
    shortBio: "Desenvolvedor de sistemas conversacionais avançados, dedica-se a projetar modelos de IA que respeitam e se adaptam aos limites éticos e de fadiga mental humana.",
    fullBio: "O Dr. Kenji Tanaka é pesquisador sênior em Tóquio. Suas criações buscam contrapor a 'IA extrativa' por meio de conceitos de 'Tecnologia Humana de Baixo Atrito'. Ele estuda o surgimento de vínculos de apego parassocial entre idosos e agentes autônomos de conversação no Japão.",
    lectureTitle: "Empatia Sintética: Os Perigos e Potenciais das Relações Afetivas com Agentes de IA Autônomos",
    topics: ["Tecnologia", "Inteligência Artificial", "Futuro"],
    quote: "O maior simulacro da atualidade é simular empatia. Uma máquina que simula afeto sem possuir consciência não resolve nossa solidão; na verdade, ela a institucionaliza.",
    displayLocations: ["featured_2", "grid"],
    featured: false,
    order: 6
  }
];

export const defaultDays: ScheduleDay[] = [
  {
    id: "day-1",
    date: "2026-09-15",
    title: "DIA 01",
    description: "Abertura Oficial e Complexidade",
    dateFormatted: "15 de Setembro"
  },
  {
    id: "day-2",
    date: "2026-09-16",
    title: "DIA 02",
    description: "Educação, Cognição e Efeitos Práticos",
    dateFormatted: "16 de Setembro"
  },
  {
    id: "day-3",
    date: "2026-09-17",
    title: "DIA 03",
    description: "Ética, Saúde Mental e o Futuro Humano",
    dateFormatted: "17 de Setembro"
  }
];

export const defaultActivities: ScheduleActivity[] = [
  {
    id: "act-1-1",
    dayId: "day-1",
    startTime: "19:00",
    endTime: "21:30",
    title: "Solenidade de Abertura",
    description: "Solenidade Oficial de Abertura e a homenagem a Edgar Morin foco os \"Sete saberes para a educação do futuro\", com a possibilidade de realizar uma homenagem por parte da instituição",
    type: "Palestra",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 1
  },
  {
    id: "act-2-1",
    dayId: "day-2",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 1: Produção Editorial Religiosa com Ferramentas Digitais",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 1
  },
  {
    id: "act-2-2",
    dayId: "day-2",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 2: Sustentabilidade do conhecimento na era digital: produção, preservação e disseminação do saber",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 2
  },
  {
    id: "act-2-3",
    dayId: "day-2",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 3: Metodologias Ativas e Tecnologias Digitais na Educação Básica: práticas inovadoras para o desenvolvimento humano",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 3
  },
  {
    id: "act-2-4",
    dayId: "day-2",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 4: Inteligência artificial, como ferramenta no processo educativo",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 4
  },
  {
    id: "act-2-5",
    dayId: "day-2",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 5: Torne positiva a sua vida negativa, a fim de ser mais saudável e feliz",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 5
  },
  {
    id: "act-2-6",
    dayId: "day-2",
    startTime: "14:30",
    endTime: "17:00",
    title: "Mesas Redondas: Algoritmo Inteligente e Transformação Contemporânea",
    description: "",
    type: "Mesa-Redonda",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 6
  },
  {
    id: "act-2-7",
    dayId: "day-2",
    startTime: "19:00",
    endTime: "21:00",
    title: "Palestra: Entre Algoritmos, Bioética e Religiosidade : Desafios para o Desenvolvimento Humano na era da inteligência artificial",
    description: "",
    type: "Palestra",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 7
  },
  {
    id: "act-3-1",
    dayId: "day-3",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 1: Produção Editorial Religiosa com Ferramentas Digitais",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 1
  },
  {
    id: "act-3-2",
    dayId: "day-3",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 2: Sustentabilidade do conhecimento na era digital: produção, preservação e disseminação do saber",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 2
  },
  {
    id: "act-3-3",
    dayId: "day-3",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 4: Inteligência artificial, como ferramenta no processo educativo",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 3
  },
  {
    id: "act-3-4",
    dayId: "day-3",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso 5: Torne positiva a sua vida negativa, a fim de ser mais saudável e feliz",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 4
  },
  {
    id: "act-3-5",
    dayId: "day-3",
    startTime: "09:00",
    endTime: "12:00",
    title: "Mini Curso: Metodologias Ativas e Tecnologias Digitais na Educação Básica: práticas inovadoras para o desenvolvimento humano",
    description: "",
    type: "Minicurso",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 5
  },
  {
    id: "act-3-6",
    dayId: "day-3",
    startTime: "14:30",
    endTime: "17:00",
    title: "Mesa-Redonda: Espiritualidade Digital e os Novos Espaços do Sagrado",
    description: "",
    type: "Mesa-Redonda",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 6
  },
  {
    id: "act-3-7",
    dayId: "day-3",
    startTime: "19:00",
    endTime: "21:00",
    title: "Palestra: Saídas para as dores do Desenvolvimento Humano na contemporaneidade: Como integrar a Inteligência Artificial, o Meio Ambiente, a Saúde Emocional e a Espiritualidade na Educação do mundo",
    description: "",
    type: "Palestra",
    location: "Online",
    speakerIds: [],
    status: "active",
    order: 7
  }
];

export const defaultFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "O evento será 100% online?",
    answer: "Sim. O III CIETDH 2026 será transmitido inteiramente de forma digital, em plataforma interativa e dedicada. Os inscritos receberão o link de acesso exclusivo por e-mail antes do início do congresso.",
    category: "Geral"
  },
  {
    id: "faq-2",
    question: "Quando acontecerá o CIETDH 2026?",
    answer: "De 15 a 17 de Setembro de 2026. A programação principal das noites começa a partir das 19:00 (Horário de Brasília).",
    category: "Geral"
  },
  {
    id: "faq-3",
    question: "Como funciona a Certificação Internacional?",
    answer: "O evento oferece certificado internacional de participação com carga horária de 30 horas complementares acadêmicas. O certificado é emitido de forma oficial em formato digital, válido para faculdades, seleções de mestrado, doutorado e progressão funcional de professores.",
    category: "Certificado"
  },
  {
    id: "faq-4",
    question: "As transmissões ficarão gravadas para assistir depois?",
    answer: "Sim! Todos os participantes com inscrição confirmada terão acesso exclusivo às gravações integrais de todas as palestras e debates por até 6 meses após o término do evento, permitindo revisar e consolidar o conhecimento.",
    category: "Acesso"
  },
  {
    id: "faq-5",
    question: "Qual o valor da inscrição e como posso pagar?",
    answer: "O lote promocional atual está por apenas R$ 49,90 (desconto exclusivo antecipado). O pagamento é realizado com segurança na plataforma oficial Even3, aceitando PIX, cartões de crédito (com parcelamento) ou boleto bancário.",
    category: "Inscrição"
  },
  {
    id: "faq-6",
    question: "Preciso enviar trabalhos científicos para participar?",
    answer: "Não! A submissão de artigos científicos é totalmente opcional. Você pode participar como ouvinte pleno de todas as noites de congresso, participar das discussões em tempo real nos fóruns de chat e receber seu certificado normalmente.",
    category: "Inscrição"
  }
];

export const defaultContent: SiteContent = {
  morinSectionTitle: "Uma homenagem ao pensamento que nos ensinou a compreender a complexidade.",
  morinSectionSubtitle: "Edgar Morin e os Sete Saberes para a Educação do Futuro",
  morinSectionText: "A Solenidade Oficial de Abertura do CIETDH 2026 será profundamente marcada por uma homenagem histórica à inestimável contribuição intelectual do filósofo e sociólogo Edgar Morin. Seu pensamento sobre a epistemologia da complexidade, a compreensão profunda, a transdisciplinaridade e a própria condição humana dialoga diretamente com os enormes abismos éticos e estruturais de uma sociedade radicalmente transformada pela onipresença dos sistemas generativos de inteligência artificial.",
  morinDetails: "Solenidade Oficial de Abertura e Homenagem Acadêmica",
  morinTime: "15 de Setembro de 2026 — das 19h às 21h30",
  saberes: [
    {
      id: "saber-1",
      number: "01",
      title: "As cegueiras do conhecimento: o erro e a ilusão",
      description: "A educação deve mostrar que todo conhecimento corre o risco do erro e da ilusão.",
      connectionToAI: "Na era da IA, as alucinações de modelos e o viés algorítmico criam um simulacro de verdade inquestionável. Educar hoje exige decifrar as ilusões de objetividade geradas por sistemas computacionais."
    },
    {
      id: "saber-2",
      number: "02",
      title: "Os princípios do conhecimento pertinente",
      description: "A necessidade de promover o conhecimento capaz de apreender os problemas globais em seu contexto.",
      connectionToAI: "A inteligência artificial opera por fragmentação e hiper-especialização de dados isolados. O verdadeiro conhecimento pertinente deve religar o tecnológico ao ecológico, social e biológico."
    },
    {
      id: "saber-3",
      number: "03",
      title: "Ensinar a condição humana",
      description: "O ser humano é simultaneamente físico, biológico, psíquico, cultural, social e histórico.",
      connectionToAI: "Ao reduzirmos o humano a dados comportamentais analisados por algoritmos, fragmentamos a nossa essência multidimensional. Devemos reafirmar nossa condição existencial e indomável."
    },
    {
      id: "saber-4",
      number: "04",
      title: "Ensinar a identidade terrena",
      description: "A comunidade de destino comum que une todos os seres humanos neste planeta.",
      connectionToAI: "A infraestrutura da IA consome quantidades colossais de água e energia, aprofundando a crise ecológica. Ensinar a identidade terrena é lembrar que as nuvens digitais dependem do solo físico que habitamos."
    },
    {
      id: "saber-5",
      number: "05",
      title: "Enfrentar as incertezas",
      description: "Navegar em um oceano de incertezas por meio de arquipélagos de certezas.",
      connectionToAI: "A IA é vendida como promessa de predição absoluta, tentando eliminar a incerteza existencial. No entanto, a verdadeira sabedoria reside em abraçar e navegar construtivamente no imponderável."
    },
    {
      id: "saber-6",
      number: "06",
      title: "Ensinar a compreensão",
      description: "A compreensão mútua entre humanos, tanto próximos quanto distantes, é vital.",
      connectionToAI: "Algoritmos de recomendação geram bolhas de confirmação e polarização social severa, destruindo a alteridade. Ensinar a compreensão na era digital é recompor a escuta profunda e o diálogo real."
    },
    {
      id: "saber-7",
      number: "07",
      title: "A ética do gênero humano",
      description: "A relação de circuito entre indivíduo, sociedade e espécie — a antropo-ética.",
      connectionToAI: "Quem governa as regras éticas da IA? Corporações privadas de tecnologia ou o interesse da humanidade? Exige-se uma democracia cognitiva global onde a ética do gênero humano prevaleça sobre o lucro."
    }
  ]
};

export const defaultState: AppState = {
  config: defaultConfig,
  speakers: defaultSpeakers,
  days: defaultDays,
  activities: defaultActivities,
  faqs: defaultFAQs,
  content: defaultContent
};
