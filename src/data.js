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
    "What I enjoy most is taking an idea all the way to something people actually use. My final-year project is an adaptive Python learning platform — it tracks how well each student knows each concept, so the exercises it gives them can follow what they haven’t got yet instead of a fixed order. Outside coursework I’ve built a real-time multiplayer game platform, restructured so that adding a new game doesn’t mean rewriting the room and turn logic, and an AI meeting platform that turns a recording into a summary and a list of action items.",
    "I care about code that holds up after I stop looking at it. On my FYP that meant 338 tests running on every push, which is how I found a bug that was quietly corrupting the learning-gain baseline while still producing numbers that looked reasonable. I’m graduating in November 2026 and available full-time from September 2026.",
  ],
}

export const projects = [
  {
    name: 'Web-Based Python Bootcamp',
    context: 'Final Year Project · 2025 – 2026',
    blurb:
      'A full-stack adaptive learning platform that teaches Python to beginners through lessons, coding exercises, gamification, and community features.',
    highlights: [
      'Built with Laravel, React, Inertia.js and MySQL — it grew to 264 routes and 68 migrations because lessons, exercises, gamification and the community side each needed their own data model.',
      'Used Bayesian Knowledge Tracing to estimate how well a student knows each concept, updating after every answer. A plain correct-rate treats every question the same, so I weighted it by question type and difficulty, and measured each student’s gain against the placement test they sat at the start.',
      'Wrote 338 tests (PHPUnit, Vitest, Playwright) and ran them on every push. That caught a bug where the learning-gain baseline was being silently overwritten — the numbers still looked plausible, so nothing but a test would have found it.',
      'Lesson authoring and concept tagging go through the Gemini API so I didn’t have to hand-tag every exercise, and student code runs on Judge0 rather than my own server, since running arbitrary Python from users is not something I wanted to sandbox myself.',
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
      'A real-time multiplayer game platform (Draw & Guess, Werewolf) where the room, turn and player logic is shared, so each new game only has to describe its own rules.',
    highlights: [
      'Adding the second game meant copying half the first one, so I pulled the shared parts (rooms, turns, players) out into a common layer. A new game is now one backend module, one frontend view and one line in the registry.',
      'Kept game state on the server instead of the browser. In Werewolf the client would otherwise be able to read everyone’s roles, so each player only receives what their role is allowed to see.',
      'Socket.io keeps the room in sync, with room codes so friends can join without accounts, and host controls (kick, transfer host) because whoever opened the room needs a way to deal with someone who leaves mid-game.',
      'JWT auth with a guest mode, so you can try a game without signing up. Uses PostgreSQL on Supabase in production, with an in-memory fallback so the app still runs locally without setting up a database.',
      'Also wrote a Mahjong scorer that works out which scoring patterns a finished hand matches, under both Hong Kong and Guobiao rules.',
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
      'Whisper turns the recording into a transcript, then Gemini pulls out a summary, the key topics and the action items — the transcript alone is still too long for anyone to actually read after a meeting.',
      'Transcription takes minutes, so the page first polled the server for progress. That was wasteful and still felt slow, so I switched to Laravel Reverb over WebSocket and let the server push each stage as it finishes.',
      'Added Redis for caching and as the broadcast and queue driver, so transcription runs in a background worker instead of blocking the request the user is waiting on.',
      'Large audio uploads kept failing on request size limits, so the file is sliced into 5 MB chunks and reassembled server-side.',
      'The whole stack (Laravel, Redis, database) runs under docker-compose, so setting it up on another machine doesn’t mean reinstalling every service by hand. GitHub Actions runs 62 feature tests on every push.',
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
      'Part of a 5-person team building the Warehouse Management System, from architecture and feature decisions through to the code.',
      'The stock figures in the system had drifted from what was physically in the warehouse, so I traced the bad movement records back through the history and cleaned them up in SQL — stock counts now match at 100%.',
      'Rebuilt the legacy screens as simpler dashboards in React and Nuxt.js, and connected the company ERP to the warehouse system in Laravel and MySQL so the two stop holding different numbers for the same stock.',
      'Finance had no way to see stock value or aging without asking someone to pull it manually, so I proposed a reporting dashboard and built it. The team adopted it, and Finance can now see quantity, value, movement and aging directly.',
      'New team members were losing a day to environment setup, so I moved local development onto Docker and docker-compose.',
      'Use Copilot and Gemini to move faster on routine code, writing specific prompts rather than vague ones — but I read and rework everything they produce, since generated code tends to be plausible rather than correct.',
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
