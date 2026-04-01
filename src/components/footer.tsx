import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const business = siteConfig.business
  const config = siteConfig.footer

  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="font-bold text-lg">{business.name}</span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">{business.description}</p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <p>{business.location}</p>
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/packages" className="hover:text-primary-400 transition-colors">Packages</Link></li>
              <li><Link href="/book" className="hover:text-primary-400 transition-colors">Book Now</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/services#home" className="hover:text-primary-400 transition-colors">Home Cleaning</Link></li>
              <li><Link href="/services#deep" className="hover:text-primary-400 transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/services#office" className="hover:text-primary-400 transition-colors">Office Janitorial</Link></li>
              <li><Link href="/services#disinfection" className="hover:text-primary-400 transition-colors">Disinfection</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">{config.copyright}</p>
          <div className="flex items-center gap-6 text-neutral-400 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}