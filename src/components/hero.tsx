'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Hero() {
  const config = siteConfig.hero
  const business = siteConfig.business

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-200 font-medium mb-4">{config.label}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance">
              {config.headline}
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-xl">
              {config.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                {config.primaryCta}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-300 text-white font-semibold rounded-lg hover:bg-primary-500 transition-colors"
              >
                {config.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-primary-200 text-sm">Happy Clients</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="text-primary-200 text-sm">Star Rating</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-primary-200 text-sm">Service Types</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold">24hr</div>
                  <div className="text-primary-200 text-sm">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-500/30">
          <p className="text-primary-200 text-sm mb-4">Trusted by families and businesses across {business.location}</p>
        </div>
      </div>
    </section>
  )
}