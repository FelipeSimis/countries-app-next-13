'use client'

import { ChevronUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const ScrollToTop = () => {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Button variant="secondary" onClick={onClick} className="flex fixed bottom-2 right-2 z-10 rounded-full h-12 w-12 p-0">
      <ChevronUpIcon />
    </Button>
  )
}
