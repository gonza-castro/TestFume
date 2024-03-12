import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
	routes: (_routes) => [
		{
			name: 'home',
			path: '/',
			component: () => import('~/pages/index.vue').then(r => r.default || r),
		},
	],
}