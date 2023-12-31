'use client'

import dynamic from 'next/dynamic'

import { Skeleton } from '@/components/ui/skeleton'

const Map = dynamic(async () => await import('@/components/maps/map').then(mod => mod.Map), {
  ssr: false,
  loading: () => <Skeleton className="h-96 w-full" />
})

type MapWrapperProps = {
  latlng: [number, number]
  area: number
}

export const MapWrapper = ({ latlng, area }: MapWrapperProps) => {
  return (
    <Map center={latlng} area={area} />
  )
}
