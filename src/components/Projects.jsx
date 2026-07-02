import Section from './Section'
import { GitHubIcon, ExternalIcon } from './Icons'

function ProjectCard({ project }) {
  return (
    <article className="reveal group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-accent">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 text-slate-400">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`} className="transition hover:text-accent">
              <GitHubIcon />
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`} className="transition hover:text-accent">
              <ExternalIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.blurb}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 text-accent">▹</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 pt-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
            {t}
          </span>
        ))}
      </div>

      {!project.links.github && !project.links.demo && (
        <p className="mt-4 text-xs italic text-slate-400">Source available on request</p>
      )}
    </article>
  )
}

export default function Projects({ projects }) {
  return (
    <Section id="projects" index="02" title="Things I've Built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  )
}
