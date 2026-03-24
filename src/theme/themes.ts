export const themes = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'blue-tech', label: 'Blue Tech' },
  { id: 'warm-paper', label: 'Warm Paper' },
  { id: 'purple-neon', label: 'Purple Neon' },
  { id: 'retro-terminal', label: 'Retro Terminal' },
] as const

export type ThemeId = (typeof themes)[number]['id']

export const DEFAULT_THEME: ThemeId = 'light'
