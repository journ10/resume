import { useState, useEffect } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import { personalInfo } from '../../data/resumeData'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './Navbar.css'

const navItems = [
  { href: 'hero', label: '首页' },
  { href: 'about', label: '关于我' },
  { href: 'skills', label: '技能' },
  { href: 'experience', label: '经历' },
  { href: 'education', label: '教育' },
  { href: 'projects', label: '项目' },
  { href: 'contact', label: '联系' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(navItems.map((i) => i.href))
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">{personalInfo.logo}</div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={`#${item.href}`}
              className={activeId === item.href ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="菜单"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
