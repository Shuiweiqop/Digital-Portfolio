import Section from './Section'

export default function About({ about, education }) {
  return (
    <Section id="about" index="01" title="About Me">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="reveal space-y-4 text-slate-600 md:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <aside className="reveal rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Education</h3>
          <p className="mt-3 font-semibold text-slate-900">{education.degree}</p>
          <p className="text-sm text-slate-600">{education.school}</p>
          <p className="mt-1 text-sm text-slate-500">{education.period}</p>
          <p className="mt-1 text-sm text-slate-500">{education.detail}</p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">Certifications</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {education.certs.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-accent">▹</span>
                {c}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
