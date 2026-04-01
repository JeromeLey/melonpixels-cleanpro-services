import { Services, TrustIndicators, Faq, FooterCta } from '@/components'

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-primary-200 font-medium mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Professional Cleaning for Every Need
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            From regular home cleaning to specialized commercial janitorial, our trained teams deliver spotless results every time.
          </p>
        </div>
      </section>
      <Services />
      <TrustIndicators />
      <Faq />
      <FooterCta />
    </>
  )
}