import ButtonGroup from '../button/button-group.vue'

/* istanbul ignore next */
;(ButtonGroup as any).install = function (Vue: any) {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
