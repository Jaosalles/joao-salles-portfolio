import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  // Optionally provide an external ref so tests or callers can control the observed element
  externalRef?: React.RefObject<HTMLElement>;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px', triggerOnce = true } = options;

  const internalRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = (options.externalRef as React.RefObject<HTMLElement>) || internalRef;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const isElementIntersecting = entry.isIntersecting;

        if (isElementIntersecting && !hasTriggered) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, ref]);

  return { ref, isIntersecting };
};

// Hook específico para lazy loading de imagens
export const useLazyImage = (
  src: string,
  placeholder?: string,
  externalRef?: React.RefObject<HTMLElement>
) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isIntersecting } = useLazyLoad({ threshold: 0.1, externalRef });

  useEffect(() => {
    if (isIntersecting && src && imageSrc !== src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setHasError(true);
      };
    }
  }, [isIntersecting, src, imageSrc]);

  return {
    ref,
    src: imageSrc,
    isLoaded,
    hasError,
    isIntersecting,
  };
};
