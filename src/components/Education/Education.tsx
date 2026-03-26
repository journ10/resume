import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './Education.css'

export default function Education() {
  useScrollReveal()
  const { lang, t } = useLocale()
  const { educations } = useResumeData()

  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.education.sectionTag}</div>
          <h2 className="section-title">{t.education.sectionTitle}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="edu-grid">
          {educations.map((edu, i) => (
            <div key={i} className="edu-card reveal">
              <div className="edu-icon">
                <i className={edu.icon}></i>
              </div>
              <div className="edu-degree">{edu.degree[lang]}</div>
              <div className="edu-major">{edu.major[lang]}</div>
              <div className="edu-school">
                <i className={edu.schoolIcon}></i> {edu.school[lang]}
              </div>
              <div className="edu-period">
                <i className="fas fa-calendar"></i> {edu.period[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
