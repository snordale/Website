'use client';

import { useState } from 'react';
import { theme } from '@/lib/styles/theme';

interface TrackCardProps {
  title: string;
  artist: string;
  coverImage: string;
  url: string;
  album: string;
}

export function TrackCard({ title, artist, coverImage, url, album }: TrackCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.space[4],
        padding: theme.space[4],
        backgroundColor: theme.colors.background,
        borderRadius: theme.radii.lg,
        border: `1px solid ${isHovered ? theme.colors.primary : theme.colors.border}`,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateX(4px)' : 'none',
        boxShadow: isHovered ? theme.shadows.lg : theme.shadows.sm,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'relative',
        width: '60px',
        height: '60px',
        borderRadius: theme.radii.md,
        overflow: 'hidden',
        transition: 'transform 0.2s ease',
        transform: isHovered ? 'scale(1.05)' : 'none',
      }}>
        <img
          src={coverImage}
          alt={`${title} album cover`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{ 
        flex: 1,
        transition: 'transform 0.2s ease',
        transform: isHovered ? 'translateX(4px)' : 'none',
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1rem',
          fontWeight: 600,
          color: theme.colors.foreground,
          marginBottom: theme.space[1],
        }}>
          {title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: theme.colors.muted,
          opacity: isHovered ? 0.9 : 0.8,
          transition: 'opacity 0.2s ease',
        }}>
          {artist} • {album}
        </p>
      </div>
    </a>
  );
} 