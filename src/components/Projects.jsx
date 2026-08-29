import Section from './Section'
import { GitHubIcon, ExternalIcon } from './Icons'
import SkillChip from './SkillChip'

function ProjectCard({ project }) {
  return (
    <article className="reveal bp-panel bp-shadow group flex flex-col p-5 transition-transform duration-150 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-[17px] font-extrabold uppercase leading-tight tracking-[-0.02em]"
          style={{ color: 'var(--bp-ink)' }}
        >
          {project.name}
        </h3>
        <div className="flex shrink-0 items-center gap-3" style={{ color: 'var(--bp-ink-muted)' }}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="bp-focus transition hover:text-accent"
            >
              <GitHubIcon />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="bp-focus transition hover:text-accent"
            >
              <ExternalIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {project.context && (
        <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--bp-ink-muted)' }}>
          {project.context}
        </p>
      )}

      <div className="mt-2.5 h-[3px] w-12" style={{ backgroundColor: 'var(--bp-accent)' }} />

      <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--bp-ink-soft)' }}>
        {project.blurb}
      </p>

      <ul className="mt-4 space-y-2 text-sm" style={{ color: 'var(--bp-ink-soft)' }}>
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="mt-0.5" style={{ color: 'var(--bp-accent)' }}>
              ▸
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {project.tech.map((t) => (
          <SkillChip key={t} name={t} />
        ))}
      </div>

      {!project.links.github && !project.links.demo && (
        <p className="mt-3 font-mono text-[11px]" style={{ color: 'var(--bp-ink-muted)' }}>
          Source available on request
        </p>
      )}
    </article>
  )
}

export default function Projects({ projects }) {
  return (
    <Section id="projects" label="Work" title="Things I've Built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  )
}
