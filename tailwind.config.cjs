const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const daisyui = require('daisyui')

const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        fontFamily: {
            barcode: '"Libre Barcode 128 Text"',
            logo: '"Montserrat Subrayada"',
        },
        extend: {},
    },

    plugins: [daisyui, forms, typography],

    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    primary: '#a991f7',
                    secondary: '#f6d860',
                    accent: '#37cdbe',
                    neutral: '#3d4451',
                    'base-100': '#ffffff',
                },
            },
            'lemonade',
            'coffee',
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'coffee',
    },
}

module.exports = config
