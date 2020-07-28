import Button from './button.vue'
import ButtonGroup from './button-group.vue'

/* istanbul ignore next */
;(Button as any).install = function (Vue: any) {
  Vue.component(Button.name, Button)
}

export default Button
export { Button, ButtonGroup }
