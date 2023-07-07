import { useCallback } from 'react';

export const useAnimation = () => {
  const animateStars = useCallback((event) => {
    // Add star twinkling logic here
  }, []);

  const animateLanterns = useCallback((event) => {
    // Add lantern floating logic here
  }, []);

  return {
    animateStars,
    animateLanterns,
  };
};