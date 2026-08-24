import { RefObject, useEffect, useState } from 'react'

// Thanks to:
// https://medium.com/@jacobvejlinjensen/
export function useIsVisible(ref: RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
