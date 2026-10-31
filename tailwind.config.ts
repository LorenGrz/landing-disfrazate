import type { Config } from 'tailwindcss';

// Same tokens as the Disfrazate app's own app/globals.css — kept in sync by
// hand since this is a separate Next.js project.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#161615',
        surface: '#262624',
        foreground: '#f2f2f2',
        muted: '#a8a8a3',
        accent: '#de194b',
        orange: '#ff8126',
        sky: '#4db3ff',
        lime: '#c5f53d',
        outline: '#3a3a37',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Archivo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
