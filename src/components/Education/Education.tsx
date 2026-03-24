import { useScrollReveal } from '../../hooks/useScrollReveal'
import { educations } from '../../data/resumeData'
import './Education.css'

export default function Education() {
  useScrollReveal()

  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Education</div>
          <h2 className="section-title">教育背景</h2>
          <div className="section-divider"></div>
        </div>
        <div className="edu-grid">
          {educations.map((edu, i) => (
            <div key={i} className="edu-card reveal">
              <div className="edu-icon">
                <i className={edu.icon}></i>
              </div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-major">{edu.major}</div>
              <div className="edu-school">
                <i className={edu.schoolIcon}></i> {edu.school}
              </div>
              <div className="edu-period">
                <i className="fas fa-calendar"></i> {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
