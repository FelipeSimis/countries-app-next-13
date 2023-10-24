'use client'

import type Leaflet from 'leaflet'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

type MapProps = {
  center: [number, number]
  area: number
}

const UpdateMapView = ({ center, area }: MapProps) => {
  const map = useMap()

  if (center !== undefined) {
    map.setView(center, area <= 1800 ? 10 : 5)
  }

  return null
}

export const Map = ({ center, area }: MapProps) => {
  return (
    <MapContainer
      center={center as Leaflet.LatLngExpression}
      zoom={5}
      className="h-96 w-full"
      zoomControl={false}
      touchZoom={false}
    >
      <UpdateMapView center={center} area={area} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/felipe-simis/ckjxe7zc01lsn17pc73e1nx4v/tiles/256/{z}/{x}/{y}@2x?fresh=true&title=view&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />
    </MapContainer>
  )
}
