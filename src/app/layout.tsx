import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { GlobalHeader } from '@/components/global-header'

import '@/styles/globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries Manager',
  description: 'A simple application that contains basic information from all countries in the world'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} bg-background scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalHeader />

          <main className="w-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
