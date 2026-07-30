import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050505',
        navy: '#081120',
        violet: '#7c3aed',
        blue: '#2563eb',
        cyan: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 0 50px rgba(34,211,238,0.15)'
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3.6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
