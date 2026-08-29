import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './Icons'
import profilePhoto from '../assets/profile.jpeg'

export default function Hero({ profile }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-5xl items-center gap-12 px-6 pt-20 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="flex flex-col justify-center">
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

        <div className="order-first animate-fade-up md:order-last">
          <div className="relative mx-auto w-56 sm:w-64 md:w-72">
            <div className="absolute -inset-3 -z-10 rounded-full bg-accent/10 blur-2xl" />
            <img
              src={profilePhoto}
              alt={profile.name}
              className="aspect-square w-full rounded-full object-cover object-[center_25%] shadow-lg ring-4 ring-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
