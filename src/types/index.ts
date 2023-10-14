export type Country = {
  name: {
    common: string
  }
  capital?: string
  cca3: string
  population: string
  region: string
  subregion: string
  flags: {
    svg: string
  }
  altSpellings: string[]
}
