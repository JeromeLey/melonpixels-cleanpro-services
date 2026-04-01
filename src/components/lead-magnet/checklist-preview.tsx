'use client'

interface ChecklistItem {
  category: string
  items: string[]
}

const checklistData: ChecklistItem[] = [
  {
    category: 'Mobile & Speed',
    items: [
      'Mobile-first design verification',
      'Page load speed under 3 seconds',
      'Image optimization checklist',
    ],
  },
  {
    category: 'Google Visibility',
    items: [
      'Google Business Profile setup',
      'Local SEO essentials',
      'Answer engine optimization',
    ],
  },
  {
    category: 'Trust & Credibility',
    items: [
      'Professional design standards',
      'Social proof placement',
      'Contact information visibility',
    ],
  },
  {
    category: 'Conversion Ready',
    items: [
      'Clear call-to-action placement',
      'Inquiry form optimization',
      'WhatsApp integration',
    ],
  },
]

export default function ChecklistPreview() {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What&apos;s Inside the Checklist
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to verify your website is ready to attract customers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {checklistData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-primary-600 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-sm font-bold">
                  {idx + 1}
                </span>
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-primary-600 font-semibold text-lg">
            Plus bonus: Quick-win improvements you can make today
          </p>
        </div>
      </div>
    </section>
  )
}