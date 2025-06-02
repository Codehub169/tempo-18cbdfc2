import { useEffect, useState, useRef } from 'react';

const useScrollTrigger = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // if (options && options.triggerOnce) {
          //  observer.unobserve(entry.target);
          // }
        } else {
          if (options && options.reset) {
            setIsVisible(false);
          }
        }
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

export default useScrollTrigger;
