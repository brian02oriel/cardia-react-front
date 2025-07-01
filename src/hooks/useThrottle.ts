import { useState, useEffect, useRef, useCallback } from 'react';

const useThrottle = (callback: any, delay: number) => {
    const lastRan = useRef(Date.now());
    const timeoutRef = useRef(null as ReturnType<typeof setTimeout> | null);
  
    const throttledCallback = useCallback((...args: string[]) => {
      const now = Date.now();
      
      if (now - lastRan.current >= delay) {
        // Execute immediately if enough time has passed
        callback(...args);
        lastRan.current = now;
      } else {
        // Clear existing timeout and set a new one
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastRan.current = Date.now();
        }, delay - (now - lastRan.current));
      }
    }, [callback, delay]);
  
    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);
  
    return throttledCallback;
  }

  export default useThrottle;