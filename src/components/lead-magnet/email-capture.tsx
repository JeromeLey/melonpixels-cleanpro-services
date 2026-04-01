'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  headline?: string
  subheadline?: string
  submitText?: string
  successMessage?: string
  onSuccess?: () => void
}

export default function EmailCapture({
  headline = 'Get Your Free Website Checklist',
  subheadline = 'Enter your email and we\'ll send it straight to your inbox.',
  submitText = 'Send Me the Checklist',
  successMessage = 'Check your inbox! Your checklist is on its way.',
  onSuccess,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      setIsLoading(false)
      return
    }

    await new Promise(resolve => setTimeout(resolve, 800))

    const subscribers = JSON.parse(localStorage.getItem('melonpixels_subscribers') || '[]')
    const existingSubscriber = subscribers.find((s: { email: string }) => s.email === email)
    
    if (existingSubscriber) {
      setIsLoading(false)
      if (onSuccess) {
        onSuccess()
      }
      return
    }

    subscribers.push({
      email,
      subscribedAt: new Date().toISOString()
    })
    localStorage.setItem('melonpixels_subscribers', JSON.stringify(subscribers))

    console.log('[Lead Magnet] New subscriber:', email)

    setIsLoading(false)
    if (onSuccess) {
      onSuccess()
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {headline}
          </h2>
          <p className="text-lg text-primary-100">{subheadline}</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email Address <span className="text-error-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourbusiness.com"
              required
              className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
            />
          </div>
          {error && (
            <p className="text-error-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white font-bold rounded-lg transition-colors text-lg shadow-lg shadow-primary-500/30"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : submitText}
          </button>
          <p className="text-center text-sm text-neutral-500">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  )
}