/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'text-muted',
    'text-emerald-300',
    'text-purple-400',
    'text-orange-400',
    'text-lime-400',
    'text-unibox-green-ico',
    'text-unibox-violet-ico',
    'text-unibox-orange-ico',
    'text-unibox-yellow-ico',
  ],
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-averta)'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      boxShadow: {
        'all-sides': '0px 0px 15px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px',
//       },
//     },
//     extend: {
//       keyframes: {
//         'accordion-down': {
//           from: { height: 0 },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: 0 },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },

//       colors: {
//         primary: '#006bff',
//         muted: '#8492a6',
//         'unibox-green-ico': 'rgb(151, 224, 182)',
//         'unibox-violet-ico': 'rgb(190, 131, 228)',
//         'unibox-orange-ico': 'rgb(241, 168, 66)',
//         'unibox-yellow-ico': 'rgb(202, 227, 43)',
//       },

//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   safelist: [
//     'text-muted',
//     'text-unibox-green-ico',
//     'text-unibox-violet-ico',
//     'text-unibox-orange-ico',
//     'text-unibox-yellow-ico',
//   ],
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-averta)'],
//       },
//       fontSize: {
//         xxs: '0.625rem',
//       },
//       colors: {
//         primary: '#006bff',
//         muted: '#8492a6',
//         'unibox-green-ico': 'rgb(151, 224, 182)',
//         'unibox-violet-ico': 'rgb(190, 131, 228)',
//         'unibox-orange-ico': 'rgb(241, 168, 66)',
//         'unibox-yellow-ico': 'rgb(202, 227, 43)',
//       },
//       boxShadow: {
//         'all-sides': '0px 0px 15px 0px rgba(0, 0, 0, 0.1)',
//       },
//     },
//   },
//   plugins: [],
// };
