import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLocale()
  const { personalInfo } = useResumeData()

  return (
    <footer>
      <div className="footer-logo">{personalInfo.logo}</div>
      <ul className="footer-links">
        <li><a href="#hero">{t.footer.home}</a></li>
        <li><a href="#about">{t.footer.about}</a></li>
        <li><a href="#skills">{t.footer.skills}</a></li>
        <li><a href="#projects">{t.footer.projects}</a></li>
        <li><a href="#contact">{t.footer.contact}</a></li>
      </ul>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}. {t.footer.rights}. Made with{' '}
        <i className="fas fa-heart footer-heart"></i> in China
      </p>
    </footer>
  )
}
