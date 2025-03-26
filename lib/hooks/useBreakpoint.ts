import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
} as const;

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.MOBILE) {
        setBreakpoint('mobile');
      } else if (width < BREAKPOINTS.TABLET) {
        setBreakpoint('tablet');
      } else if (width < BREAKPOINTS.DESKTOP) {
        setBreakpoint('desktop');
      } else {
        setBreakpoint('wide');
      }
    };

    // Initial check
    updateBreakpoint();

    // Add event listener
    window.addEventListener('resize', updateBreakpoint);

    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isWide: breakpoint === 'wide',
  };
} 