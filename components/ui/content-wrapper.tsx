'use client';

import { useEffect, CSSProperties } from 'react';
import { theme } from '@/lib/styles/theme';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';

const SIDEBAR_MAX_WIDTH = 240;
const MOBILE_NAV_HEIGHT = 64;

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isMobile } = useBreakpoint();

  // Calculate wrapper styles based on breakpoint
  const wrapperStyles: CSSProperties = {
    marginLeft: isMobile ? 0 : 0, // Remove sidebar offset as it's handled by flex layout
    paddingBottom: isMobile ? MOBILE_NAV_HEIGHT : 0,
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    width: '100%',
    boxSizing: 'border-box',
    transition: 'margin 0.3s ease',
  };

  return <div style={wrapperStyles}>{children}</div>;
} 