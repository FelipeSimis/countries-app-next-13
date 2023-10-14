'use client'

import { type ChangeEvent, startTransition } from 'react'
import { SearchIcon } from 'lucide-react'

import { useCountries } from '@/components/providers/countries-provider'
import { Input } from '@/components/ui/input'
import { RegionSelect } from '@/components/region-select'

export const HomeHeader = () => {
  const { findByName } = useCountries()

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      findByName(event.target.value)
    })
  }

  return (
    <div className="flex flex-col justify-between gap-4 w-full xs:flex-row xs:items-center">
      <div className="flex items-center gap-x-2 bg-secondary rounded-md px-4 py-1 w-clamp max-w-[400px]">
        <SearchIcon className="h-4 w-4" />

        <Input
          placeholder="Search for a country (name, capital, alt spellings)..."
          onChange={handleOnChange}
          className="w-full bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent border-none"
        />
      </div>

      <RegionSelect />
    </div>
  )
}
