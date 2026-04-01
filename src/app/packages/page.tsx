import { Packages, Proof, FooterCta } from '@/components'

export default function PackagesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-primary-200 font-medium mb-4">Our Packages</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Flexible Plans for Every Space
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Choose from one-time deep cleans or monthly care plans. All packages include our signature quality guarantee.
          </p>
        </div>
      </section>
      <Packages />
      <Proof />
      <FooterCta />
    </>
  )
}