import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const fills = entry.target.querySelectorAll<HTMLElement>('.skill-fill[data-width]')
            fills.forEach((bar) => {
              bar.style.width = (bar.dataset.width ?? '0') + '%'
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
