'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Error = ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-4 bg-error bg-no-repeat bg-center bg-contain">
      <h1 className="text-4xl text-white">Oops!</h1>
      <p className="text-white">Something went wrong</p>

      <Button variant="ghost" onClick={reset}>Try again</Button>

      <Link href="/" className="text-white underline">Go back home</Link>
    </div>
  )
}

export default Error
