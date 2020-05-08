import Icon from './icon.vue'

/* istanbul ignore next */
;(Icon as any).install = function (Vue: any) {
	Vue.component(Icon.name, Icon)
}

export default Icon
