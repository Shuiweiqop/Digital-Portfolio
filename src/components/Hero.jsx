import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './Icons'
import profilePhoto from '../assets/profile.jpeg'
import { useTypewriter } from '../useTypewriter'
import SketchDesk from './SketchDesk'

// The snippet is typed out character by character on load. Tokens carry their
// own colour so syntax highlighting survives the reveal; `end` is each token's
// cumulative offset, which is compared against how much has been typed.
const CODE_TOKENS = [
  { text: '# final year project', color: 'var(--bp-syn-cm)' },
  { text: '\n', color: null },
  { text: 'def', color: 'var(--bp-syn-kw)', bold: true },
  { text: ' ', color: null },
  { text: 'build', color: 'var(--bp-syn-fn)' },
  { text: '(idea):', color: 'var(--bp-ink)' },
  { text: '\n    ', color: null },
  { text: 'return', color: 'var(--bp-syn-kw)', bold: true },
  { text: ' ', color: null },
  { text: '"shipped"', color: 'var(--bp-syn-str)' },
]

const CODE_TEXT = CODE_TOKENS.map((t) => t.text).join('')

function CodeSnippet() {
  const { shown, done } = useTypewriter(CODE_TEXT, { speed: 38, startDelay: 700 })

  let offset = 0
  return (
    <code>
      {CODE_TOKENS.map((token, i) => {
        const start = offset
        offset += token.text.length
        const visible = token.text.slice(0, Math.max(0, shown.length - start))
        if (!visible) return null
        // Newlines and the indent that follows need real line breaks.
        const parts = visible.split('\n')
        return (
          <span
            key={i}
            className={token.bold ? 'font-bold' : undefined}
            style={token.color ? { color: token.color } : undefined}
          >
            {parts.map((p, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {p.replace(/ /g, ' ')}
              </span>
            ))}
          </span>
        )
      })}
      <span
        aria-hidden="true"
        className={done ? 'cursor-blink' : undefined}
        style={{
          display: 'inline-block',
          width: '0.55em',
          height: '1em',
          verticalAlign: '-0.15em',
          backgroundColor: 'var(--bp-accent)',
        }}
      />
    </code>
  )
}

// The portrait is framed as a code editor window: tab, gutter, and a line of
// Python underneath — a nod to the Python LMS that is the final-year project.
function PortraitEditor() {
  return (
    <div className="bp-panel bp-shadow-lg w-[236px] max-w-full">
      <div className="flex items-center gap-1.5 px-2.5 py-2" style={{ backgroundColor: 'var(--bp-ed-bar)' }}>
        <span className="block h-2 w-2 rounded-full bg-slate-600" />
        <span className="block h-2 w-2 rounded-full bg-slate-600" />
        <span className="block h-2 w-2 rounded-full bg-slate-600" />
        <span className="ml-1.5 font-mono text-[11px]" style={{ color: 'var(--bp-ed-tab)' }}>
          profile.py
        </span>
      </div>

      <div className="grid grid-cols-[26px_1fr]" style={{ backgroundColor: 'var(--bp-ed-body)' }}>
        <div
          className="border-r pr-1.5 pt-1.5 text-right font-mono text-[10px] leading-[1.45] tabular-nums"
          style={{
            backgroundColor: 'var(--bp-ed-gutter)',
            borderColor: 'var(--bp-ed-gutter-line)',
            color: 'var(--bp-ed-gutter-num)',
          }}
          aria-hidden="true"
        >
          1<br />2<br />3<br />4<br />5<br />6
        </div>
        <div className="p-1.5">
          <img
            src={profilePhoto}
            alt="Ng Yi Xuan"
            className="block h-[172px] w-full object-cover object-[center_25%]"
          />
        </div>
      </div>

      <div
        className="overflow-x-auto whitespace-nowrap border-t px-2.5 py-2 font-mono text-[11px] leading-relaxed"
        style={{
          backgroundColor: 'var(--bp-ed-code-bg)',
          borderColor: 'var(--bp-ed-gutter-line)',
        }}
      >
        <CodeSnippet />
      </div>
    </div>
  )
}

// Role, location and availability laid out as the title block of an
// engineering drawing: the boxed fields along the bottom of every sheet. They
// are the facts a recruiter scans for, so they get real labels and cells.
function TitleBlock({ profile }) {
  const fields = [
    { label: 'Role', value: profile.title },
    { label: 'Based in', value: profile.location },
    { label: 'Availability', value: profile.availability, wide: true },
  ]

  return (
    <dl
      // The 3px gap over an ink fill draws the inner rules between cells.
      className="grid grid-cols-2 gap-[3px] border-[3px] sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(0,1.35fr)]"
      style={{ borderColor: 'var(--bp-ink)', backgroundColor: 'var(--bp-ink)' }}
    >
      {fields.map((f) => (
        <div
          key={f.label}
          className={`px-4 py-3 ${f.wide ? 'col-span-2 sm:col-span-1' : ''}`}
          style={{ backgroundColor: 'var(--bp-raised)' }}
        >
          <dt className="text-xs font-medium" style={{ color: 'var(--bp-ink-muted)' }}>
            {f.label}
          </dt>
          <dd
            className="mt-1 text-[15px] font-semibold leading-snug"
            style={{ color: 'var(--bp-ink)' }}
          >
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default function Hero({ profile }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 pb-14 pt-24">
        {/* The name is set like the title of a drawing: expanded, heavy, the
            full width of the sheet, ruled off underneath. */}
        <h1
          className="font-display text-[clamp(34px,10.5vw,118px)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]"
          style={{ color: 'var(--bp-ink)', fontStretch: '125%' }}
        >
          {profile.name}
        </h1>

        <div className="mt-4 h-[3px]" style={{ backgroundColor: 'var(--bp-ink)' }} />

        <div className="mt-9 grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12">
          <div className="min-w-0">
            <p
              className="text-[clamp(20px,2.4vw,26px)] font-semibold leading-tight tracking-[-0.01em]"
              style={{ color: 'var(--bp-ink)' }}
            >
              I build things for the web.
            </p>

            <p
              className="mt-4 max-w-[56ch] text-base leading-[1.65]"
              style={{ color: 'var(--bp-ink-soft)' }}
            >
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="bp-btn bp-btn-primary bp-focus">
                  View my work
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bp-btn bp-btn-secondary bp-focus"
                >
                  <DownloadIcon /> Resume
                </a>
              </div>

              <div className="flex items-center gap-5" style={{ color: 'var(--bp-ink-muted)' }}>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="bp-focus transition hover:text-accent"
                >
                  <GitHubIcon className="h-6 w-6" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="bp-focus transition hover:text-accent"
                >
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="bp-focus transition hover:text-accent"
                >
                  <MailIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="mt-10">
              <TitleBlock profile={profile} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 md:items-end">
            <PortraitEditor />
            {/* Decorative sketch of a desk setup. Its keyboard lights up as you type. */}
            <SketchDesk className="pointer-events-none hidden w-60 opacity-70 lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
