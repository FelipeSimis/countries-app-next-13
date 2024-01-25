'use client'

import { useCallback, useRef, useState } from 'react'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { useScrollTop } from '@/hooks/use-scroll-top'

import { useCountries } from '@/components/providers/countries-provider'
import { CountryCard } from '@/components/country-card'
import { ScrollToTop } from '@/components/scroll-to-top'

export const CountriesWrapper = () => {
  const [isTargetVisible, setIsTargetVisible] = useState(false)

  const targetRef = useRef<HTMLDivElement>(null)

  const { countries, filteredCountries } = useCountries()

  const { isAtTop } = useScrollTop(200)

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsTargetVisible(true)
      }

      if (!entry.isIntersecting) {
        setIsTargetVisible(false)
      }
    })
  }, [])

  useIntersectionObserver(targetRef, callback)

  return (
    <>
      {filteredCountries.length !== 0
        ? (
            filteredCountries.map(country => (
              <CountryCard key={country.name.common} name={country.name.common} cca3={country.cca3} capital={country.capital} image={country.flags.svg} population={country.population} region={country.region} />
            ))
          )
        : (
            countries.map(country => (
              <CountryCard key={country.name.common} name={country.name.common} cca3={country.cca3} capital={country.capital} image={country.flags.svg} population={country.population} region={country.region} />
            ))
          )}

        <div className="absolute -bottom-72" ref={targetRef} />

        {isTargetVisible || (!isAtTop && !isTargetVisible) ? <ScrollToTop /> : null}
    </>
  )
}
