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
            'sm': {'min': '300px', 'max': '540px'},
            'md': {'min': '768px', 'max': '991px'},
            'lg': {'min': '992px', 'max': '1199px'},
            'xl': {'min': '1200px'},
        },

    },
    plugins: [],
}