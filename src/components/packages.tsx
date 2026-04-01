'use client'

import { siteConfig } from '@/config/site'

export default function Packages() {
  const packages = siteConfig.packages

  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Cleaning Packages
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Flexible plans for every need. Choose from one-time services or monthly packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-xl p-6 border-2 ${
                pkg.highlighted
                  ? 'bg-primary-50 border-primary-500 relative'
                  : 'bg-white border-neutral-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-neutral-800 mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600">₱{pkg.price}</span>
                {pkg.unit && <span className="text-neutral-500 text-sm">{pkg.unit}</span>}
              </div>
              <p className="text-neutral-600 text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/book"
                className={`mt-6 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-semibold transition-colors ${
                  pkg.highlighted
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}