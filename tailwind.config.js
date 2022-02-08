module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Noto Serif TC', serif"],
                serif: ["'Noto Sans TC', sans-serif"],
                varela: ["'Varela Round', sans-serif"]
            },
            colors: {
                primary: '#487F78'
            },
            height: {
                '85vh': '85vh',
                '90vh': '90vh',
                '95vh': '95vh',
                '100vh': '100vh'
            }
        },
    },
    plugins: [],
}
