<h1 align="center">Countries App</h1>

## Prerequisites

- **NodeJS**: If you don't have it, just download it [here](https://nodejs.org/en/download/)

## Techs

- [x] [NextJS](https://nextjs.org/)
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [TailwindCSS](https://tailwindcss.com/)
- [x] [Shadcn](https://ui.shadcn.com/)
- [x] [React-Leaflet](https://react-leaflet.js.org/docs/start-introduction)
- [x] [RestCountriesAPI](https://restcountries.com/)

## Getting Started

**Generate a API KEY**
Access [MapBox](https://account.mapbox.com/) and sign in, after that click in "Create a token"

**Clone the project and access the folder**

```bash
  $ git clone https://github.com/FelipeSimis/countries-app-next-13.git

  # After cloning the project, run the following command
  $ cd countries-app-next-13

  # Install the dependencies
  $ pnpm install

  # Open the project in Visual Studio Code
  $ code .

  # Rename the .env.example file to .env and add the API key you got from MapBox
  NEXT_PUBLIC_MAPBOX_TOKEN={YOUR API KEY GOES HERE, WITHOUT THE BRACKETS}

  # To finish, run the project
  $ pnpm run dev
```
