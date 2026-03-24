import { useTypewriter } from '../../hooks/useTypewriter'
import { personalInfo } from '../../data/resumeData'
import './Hero.css'

export default function Hero() {
  const displayed = useTypewriter(personalInfo.roles)

  return (
    <section id="hero">
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-bg-orb hero-bg-orb-3"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-circle"></i> 目前正在寻找新机会
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
          热爱技术与创新，致力于打造优质的数字产品体验。<br />
          欢迎来到我的在线简历页面。
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> 联系我
          </a>
          <a href="#projects" className="btn btn-outline">
            <i className="fas fa-briefcase"></i> 查看项目
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>向下滚动</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
