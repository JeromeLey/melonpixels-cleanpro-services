export const TALLY_FORM_URL = 'https://tally.so/r/w95xj7'

export interface SiteConfig {
  business: {
    name: string
    tagline: string
    description: string
    location: string
    phone?: string
    email?: string
    whatsapp?: string
  }
  meta: {
    title: string
    description: string
    locale: string
  }
  hero: {
    label?: string
    headline: string
    subheadline: string
    primaryCta: string
    secondaryCta?: string
  }
  services: {
    id: string
    name: string
    icon: string
    description: string
    features: string[]
    pricing?: string
  }[]
  packages: {
    id: string
    name: string
    price: string
    unit?: string
    description: string
    features: string[]
    highlighted?: boolean
  }[]
  proof: {
    label?: string
    title: string
    description: string
    testimonials?: { name: string; role: string; quote: string; rating: number }[]
  }
  trustIndicators: {
    icon: string
    text: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  footer: {
    ctaHeadline: string
    ctaSubheadline: string
    primaryCta: string
    copyright: string
  }
}

export const siteConfig: SiteConfig = {
  business: {
    name: 'CleanPro Services',
    tagline: 'Professional Cleaning & Janitorial Solutions',
    description: 'Professional cleaning services for homes and offices in the Philippines. Trusted, background-checked staff with eco-friendly products.',
    location: 'Metro Manila, Philippines',
    phone: '(02) 8123-4567',
    email: 'info@cleanproservices.ph',
    whatsapp: '+63917-123-4567',
  },
  meta: {
    title: 'CleanPro Services - Professional Cleaning & Janitorial | Metro Manila',
    description: 'Professional cleaning services for homes and offices in Metro Manila. Insured, background-checked staff. Home cleaning, deep cleaning, office janitorial, and more.',
    locale: 'en_PH',
  },
  hero: {
    label: 'Professional Cleaning Services',
    headline: 'Your Space, Professionally Clean',
    subheadline: 'Expert cleaning services for homes and offices in Metro Manila. Insured & bonded staff, eco-friendly products, 4.9-star rated.',
    primaryCta: 'Get a Free Quote in 60 Seconds',
    secondaryCta: 'View Our Services',
  },
  services: [
    {
      id: 'home',
      name: 'Home Cleaning',
      icon: 'Home',
      description: 'Regular home cleaning to keep your living spaces spotless and comfortable.',
      features: ['Bathrooms & kitchens', 'Bedrooms & living areas', 'Floors & surfaces', 'Weekly/bi-weekly/monthly'],
      pricing: 'From ₱1,500 per session',
    },
    {
      id: 'deep',
      name: 'Deep Cleaning',
      icon: 'Sparkles',
      description: 'Thorough top-to-bottom cleaning for a fresh start.',
      features: ['Inside appliances', 'Behind furniture', 'Grout & tile cleaning', 'Cabinet interiors'],
      pricing: 'From ₱3,500',
    },
    {
      id: 'moveinout',
      name: 'Move-In/Move-Out',
      icon: 'Truck',
      description: 'Landlord and tenant-ready cleaning for property transitions.',
      features: ['Checklist-based', 'Same-day service available', 'All rooms covered', 'Deep sanitization'],
      pricing: 'From ₱4,000',
    },
    {
      id: 'postconstruction',
      name: 'Post-Construction',
      icon: 'Hammer',
      description: 'Specialized cleaning after renovations or construction.',
      features: ['Dust & debris removal', 'Window cleaning', 'Floor polishing', 'Construction residue cleanup'],
      pricing: 'From ₱5,000 (by sqm)',
    },
    {
      id: 'office',
      name: 'Office Janitorial',
      icon: 'Building',
      description: 'Daily or scheduled janitorial services for commercial spaces.',
      features: ['Daily/after-hours service', 'Supply management', 'Supervisor assigned', 'Custom schedules'],
      pricing: 'From ₱8,000/month/cleaner',
    },
    {
      id: 'carpet',
      name: 'Carpet & Upholstery',
      icon: 'Armchair',
      description: 'Professional steam cleaning for carpets and furniture.',
      features: ['Steam extraction', 'Stain removal', 'Dry within 4 hours', 'Deodorizing treatment'],
      pricing: 'From ₱2,000',
    },
    {
      id: 'disinfection',
      name: 'Disinfection Services',
      icon: 'Shield',
      description: 'Hospital-grade disinfection for peace of mind.',
      features: ['COVID-protocol compliant', 'Certificate issued', 'Eco-friendly options', 'Residential & commercial'],
      pricing: 'From ₱2,500',
    },
  ],
  packages: [
    {
      id: 'home-weekly',
      name: 'Home Care Weekly',
      price: '4,500',
      unit: '/month',
      description: 'Weekly home cleaning to keep your space consistently clean.',
      features: [
        '4 sessions per month',
        '2-hour standard clean',
        'All rooms & surfaces',
        'Bathroom sanitization',
        'Kitchen deep clean',
        'Flexible scheduling',
      ],
      highlighted: true,
    },
    {
      id: 'home-biweekly',
      name: 'Home Care Bi-Weekly',
      price: '2,800',
      unit: '/month',
      description: 'Bi-weekly home cleaning for regular maintenance.',
      features: [
        '2 sessions per month',
        '2-hour standard clean',
        'All rooms & surfaces',
        'Bathroom sanitization',
        'Kitchen wipe-down',
        'Flexible scheduling',
      ],
    },
    {
      id: 'home-monthly',
      name: 'Home Care Monthly',
      price: '1,500',
      unit: '/session',
      description: 'One-time deep cleaning when you need it most.',
      features: [
        'Single session',
        'Deep cleaning focus',
        'All rooms covered',
        'Inside appliances',
        'Window interior',
        'Appointment booking',
      ],
    },
    {
      id: 'office-daily',
      name: 'Office Janitorial Daily',
      price: '8,000',
      unit: '/month/cleaner',
      description: 'Daily janitorial service for your office.',
      features: [
        '5 days/week service',
        '8-hour shift coverage',
        'All common areas',
        'Restroom maintenance',
        'Supply management',
        'Supervisor oversight',
      ],
    },
    {
      id: 'office-contract',
      name: 'Office Contract',
      price: '25,000',
      unit: '/month',
      description: 'Complete office janitorial package.',
      features: [
        '2 dedicated cleaners',
        '5 days/week',
        'Full floor coverage',
        'Kitchen/break room',
        'Supply replenishment',
        'Monthly reporting',
      ],
    },
  ],
  trustIndicators: [
    { icon: 'Shield', text: 'Insured & Bonded' },
    { icon: 'UserCheck', text: 'Background-Checked Staff' },
    { icon: 'Leaf', text: 'Eco-Friendly Products' },
    { icon: 'Star', text: '4.9-Star Rating' },
  ],
  proof: {
    label: 'Customer Reviews',
    title: 'What Our Clients Say',
    description: 'Trusted by hundreds of families and businesses across Metro Manila.',
    testimonials: [
      {
        name: 'Maria Santos',
        role: 'Homeowner, Quezon City',
        quote: 'CleanPro has been keeping our home spotless for 6 months now. Their team is punctual, thorough, and always friendly. Worth every peso!',
        rating: 5,
      },
      {
        name: 'James Rodriguez',
        role: 'Office Manager, Makati',
        quote: 'We switched to CleanPro for our 3-floor office and the difference is night and day. Professional, reliable, and they actually listen to our needs.',
        rating: 5,
      },
      {
        name: 'Ana Reyes',
        role: 'Landlord, Bonifacio Global City',
        quote: 'Used CleanPro for move-out cleaning and got my full deposit back. Detailed checklist, photos sent after - exactly what I needed.',
        rating: 5,
      },
      {
        name: 'David Chen',
        role: 'Restaurant Owner, Ortigas',
        quote: 'Post-construction cleanup was done in one day. They handled the renovation mess professionally. Highly recommend for commercial projects.',
        rating: 5,
      },
    ],
  },
  faqs: [
    {
      question: 'Do I need to be home during the cleaning?',
      answer: 'No, you don\'t need to be home. Many clients prefer to provide a spare key or code. Our staff are background-checked and insured, so you can trust them with your space.',
    },
    {
      question: 'Are your cleaning products safe for children and pets?',
      answer: 'Yes! We use eco-friendly, biodegradable cleaning products that are safe for children, pets, and people with allergies. Let us know if you have specific preferences.',
    },
    {
      question: 'What if something breaks or gets damaged?',
      answer: 'All our cleaners are fully insured and bonded. If anything is damaged, report it within 24 hours and we\'ll handle it immediately. We take responsibility seriously.',
    },
    {
      question: 'How do I book a service?',
      answer: 'Fill out our booking form with your details and preferred schedule. We\'ll confirm within 2 hours. For urgent needs, call or message us directly on WhatsApp.',
    },
    {
      question: 'Do you provide your own supplies and equipment?',
      answer: 'Yes! All our cleaners bring their own HEPA vacuum, mop, eco-friendly cleaning solutions, and microfiber cloths. Just provide access to water.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We cover Metro Manila including Makati, BGC, Quezon City, Ortigas, Alabang, and surrounding areas. Enter your barangay on our contact page to confirm coverage.',
    },
  ],
  footer: {
    ctaHeadline: 'Ready for a Cleaner Space?',
    ctaSubheadline: 'Get your free quote in 60 seconds. No commitment required.',
    primaryCta: 'Book Now',
    copyright: `© ${new Date().getFullYear()} CleanPro Services. All rights reserved. | Metro Manila, Philippines`,
  },
}