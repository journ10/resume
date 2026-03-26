import { useState, useEffect } from 'react'
import PasswordGate from './components/PasswordGate/PasswordGate'
import { ResumeDataProvider } from './context/ResumeDataContext'
import type { ResumeData } from './context/ResumeDataContext'
import { sanitizeResumeData } from './utils/sanitize'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('resumeData')
    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        if (
          parsed &&
          typeof parsed === 'object' &&
          parsed.personalInfo &&
          typeof parsed.personalInfo.name === 'string' &&
          typeof parsed.personalInfo.email === 'string' &&
          parsed.aboutInfo &&
          typeof parsed.aboutInfo.yearsExperience === 'string' &&
          Array.isArray(parsed.skillCategories) &&
          Array.isArray(parsed.experiences) &&
          Array.isArray(parsed.educations) &&
          Array.isArray(parsed.projects)
        ) {
          setResumeData(sanitizeResumeData(parsed))
        } else {
          sessionStorage.removeItem('resumeData')
        }
      } catch {
        sessionStorage.removeItem('resumeData')
      }
    }
  }, [])

  if (!resumeData) {
    return <PasswordGate onSuccess={(data) => setResumeData(sanitizeResumeData(data))} />
  }

  return (
    <ResumeDataProvider data={resumeData}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </ResumeDataProvider>
  )
}

export default App
