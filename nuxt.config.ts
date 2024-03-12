// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	
	ssr: true,
		
	runtimeConfig: {
		public: {
			ssrBaseURL: process.env.SSR_BASE_URL,
			browserBaseURL: process.env.BROWSER_BASE_URL,
		},
	},
	
	modules: [
		'@pinia/nuxt',
		'nuxt-svgo'
	],

	css: [
		'~/assets/sass/main.scss',
	],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

})