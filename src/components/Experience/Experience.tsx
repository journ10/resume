import { useScrollReveal } from '../../hooks/useScrollReveal'
import { experiences } from '../../data/resumeData'
import './Experience.css'

export default function Experience() {
  useScrollReveal()

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">工作经历</h2>
          <p className="section-subtitle">我的职业发展历程</p>
          <div className="section-divider"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-period">
                  <i className="fas fa-calendar-alt"></i> {exp.period}
                </div>
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-company">🏢 {exp.company}</div>
                <div className="timeline-desc">{exp.description}</div>
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
