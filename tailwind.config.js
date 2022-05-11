module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {

                'beige': '#FBF4EF',
                'light-beige': '#FDF9F7',
                'brown': '#8F5728',
                'gray': '#FAFAFA',
                'white': '#FFFFFF',
                'dark-brown': '#673F1D',
                'light-gray': '#7F7168',
                'border-gray': '#DCD9D5',
                'link-brown': '#B76F33',
            },

            width: {
                '100': '300px',
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                '16': 'repeat(2, minmax(3, 1fr))',


            }
        }
    },
    plugins: [],
}