/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // safe HEX colors only
        background: '#ffffff',
        foreground: '#1a1a1a',
        card: '#f8f9fa',
        'card-foreground': '#1a1a1a',
        popover: '#ffffff',
        'popover-foreground': '#1a1a1a',
        primary: '#0d6efd',
        'primary-foreground': '#ffffff',
        secondary: '#6c757d',
        'secondary-foreground': '#ffffff',
        muted: '#e9ecef',
        'muted-foreground': '#495057',
        accent: '#20c997',
        'accent-foreground': '#ffffff',
        destructive: '#dc3545',
        border: '#dee2e6',
        input: '#ced4da',
        ring: '#0d6efd',
        // chart colors
        'chart-1': '#4dabf7',
        'chart-2': '#ff922b',
        'chart-3': '#51cf66',
        'chart-4': '#845ef7',
        'chart-5': '#fcc419',
      },
    },
  },
  plugins: [],
};
