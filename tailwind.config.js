/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    // container: {
    //   width: '90%',
    // },
    extend: {
      colors: {
        primary: '#06430D',
        'primary-dark': '#032507',
        'primary-light': '#166C20',
        'primary-lighter': '#79D54A',
        secondary: '#FFC107',
        'secondary-light': '#FFC107',
        dark: '#141414',
        'dark-light': '#474747',
        grey: '#858585',
        'grey-light': '#E0E0E0',
        'grey-lighter': '#f5f5f5',
        'grey-lightest': '#fefefe',
        success: '#23C16B',
        'success-light': '#ECFCE5',
        danger: '#FF5247',
        'danger-light': '#FFE5E5',
        info: '#2F80ED',
        'info-light': '#EAF3FF',
        warn: '#FFB323',
        'warn-light': '#FFEFD7',
        tertiary: '#96C606',
        'tertiary-light': '#C9F939',
        light: '#CCCCCC',
        'light-green': '#E7FFEA',
        transparent: 'transparent',
        white: '#ffffff',
      },
      backgroundImage: {
        'banner-bg': "url('/src/assets/images/banner/bg_banner_mobile.png')",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
