import Icon from './icon.vue'
;(Icon as any).install = function (Vue: any) {
  Vue.component(Icon.name, Icon)
}

export default Icon
