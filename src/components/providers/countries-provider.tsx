'use client'

import { type ReactNode, useContext, useMemo, createContext, useState, useCallback } from 'react'

import { type Country } from '@/types'

type CountriesContextData = {
  countries: Country[]
  filteredCountries: Country[]
  findByName: (name: string) => void
  handleFilterCountries: (region: Region) => void
}

type CountriesProviderProps = {
  countries: Country[]
  children: ReactNode
}

const CountriesContext = createContext<CountriesContextData>({
  countries: [],
  filteredCountries: [],
  findByName: () => {},
  handleFilterCountries: () => {}
} satisfies CountriesContextData)

const regionFilters = {
  all: (countries: Country[]) => countries,
  africa: (countries: Country[]) => countries.filter(country => country.region === 'Africa'),
  america: (countries: Country[]) => countries.filter(country => country.region === 'Americas'),
  asia: (countries: Country[]) => countries.filter(country => country.region === 'Asia'),
  europe: (countries: Country[]) => countries.filter(country => country.region === 'Europe'),
  oceania: (countries: Country[]) => countries.filter(country => country.region === 'Oceania'),
  antarctic: (countries: Country[]) => countries.filter(country => country.region === 'Antarctic'),
  'No subregion': (countries: Country[]) => countries.filter(country => country.subregion === ''),
  'Australia and New Zealand': (countries: Country[]) => countries.filter(country => country.subregion === 'Australia and New Zealand'),
  Caribbean: (countries: Country[]) => countries.filter(country => country.subregion === 'Caribbean'),
  'Central Africa': (countries: Country[]) => countries.filter(country => country.subregion === 'Central Africa'),
  'Central America': (countries: Country[]) => countries.filter(country => country.subregion === 'Central America'),
  'Central Asia': (countries: Country[]) => countries.filter(country => country.subregion === 'Central Asia'),
  'Eastern Africa': (countries: Country[]) => countries.filter(country => country.subregion === 'Eastern Africa'),
  'Eastern Asia': (countries: Country[]) => countries.filter(country => country.subregion === 'Eastern Asia'),
  'Eastern Europe': (countries: Country[]) => countries.filter(country => country.subregion === 'Eastern Europe'),
  Melanesia: (countries: Country[]) => countries.filter(country => country.subregion === 'Melanesia'),
  Micronesia: (countries: Country[]) => countries.filter(country => country.subregion === 'Micronesia'),
  'Middle Africa': (countries: Country[]) => countries.filter(country => country.subregion === 'Middle Africa'),
  'Northern Africa': (countries: Country[]) => countries.filter(country => country.subregion === 'Northern Africa'),
  'Northern Europe': (countries: Country[]) => countries.filter(country => country.subregion === 'Northern Europe'),
  Polynesia: (countries: Country[]) => countries.filter(country => country.subregion === 'Polynesia'),
  'South America': (countries: Country[]) => countries.filter(country => country.subregion === 'South America'),
  'South-Eastern Asia': (countries: Country[]) => countries.filter(country => country.subregion === 'South-Eastern Asia'),
  'Southern Africa': (countries: Country[]) => countries.filter(country => country.subregion === 'Southern Africa'),
  'Southern Asia': (countries: Country[]) => countries.filter(country => country.subregion === 'Southern Asia'),
  'Southern Europe': (countries: Country[]) => countries.filter(country => country.subregion === 'Southern Europe'),
  'Southeast Europe': (countries: Country[]) => countries.filter(country => country.subregion === 'Southeast Europe'),
  'Western Africa': (countries: Country[]) => countries.filter(country => country.subregion === 'Western Africa'),
  'Western Asia': (countries: Country[]) => countries.filter(country => country.subregion === 'Western Asia'),
  'Western Europe': (countries: Country[]) => countries.filter(country => country.subregion === 'Western Europe')
}

export type Region = keyof typeof regionFilters

const CountriesProviderContext = ({
  countries,
  children
}: CountriesProviderProps): JSX.Element => {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

  const findByName = useCallback((searchTerm: string) => {
    const searchTermLower = searchTerm.toLowerCase()

    const searchedCountries = countries.filter(country => {
      const commonNameMatch = country.name.common.toLowerCase().includes(searchTermLower)
      const altSpellingsMatch = country.altSpellings.some(altSpelling => altSpelling.toLowerCase().includes(searchTermLower))
      const capitalMatch = country.capital?.toLowerCase().includes(searchTermLower)

      return commonNameMatch || altSpellingsMatch || capitalMatch
    })

    setFilteredCountries(searchedCountries)
  }, [countries])

  const handleFilterCountries = useCallback((region: Region) => {
    if (countries.length > 0) {
      const filtered = regionFilters[region]?.(countries) ?? countries

      setFilteredCountries(filtered)
    }
  }, [countries])

  const values = useMemo(
    () => ({
      countries,
      filteredCountries,
      findByName,
      handleFilterCountries
    }),
    [countries, filteredCountries, findByName, handleFilterCountries]
  )

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  )
}

function useCountries (): CountriesContextData {
  const context = useContext(CountriesContext)

  if (context === undefined) { throw new Error('useCountries must be used within an CountriesProvider') }

  return context
}

export { CountriesProviderContext, useCountries }
