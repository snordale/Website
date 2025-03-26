export const theme = {
  colors: {
    background: '#ffffff',
    foreground: '#09090b',
    primary: '#09090b',
    secondary: '#f4f4f5',
    muted: '#71717a',
    accent: '#18181b',
    border: '#e4e4e7',
  },
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  layout: {
    navigationWidth: '240px',
  },
} as const;

export type Theme = typeof theme;

// Common styles that can be reused
export const commonStyles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: theme.space[4],
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.radii.lg,
    padding: theme.space[6],
    boxShadow: theme.shadows.md,
    border: `1px solid ${theme.colors.border}`,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    padding: `${theme.space[2]} ${theme.space[4]}`,
    borderRadius: theme.radii.md,
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'background-color 0.2s',
  },
  input: {
    width: '100%',
    padding: theme.space[3],
    borderRadius: theme.radii.md,
    border: `1px solid ${theme.colors.border}`,
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
} as const; 