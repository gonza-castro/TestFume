/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
		fontFamily: {
			'sans': ['Lato'],
            'secondary': ['Titillium Web']
		},
        extend: {
            colors: {
                'primary': '#00186B',
                'secondary': '#604DFF',
                'dark-grey': '#292929',
                'bgGrey': '#f5f5f599',
                'light-grey': '#635D5D',
                'zinc-1000':'#8F8B8B'
            },
            spacing: {
                'banner': '33rem',
                'negtop': '-2rem',
                'neg2.5':'-0.625rem',
                '18':'4.5rem',
                '3.1/5':'65%'
            },
            translate: {
                'neg': '-50%',
            },
            gridTemplateColumns: {
                'contact-s': '3fr 2fr',
                'contact-m': '1fr 1fr',
                'contact-l': '2fr 3fr',
                'footer': '1fr 4fr 2fr 1fr',
                'footer-nav-mobile': 'repeat(2, 1fr)',
                'footer-nav': 'repeat(3, 1fr)'
            }
        },
    },
    plugins: [],
}
  