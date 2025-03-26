'use client';

import { ReactNode, useState } from 'react';
import { theme, commonStyles } from '@/lib/styles/theme';

interface CardProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function Card({ title, description, action }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...commonStyles.card,
        transition: 'all 0.2s ease',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered ? theme.shadows.lg : theme.shadows.md,
        backgroundColor: isHovered ? theme.colors.background : theme.colors.background,
        borderColor: isHovered ? theme.colors.primary : theme.colors.border,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: theme.colors.foreground,
        marginBottom: theme.space[2],
        fontFamily: theme.fonts.sans,
        transition: 'transform 0.2s ease',
        transform: isHovered ? 'translateX(4px)' : 'none',
      }}>
        {title}
      </h2>
      
      <p style={{
        color: theme.colors.muted,
        lineHeight: 1.6,
        marginBottom: action ? theme.space[4] : 0,
        fontSize: '0.95rem',
        transition: 'opacity 0.2s ease',
        opacity: isHovered ? 0.9 : 0.8,
      }}>
        {description}
      </p>

      {action && (
        <div style={{
          marginTop: theme.space[4],
          display: 'flex',
          justifyContent: 'flex-end',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'translateY(-2px)' : 'none',
        }}>
          {action}
        </div>
      )}
    </div>
  );
}
