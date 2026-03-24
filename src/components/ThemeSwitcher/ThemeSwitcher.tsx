import { themes, type ThemeId } from '../../theme/themes'
import './ThemeSwitcher.css'

interface Props {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

export default function ThemeSwitcher({ theme, setTheme }: Props) {
  return (
    <div className="theme-switcher">
      <select
        className="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeId)}
        aria-label="Switch theme"
        title="Switch theme"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  )
}
