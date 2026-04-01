'use client'

import { useState } from 'react'
import { EmailCapture, LeadMagnetHero, ChecklistPreview, TrustBadges } from '@/components/lead-magnet'
import ChecklistDisplay from '@/components/lead-magnet/checklist-display'

export default function LeadMagnetPage() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSuccess = () => {
    setIsSubscribed(true)
  }

  return (
    <main className="min-h-screen">
      <LeadMagnetHero />
      <TrustBadges />
      {isSubscribed ? (
        <ChecklistDisplay />
      ) : (
        <>
          <ChecklistPreview />
          <EmailCapture onSuccess={handleSuccess} />
        </>
      )}
    </main>
  )
}