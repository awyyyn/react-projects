import type { Config } from 'tailwindcss'

const config: Config = {
  content: [ 
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#324d67',
        secondary: '#5f5f5f',
        red: '#f02d34',
        gray: '#5f5f5f',
        
      }
    },
  },
  plugins: [],
}
export default config
