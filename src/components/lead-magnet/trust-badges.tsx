'use client'

interface TrustBadge {
  label: string
  description: string
}

const trustBadges: TrustBadge[] = [
  {
    label: 'Philippine Businesses',
    description: 'Built for local SMEs',
  },
  {
    label: 'Fast Delivery',
    description: '5-14 day turnaround',
  },
  {
    label: 'Ongoing Support',
    description: 'We stay after launch',
  },
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-1">{badge.label}</h3>
              <p className="text-sm text-neutral-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}