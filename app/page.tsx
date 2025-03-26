import Link from "next/link"
import { Card } from '@/components/ui/card';
import { theme, commonStyles } from '@/lib/styles/theme';
import { ContentLayout } from '@/components/ui/content-layout';
import { Briefcase } from 'lucide-react';
import data from '@/lib/data.json';
import React from 'react';

const iconMap = {
  Briefcase,
} as const;

interface Feature {
  title: string;
  description: string;
  action?: string;
}

interface Update {
  icon?: keyof typeof iconMap;
  title: string;
  description: string;
  date: string;
}

interface HomeData {
  updates: Update[];
  features: Feature[];
  intro: {
    title: string;
    description: string;
  };
}

export default function Home() {
  const { updates, features, intro } = data.home as HomeData;

  return (
    <ContentLayout>
      <div style={{
        display: 'grid',
        gap: theme.space[6],
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        marginBottom: theme.space[8],
      }}>
        {features.map((feature) => (
          <Card
            key={feature.title}
            title={feature.title}
            description={feature.description}
            action={feature.action && (
              <button style={commonStyles.button}>
                {feature.action}
              </button>
            )}
          />
        ))}
      </div>

      <h1 style={{
        fontSize: '4rem',
        fontWeight: 700,
        marginBottom: theme.space[8],
        color: theme.colors.foreground,
      }}>
        {intro.title}
      </h1>

      <p style={{
        color: theme.colors.muted,
        marginBottom: theme.space[12],
        fontSize: '1.1rem',
        lineHeight: 1.6,
      }}>
        {intro.description}
      </p>

      <div style={{ marginBottom: theme.space[16] }}>
        <div style={{
          ...commonStyles.flexBetween,
          marginBottom: theme.space[6],
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: theme.colors.foreground,
          }}>
            Updates
          </h2>
          <Link href="/updates" style={{
            fontSize: '0.875rem',
            color: theme.colors.muted,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            View All
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: theme.space[6],
        }}>
          {updates.map((update, index) => (
            <div key={index} style={commonStyles.card}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.space[4],
              }}>
                {update.icon && (
                  <div style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.colors.secondary,
                    borderRadius: theme.radii.full,
                    color: theme.colors.primary,
                    fontWeight: 500,
                  }}>
                    {update.icon && React.createElement(iconMap[update.icon], { size: 20 })}
                  </div>
                )}
                <div>
                  <h3 style={{
                    fontWeight: 500,
                    marginBottom: theme.space[1],
                    color: theme.colors.foreground,
                  }}>
                    {update.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: theme.colors.muted,
                    marginBottom: theme.space[2],
                  }}>
                    {update.description}
                  </p>
                  <p style={{
                    fontSize: '0.75rem',
                    color: theme.colors.muted,
                  }}>
                    {update.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{
          ...commonStyles.flexBetween,
          marginBottom: theme.space[6],
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: theme.colors.foreground,
          }}>
            Favorite Things
          </h2>
          <Link href="/favorite-things" style={{
            fontSize: '0.875rem',
            color: theme.colors.muted,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            View All
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: theme.space[4],
        }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} style={{
              aspectRatio: '1',
              backgroundColor: theme.colors.secondary,
              borderRadius: theme.radii.lg,
            }}></div>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}

