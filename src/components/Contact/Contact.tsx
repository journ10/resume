import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { personalInfo } from '../../data/resumeData'
import './Contact.css'

export default function Contact() {
  useScrollReveal()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">联系我</h2>
          <p className="section-subtitle">有任何问题或合作意向，欢迎随时联系</p>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h3>让我们一起合作 👋</h3>
            <p>
              无论您有项目需求、合作意向，还是只是想聊聊技术，我都非常乐意与您交流。请随时通过以下方式联系我。
            </p>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-item-text">
                <strong>电子邮箱</strong>
                <span>{personalInfo.email}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div className="contact-item-text">
                <strong>联系电话</strong>
                <span>{personalInfo.phone}</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-item-text">
                <strong>所在地</strong>
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
              <label htmlFor="name">您的姓名</label>
              <input type="text" id="name" placeholder="请输入您的姓名" />
            </div>
            <div className="form-group">
              <label htmlFor="email">电子邮箱</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">主题</label>
              <input type="text" id="subject" placeholder="请输入邮件主题" />
            </div>
            <div className="form-group">
              <label htmlFor="message">留言内容</label>
              <textarea id="message" placeholder="请输入您想说的内容..."></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              style={submitted ? { background: 'linear-gradient(135deg,#10b981,#059669)' } : undefined}
            >
              {submitted ? (
                <><i className="fas fa-check"></i> 发送成功！</>
              ) : (
                <><i className="fas fa-paper-plane"></i> 发送消息</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
