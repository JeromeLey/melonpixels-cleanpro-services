'use client'

interface LeadMagnetHeroProps {
  badge?: string
  headline?: string
  subheadline?: string
}

export default function LeadMagnetHero({
  badge = 'Free Download',
  headline = 'The Philippine SME Website Checklist',
  subheadline = '15 things your website needs to attract customers and grow your business in 2026 — from mobile speed to Google visibility.',
}: LeadMagnetHeroProps) {
  return (
    <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium mb-6">
            {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance leading-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            {subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Instant download
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              PDF format
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              No spam guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}