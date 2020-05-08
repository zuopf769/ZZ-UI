/* Automatically generated by './build/bin/build-entry.js' */
import Icon from 'components/icon'
import CollapseTransition from './transitions/collapse-transition'

const components = [Icon, CollapseTransition]

export function install(Vue: any) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	// const $zz = {
	//   confirm: Confirm,
	//   notify: Notification,
	//   message: Message,
	// };

	// Vue.prototype.$zz = $zz;
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export { Icon, CollapseTransition }

export default {
	version: '1.0.0',
	install,
}
