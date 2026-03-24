export const themes = [
  { id: 'light', label: 'Light', desc: 'Clean & minimal' },
  { id: 'dark', label: 'Dark', desc: 'Deep & elegant' },
  { id: 'blue-tech', label: 'Blue Tech', desc: 'Sci-fi precision' },
  { id: 'warm-paper', label: 'Warm Paper', desc: 'Soft & editorial' },
  { id: 'purple-neon', label: 'Purple Neon', desc: 'Vivid & electric' },
  { id: 'retro-terminal', label: 'Retro Terminal', desc: 'Phosphor & code' },
] as const

export type ThemeId = (typeof themes)[number]['id']

export const DEFAULT_THEME: ThemeId = 'light'
