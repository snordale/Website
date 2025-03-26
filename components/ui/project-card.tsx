'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { theme, commonStyles } from '@/lib/styles/theme';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={link} target="_blank">
            <div
                style={{
                    ...commonStyles.card,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                    boxShadow: isHovered ? theme.shadows.lg : theme.shadows.md,
                    borderColor: isHovered ? theme.colors.primary : theme.colors.border,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            marginBottom: theme.space[2],
                            color: theme.colors.foreground,
                        }}>
                            {title}
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: theme.colors.muted,
                            marginBottom: theme.space[4],
                            lineHeight: 1.6,
                        }}>
                            {description}
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: theme.space[2],
                        }}>
                            {tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    style={{
                                        padding: `${theme.space[1]} ${theme.space[2]}`,
                                        backgroundColor: theme.colors.secondary,
                                        borderRadius: theme.radii.md,
                                        fontSize: '0.75rem',
                                        color: theme.colors.muted,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: isHovered ? theme.colors.primary : theme.colors.muted,
                            transition: 'color 0.2s ease',
                        }}
                    >
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </Link>
    );
} 