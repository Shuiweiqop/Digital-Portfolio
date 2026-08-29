import { useEffect, useState } from 'react'

/**
 * Types `text` out one character at a time, once.
 *
 * Returns { shown, done }. Respects prefers-reduced-motion by returning the
 * full string immediately, so the content is never gated behind an animation.
 */
export function useTypewriter(text, { speed = 45, startDelay = 600 } = {}) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [shown, setShown] = useState(reduced ? text : '')

  useEffect(() => {
    if (reduced) {
      setShown(text)
      return
    }

    setShown('')
    let i = 0
    let charTimer

    const step = () => {
      i += 1
      setShown(text.slice(0, i))
      if (i < text.length) charTimer = setTimeout(step, speed)
    }

    const startTimer = setTimeout(step, startDelay)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(charTimer)
    }
  }, [text, speed, startDelay, reduced])

  return { shown, done: shown.length === text.length }
}
