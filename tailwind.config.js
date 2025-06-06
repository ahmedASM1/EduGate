/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-gray-600',
    'text-gray-900',
    'bg-gray-50',
    'bg-gray-100',
    'bg-gray-200',
    'bg-teal-500',
    'bg-teal-600',
    'hover:bg-teal-500',
    'hover:bg-teal-600',
    'hover:bg-teal-700',
    'bg-primary-color',
    'text-primary-color',
    'bg-secondary-color',
    'text-secondary-color',
    'bg-accent-color',
    'text-accent-color',
    'bg-text-primary',
    'text-text-primary',
    'bg-text-secondary',
    'text-text-secondary',
    'bg-surface-color',
    'text-surface-color',
    'bg-surface-hover',
    'text-surface-hover',
    'bg-border-color',
    'text-border-color',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1a73e8',
        'secondary-color': '#34a853',
        'accent-color': '#fbbc05',
        'text-primary': '#202124',
        'text-secondary': '#5f6368',
        'surface-color': '#ffffff',
        'surface-hover': '#f8f9fa',
        'border-color': '#dadce0',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        green: {
          500: '#22c55e',
          600: '#16a34a',
        },
      },
    },
  },
  plugins: [],
} 