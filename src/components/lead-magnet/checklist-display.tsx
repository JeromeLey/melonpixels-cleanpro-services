'use client'

import { useState } from 'react'

interface ChecklistSection {
  number: number
  title: string
  items: string[]
}

const checklistData: ChecklistSection[] = [
  {
    number: 1,
    title: 'Mobile Readiness',
    items: [
      'Your website loads in under 3 seconds on mobile',
      'All buttons and links are easy to tap with a thumb',
      'Text is readable without pinching or zooming',
    ],
  },
  {
    number: 2,
    title: 'Visibility & Discovery',
    items: [
      'You show up on Google when people search for your business type + city',
      'Your Google Business Profile is verified and complete',
      'Your website has basic SEO (titles, descriptions, headings)',
    ],
  },
  {
    number: 3,
    title: 'Trust & Credibility',
    items: [
      'Your contact information is visible on every page',
      'You have testimonials or reviews displayed',
      'Your website looks professional — not outdated or cluttered',
    ],
  },
  {
    number: 4,
    title: 'Conversion Elements',
    items: [
      'There\'s a clear "next step" on every page (Call, Book, WhatsApp)',
      'Your pricing or service fees are clearly stated',
      'You have a way to capture leads (form, WhatsApp, email)',
    ],
  },
  {
    number: 5,
    title: 'Page Speed',
    items: [
      'Homepage loads in under 4 seconds on 4G',
      'Images are optimized and compressed',
      'No annoying popups or auto-play videos',
    ],
  },
  {
    number: 6,
    title: 'Local SEO',
    items: [
      'Your business name, address, and phone are consistent everywhere',
      'You have a Google Maps embed on your contact page',
      'Your website mentions your city/neighborhood',
    ],
  },
]

const quickWins = [
  'Add WhatsApp button',
  'Update your footer year',
  'Fix broken links',
  'Add a testimonials section',
]

const whyMatters = [
  'Mobile users = 68% of PH traffic',
  '53% leave slow sites',
  'Trust = more inquiries',
]

export default function ChecklistDisplay() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([1, 2, 3, 4]))

  const toggleSection = (sectionNumber: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionNumber)) {
      newExpanded.delete(sectionNumber)
    } else {
      newExpanded.add(sectionNumber)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Your Checklist is Ready!
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The Filipino Business Website Checklist
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            15-Point Checklist to Know If Your Website is Ready to Win Customers
          </p>
        </div>

        <div className="space-y-4">
          {checklistData.map((section) => (
            <div
              key={section.number}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.number)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {section.number}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900">{section.title}</h3>
                </div>
                <svg
                  className={`w-6 h-6 text-neutral-400 transition-transform ${
                    expandedSections.has(section.number) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.has(section.number) && (
                <div className="px-6 pb-6 pt-2 ml-14">
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                        </svg>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-bold text-primary-600 mb-4">Quick Wins You Can Fix Today</h4>
            <ul className="space-y-3">
              {quickWins.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-bold text-primary-600 mb-4">Why These Matter</h4>
            <ul className="space-y-3">
              {whyMatters.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-800 rounded-xl p-8 text-white">
          <h4 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-2">Bonus</h4>
          <h3 className="text-2xl font-bold mb-3">Need Help Fixing These?</h3>
          <p className="text-neutral-300 mb-4">
            MelonPixels offers a Website Health Check — a personalized audit of your site with actionable recommendations. Starting at ₱5,000 for existing sites.
          </p>
          <a
            href="mailto:hello@melonpixels.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-500 text-sm">
            MelonPixels — helping Filipino SMEs grow online
          </p>
          <p className="text-neutral-400 text-xs mt-2">
            hello@melonpixels.com · melonpixels.com
          </p>
        </div>
      </div>
    </section>
  )
}