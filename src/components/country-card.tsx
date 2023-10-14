import Link from 'next/link'
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { memo } from 'react'

type CountryCardProps = {
  name: string
  capital?: string
  cca3: string
  image: string
  population: string
  region: string
}

export const CountryCard = memo(function CountryCard ({ name, capital, cca3, image, population, region }: CountryCardProps) {
  return (
    <Link href={`/info/${cca3}`}>
      <div className="bg-secondary rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 w-[280px] max-w-[280px]">
        <AspectRatio ratio={280 / 193}>
          <Image
            src={image}
            alt={`${name} flag`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </AspectRatio>

        <div className="py-5 px-3">
          <h5 className="text-foreground mb-1 text-base">{name}</h5>

          <div className="text-sm">
            Population: <span className="font-light">{population.toLocaleString()}</span>
          </div>

          <div className="text-sm">
            Region: <span className="font-light">{region}</span>
          </div>

          <div className="text-sm">
            Capital: <span className="font-light">{capital ?? 'N/A'}</span>
          </div>
        </div>
      </div>
    </Link>
  )
})
