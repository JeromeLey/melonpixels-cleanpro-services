'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function FooterCta() {
  const config = siteConfig.footer

  return (
    <section className="bg-primary-600 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {config.ctaHeadline}
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          {config.ctaSubheadline}
        </p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg"
        >
          {config.primaryCta}
        </Link>
      </div>
    </section>
  )
}