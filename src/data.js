// ============================================================
//  All your portfolio content lives here.
//  Edit this file to update text — no need to touch components.
// ============================================================

export const profile = {
  name: 'Ng Yi Xuan',
  title: 'Software Engineer',
  tagline:
    'I learn by building. Whether it’s a warehouse system, an AI meeting platform, or a real-time multiplayer game, I’m happiest turning an idea into something that actually works.',
  location: 'Pahang, Malaysia',
  email: 'ngngyongng@gmail.com',
  availability: 'Open to full-time Software Engineer roles from September 2026',
  resumeUrl: '/NgYiXuan_SoftwareEngineer.pdf', // drop your PDF into /public with this name
  socials: {
    github: 'https://github.com/Shuiweiqop',
    linkedin: 'https://www.linkedin.com/in/ng-yi-xuan-093633253/',
  },
}

export const about = {
  paragraphs: [
    "I’m a final-year Computer Science student at Universiti Malaysia Sabah (CGPA 3.51), currently interning as a Web Developer at Ean Label Industry, where I build full-stack features for a warehouse management system using Laravel, React, and Nuxt.js.",
    "What I enjoy most is taking an idea all the way to something people actually use. My final-year project is a full-stack learning platform with 12 modules and 257 routes — building it at that scale taught me a lot about structuring a large codebase. Outside of coursework, I’ve built an AI meeting platform that transcribes recordings with Whisper and summarizes them with Gemini over real-time WebSockets, and a real-time multiplayer Mahjong game using Socket.io.",
    "I care about writing code that holds up — automated tests, CI pipelines, and handling the edge cases that break in production. I’m graduating in November 2026 and available full-time from September 2026.",
  ],
}

export const projects = [
  {
    name: 'Meeting AI Platform',
    blurb:
      'AI-powered platform that turns meeting recordings into transcripts, summaries, and action items — built for people who don’t have the habit of taking notes.',
    highlights: [
      'Real-time pipeline updates via WebSocket (Laravel Reverb) + Redis, replacing inefficient polling — with a fallback poll for resilience when connections drop.',
      'Chunked file upload (5MB slices) to handle large audio files reliably without timeouts.',
      'Full stack containerized with Docker (Laravel + Redis + MySQL) for reproducible environments.',
      'CI pipeline with GitHub Actions running 62 automated feature tests on every push.',
    ],
    tech: ['Laravel', 'React/Inertia', 'Whisper', 'Gemini', 'Laravel Reverb', 'Redis', 'Docker', 'GitHub Actions'],
    links: {
      github: 'https://github.com/Shuiweiqop/meeting-ai-platform',
      demo: null,
    },
    featured: true,
  },
  {
    name: 'Real-Time Multiplayer Mahjong',
    blurb:
      'A real-time multiplayer Mahjong game supporting up to 4 simultaneous players, with all game logic handled server-side.',
    highlights: [
      'Bidirectional event-driven communication between clients and server using Socket.io.',
      'Decoupled architecture: JavaScript/HTML5/CSS3 client with a Node.js + Express server.',
      'Server-side game state synchronization — turn management, tile distribution, and win-condition logic.',
    ],
    tech: ['JavaScript', 'Socket.io', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Vercel'],
    links: {
      github: 'https://github.com/Shuiweiqop', // update to the exact repo
      demo: null, // add your Vercel live demo URL here
    },
    featured: true,
  },
  {
    name: 'Web-Based Python Bootcamp (Final Year Project)',
    blurb:
      'A full-stack Learning Management System (LMS) that teaches Python to beginners through lessons, coding exercises, quizzes, rewards, and adaptive learning paths.',
    highlights: [
      'Built with Laravel, React, MySQL, and Inertia.js across 12 modules.',
      'Designed a normalized database schema and 257 application routes.',
      'Modular frontend components with clean separation of concerns.',
    ],
    tech: ['Laravel', 'React', 'Inertia.js', 'MySQL'],
    links: {
      github: null, // add repo link if public, or leave null for "available on request"
      demo: null,
    },
    featured: false,
  },
]

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Godigital — Ean Label Industry',
    period: 'Mar 2026 – Present',
    points: [
      'Resolved historical inventory discrepancies through complex SQL data cleaning, achieving 100% stock accuracy in the Warehouse Management System.',
      'Proposed and implemented a Finance reporting dashboard — adopted by the team — giving the Finance department real-time visibility into stock quantity, value, movement, and aging that was previously unavailable.',
      'Modernized legacy interfaces into clean, minimalist dashboards using React and Nuxt.js.',
      'Built database synchronization logic between ECAPS and warehouse systems with Laravel and MySQL.',
      'Accelerated development ~50% on repetitive tasks by integrating AI-assisted workflows (GitHub Copilot, Gemini).',
      'Collaborated within a 5-member team, contributing to architecture and feature decisions.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Nuxt.js', 'Inertia.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'] },
  { group: 'Backend', items: ['PHP', 'Laravel', 'Java', 'C++', 'REST API'] },
  { group: 'Database', items: ['MySQL', 'SQL', 'Redis'] },
  { group: 'DevOps', items: ['Docker', 'docker-compose', 'Git', 'GitHub Actions (CI/CD)'] },
  { group: 'Concepts', items: ['REST API', 'WebSocket (Laravel Reverb)', 'Automated Testing'] },
  { group: 'AI Tools', items: ['OpenAI Whisper', 'Gemini AI', 'GitHub Copilot', 'Prompt Engineering'] },
]

export const education = {
  degree: 'BSc Computer Science (Hons) — Network Engineering',
  school: 'Universiti Malaysia Sabah',
  period: 'Expected Nov 2026',
  detail: 'CGPA: 3.51 · Available full-time from Sep 2026',
  certs: [
    'Huawei HCIA — Datacom & Cloud Computing',
    'CCNA: Enterprise Networking, Security & Automation',
    'CCNA: Switching, Routing & Wireless Essentials',
    'CCNA: Introduction to Networks',
  ],
}
