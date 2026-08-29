import Section from './Section'
import SkillChip from './SkillChip'
import { useSkillFocus, normalizeSkill } from '../SkillFocus'
import { projects } from '../data'

// How many projects use a given skill — shown while it's hovered, so the
// highlight answers "where did you actually use this?"
function countProjectsUsing(skill) {
  if (!skill) return 0
  return projects.filter((p) => p.tech.some((t) => normalizeSkill(t) === skill)).length
}

export default function Skills({ skills }) {
  const { focused } = useSkillFocus()
  const count = countProjectsUsing(focused)

  return (
    <Section id="skills" label="Stack" title="Technical Skills">
      <p
        aria-live="polite"
        className="reveal mb-5 h-5 font-mono text-[11px]"
        style={{ color: focused && count ? 'var(--bp-accent)' : 'var(--bp-ink-muted)' }}
      >
        {focused && count
          ? `Used in ${count} project${count > 1 ? 's' : ''} above`
          : 'Hover a skill to see where it was used'}
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="reveal bp-panel bp-shadow p-4">
            <h3
              className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ color: 'var(--bp-accent)' }}
            >
              {s.group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <SkillChip key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
