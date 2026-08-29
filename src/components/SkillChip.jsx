import { useRef } from 'react'
import { useChipState, useSkillFocus } from '../SkillFocus'

/**
 * A skill tag. Hovering (or keyboard-focusing) one highlights every other
 * instance of the same skill across the page and dims the rest, so you can see
 * at a glance where a technology was actually used. On touch, a tap toggles it.
 */
export default function SkillChip({ name, interactive = true }) {
  const { focus, clear, toggle } = useSkillFocus()
  const state = useChipState(name)
  const touchRef = useRef(false)

  const base =
    'border px-2 py-0.5 font-mono text-[11px] font-medium transition-[opacity,transform,background-color,color] duration-150'

  const style = {
    borderColor: state === 'match' ? 'var(--bp-accent)' : 'var(--bp-ink)',
    backgroundColor: state === 'match' ? 'var(--bp-accent)' : 'transparent',
    color: state === 'match' ? '#ffffff' : 'var(--bp-ink-soft)',
    opacity: state === 'dimmed' ? 0.35 : 1,
    transform: state === 'match' ? 'translateY(-1px)' : 'none',
  }

  if (!interactive) {
    return (
      <span className={base} style={style}>
        {name}
      </span>
    )
  }

  return (
    <button
      type="button"
      className={`${base} bp-focus cursor-default`}
      style={style}
      // pointerenter/leave carry the input type, so touch-synthesised hover
      // never fires these — a tap only ever runs onClick.
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') focus(name)
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') clear()
      }}
      // A tap fires focus before click, so the click would toggle off what
      // focus had just set. Track the pointer type and let a touch click own
      // the decision instead of toggling against focus's result.
      onPointerDown={(e) => {
        touchRef.current = e.pointerType === 'touch'
      }}
      onFocus={() => {
        if (!touchRef.current) focus(name)
      }}
      onBlur={() => {
        if (!touchRef.current) clear()
      }}
      onClick={() => {
        if (touchRef.current) toggle(name)
      }}
    >
      {name}
    </button>
  )
}
