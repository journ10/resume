import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import type { BilingualStringArray } from '../../data/resumeData'
import './Skills.css'

function isBilingualStringArray(tags: string[] | BilingualStringArray): tags is BilingualStringArray {
  return !Array.isArray(tags)
}

export default function Skills() {
  useScrollReveal()
  const { lang, t } = useLocale()
  const { skillCategories } = useResumeData()

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.skills.sectionTag}</div>
          <h2 className="section-title">{t.skills.sectionTitle}</h2>
          <p className="section-subtitle">{t.skills.sectionSubtitle}</p>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat) => {
            const resolvedTags = cat.tags
              ? isBilingualStringArray(cat.tags)
                ? cat.tags[lang]
                : cat.tags
              : undefined
            return (
              <div key={cat.title[lang]} className="skills-category reveal">
                <h3>
                  <i className={cat.icon}></i> {cat.title[lang]}
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
                {resolvedTags && (
                  <div className="tags-container">
                    {resolvedTags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
