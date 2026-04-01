'use client'

import { useState } from 'react'

interface FormData {
  propertyType: string
  serviceType: string
  propertySize: string
  rooms: string
  preferredDate: string
  preferredTime: string
  specialInstructions: string
  name: string
  email: string
  phone: string
  address: string
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    serviceType: '',
    propertySize: '',
    rooms: '',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const estimatePrice = () => {
    let base = 0
    if (formData.propertyType === 'house') base += 2000
    if (formData.propertyType === 'condo') base += 1500
    if (formData.propertyType === 'office') base += 3000
    
    if (formData.serviceType === 'deep') base += 2000
    if (formData.serviceType === 'moveinout') base += 2500
    if (formData.serviceType === 'postconstruction') base += 3500
    
    if (formData.rooms === '1') base += 0
    if (formData.rooms === '2') base += 500
    if (formData.rooms === '3') base += 1000
    if (formData.rooms === '4+') base += 1500
    
    return base
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-800 mb-2">Thank You!</h3>
        <p className="text-neutral-600 mb-6">
          Your booking request has been submitted. Our team will confirm within 2 hours.
        </p>
        <p className="text-sm text-neutral-500">
          We&apos;ve sent a confirmation to {formData.email || 'your email'}.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                step >= s ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-16 md:w-24 h-1 ${step > s ? 'bg-primary-500' : 'bg-neutral-200'}`} />
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-500 text-center mt-2">
          Step {step} of 3: {step === 1 ? 'Property Details' : step === 2 ? 'Schedule' : 'Your Information'}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Property Type</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select property type</option>
                <option value="house">House</option>
                <option value="condo">Condo/Apartment</option>
                <option value="office">Office/Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select service type</option>
                <option value="home">Home Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="moveinout">Move-In/Move-Out</option>
                <option value="postconstruction">Post-Construction</option>
                <option value="office">Office Janitorial</option>
                <option value="carpet">Carpet & Upholstery</option>
                <option value="disinfection">Disinfection</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Property Size</label>
              <select
                name="propertySize"
                value={formData.propertySize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select size (optional)</option>
                <option value="studio">Studio/Studio Type</option>
                <option value="1br">1 Bedroom</option>
                <option value="2br">2 Bedrooms</option>
                <option value="3br">3 Bedrooms</option>
                <option value="4plus">4+ Bedrooms</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Number of Rooms</label>
              <select
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select rooms</option>
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4+">4+ Rooms</option>
              </select>
            </div>

            <button
              type="button"
              onClick={nextStep}
              disabled={!formData.propertyType || !formData.serviceType}
              className="w-full py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-300 text-white font-semibold rounded-lg transition-colors"
            >
              Next Step
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 8PM)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Special Instructions</label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows={3}
                placeholder="Pets on premises, fragile items, access info, etc."
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {formData.propertyType && formData.serviceType && (
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-sm text-primary-700 mb-1">Estimated Price Range</p>
                <p className="text-2xl font-bold text-primary-600">₱{estimatePrice().toLocaleString()} - ₱{(estimatePrice() * 1.3).toLocaleString()}</p>
                <p className="text-xs text-primary-600 mt-1">Final quote confirmed after review</p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-3 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-semibold rounded-lg transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.preferredDate || !formData.preferredTime}
                className="flex-1 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-300 text-white font-semibold rounded-lg transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0917-123-4567"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Property Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Complete address for the service"
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div className="bg-primary-50 rounded-lg p-4">
              <p className="text-sm text-primary-700 mb-1">Estimated Total</p>
              <p className="text-2xl font-bold text-primary-600">₱{estimatePrice().toLocaleString()} - ₱{(estimatePrice() * 1.3).toLocaleString()}</p>
              <p className="text-xs text-primary-600 mt-1">Team will confirm within 2 hours</p>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-3 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-semibold rounded-lg transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              >
                Submit Booking
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}