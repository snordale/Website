'use client';

import { ReactNode } from 'react';
import { theme } from '@/lib/styles/theme';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';

interface ContentLayoutProps {
  children: ReactNode;
  maxWidth?: string;
}

const MOBILE_NAV_HEIGHT = 64;

export function ContentLayout({ 
  children, 
  maxWidth = '800px',
}: ContentLayoutProps) {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <main style={{
        width: '100%',
        maxWidth,
        boxSizing: 'border-box',
      }}>
        <div style={{
          padding: `${theme.space[6]} ${theme.space[4]}`,
          paddingBottom: `calc(${theme.space[6]} + ${MOBILE_NAV_HEIGHT}px)`,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {children}
        </div>
      </main>
    );
  }

  return (
    <main style={{
      width: '100%',
      maxWidth,
      boxSizing: 'border-box',
    }}>
      <div style={{
        padding: `${theme.space[8]} ${theme.space[4]}`,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {children}
      </div>
    </main>
  );
} 