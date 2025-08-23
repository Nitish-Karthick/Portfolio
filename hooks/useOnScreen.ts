import { useState, useEffect, useRef, RefObject } from 'react';

interface UseOnScreenOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useOnScreen = (options?: UseOnScreenOptions): [RefObject<any>, boolean] => {
  const ref = useRef<any>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (options?.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else {
        if (!options?.triggerOnce) {
            setIntersecting(false);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};