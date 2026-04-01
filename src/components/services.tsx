'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import ServiceCard from './service-card'

export default function Services() {
  const services = siteConfig.services

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            From regular home cleaning to specialized commercial janitorial, we have the right solution for your space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/book"
            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  )
}