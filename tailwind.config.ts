import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)'
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        body: ['var(--font-body)', 'monospace']
      },
      borderWidth: {
        pixel: 'var(--border-width)'
      },
      boxShadow: {
        pixel: 'var(--shadow-offset) var(--shadow-offset) 0 0 hsl(var(--foreground) / 0.8)',
        'pixel-press': 'var(--shadow-press) var(--shadow-press) 0 0 hsl(var(--foreground) / 0.8)',
        'pixel-lg': 'var(--shadow-lift) var(--shadow-lift) 0 0 hsl(var(--foreground) / 0.8)',
        'pixel-xl': 'var(--shadow-hover) var(--shadow-hover) 0 0 hsl(var(--foreground) / 0.8)'
      },
      borderRadius: {
        pixel: 'var(--radius)'
      }
    }
  },
  plugins: []
} satisfies Config;
