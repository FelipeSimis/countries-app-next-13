import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'

export const GlobalHeader = () => {
  return (
    <header className="bg-secondary py-2 drop-shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-foreground">Where in the world?</Link>

        <ModeToggle />
      </div>
    </header>
  )
}
