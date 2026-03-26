import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './Projects.css'

export default function Projects() {
  useScrollReveal()
  const { lang, t } = useLocale()
  const { projects } = useResumeData()

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.projects.sectionTag}</div>
          <h2 className="section-title">{t.projects.sectionTitle}</h2>
          <p className="section-subtitle">{t.projects.sectionSubtitle}</p>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card reveal">
              <div className="project-header">
                <div
                  className="project-header-bg"
                  style={{ background: proj.gradient }}
                ></div>
                <i className={`${proj.icon} project-icon`}></i>
              </div>
              <div className="project-body">
                <div className="project-title">{proj.title[lang]}</div>
                <div className="project-desc">{proj.description[lang]}</div>
                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={proj.github} className="project-link">
                    <i className="fab fa-github"></i> {t.projects.sourceCode}
                  </a>
                  <a href={proj.demo} className="project-link">
                    <i className="fas fa-external-link-alt"></i> {t.projects.liveDemo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
