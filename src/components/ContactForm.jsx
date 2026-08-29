import { useRef, useState } from 'react'
import { SendIcon, CheckIcon, AlertIcon } from './Icons'

// Set VITE_FORMSPREE_ID in a .env file to post through Formspree. Without it
// the form falls back to opening a prefilled mail draft, so it still works.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''
const ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : ''

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe', required: true },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'jane@example.com', required: true },
  { name: 'company', label: 'Company', type: 'text', placeholder: 'Optional', required: false },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Inquiry about...', required: true },
]

const EMPTY = { name: '', email: '', company: '', subject: '', message: '' }

const REQUIRED_ORDER = ['name', 'email', 'subject', 'message']

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'That email address does not look right'
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required'
  if (!values.message.trim()) {
    errors.message = 'Message is required'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail, please (10 characters minimum)'
  }
  return errors
}

export default function ContactForm({ profile }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')
  const formRef = useRef(null)

  function setField(name, value) {
    const next = { ...values, [name]: value }
    setValues(next)
    // Only re-validate a field the user has already left, so an error never
    // appears while they are still typing into it for the first time.
    if (touched[name]) {
      const found = validate(next)
      setErrors((e) => ({ ...e, [name]: found[name] }))
    }
  }

  function onBlur(name) {
    setTouched((t) => ({ ...t, [name]: true }))
    const found = validate(values)
    setErrors((e) => ({ ...e, [name]: found[name] }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, subject: true, message: true })

    if (Object.keys(found).length) {
      // Move focus to the first problem so keyboard and screen reader users
      // land on it instead of hunting for it.
      const first = REQUIRED_ORDER.find((f) => found[f])
      formRef.current?.querySelector(`[name="${first}"]`)?.focus()
      return
    }

    if (!ENDPOINT) {
      const signature = `${values.name}${values.company ? ` - ${values.company}` : ''}`
      const body = `${values.message}\n\n--\n${signature}\n${values.email}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.errors?.[0]?.message || 'Something went wrong sending that.')
      }
      setStatus('sent')
      setValues(EMPTY)
      setTouched({})
      setErrors({})
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <div className="bp-panel bp-shadow-lg p-8 text-center">
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center"
          style={{ border: '3px solid var(--bp-accent)', color: 'var(--bp-accent)' }}
        >
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-extrabold uppercase" style={{ color: 'var(--bp-ink)' }}>
          Message sent
        </h3>
        <p className="mt-2 text-sm" style={{ color: 'var(--bp-ink-soft)' }}>
          Thanks — I will get back to you at the address you gave.
        </p>
        <button
          type="button"
          className="bp-btn bp-btn-secondary bp-focus mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="bp-panel bp-shadow-lg p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <Field
            key={f.name}
            {...f}
            value={values[f.name]}
            error={touched[f.name] ? errors[f.name] : ''}
            onChange={(v) => setField(f.name, v)}
            onBlur={() => onBlur(f.name)}
          />
        ))}

        <div className="sm:col-span-2">
          <Field
            name="message"
            label="Message"
            textarea
            required
            placeholder="What would you like to talk about?"
            value={values.message}
            error={touched.message ? errors.message : ''}
            onChange={(v) => setField('message', v)}
            onBlur={() => onBlur('message')}
          />
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-5 flex items-start gap-2 font-mono text-[11px]" style={{ color: 'var(--bp-danger)' }}>
          <AlertIcon className="mt-px h-3.5 w-3.5 shrink-0" />
          <span>
            {serverError} You can also email me directly at {profile.email}.
          </span>
        </p>
      )}

      <button
        type="submit"
        className="bp-btn bp-btn-primary bp-focus mt-6 w-full justify-center"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            <SendIcon /> Send message
          </>
        )}
      </button>

      {!ENDPOINT && (
        <p className="mt-3 text-center font-mono text-[10px]" style={{ color: 'var(--bp-ink-muted)' }}>
          Opens your mail app · set VITE_FORMSPREE_ID to send in-page
        </p>
      )}
    </form>
  )
}

function Field({ name, label, type = 'text', placeholder, required, textarea, value, error, onChange, onBlur }) {
  const id = `contact-${name}`
  const control = {
    id,
    name,
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value),
    onBlur,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
    className: 'mt-1.5 w-full bg-transparent px-3 py-2 font-mono text-[13px] outline-none',
    style: {
      border: `2px solid ${error ? 'var(--bp-danger)' : 'var(--bp-ink)'}`,
      color: 'var(--bp-ink)',
    },
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]"
        style={{ color: 'var(--bp-ink-soft)' }}
      >
        {label}
        {required && <span style={{ color: 'var(--bp-accent)' }}> *</span>}
      </label>

      {textarea ? (
        <textarea rows={5} {...control} className={`${control.className} resize-y`} />
      ) : (
        <input type={type} {...control} />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-mono text-[11px]" style={{ color: 'var(--bp-danger)' }}>
          {error}
        </p>
      )}
    </div>
  )
}
