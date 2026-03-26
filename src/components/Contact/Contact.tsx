import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useLocale } from '../../i18n/index'
import { useResumeData } from '../../context/ResumeDataContext'
import './Contact.css'

const WORKER_URL = import.meta.env.VITE_WORKER_URL ?? ''

export default function Contact() {
  useScrollReveal()
  const { t } = useLocale()
  const { personalInfo } = useResumeData()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(t.contact.errorRequired)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${WORKER_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (res.ok) {
        const data = await res.json() as { ok?: boolean }
        if (data.ok) {
          setSubmitted(true)
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          setTimeout(() => setSubmitted(false), 3000)
        } else {
          setError(t.contact.errorServer)
        }
      } else if (res.status === 429) {
        setError(t.contact.errorRateLimit)
      } else if (res.status === 400) {
        const data = await res.json() as { error?: string }
        setError(data.error ?? t.contact.errorServer)
      } else {
        setError(t.contact.errorServer)
      }
    } catch {
      setError(t.contact.errorNetwork)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">{t.contact.sectionTag}</div>
          <h2 className="section-title">{t.contact.sectionTitle}</h2>
          <p className="section-subtitle">{t.contact.sectionSubtitle}</p>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h3>{t.contact.heading}</h3>
            <p>{t.contact.body}</p>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-item-text">
                <strong>{t.contact.emailLabel}</strong>
                <span>{personalInfo.email}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div className="contact-item-text">
                <strong>{t.contact.phoneLabel}</strong>
                <span>{personalInfo.phone}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-item-text">
                <strong>{t.contact.locationLabel}</strong>
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="social-links">
              <a href={personalInfo.social.github} className="social-link" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href={personalInfo.social.linkedin} className="social-link" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={personalInfo.social.weixin} className="social-link" title="微信">
                <i className="fab fa-weixin"></i>
              </a>
              <a href={personalInfo.social.weibo} className="social-link" title="微博">
                <i className="fab fa-weibo"></i>
              </a>
              <a href={personalInfo.social.twitter} className="social-link" title="Twitter/X">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <form className="contact-form reveal-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.nameLabel}</label>
              <input
                type="text"
                id="name"
                placeholder={t.contact.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.emailInputLabel}</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.contact.subjectLabel}</label>
              <input
                type="text"
                id="subject"
                placeholder={t.contact.subjectPlaceholder}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                placeholder={t.contact.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              ></textarea>
            </div>
            {error && <p className="contact-error">{error}</p>}
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={loading || submitted}
              style={submitted ? { background: 'linear-gradient(135deg,#10b981,#059669)' } : undefined}
            >
              {submitted ? (
                <><i className="fas fa-check"></i> {t.contact.sentBtn}</>
              ) : loading ? (
                <><i className="fas fa-spinner fa-spin"></i> {t.contact.sendingBtn}</>
              ) : (
                <><i className="fas fa-paper-plane"></i> {t.contact.sendBtn}</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
