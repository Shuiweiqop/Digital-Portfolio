import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './Icons'

export default function Hero({ profile }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-20">
        <p className="animate-fade-up font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 animate-fade-up text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          {profile.name}.
        </h1>
        <h2 className="mt-2 animate-fade-up text-3xl font-bold tracking-tight text-slate-400 sm:text-4xl">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-600">
          {profile.tagline}
        </p>

        <p className="mt-4 animate-fade-up text-sm font-medium text-slate-500">
          {profile.availability}
        </p>

        <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-dark"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent"
          >
            <DownloadIcon /> Resume
          </a>
        </div>

        <div className="mt-10 flex animate-fade-up items-center gap-5 text-slate-400">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-accent">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
