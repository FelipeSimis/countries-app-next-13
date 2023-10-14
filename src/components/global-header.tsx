import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'

export const GlobalHeader = () => {
  return (
    <header className="py-2 bg-secondary drop-shadow-md">
      <div className="flex items-center justify-between mx-auto container">
        <Link href="/" className="text-sm text-foreground font-semibold">Where in the world?</Link>

        <ModeToggle />
      </div>
    </header>
  )
}
