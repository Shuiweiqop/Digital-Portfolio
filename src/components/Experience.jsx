import Section from './Section'

export default function Experience({ experience }) {
  return (
    <Section id="experience" index="03" title="Where I've Worked">
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="reveal border-l-2 border-accent/30 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-sm text-slate-400">{job.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {job.points.map((pt, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 text-accent">▹</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
