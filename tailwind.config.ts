import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'neon-blue': '#00d4ff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#f472b6',
        'neon-green': '#10b981',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #f472b6 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate3d': 'rotate3d 10s linear infinite',
        'holographic': 'holographic 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'float-medium': 'float-medium 8s ease-in-out infinite',
        'float-fast': 'float-fast 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-medium': 'ping-medium 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-fast': 'ping-fast 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'draw-line': 'draw-line 4s ease-in-out infinite',
        'draw-line-reverse': 'draw-line-reverse 4s ease-in-out infinite',
        'draw-line-vertical': 'draw-line-vertical 6s ease-in-out infinite',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        'float-code': 'float-code 10s ease-in-out infinite',
        'float-code-reverse': 'float-code-reverse 12s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
