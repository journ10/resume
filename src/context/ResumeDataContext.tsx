import { createContext, useContext } from 'react'
import type {
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ProjectItem,
} from '../data/resumeData'

export interface ResumeData {
  personalInfo: {
    name: string
    logo: string
    roles: { zh: string[]; en: string[] }
    description: { zh: string; en: string }
    location: string
    email: string
    phone: string
    education: { zh: string; en: string }
    languages: string
    availableForWork: boolean
    social: {
      github: string
      linkedin: string
      weixin: string
      weibo: string
      twitter: string
    }
  }
  aboutInfo: {
    yearsExperience: string
    projectsCount: string
    intro1: { zh: string; en: string }
    intro2: { zh: string; en: string }
  }
  skillCategories: SkillCategory[]
  experiences: ExperienceItem[]
  educations: EducationItem[]
  projects: ProjectItem[]
}

const ResumeDataContext = createContext<ResumeData | null>(null)

export function ResumeDataProvider({
  data,
  children,
}: {
  data: ResumeData
  children: React.ReactNode
}) {
  return (
    <ResumeDataContext.Provider value={data}>
      {children}
    </ResumeDataContext.Provider>
  )
}

export function useResumeData(): ResumeData {
  const ctx = useContext(ResumeDataContext)
  if (!ctx) {
    throw new Error('useResumeData must be used within a ResumeDataProvider')
  }
  return ctx
}
