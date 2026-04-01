import { BookingForm, TrustIndicators, FooterCta } from '@/components'

export default function BookPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-primary-200 font-medium mb-4">Book Now</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Fill out the form below and we&apos;ll confirm your booking within 2 hours.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#F8F7F4]">
        <div className="max-w-3xl mx-auto px-4">
          <BookingForm />
        </div>
      </section>
      <TrustIndicators />
      <FooterCta />
    </>
  )
}