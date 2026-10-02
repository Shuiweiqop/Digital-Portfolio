// ============================================================
//  All your portfolio content lives here.
//  Edit this file to update text. No need to touch components.
//  Kept in sync with public/NgYiXuan_SoftwareEngineer.pdf
// ============================================================

export const profile = {
  name: 'Ng Yi Xuan',
  title: 'Software Engineer',
  tagline:
    'I learn by building. Whether it’s a warehouse system, an AI meeting platform, or a real-time multiplayer game platform, I’m happiest turning an idea into something that actually works.',
  location: 'Triang, Pahang (relocating to Kuala Lumpur)',
  email: 'yixuanmichealng@gmail.com',
  phone: '011-5955 8003',
  availability: 'Open to full-time Software Engineer roles from December 2026',
  resumeUrl: '/NgYiXuan_SoftwareEngineer.pdf', // drop your PDF into /public with this name
  socials: {
    github: 'https://github.com/Shuiweiqop',
    linkedin: 'https://www.linkedin.com/in/ng-yi-xuan-093633253/',
  },
}

export const about = {
  paragraphs: [
    "I’m a final-year Computer Science student at Universiti Malaysia Sabah (CGPA 3.51). I completed a six-month software engineering internship (Mar to Aug 2026) at Go Digital & Automation, placed at EAN Label Industry, where I worked on a warehouse management system with Laravel, React and Nuxt.js.",
    "What I enjoy most is taking an idea all the way to something people actually use. My final-year project is an adaptive Python learning platform that tracks how well each student knows each concept, so the exercises it gives them can follow what they haven’t got yet instead of a fixed order. Outside coursework I’ve built a real-time multiplayer game platform, restructured so that adding a new game doesn’t mean rewriting the room and turn logic, and an AI meeting platform that turns a recording into a summary and a list of action items. I also built a RAG system that answers networking exam questions, then turned its retrieval into an agent tool and an MCP server.",
    "I care about code that holds up after I stop looking at it. On my FYP that meant 338 tests running on every push, which is how I found two bugs that were quietly corrupting the learning-gain figures while still producing numbers that looked reasonable. I’m graduating in November 2026 and available full-time from December 2026.",
  ],
}

export const projects = [
  {
    name: 'Web-Based Python Bootcamp',
    context: '2025 – 2026',
    blurb:
      'A full-stack adaptive learning platform that teaches Python to beginners through lessons, coding exercises, gamification, and community features.',
    highlights: [
      {
        what: 'Laravel, React and MySQL across 264 routes and 68 migrations',
        why: 'Lessons, coding exercises, quizzes, gamification and the community side each needed their own data model, which is how it grew to that size.',
      },
      {
        what: 'Bayesian Knowledge Tracing to track per-concept mastery',
        why: 'It estimates how well a student knows each concept and updates after every answer. A plain correct-rate treats every question the same, so I weighted it by question type and difficulty, and measured each student’s gain against the placement test they sat at the start.',
      },
      {
        what: '338 tests (PHPUnit, Vitest, Playwright) running on every push',
        why: 'They caught two separate bugs in the learning-gain figures. One double-counted attempts, the other overwrote the placement baseline. Both still produced plausible-looking numbers, so nothing but a test would have found them.',
      },
      {
        what: 'Gemini API for lesson authoring, Judge0 for running student code',
        why: 'Gemini drafts lessons and tags concepts so I didn’t have to hand-tag every exercise. Student code runs in a Judge0 sandbox so it cannot touch the server.',
      },
    ],
    tech: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Gemini API', 'Judge0', 'PHPUnit', 'Vitest', 'Playwright'],
    links: {
      github: 'https://github.com/Shuiweiqop/Web-Based-Python-Bootcamp-project',
      demo: null,
    },
    featured: true,
    fyp: true,
  },
  {
    name: 'Playground: Real-Time Multiplayer Game Platform',
    context: '2025',
    blurb:
      'A real-time multiplayer game platform (Draw & Guess, Werewolf) where the room, turn and player logic is shared, so each new game only has to describe its own rules.',
    highlights: [
      {
        what: 'Game state lives on the server, not the browser',
        why: 'In Werewolf the client would otherwise be able to read everyone’s roles, so each player only receives what their role is allowed to see.',
      },
      {
        what: 'Adding a game takes one module and one registry line',
        why: 'Adding the second game meant copying half the first one, so I pulled the shared parts (rooms, turns, players) out into a common layer. A new game is now one backend module, one frontend view and one line in the registry.',
      },
      {
        what: 'Socket.io for live sync, room codes, host controls',
        why: 'Room codes let friends join without making an account. Host controls (kick, transfer host) exist because whoever opened the room needs a way to deal with someone who leaves mid-game.',
      },
      {
        what: 'JWT auth with guest mode, PostgreSQL on Supabase',
        why: 'Guest mode means you can try a game without signing up. There is an in-memory fallback so the app still runs locally without setting up a database.',
      },
      {
        what: 'Mahjong scorer for Hong Kong and Guobiao rules',
        why: 'It works out which scoring patterns a finished hand matches.',
      },
    ],
    tech: ['Node.js', 'Express', 'Socket.io', 'JWT', 'PostgreSQL', 'Supabase', 'JavaScript'],
    links: {
      github: 'https://github.com/Shuiweiqop/mahjong-app',
      demo: 'https://playground-drawguess.vercel.app/',
    },
    featured: true,
  },
  {
    name: 'Meeting AI Platform',
    context: '2025',
    blurb:
      'AI-powered platform that turns meeting recordings into transcripts, summaries, key topics, and action items. Built for people who don’t have the habit of taking notes.',
    highlights: [
      {
        what: 'Whisper for transcription, Gemini for the summary',
        why: 'Whisper turns the recording into a transcript, then Gemini pulls out a summary, the key topics and the action items. The transcript alone is still too long for anyone to actually read after a meeting.',
      },
      {
        what: 'Live progress over WebSocket, with a polling fallback',
        why: 'Transcription takes minutes, so the page first polled the server for progress. That was wasteful and still felt slow, so I switched to Laravel Reverb and let the server push each stage as it finishes. Reverb still drops the connection quietly now and then, so a 15 second check runs alongside it and the page recovers on its own.',
      },
      {
        what: 'Redis as cache, broadcast and queue driver',
        why: 'Transcription runs in a background worker instead of blocking the request the user is waiting on.',
      },
      {
        what: 'Chunked upload in 5 MB slices',
        why: 'Large audio uploads kept timing out, so the file is sliced, sent one chunk at a time behind a progress bar, and reassembled server-side.',
      },
      {
        what: 'Docker Compose for MySQL and Redis, 62 tests in CI',
        why: 'The database and Redis come up with one command, so a new machine doesn’t need them installed by hand. GitHub Actions runs the tests on every push.',
      },
    ],
    tech: ['Laravel', 'Whisper', 'Gemini AI', 'Laravel Reverb', 'Redis', 'Docker Compose', 'GitHub Actions'],
    links: {
      github: 'https://github.com/Shuiweiqop/meeting-ai-platform',
      demo: null,
    },
    featured: true,
  },
  {
    name: 'RAG Exam Q&A System',
    context: '2026',
    blurb:
      'A retrieval-augmented generation system that answers OSI networking questions with a cited source, built to measure whether retrieval actually works.',
    highlights: [
      {
        what: '20-question eval set: Recall@1 85%, Recall@3 95%',
        why: 'Most RAG demos stop at “it returns an answer”. Exam questions have known answers, so I measured retrieval instead of eyeballing it. A/B testing three chunking strategies showed knowledge-base coverage mattered more than chunking.',
      },
      {
        what: 'Retrieval rebuilt as an agent tool (smolagents)',
        why: 'The original pipeline always searched, even for a greeting. As a tool, the model decides when to search. In one run it found the first result too general, rewrote the query and searched again.',
      },
      {
        what: 'The same tool exposed as an MCP server',
        why: 'The smolagents tool only worked inside that framework. Over MCP (stdio), any MCP host can call it. Tested with MCP Inspector.',
      },
      {
        what: 'Thread-safe connection pool, isolated test data',
        why: 'Every search opened a new database connection, so I moved to a pool. I also found my chunking A/B script was overwriting the live table, and moved it to its own table.',
      },
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vite', 'PostgreSQL', 'pgvector', 'Gemini API', 'smolagents', 'MCP'],
    links: {
      github: 'https://github.com/Shuiweiqop/rag-exam-qa',
      demo: null,
    },
    featured: true,
  },
]

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'Go Digital & Automation (placed at EAN Label Industry)',
    period: 'Mar 2026 to Aug 2026',
    points: [
      'Part of a 5-person team building the Warehouse Management System, including feature design discussions.',
      'The stock figures in the system had drifted from what was physically in the warehouse, so I traced the bad movement records back through the history and cleaned them up in SQL, and stock counts now match at 100%.',
      'Rebuilt the legacy screens as simpler dashboards in React and Nuxt.js, and connected the company ERP to the warehouse system in Laravel and MySQL so the two stop holding different numbers for the same stock.',
      'Finance had no way to see stock value or aging without asking someone to pull it manually, so I proposed a reporting dashboard and built it. The team adopted it, and Finance can now see quantity, value, movement and aging directly.',
      'New team members were losing a day to environment setup, so I moved local development onto Docker and docker-compose.',
      'Used GitHub Copilot and Gemini for routine code, and reviewed and reworked the output so the team could maintain it.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Inertia.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['PHP', 'Laravel', 'Node.js (Express)', 'Python', 'FastAPI', 'REST API'] },
  { group: 'Database', items: ['MySQL', 'PostgreSQL (pgvector)', 'Redis'] },
  { group: 'Concepts', items: ['WebSocket (Laravel Reverb, Socket.io)', 'Automated Testing'] },
  { group: 'AI', items: ['Gemini API', 'OpenAI Whisper', 'RAG', 'smolagents', 'MCP'] },
  { group: 'Tools', items: ['Git', 'GitHub Actions', 'Docker Compose', 'Figma'] },
  { group: 'Basic', items: ['Java', 'C++'] },
  { group: 'Languages', items: ['Malay (Native)', 'English (Fluent)', 'Mandarin (Native)'] },
]

export const education = {
  degree: 'Bachelor of Computer Science with Honours (Network Engineering)',
  school: 'Universiti Malaysia Sabah',
  period: 'Graduating Nov 2026',
  detail: 'CGPA: 3.51 · Available full-time from Dec 2026',
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
  {
    issuer: 'Hugging Face',
    name: 'AI Agents Fundamentals',
    modules: [],
  },
]
