'use client';

import { CSSProperties, useCallback, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { theme } from '@/lib/styles/theme';
import { Home, User, Briefcase, Music } from 'lucide-react';
import data from '@/lib/data.json';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';

const iconMap = {
  Home,
  User,
  Briefcase,
  Music,
} as const;

const NAV_ITEM_HEIGHT = 32;
const MOBILE_NAV_HEIGHT = 64;
const SIDEBAR_MAX_WIDTH = 240;
const SIDEBAR_BG_COLOR = '#f8f8fa'; // Slightly different from the main background

type NavItem = {
  name: string;
  path: string;
  icon: keyof typeof iconMap;
};

export function Navigation() {
  const pathname = usePathname();
  const { isMobile } = useBreakpoint();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Prevent content shift when on mobile by adding a CSS variable with the nav height
  useEffect(() => {
    if (isMobile && navRef.current) {
      document.documentElement.style.setProperty('--mobile-nav-height', `${MOBILE_NAV_HEIGHT}px`);
    }
    return () => {
      document.documentElement.style.removeProperty('--mobile-nav-height');
    };
  }, [isMobile]);

  const navStyles: CSSProperties = isMobile 
    ? {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: MOBILE_NAV_HEIGHT,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        borderTop: `1px solid ${theme.colors.border}`,
        padding: `${theme.space[3]} ${theme.space[4]}`,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
      } 
    : {
        position: 'sticky',
        top: 0,
        left: 0,
        width: SIDEBAR_MAX_WIDTH,
        minWidth: SIDEBAR_MAX_WIDTH,
        height: '100vh',
        backgroundColor: SIDEBAR_BG_COLOR,
        borderRight: `1px solid ${theme.colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        padding: theme.space[4],
        paddingTop: theme.space[8],
        overflowY: 'auto',
        overflowX: 'hidden',
        flexShrink: 0,
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        zIndex: 10,
        gap: theme.space[1],
      };

  const getItemStyles = useCallback((item: NavItem): CSSProperties => {
    const isActive = pathname === item.path;
    const isHovered = hoveredItem === item.path;
    
    return {
      display: 'flex',
      alignItems: 'center',
      gap: theme.space[2],
      color: isActive ? theme.colors.primary : isHovered ? theme.colors.foreground : theme.colors.muted,
      backgroundColor: isActive 
        ? `${theme.colors.primary}15` 
        : isHovered 
          ? 'rgba(0, 0, 0, 0.04)' 
          : 'transparent',
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: isActive ? 500 : 400,
      height: isMobile ? 'auto' : `${NAV_ITEM_HEIGHT}px`,
      padding: isMobile 
        ? `${theme.space[2]} ${theme.space[3]}`
        : `0 ${theme.space[2]}`,
      borderRadius: theme.radii.lg,
      width: isMobile ? 'auto' : '100%',
      justifyContent: isMobile ? 'center' : 'flex-start',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      outline: 'none',
    };
  }, [isMobile, pathname, hoveredItem]);

  return (
    <nav 
      ref={navRef}
      style={navStyles}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div style={{
        marginBottom: theme.space[6],
        padding: theme.space[2],
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: 600,
          color: theme.colors.foreground,
        }}>
          Sam Nordale
        </h2>
      </div>
      
      {data.navigation.items.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];
        
        return (
          <Link 
            key={item.path} 
            href={item.path} 
            style={getItemStyles(item as NavItem)}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
            onFocus={() => setHoveredItem(item.path)}
            onBlur={() => setHoveredItem(null)}
            aria-current={pathname === item.path ? 'page' : undefined}
            role="menuitem"
          >
            <Icon 
              size={isMobile ? 22 : 14} 
              aria-hidden="true"
            />
            {!isMobile && (
              <span style={{ 
                whiteSpace: 'nowrap',
                fontSize: '14px',
                letterSpacing: '-0.01em',
              }}>
                {item.name}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
} 