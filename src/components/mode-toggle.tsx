'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'

export const ModeToggle = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  const { setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-10 w-10 bg-background" />

        <Skeleton className="h-10 w-20 bg-background" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-x-2 text-sm">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-none bg-transparent transition-colors hover:bg-transparent hover:text-foreground/80">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => { setTheme('light') }}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setTheme('dark') }}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setTheme('system') }}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {`${resolvedTheme?.slice(0, 1).toUpperCase()}${resolvedTheme?.slice(1)} Mode`}
    </div>
  )
}
