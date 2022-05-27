module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'green': '#1DA7B4',
                'yellow': '#F8A90D',
                'brown': '#563939',
                'bgFooter': '#F1F1F1',
                'textColor': '#0E0E2C'
            },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '6.5rem',
                '2xl': '6rem',
            },
        },
        screens: {
            'sm' : '414px',
            'md': '640px',
            // => @media (min-width: 640px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },

    },
    plugins: [],
}