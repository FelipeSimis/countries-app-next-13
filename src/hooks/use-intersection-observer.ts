import { type RefObject, useEffect } from 'react'

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const useIntersectionObserver = (
  targetRef: RefObject<HTMLElement>,
  callback: (entries: IntersectionObserverEntry[]) => void
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const target = targetRef.current

    if (target !== null) {
      observer.observe(target)
    }

    return () => {
      if (target !== null) {
        observer.unobserve(target)
      }
    }
  }, [callback, targetRef])
}
