import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const SkillFocusContext = createContext(null)

// Some names differ between the skills list and project tech lists but mean the
// same thing. Normalising here lets a hover in one section light up the other.
const ALIASES = {
  'gemini api': 'gemini ai',
  'openai whisper': 'whisper',
  'websocket (laravel reverb)': 'laravel reverb',
  'github actions (ci/cd)': 'github actions',
}

export function normalizeSkill(name) {
  const k = name.trim().toLowerCase()
  return ALIASES[k] || k
}

export function SkillFocusProvider({ children }) {
  const [focused, setFocused] = useState(null)

  const focus = useCallback((name) => setFocused(name ? normalizeSkill(name) : null), [])
  const clear = useCallback(() => setFocused(null), [])
  // Touch devices have no hover, so a tap toggles the same highlight.
  const toggle = useCallback(
    (name) => setFocused((cur) => (cur === normalizeSkill(name) ? null : normalizeSkill(name))),
    []
  )

  const value = useMemo(() => ({ focused, focus, clear, toggle }), [focused, focus, clear, toggle])
  return <SkillFocusContext.Provider value={value}>{children}</SkillFocusContext.Provider>
}

export function useSkillFocus() {
  const ctx = useContext(SkillFocusContext)
  if (!ctx) throw new Error('useSkillFocus must be used within SkillFocusProvider')
  return ctx
}

/**
 * How a chip should render given the current focus.
 * 'idle'    — nothing focused
 * 'match'   — this chip is the focused skill
 * 'dimmed'  — something else is focused
 */
export function useChipState(name) {
  const { focused } = useSkillFocus()
  if (!focused) return 'idle'
  return normalizeSkill(name) === focused ? 'match' : 'dimmed'
}
