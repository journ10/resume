import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY
      let current = ''
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop - 100) {
          current = id
        }
      })
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeId
}
