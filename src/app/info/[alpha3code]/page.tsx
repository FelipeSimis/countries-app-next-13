import Image from 'next/image'

import { fetchWrapper } from '@/services/api'

import { InfoPageHeader } from '@/components/info-page-header'
import { BorderLink } from '@/components/border-link'
import { MapWrapper } from '@/components/maps/map-wrapper'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

type InfoPageProps = {
  params: {
    alpha3code: string
  }
}

type Country = {
  name: {
    common: string
    official: string
  }
  capital: string[]
  unMember: boolean
  tld: string[]
  cca3: string
  currencies: Record<string, {
    name: string
    symbol: string
  }>
  population: number
  car: {
    side: 'right' | 'left'
  }
  region: string
  subregion: string
  languages?: Record<string, string>
  latlng: [number, number]
  borders: string[]
  area: number
  flags: {
    svg: string
  }
  coatOfArms: {
    svg: string
  }
}

export async function generateStaticParams () {
  const countryData = await fetchWrapper<Country[]>('/all?fields=cca3')

  return countryData.map(country => ({
    alpha3code: country.cca3
  }))
}

export async function generateMetadata ({ params }: InfoPageProps) {
  const country = await fetchWrapper<Pick<Country, 'name'>>(`/alpha/${params.alpha3code}?fields=name`, {
    next: {
      revalidate: 60 * 60 * 24 * 7
    }
  })

  if (country.name === undefined) {
    return {
      title: 'Countries Manager - Not Found'
    }
  }

  return {
    title: `Countries Manager - ${country.name.common}`
  }
}

const InfoPage = async ({ params }: InfoPageProps) => {
  const countryData = await fetchWrapper<Country>(`/alpha/${params.alpha3code}?fields=name,capital,unMember,tld,cca3,currencies,population,car,region,subregion,languages,latlng,borders,area,flags,coatOfArms`, {
    next: {
      revalidate: 60 * 60 * 24
    }
  })

  const country = {
    ...countryData,
    capital: countryData.capital?.at(0),
    car: {
      side: countryData.car.side.at(0)?.toUpperCase() + countryData.car.side.slice(1)
    },
    currencies: Object.entries(countryData.currencies).map(([currency, { name, symbol }]) => ({
      label: currency,
      name,
      symbol
    })),
    flags: {
      svg: countryData.flags.svg
    },
    population: countryData.population.toLocaleString()
  }

  return (
    <div className="container flex flex-col items-center justify-center py-8">
      <InfoPageHeader />

      <div className="w-full py-12 gap-10 flex flex-col md:flex-row">
        <div>
          <Image src={country.flags.svg} width={440} height={293} alt="Country flag" priority className="aspect-[1.43] object-cover" />
        </div>

        <div>
          <div className="text-xl font-bold mt-7 mb-5 flex items-center gap-x-2 md:mt-0">
            <h5>{country.name.common}</h5>

            {country.unMember && (
              <Image src="/un-logo.svg" width={24} height={24} alt="UN Member" priority unoptimized />
            )}
          </div>

          <div className="flex flex-col gap-6 text-sm sm:flex-row">
            <div className="gap-y-1 flex flex-col">
              <p className="font-semibold">Official Name: {''}
                <span className="dark:text-[#BEBEBE] font-light">{country.name?.official}</span>
              </p>

              <p className="font-semibold">
                Population: {''}
                <span className="dark:text-[#BEBEBE] font-light">{country.population}</span>
              </p>

              <p className="font-semibold">
                Region: {''}
                <span className="dark:text-[#BEBEBE] font-light">{country.region}</span>
              </p>

              {country.subregion?.length > 0 && (
                <p className="font-semibold">
                  Sub Region: {''}
                  <span className="dark:text-[#BEBEBE] font-light">{country.subregion}</span>
                </p>
              )}

              {country.capital !== undefined && (
                <p className="font-semibold">
                  Capital: {''}
                  <span className="dark:text-[#BEBEBE] font-light">{country.capital}</span>
                </p>
              )}

              {country.tld?.length > 0 && (
                <p className="font-semibold">
                  Top Level Domain: {''}
                  <span className="dark:text-[#BEBEBE] font-light">{country.tld}</span>
                </p>
              )}

              {country.car.side !== undefined && (
                <p className="font-semibold">
                  Traffic side: {''}
                  <span className="dark:text-[#BEBEBE] font-light">{country.car.side}</span>
                </p>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <p className="font-semibold">
                Latitude and Longitude: {''}
                <span className="dark:text-[#BEBEBE] font-light">{country.latlng.map(item => item.toFixed(2).toString()).join(', ')}</span>
              </p>

              <p className="font-semibold">
                Area: {''}
                <span className="dark:text-[#BEBEBE] font-light">{`${country.area.toLocaleString()} km²`}</span>
              </p>

              {(Object.keys(country.currencies).length > 0) && (
                <div className="flex items-center gap-x-2">
                  <p className="font-semibold">
                    Currencies: {''}
                    <span className="dark:text-[#BEBEBE] font-light">{
                      country.currencies.map(currency => `${currency.label}, ${currency.name} (${currency.symbol})`)
                    }</span>
                  </p>
                </div>
              )}

              <p className="font-semibold">
                CCA3: {''}
                <span className="dark:text-[#BEBEBE] font-light">{country.cca3}</span>
              </p>

              {country.languages !== undefined && (
                <p className="font-semibold">
                  Languages: {''}
                  <span className="dark:text-[#BEBEBE] font-light">{Object.values(country.languages).map(language => language).join(', ')}</span>
                </p>
              )}
            </div>
          </div>

          <div className="mt-2">
            {country.coatOfArms.svg !== '' && (
              <div className="flex items-center gap-x-2">
                <p className="font-semibold">Coat of Arms: {''}</p>

                <HoverCard>
                  <HoverCardTrigger>
                    <Image src={country.coatOfArms.svg} sizes="10vw" width={40} height={40} alt="Coat of Arms" className="object-contain aspect-square" />
                  </HoverCardTrigger>

                  <HoverCardContent className="bg-secondary z-[999]">
                    <AspectRatio ratio={1}>
                      <Image src={country.coatOfArms.svg} sizes="50vw" width={300} height={300} alt="Coat of Arms" className="object-contain aspect-square" />
                    </AspectRatio>
                  </HoverCardContent>
                </HoverCard>
              </div>
            )}

            {country.borders?.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">Border Countries: {''}</p>

                <span className="dark:text-[#BEBEBE] font-light flex gap-y-2 gap-x-3 flex-wrap mt-2">{
                  country.borders.map(border => (
                    <BorderLink key={border} alpha3code={border} />
                  ))
                }</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {country.latlng.length > 0 && (
        <MapWrapper latlng={country.latlng} area={country.area} />
      )}
    </div>
  )
}

export default InfoPage
