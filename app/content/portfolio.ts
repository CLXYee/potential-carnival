export type WorkGroup = 'Projects' | 'Hackathons';

export type WorkEntry = {
  id: string;
  group: WorkGroup;
  title: string;
  period: string;
  summary: string;
  detail: string;
  result: string;
  resumeBullets?: string[];
  includeOnResume?: boolean;
  technologies: string[];
  previewImage: string | null;
  previewImages?: string[];
  previewFit?: 'cover' | 'contain';
  previewCredit?: { label: string; href: string };
  previewLabel: string;
  tone: 'aqua' | 'coral' | 'green';
  links?: { label: string; href: string }[];
};

export const portfolioMedia = {
  portrait: { src: '/images/xin-yee-portrait.jpg' as string | null, label: 'Portrait of Xin Yee' },
  frenchExchange: { src: '/images/french-exchange.png' as string | null, label: 'French language winter exchange in Besançon' },
  internship: { src: '/images/sarc-internship.jpg' as string | null, label: 'Research Engineer Intern at SaRC' },
  debate: { src: '/images/debate-tournament.jpg' as string | null, label: 'Asia-Pacific Intervarsity Chinese Debate Tournament' },
};

export const workEntries: WorkEntry[] = [
  {
    id: 'writing-quality',
    group: 'Projects',
    title: 'Linking Writing Processes to Writing Quality (Kaggle Machine Learning Project)',
    period: 'Jan 2026 - Apr 2026',
    summary: 'Predicted essay scores from anonymised keystroke and mouse interaction logs using boosted-tree models.',
    detail: 'Preprocessed anonymised keystroke and mouse interaction logs and trained LightGBM, CatBoost, and ExtraTrees models to predict essay scores. Combined model predictions through ensemble learning.',
    result: 'Team ranked 134 of 1,876 teams (top 7.14%) on the Kaggle public leaderboard.',
    resumeBullets: [
      'Preprocessed anonymised keystroke and mouse interaction logs and trained LightGBM, CatBoost, and ExtraTrees models to predict essay scores.',
      'Combined model predictions through ensemble learning, contributing to a team ranking of 134 out of 1,876 teams (top 7.14%) on the Kaggle public leaderboard.',
    ],
    technologies: ['Python', 'LightGBM', 'CatBoost', 'ExtraTrees', 'Ensemble learning'],
    previewImage: '/images/writing-quality-kaggle.png',
    previewLabel: 'Writing-process model preview',
    tone: 'aqua',
    links: [{ label: 'Kaggle competition', href: 'https://www.kaggle.com/competitions/59291' }],
  },
  {
    id: 'flower-recognition',
    group: 'Projects',
    title: 'Deep Learning for Flower Recognition',
    period: 'Jan 2026 - Apr 2026',
    summary: 'Benchmarked ten CNN, vision transformer, and YOLO-based models on Oxford Flowers 102 with ten training images per class.',
    detail: 'Compared training from scratch, transfer learning, and MixUp augmentation in a unified training and evaluation pipeline, identifying architecture-dependent effects of MixUp.',
    result: 'Best result: 97.7% top-1 accuracy with ViT-Base.',
    resumeBullets: [
      'Benchmarked ten models spanning CNNs, vision transformers, and a YOLO-based classifier on Oxford Flowers 102 with only 10 training images per class, using a unified training and evaluation pipeline.',
      'Compared training from scratch, transfer learning, and MixUp augmentation, achieving a best 97.7% top-1 accuracy with ViT-Base and identifying architecture-dependent effects of MixUp.',
    ],
    technologies: ['CNNs', 'Vision transformers', 'YOLO', 'MixUp', 'Oxford Flowers 102'],
    previewImage: '/images/flower-recognition.jpg',
    previewLabel: 'Flower recognition model preview',
    tone: 'coral',
  },
  {
    id: 'robotic-car',
    group: 'Projects',
    title: 'Autonomous Robotic Car Project',
    period: 'Jan 2026 - Apr 2026',
    summary: 'Collaborated on a Raspberry Pi-based autonomous car integrating hardware and software components.',
    detail: 'Prepared image datasets and trained, evaluated, and deployed a YOLOv5 model for real-time image recognition.',
    result: 'Deployed YOLOv5 for real-time image recognition.',
    resumeBullets: [
      'Collaborated with a multidisciplinary team to design and integrate a Raspberry Pi-based system connecting hardware and software components for an autonomous robotic car.',
      'Prepared image datasets and trained, evaluated, and deployed a YOLOv5 model for real-time image recognition.',
    ],
    technologies: ['Raspberry Pi', 'Python', 'YOLOv5', 'Computer vision'],
    previewImage: null,
    previewImages: [
      '/images/robot-car-sample-1.jpg',
      '/images/robot-car-sample-2.jpg',
      '/images/robot-car-sample-3.jpg',
      '/images/robot-car-sample-4.jpg',
    ],
    previewCredit: {
      label: 'Sample frames from Roboflow Universe · CC BY 4.0',
      href: 'https://universe.roboflow.com/mdp-image-reg/mdp-2026-lqcvy',
    },
    previewLabel: 'Autonomous robotic car preview',
    tone: 'green',
    links: [
      { label: 'Video presentation', href: 'https://youtu.be/aycicuL_ivo?si=OBEtCIt_wRJtbxcm' },
      { label: 'Roboflow annotator', href: 'https://app.roboflow.com/mdp-image-reg/mdp-2026-lqcvy/annotate' },
    ],
  },
  {
    id: 'hawker-stalk',
    group: 'Projects',
    title: 'Hawker Stalk (Hawker Stall Recommendation Platform)',
    period: 'Aug 2024 - Nov 2024',
    summary: 'Built a full-stack platform for hawker stall discovery and user reviews.',
    detail: 'Designed database and backend services supporting location-based recommendations, stall registration, and interactive ratings and reviews.',
    result: 'Location-based recommendations, stall registration, ratings, and reviews.',
    resumeBullets: [
      'Built a full-stack hawker stall recommendation platform using HTML, CSS, JavaScript, PHP, and Azure SQL Database for stall discovery and user reviews.',
      'Designed database and backend services supporting location-based recommendations, stall registration, and interactive ratings and reviews.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Azure SQL Database'],
    previewImage: '/images/hawker-stalk-logo.png',
    previewFit: 'contain',
    previewLabel: 'Hawker Stalk interface preview',
    tone: 'coral',
    links: [{ label: 'GitHub repository', href: 'https://github.com/Paier05/SC2006_Project_Assignment' }],
  },
  {
    id: 'hospital-management',
    group: 'Projects',
    title: 'Text-Based Hospital Management System',
    period: 'Aug 2024 - Nov 2024',
    summary: 'Developed a Java system for hospital appointments, billing, and staff management.',
    detail: 'Focused on modular design and scheduling algorithms to optimize resource allocation and reduce workflow bottlenecks.',
    result: 'Scheduling algorithms support resource allocation across hospital workflows.',
    resumeBullets: [
      'Developed a scalable Java-based system for automating hospital operations, including appointments, billing, and staff management.',
      'Focused on modular design and scheduling algorithms to optimize resource allocation and reduce workflow bottlenecks.',
    ],
    technologies: ['Java', 'Modular design', 'Scheduling algorithms'],
    previewImage: '/images/hospital-management.jpg',
    previewLabel: 'Hospital management system preview',
    tone: 'aqua',
    links: [{ label: 'GitHub repository', href: 'https://github.com/CLXYee/SC2002_SCSF_Group1_HMS' }],
  },
  {
    id: 'block-puzzle',
    group: 'Projects',
    title: 'Block-Pushing Puzzle Solver and Search Algorithm Benchmarking',
    period: 'Jan 2024 - Apr 2024',
    summary: 'Implemented seven search algorithms to solve a block-pushing puzzle under path constraints.',
    detail: 'Benchmarked BFS, DFS, A*, and four other search algorithms. Evaluated nodes explored and move efficiency to highlight algorithmic trade-offs.',
    result: 'Compared seven algorithms by nodes explored and move efficiency.',
    technologies: ['Python', 'BFS', 'DFS', 'A*', 'Search algorithms'],
    includeOnResume: false,
    previewImage: '/images/block-pushing-puzzle.png',
    previewLabel: 'Block-pushing puzzle preview',
    tone: 'green',
  },
  {
    id: 'apicdt-timer',
    group: 'Projects',
    title: '12th Asia-Pacific Intervarsity Chinese Debate Tournament Official Timer',
    period: 'Jul 2025',
    summary: 'Developed the official tournament timer as part of my work as chairperson.',
    detail: 'The timer was used to keep time during competition rounds.',
    result: 'Used for competition timekeeping.',
    technologies: [],
    previewImage: '/images/timer.png',
    previewLabel: 'Official tournament timer interface',
    tone: 'aqua',
    includeOnResume: false,
    links: [
      { label: 'Access timer', href: 'https://apicdt-timer.vercel.app/' },
      { label: 'GitHub repository', href: 'https://github.com/CLXYee/APICDT-Timer' },
    ],
  },
  {
    id: 'green-future',
    group: 'Hackathons',
    title: 'Finalist, Asian Hackathon for Green Future 2026 (Top 30 of 439 teams)',
    period: 'May 2026 - Jul 2026',
    summary: 'Developed an AI-assisted PM2.5 monitoring and forecasting platform for Hanoi government use.',
    detail: 'Integrated open weather and human activity data into the air-quality monitoring and forecasting platform.',
    result: 'Finalist: top 30 of 439 teams. Forecast RMSE: 6.7 µg/m³.',
    resumeBullets: [
      'Developed an AI-assisted PM2.5 monitoring and forecasting platform for Hanoi government use, integrating open weather and human activity data and achieving a forecast RMSE of 6.7 µg/m³.',
    ],
    technologies: ['AI-assisted forecasting', 'PM2.5', 'Weather data', 'Human activity data'],
    previewImage: '/images/hackathon-green-future.jpg',
    previewLabel: 'Air-quality forecasting preview',
    tone: 'aqua',
  },
  {
    id: 'uaited',
    group: 'Hackathons',
    title: 'Finalist, UAiTED Innovation Competition 2025 (Top 6, NextGen Innovator)',
    period: 'Mar 2025 - Aug 2025',
    summary: 'Built a CNN-based medical waste classification system to support disposal sorting.',
    detail: 'Designed the classifier to distinguish six medical waste categories for disposal sorting.',
    result: 'Finalist: top 6, NextGen Innovator. 95% accuracy across six waste categories.',
    resumeBullets: [
      'Built a CNN-based medical waste classification system to support disposal sorting, achieving 95% accuracy across six waste categories.',
    ],
    technologies: ['CNN', 'Image classification', 'Medical waste sorting'],
    previewImage: '/images/hackathon-uaited.jpg',
    previewLabel: 'Medical waste classifier preview',
    tone: 'coral',
  },
  {
    id: 'women-in-tech',
    group: 'Hackathons',
    title: 'Finalist, NTU Women in Tech Hackathon 2025',
    period: 'Feb 2025 - Feb 2025',
    summary: 'Developed an AI-powered learning platform for undergraduate course discovery.',
    detail: 'Integrated GPT-4o mini to provide chatbot-based recommendations for suitable courses.',
    result: 'Course discovery through GPT-4o mini chatbot recommendations.',
    resumeBullets: [
      'Developed an AI-powered learning platform integrating GPT-4o mini to help undergraduate students discover suitable courses through chatbot-based recommendations.',
    ],
    technologies: ['GPT-4o mini', 'AI chatbot', 'Course recommendations'],
    previewImage: '/images/hackathon-women-in-tech.jpg',
    previewLabel: 'Learning platform preview',
    tone: 'green',
  },
];