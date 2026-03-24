import { useScrollReveal } from '../../hooks/useScrollReveal'
import { personalInfo, aboutInfo } from '../../data/resumeData'
import './About.css'

export default function About() {
  useScrollReveal()

  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">关于我</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-image-wrap reveal-left">
            <div className="about-image">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="about-stat-badge badge-1">
              <i className="fas fa-star"></i>
              <span>{aboutInfo.yearsExperience} 年经验</span>
            </div>
            <div className="about-stat-badge badge-2">
              <i className="fas fa-check-circle"></i>
              <span>{aboutInfo.projectsCount} 项目</span>
            </div>
          </div>
          <div className="about-text reveal-right">
            <h3>
              您好，我是{' '}
              <span className="name-gradient">{personalInfo.name}</span> 👋
            </h3>
            <p>{aboutInfo.intro1}</p>
            <p>{aboutInfo.intro2}</p>
            <div className="about-info-grid">
              <div className="about-info-item">
                <i className="fas fa-map-marker-alt"></i> {personalInfo.location}
              </div>
              <div className="about-info-item">
                <i className="fas fa-envelope"></i> {personalInfo.email}
              </div>
              <div className="about-info-item">
                <i className="fas fa-graduation-cap"></i> {personalInfo.education}
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
