export interface BilingualText {
  zh: string
  en: string
}

export interface BilingualStringArray {
  zh: string[]
  en: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  icon: string
  title: BilingualText
  skills?: Skill[]
  tags?: string[] | BilingualStringArray
}

export interface ExperienceItem {
  period: BilingualText
  title: BilingualText
  company: string
  description: BilingualText
  tags: string[]
}

export interface EducationItem {
  icon: string
  degree: BilingualText
  major: BilingualText
  school: BilingualText
  schoolIcon: string
  period: BilingualText
}

export interface ProjectItem {
  gradient: string
  icon: string
  title: BilingualText
  description: BilingualText
  tags: string[]
  github: string
  demo: string
}

