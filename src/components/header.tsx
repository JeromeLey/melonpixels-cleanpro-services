'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const business = siteConfig.business

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            <span className="font-bold text-lg text-neutral-800">{business.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-neutral-600 hover:text-primary-600 font-medium">Services</Link>
            <Link href="/packages" className="text-neutral-600 hover:text-primary-600 font-medium">Packages</Link>
            <Link href="/book" className="text-neutral-600 hover:text-primary-600 font-medium">Book</Link>
            <Link href="/about" className="text-neutral-600 hover:text-primary-600 font-medium">About</Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/book"
              className="inline-flex items-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/services" className="text-neutral-600 hover:text-primary-600 font-medium">Services</Link>
              <Link href="/packages" className="text-neutral-600 hover:text-primary-600 font-medium">Packages</Link>
              <Link href="/book" className="text-neutral-600 hover:text-primary-600 font-medium">Book</Link>
              <Link href="/about" className="text-neutral-600 hover:text-primary-600 font-medium">About</Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}