'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

type BorderLinkProps = {
  alpha3code: string
}

export const BorderLink = ({ alpha3code }: BorderLinkProps) => {
  const { push } = useRouter()

  const handleBorderClick = () => {
    push(`/info/${alpha3code}`, {
      scroll: false
    })
  }

  return (
    <Button variant="link" size="xs" className="text-[13px]" onClick={handleBorderClick}>
      {alpha3code}
    </Button>
  )
}
