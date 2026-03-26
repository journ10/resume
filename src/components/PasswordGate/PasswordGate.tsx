import { useState } from 'react'
import type { ResumeData } from '../../context/ResumeDataContext'
import './PasswordGate.css'

const WORKER_URL = import.meta.env.VITE_WORKER_URL ?? ''

interface PasswordGateProps {
  onSuccess: (data: ResumeData) => void
}

export default function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!password.trim()) return
    if (!WORKER_URL) {
      setError('服务地址未配置，请联系管理员')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${WORKER_URL}/api/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        if (res.status === 429) {
          setError('请求过于频繁，请稍后再试')
        } else if (res.status === 404) {
          setError('简历数据尚未配置，请联系管理员')
        } else if (res.status === 403) {
          setError('密码无效或已过期')
        } else {
          setError('服务器错误，请稍后重试')
        }
        return
      }
      const data: ResumeData = await res.json()
      sessionStorage.setItem('resumeData', JSON.stringify(data))
      onSuccess(data)
    } catch {
      setError('网络错误，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="password-gate">
      <div className="password-gate-card">
        <div className="password-gate-icon">
          <i className="fas fa-lock"></i>
        </div>
        <h1 className="password-gate-title">请输入访问密码</h1>
        <p className="password-gate-subtitle">此简历内容已加密保护</p>
        <form className="password-gate-form" onSubmit={handleSubmit}>
          <input
            className="password-gate-input"
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            disabled={loading}
          />
          {error && <p className="password-gate-error">{error}</p>}
          <button
            className="password-gate-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              '验证中...'
            ) : (
              <><i className="fas fa-unlock"></i> 解锁</>
            )}
          </button>
        </form>
        <p className="password-gate-hint">密码由简历所有者提供</p>
      </div>
    </div>
  )
}
