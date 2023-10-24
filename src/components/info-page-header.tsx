'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

export const InfoPageHeader = () => {
  const { back, forward } = useRouter()

  return (
    <div className="flex w-full items-center justify-between">
      <Button onClick={back} variant="secondary" size="sm" className="gap-2 text-sm font-normal">
        <ArrowLeftIcon size={14} /> Back
      </Button>

      <Button onClick={forward} variant="secondary" size="sm" className="gap-2 text-sm font-normal">
        Forward <ArrowRightIcon size={14} />
      </Button>
    </div>
  )
}
