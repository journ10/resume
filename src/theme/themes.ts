export const themes = [
  { id: 'light', label: 'Light', desc: 'Glass & luminous' },
  { id: 'dark', label: 'Ember', desc: 'Deep & burning' },
  { id: 'blue-tech', label: 'Blue Tech', desc: 'Neon grid & data' },
  { id: 'warm-paper', label: 'Warm Paper', desc: 'Aged paper & ink' },
  { id: 'purple-neon', label: 'Cyberpunk', desc: 'Yellow & cyan overdrive' },
  { id: 'retro-terminal', label: 'Retro Terminal', desc: 'Phosphor & code' },
] as const

export type ThemeId = (typeof themes)[number]['id']

export const DEFAULT_THEME: ThemeId = 'light'
