import { useId, useState } from 'react'
import Section from './Section'
import { GitHubIcon, ExternalIcon } from './Icons'
import SkillChip from './SkillChip'

// Highlights are { what, why }: `what` is the scannable one-liner, `why` is the
// reasoning, hidden until asked for. Plain strings still work and render as-is.
function Highlight({ item }) {
  const [open, setOpen] = useState(false)
  const bodyId = useId()

  if (typeof item === 'string') {
    return (
      <li className="flex gap-2">
        <span aria-hidden="true" className="mt-0.5" style={{ color: 'var(--bp-accent)' }}>
          ▸
        </span>
        <span>{item}</span>
      </li>
    )
  }

  return (
    <li className="flex gap-2">
      <span aria-hidden="true" className="mt-0.5" style={{ color: 'var(--bp-accent)' }}>
        ▸
      </span>
      <div className="min-w-0 flex-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={bodyId}
          className="bp-focus block w-full text-left transition hover:text-accent"
        >
          {/* Marker sits inline after the text so it stays next to the last
              word when `what` wraps, rather than drifting to the card edge. */}
          {item.what}{' '}
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block font-mono text-[10px] leading-none transition-transform duration-150"
            style={{
              color: 'var(--bp-ink-muted)',
              transform: open ? 'rotate(90deg)' : 'none',
            }}
          >
            ▶
          </span>
        </button>
        {open && (
          <p
            id={bodyId}
            className="mt-1.5 border-l-2 pl-3 text-[13px] leading-relaxed"
            style={{ borderColor: 'var(--bp-grid)', color: 'var(--bp-ink-muted)' }}
          >
            {item.why}
          </p>
        )}
      </div>
    </li>
  )
}

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
          <Highlight key={i} item={h} />
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
