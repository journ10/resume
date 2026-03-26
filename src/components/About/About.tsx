import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './About.css'

export default function About() {
  useScrollReveal()
  const { lang, t } = useLocale()
  const { personalInfo, aboutInfo } = useResumeData()

  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.about.sectionTag}</div>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-image-wrap reveal-left">
            <div className="about-image">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="about-stat-badge badge-1">
              <i className="fas fa-star"></i>
              <span>{aboutInfo.yearsExperience} {t.about.yearsExp}</span>
            </div>
            <div className="about-stat-badge badge-2">
              <i className="fas fa-check-circle"></i>
              <span>{aboutInfo.projectsCount} {t.about.projects}</span>
            </div>
          </div>
          <div className="about-text reveal-right">
            <h3>
              {t.about.greeting}{' '}
              <span className="name-gradient">{personalInfo.name}</span> 👋
            </h3>
            <p>{aboutInfo.intro1[lang]}</p>
            <p>{aboutInfo.intro2[lang]}</p>
            <div className="about-info-grid">
              <div className="about-info-item">
                <i className="fas fa-map-marker-alt"></i> {personalInfo.location}
              </div>
              <div className="about-info-item">
                <i className="fas fa-envelope"></i> {personalInfo.email}
              </div>
              <div className="about-info-item">
                <i className="fas fa-graduation-cap"></i> {personalInfo.education[lang]}
              </div>
              <div className="about-info-item">
                <i className="fas fa-language"></i> {personalInfo.languages}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
