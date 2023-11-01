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
        main: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'var(--color-secondary)',
        anchor: 'var(--color-anchor)'
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
