import { useTypewriter } from '../../hooks/useTypewriter'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './Hero.css'

export default function Hero() {
  const { lang, t } = useLocale()
  const { personalInfo } = useResumeData()
  const displayed = useTypewriter(personalInfo.roles[lang])

  return (
    <section id="hero">
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-bg-orb hero-bg-orb-3"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-circle"></i> {t.hero.badge}
        </div>
        <div className="hero-avatar">
          <i className="fas fa-user"></i>
        </div>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <div className="hero-title">
          <span className="typewriter-text">{displayed}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">
          {personalInfo.description[lang]}
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> {t.hero.contactBtn}
          </a>
          <a href="#projects" className="btn btn-outline">
            <i className="fas fa-briefcase"></i> {t.hero.projectsBtn}
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>{t.hero.scrollHint}</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
