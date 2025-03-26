'use client';

import { useState } from 'react';
import { theme } from '@/lib/styles/theme';

interface ArtistCardProps {
  name: string;
  image: string;
  url: string;
  genres: string[];
  followers: number;
}

export function ArtistCard({ name, image, url, genres, followers }: ArtistCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.background,
        borderRadius: theme.radii.lg,
        border: `1px solid ${isHovered ? theme.colors.primary : theme.colors.border}`,
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        boxShadow: isHovered ? theme.shadows.lg : theme.shadows.sm,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'relative',
        paddingBottom: '100%',
        backgroundColor: theme.colors.secondary,
        overflow: 'hidden',
      }}>
        <img
          src={image}
          alt={name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.2s ease',
            transform: isHovered ? 'scale(1.05)' : 'none',
          }}
        />
      </div>
      <div style={{ 
        padding: theme.space[4],
        transition: 'transform 0.2s ease',
        transform: isHovered ? 'translateY(-4px)' : 'none',
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1rem',
          fontWeight: 600,
          color: theme.colors.foreground,
          marginBottom: theme.space[2],
        }}>
          {name}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: theme.colors.muted,
          marginBottom: theme.space[2],
          opacity: isHovered ? 0.9 : 0.8,
          transition: 'opacity 0.2s ease',
        }}>
          {genres.slice(0, 2).join(', ')}
        </p>
        <p style={{
          margin: 0,
          fontSize: '0.75rem',
          color: theme.colors.muted,
          opacity: isHovered ? 0.9 : 0.8,
          transition: 'opacity 0.2s ease',
        }}>
          {followers.toLocaleString()} followers
        </p>
      </div>
    </a>
  );
} 