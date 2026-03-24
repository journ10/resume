import { useState, useEffect, useRef } from 'react'

export function useTypewriter(texts: string[], typingSpeed = 100, deletingSpeed = 60, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('')
  const idxRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      const current = texts[idxRef.current]
      const isDeleting = deletingRef.current

      if (!isDeleting) {
        charRef.current++
        setDisplayed(current.substring(0, charRef.current))
        if (charRef.current >= current.length) {
          deletingRef.current = true
          timeout = setTimeout(tick, pauseMs)
          return
        }
      } else {
        charRef.current--
        setDisplayed(current.substring(0, charRef.current))
        if (charRef.current <= 0) {
          deletingRef.current = false
          idxRef.current = (idxRef.current + 1) % texts.length
          timeout = setTimeout(tick, 400)
          return
        }
      }

      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    }

    timeout = setTimeout(tick, 800)
    return () => clearTimeout(timeout)
  }, [texts, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}
