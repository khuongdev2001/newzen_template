import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1172px'
        }
      },
      colors: {
        main: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        anchor: 'var(--color-anchor)',
        effects: 'var(--color-effects)'
      },
      fontSize: {
        sm: '16px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
