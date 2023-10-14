import { useEffect, useState } from 'react'

export const useScrollTop = (topThreshold: number) => {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY <= topThreshold) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [topThreshold])

  return {
    isAtTop
  }
}
