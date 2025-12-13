import { useEffect, useRef, useState } from 'react'

interface UseLazyLoadOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        if (isElementIntersecting && !hasTriggered) {
          setIsIntersecting(true)
          if (triggerOnce) {
            setHasTriggered(true)
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isIntersecting }
}

// Hook específico para lazy loading de imagens
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '')
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, isIntersecting } = useLazyLoad({ threshold: 0.1 })

  useEffect(() => {
    if (isIntersecting && src && imageSrc !== src) {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
      }
      img.onerror = () => {
        setHasError(true)
      }
    }
  }, [isIntersecting, src, imageSrc])

  return {
    ref,
    src: imageSrc,
    isLoaded,
    hasError,
    isIntersecting
  }
}
