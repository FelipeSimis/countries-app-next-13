import { fetchWrapper } from '@/services/api'

import { CountriesProviderContext } from '@/components/providers/countries-provider'
import { HomeHeader } from '@/components/home-header'
import { CountriesWrapper } from '@/components/countries-wrapper'

import { type Country } from '@/types'

type CountryResponse = Omit<Country, 'capital'> & {
  capital?: string[]
}

const Home = async () => {
  const countriesData = await fetchWrapper<CountryResponse[]>('/all?fields=name,capital,cca3,population,region,subregion,flags,altSpellings', {
    next: {
      revalidate: 60 * 60 * 24
    }
  })

  const countries = countriesData.sort((a, b) => a.name.common.localeCompare(b.name.common)).map(country => ({
    ...country,
    capital: country.capital?.at(0),
    name: {
      common: country.name.common
    },
    flags: {
      svg: country.flags.svg
    },
    population: country.population.toLocaleString()
  }))

  return (
    <CountriesProviderContext countries={countries}>
      <div className="container flex flex-col items-center justify-center py-8">
        <HomeHeader />

        <section className="flex flex-wrap justify-center gap-6 py-8">
          <CountriesWrapper />
        </section>
      </div>
    </CountriesProviderContext>
  )
}

export default Home
