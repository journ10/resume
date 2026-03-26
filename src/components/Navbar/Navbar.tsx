import { useState, useEffect } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './Navbar.css'

const navHrefs = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(navHrefs)
  const { theme, setTheme } = useTheme()
  const { lang, t, setLang } = useLocale()
  const { personalInfo } = useResumeData()

  const navItems = [
    { href: 'hero', label: t.nav.home },
    { href: 'about', label: t.nav.about },
    { href: 'skills', label: t.nav.skills },
    { href: 'experience', label: t.nav.experience },
    { href: 'education', label: t.nav.education },
    { href: 'projects', label: t.nav.projects },
    { href: 'contact', label: t.nav.contact },
  ]

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
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        >
          {lang === 'zh' ? 'EN' : 'ZH'}
        </button>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label={t.nav.menuAriaLabel}
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
