'use client'

import { subregions } from '@/contants'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCountries } from '@/components/providers/countries-provider'

export const RegionSelect = () => {
  const { handleFilterCountries } = useCountries()

  return (
    <Select onValueChange={handleFilterCountries}>
      <SelectTrigger className="w-[180px] bg-secondary h-12">
        <SelectValue placeholder="All" />
      </SelectTrigger>

      <SelectContent className="max-h-[50vh]">
        <SelectGroup>
          <SelectLabel className="pl-4 text-muted-foreground">Region</SelectLabel>

          <SelectItem value="all">All</SelectItem>
          <SelectItem value="africa" className="pl-8">Africa</SelectItem>
          <SelectItem value="america" className="pl-8">America</SelectItem>
          <SelectItem value="antarctic" className="pl-8">Antarctic</SelectItem>
          <SelectItem value="asia" className="pl-8">Asia</SelectItem>
          <SelectItem value="europe" className="pl-8">Europe</SelectItem>
          <SelectItem value="oceania" className="pl-8">Oceania</SelectItem>
        </SelectGroup>

        <SelectGroup>
          <SelectLabel className="pl-4 text-muted-foreground">Subregion</SelectLabel>

          {subregions.map(subregion => (
            <SelectItem key={subregion} value={subregion} className="pl-8">{subregion}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
