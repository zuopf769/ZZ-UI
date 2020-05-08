import Vue from 'vue'
import VueRouter from 'vue-router'
import components from './pages/components.vue'

Vue.use(VueRouter)

const defaultPath = '/components'
const routes = [
	{
		path: '/',
		redirect: defaultPath,
	},
	{
		path: 'component',
		component: components,
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes,
})

export default router
