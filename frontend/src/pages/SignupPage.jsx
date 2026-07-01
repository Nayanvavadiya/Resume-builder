import React, { useContext, useState } from 'react'
import { ArrowUpRight, LayoutTemplate, User, Mail, Lock } from 'lucide-react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'
import { validateEmail } from '../utils/helper'

const SignupPage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { updateUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!fullName.trim()) {
      setError('Please enter your full name')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }
    setError('')
    setIsLoading(true)

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
      })
      const { token } = response.data
      if (token) {
        localStorage.setItem('token', token)
        updateUser(response.data)
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '8px',
    padding: '12px 14px',
    fontSize: '14px',
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '8px',
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: "'Urbanist', sans-serif" }}>

      {/* ── Left Panel ── */}
      <div style={{
        flex: '0 0 45%',
        background: 'linear-gradient(160deg, #0d1a0d 0%, #0a130a 50%, #071007 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '36px 48px',
        overflow: 'hidden',
      }}>

        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          bottom: '-80px', left: '-60px',
          width: '420px', height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: '15%', right: '-100px',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, #4ade80, #a3e635)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <LayoutTemplate size={20} color="#0a130a" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
            RESU<span style={{ color: '#4ade80' }}>MINT</span>
          </span>
        </div>

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: '16px' }}>
            Build your resume.{' '}
            <span style={{ color: '#4ade80' }}>Land the job.</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: '340px' }}>
            Join thousands of professionals who built standout, ATS-optimized resumes and got hired faster.
          </p>
        </div>

        {/* Footer */}
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', position: 'relative', zIndex: 1, margin: 0 }}>
          © 2026 Resumint
        </p>
      </div>

      {/* ── Right Panel (Form) ── */}
      <div style={{
        flex: 1,
        background: '#0c160c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 32px',
        position: 'relative',
      }}>

        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }} />

        <div style={{ width: '100%', maxWidth: '380px', position: 'relative', zIndex: 1 }}>

          <p style={{
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.18em', color: '#4ade80',
            textTransform: 'uppercase', marginBottom: '10px',
          }}>
            Get Started
          </p>

          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
            Create account
          </h2>

          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px' }}>
            Start building your standout resume today.
          </p>

          <form onSubmit={handleSignUp} noValidate>

            {/* Full Name */}
            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="signup-name" style={labelStyle}>Full Name</label>
              <input
                id="signup-name"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#4ade80'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '18px' }}>
              <label htmlFor="signup-email" style={labelStyle}>Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#4ade80'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="signup-password" style={labelStyle}>Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Min 8 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#4ade80'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>

            {/* Error */}
            {error && (
              <div style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '13px',
                color: '#f87171',
                marginBottom: '20px',
              }}>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              id="signup-submit"
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(90deg, #4ade80, #a3e635)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#0a130a',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.75 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'opacity 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { if (!isLoading) e.currentTarget.style.opacity = '0.88' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = isLoading ? '0.75' : '1' }}
            >
              {isLoading ? 'Creating account…' : (
                <>Create Account <ArrowUpRight size={17} strokeWidth={2.5} /></>
              )}
            </button>

            {/* Link to login */}
            <p style={{
              marginTop: '22px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              textAlign: 'center',
            }}>
              Already have an account?{' '}
              <button
                type="button"
                id="go-to-login"
                onClick={() => navigate('/login')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#4ade80', fontWeight: 700, fontSize: '13px',
                  padding: 0, textDecoration: 'underline', textUnderlineOffset: '3px',
                }}
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
