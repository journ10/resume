import { useScrollReveal } from '../../hooks/useScrollReveal'
import { skillCategories } from '../../data/resumeData'
import './Skills.css'

export default function Skills() {
  useScrollReveal()

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Skills</div>
          <h2 className="section-title">专业技能</h2>
          <p className="section-subtitle">我掌握的核心技术与工具</p>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills-category reveal">
              <h3>
                <i className={cat.icon}></i> {cat.title}
              </h3>
              {cat.skills && cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width={skill.level}></div>
                  </div>
                </div>
              ))}
              {cat.tags && (
                <div className="tags-container">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
