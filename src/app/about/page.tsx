import { siteConfig } from '@/config/site'
import { FooterCta } from '@/components'

export default function AboutPage() {
  const business = siteConfig.business
  const faqs = siteConfig.faqs

  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-primary-200 font-medium mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Trusted Cleaning Partner
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Family-operated since 2015, serving homes and offices across Metro Manila.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                {business.name} was founded in 2015 with a simple mission: to provide reliable, professional cleaning services that Filipino families and businesses can trust.
              </p>
              <p className="text-neutral-600 mb-4">
                What started as a small home cleaning service has grown into a team of over 50 trained professionals serving homes, offices, and commercial spaces across Metro Manila.
              </p>
              <p className="text-neutral-600">
                We believe everyone deserves a clean, healthy space. That&apos;s why we&apos;re committed to using eco-friendly products, treating your space with respect, and delivering consistent, high-quality results every time.
              </p>
            </div>
            <div className="bg-[#F8F7F4] rounded-xl p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-800">Background-Checked Staff</p>
                    <p className="text-sm text-neutral-600">All team members undergo rigorous vetting including background checks and drug tests.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-800">TESDA-Certified Cleaners</p>
                    <p className="text-sm text-neutral-600">Our staff are trained and certified by the Technical Education and Skills Development Authority.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-800">Eco-Friendly Products</p>
                    <p className="text-sm text-neutral-600">We use biodegradable cleaning solutions that are safe for children, pets, and the environment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-800">Insured & Bonded</p>
                    <p className="text-sm text-neutral-600">Full liability coverage for your peace of mind. Any damages are promptly addressed.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Contact Us</h2>
            <p className="text-neutral-600">Reach out to us directly or visit our service area</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Phone</h3>
              <p className="text-neutral-600">{business.phone}</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Email</h3>
              <p className="text-neutral-600">{business.email}</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Location</h3>
              <p className="text-neutral-600">{business.location}</p>
            </div>
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  )
}