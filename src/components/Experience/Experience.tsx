import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './Experience.css'

export default function Experience() {
  useScrollReveal()
  const { lang, t } = useLocale()
  const { experiences } = useResumeData()

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.experience.sectionTag}</div>
          <h2 className="section-title">{t.experience.sectionTitle}</h2>
          <p className="section-subtitle">{t.experience.sectionSubtitle}</p>
          <div className="section-divider"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-period">
                  <i className="fas fa-calendar-alt"></i> {exp.period[lang]}
                </div>
                <div className="timeline-title">{exp.title[lang]}</div>
                <div className="timeline-company">🏢 {exp.company}</div>
                <div className="timeline-desc">{exp.description[lang]}</div>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
