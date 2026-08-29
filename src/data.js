// ============================================================
//  All your portfolio content lives here.
//  Edit this file to update text — no need to touch components.
//  Kept in sync with public/NgYiXuan_SoftwareEngineer.pdf
// ============================================================

export const profile = {
  name: 'Ng Yi Xuan',
  title: 'Software Engineer',
  tagline:
    'I learn by building. Whether it’s a warehouse system, an AI meeting platform, or a real-time multiplayer game platform, I’m happiest turning an idea into something that actually works.',
  location: 'Teriang, Pahang',
  email: 'ngngyongng@gmail.com',
  phone: '011-5955 8003',
  availability: 'Open to full-time Software Engineer roles from September 2026',
  resumeUrl: '/NgYiXuan_SoftwareEngineer.pdf', // drop your PDF into /public with this name
  socials: {
    github: 'https://github.com/Shuiweiqop',
    linkedin: 'https://www.linkedin.com/in/ng-yi-xuan-093633253/',
  },
}

export const about = {
  paragraphs: [
    "I’m a final-year Computer Science student at Universiti Malaysia Sabah (CGPA 3.51), currently interning as a Software Engineer at Godigital (Ean Label Industry), where I build full-stack features for a warehouse management system using Laravel, React, and Nuxt.js.",
    "What I enjoy most is taking an idea all the way to something people actually use. My final-year project is an adaptive Python learning platform spanning 264 routes and 68 migrations, where I implemented Bayesian Knowledge Tracing to model each student’s per-concept mastery. Outside coursework, I’ve built a real-time multiplayer game platform with a pluggable game-module architecture, and an AI meeting platform that transcribes recordings with Whisper and summarizes them with Gemini.",
    "I care about writing code that holds up — 338 automated tests on my FYP, CI pipelines on every push, and handling the edge cases that break in production. I’m graduating in November 2026 and available full-time from September 2026.",
  ],
}

export const projects = [
  {
    name: 'Web-Based Python Bootcamp',
    context: 'Final Year Project · 2025 – 2026',
    blurb:
      'A full-stack adaptive learning platform that teaches Python to beginners through lessons, coding exercises, gamification, and community features.',
    highlights: [
      'Built with Laravel, React, Inertia.js, and MySQL across 264 routes and 68 database migrations.',
      'Implemented Bayesian Knowledge Tracing to model per-concept mastery from student answers, extended with question-type and difficulty-weighted probabilities to measure learning gain against a placement baseline.',
      'Achieved 338 automated tests (PHPUnit, Vitest, Playwright) with CI on every push — caught and fixed a defect that silently corrupted the learning-gain baseline.',
      'Integrated the Gemini API for AI-assisted lesson authoring and automated concept tagging, and Judge0 for sandboxed Python execution.',
    ],
    tech: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Gemini API', 'Judge0', 'PHPUnit', 'Vitest', 'Playwright'],
    links: {
      github: null, // add repo link if public, or leave null for "available on request"
      demo: null,
    },
    featured: true,
  },
  {
    name: 'Playground: Real-Time Multiplayer Game Platform',
    context: 'Side Project · 2025',
    blurb:
      'An extensible real-time multiplayer game platform (Draw & Guess, Werewolf) built so that adding a new game takes one backend module, one frontend view, and one registry line.',
    highlights: [
      'Pluggable game-module architecture — a new game requires only one backend module, one frontend view, and one registry line.',
      'Server-authoritative model with per-player information hiding to prevent cheating; live game state synced over Socket.io with lobby, room codes, and host controls (kick / host-transfer).',
      'JWT auth with guest mode, and a storage layer using PostgreSQL (Supabase) in production or in-memory for local dev.',
      'Mahjong scoring engine supporting Hong Kong and Guobiao rules, with hand decomposition and tenpai detection.',
    ],
    tech: ['Node.js', 'Socket.io', 'JWT', 'PostgreSQL', 'Supabase', 'JavaScript'],
    links: {
      github: 'https://github.com/Shuiweiqop', // update to the exact repo
      demo: 'https://mahjong-app-bcu4.vercel.app/',
    },
    featured: true,
  },
  {
    name: 'Meeting AI Platform',
    context: 'Side Project · 2025',
    blurb:
      'AI-powered platform that turns meeting recordings into transcripts, summaries, key topics, and action items — built for people who don’t have the habit of taking notes.',
    highlights: [
      'Transcribes meetings with OpenAI Whisper and generates summaries, key topics, and action items using Gemini AI.',
      'Replaced polling with real-time updates via Laravel Reverb (WebSocket); Redis for caching and as the broadcast/queue driver to improve responsiveness under load.',
      'Containerized the full stack with Docker and docker-compose (Laravel, Redis, database) for reproducible environments; chunked file upload (5 MB slices) for large audio files.',
      'CI pipeline with GitHub Actions running 62 automated feature tests on every push.',
    ],
    tech: ['Laravel', 'Whisper', 'Gemini AI', 'Laravel Reverb', 'Redis', 'Docker', 'GitHub Actions'],
    links: {
      github: 'https://github.com/Shuiweiqop/meeting-ai-platform',
      demo: null,
    },
    featured: true,
  },
]

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Godigital — Ean Label Industry',
    period: 'Mar 2026 – Present',
    points: [
      'Leveraged AI-assisted tools (GitHub Copilot, Gemini) to accelerate development, engineering structured prompts to guide code generation while reviewing and refining all output to ensure quality and maintainability.',
      'Utilized Docker and docker-compose to set up consistent local development environments, streamlining the team setup process.',
      'Resolved historical inventory discrepancies via complex SQL data cleaning, achieving 100% stock accuracy in the Warehouse Management System.',
      'Modernized legacy interfaces into minimalist dashboards using React and Nuxt.js; integrated the company ERP and warehouse systems at the database and backend level using Laravel and MySQL, keeping data synchronized across both.',
      'Collaborated within a 5-member team to design and build the Warehouse Management System, contributing to architecture and feature decisions.',
      'Proposed and implemented a Finance reporting dashboard, adopted by the team, giving the Finance department real-time visibility into stock quantity, value, movement, and aging that was previously unavailable.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Nuxt.js', 'Inertia.js'] },
  { group: 'Backend', items: ['PHP', 'Laravel', 'Java', 'C++', 'REST API'] },
  { group: 'Database', items: ['MySQL', 'SQL', 'Redis'] },
  { group: 'Concepts', items: ['REST API', 'WebSocket (Laravel Reverb)', 'Automated Testing'] },
  { group: 'AI Tools', items: ['GitHub Copilot', 'Gemini AI', 'OpenAI Whisper', 'Prompt Engineering'] },
  { group: 'Tools', items: ['Docker', 'Git', 'Figma'] },
  { group: 'Languages', items: ['Malay (Native)', 'English (Fluent)', 'Mandarin (Fluent)'] },
]

export const education = {
  degree: 'BSc Computer Science (Hons) — Network Engineering',
  school: 'Universiti Malaysia Sabah',
  period: 'Expected Nov 2026',
  detail: 'CGPA: 3.51 · Available full-time from Sep 2026',
  coursework: [
    'Network Programming',
    'Cybersecurity',
    'Web Technology',
    'Cloud Computing',
    'Big Data Analytics',
    'Object-Oriented Programming',
    'System Analysis & Design',
  ],
}

// Certifications live in their own bar below the hero. The three CCNA modules are one track,
// so they're presented as a single credential rather than three separate ones.
export const certifications = [
  {
    issuer: 'Huawei',
    name: 'HCIA',
    modules: ['Datacom', 'Cloud Computing'],
  },
  {
    issuer: 'Cisco',
    name: 'CCNA',
    modules: [
      'Enterprise Networking, Security & Automation',
      'Switching, Routing & Wireless Essentials',
      'Introduction to Networks',
    ],
  },
]
