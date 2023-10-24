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
    <div className="flex w-full flex-col justify-between gap-4 xs:flex-row xs:items-center">
      <div className="flex w-clamp max-w-[400px] items-center gap-x-2 rounded-md bg-secondary px-4 py-1">
        <SearchIcon className="h-4 w-4" />

        <Input
          placeholder="Search for a country (name, capital, alt spellings)..."
          onChange={handleOnChange}
          className="w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>

      <RegionSelect />
    </div>
  )
}
