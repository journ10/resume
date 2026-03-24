import { personalInfo } from '../../data/resumeData'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">{personalInfo.logo}</div>
      <ul className="footer-links">
        <li><a href="#hero">首页</a></li>
        <li><a href="#about">关于</a></li>
        <li><a href="#skills">技能</a></li>
        <li><a href="#projects">项目</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. 保留所有权利. Made with{' '}
        <i className="fas fa-heart footer-heart"></i> in China
      </p>
    </footer>
  )
}
