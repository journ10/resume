import { useState, useRef, useEffect } from 'react'
import { themes, type ThemeId } from '../../theme/themes'
import './ThemeSwitcher.css'

interface Props {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

export default function ThemeSwitcher({ theme, setTheme }: Props) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = themes.find((t) => t.id === theme) ?? themes[0]

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        className={`ts-trigger${open ? ' ts-trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="切换主题"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className={`ts-dot ts-dot--${theme}`} aria-hidden="true" />
        <span className="ts-label">{current.label}</span>
        <svg
          className="ts-chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`ts-panel${open ? ' ts-panel--open' : ''}`}
        role="listbox"
        aria-label="选择主题"
      >
        {themes.map((t) => (
          <button
            key={t.id}
            className={`ts-option${theme === t.id ? ' ts-option--active' : ''}`}
            onClick={() => {
              setTheme(t.id)
              setOpen(false)
            }}
            role="option"
            aria-selected={theme === t.id}
          >
            <span className={`ts-swatch ts-swatch--${t.id}`} aria-hidden="true" />
            <span className="ts-option-info">
              <span className="ts-option-name">{t.label}</span>
              <span className="ts-option-desc">{t.desc}</span>
            </span>
            {theme === t.id && (
              <svg
                className="ts-check"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  d="M2 7l4 4 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
