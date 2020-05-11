import Vue from 'vue'
import VueRouter from 'vue-router'
import navConfig from './nav.config.json'
import Contributor from './pages/contributors.vue'

Vue.use(VueRouter)

function loadDocs(component: string) {
	return () => import(`../components/${component}/index.md`)
}

function loadPage(component: string) {
	return () => import(`./pages/${component}.vue`)
}

function loadWiki(component: string) {
	return () => import(`../wiki/${component}.md`)
}

/**
 *
 * route: {
 *   path: '/component',
 *   component: import from './pages/component.vue',
 *   child: registerRoute(navConfig)
 * }
 */
function toRoute(navs: Array<any>) {
	function createRoute(page: any, { isPage = false } = {}) {
		const { path } = page
		const componentName = path.charAt('0') === '/' ? path.substr(1) : path
		const component = isPage ? loadPage(componentName) : loadDocs(componentName)

		return {
			...page,
			groups: undefined,
			path: path,
			meta: {
				title: page.name,
				description: page.description,
			},
			component: component,
		}
	}

	return navs.reduce((routes, nav) => {
		if (!nav.href) {
			const route = createRoute(nav, { isPage: true })
			if (nav.groups) {
				const children = []
				nav.groups.forEach(group => {
					Array.prototype.push.apply(
						children,
						group.list.map(nav => {
							return createRoute(nav)
						}),
					)
				})
				route.children = children
			}
			routes.push(route)
		}
		return routes
	}, [])
}

const navRoute = toRoute(navConfig)

const defaultPath = '/components'
const routes = navRoute.concat([
	{
		path: '/',
		redirect: defaultPath,
	},
	{
		path: '*',
		redirect: defaultPath,
	},
	{
		path: '/doc/getting-started',
		component: loadWiki('getting-started'),
	},
	{
		path: '/doc/compatibility',
		component: loadWiki('compatibility'),
	},
	{
		path: '/doc/contributing',
		component: loadWiki('contributing'),
	},
	{
		path: '/doc/customize-theme',
		component: loadWiki('customize-theme'),
	},
	{
		path: '/doc/changelog',
		component: () => import('../CHANGELOG.md'),
	},
	{
		path: '/contributor',
		name: 'contributor',
		component: Contributor,
	},
])

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes,
})

export default router
