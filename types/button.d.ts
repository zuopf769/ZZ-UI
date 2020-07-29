import Vue from 'vue'

export type ButtonHtmlType = 'button' | 'submit' | 'reset'

export type ButtonType = 'primary' | 'text' | 'success' | 'warning' | 'danger' | 'text-primary'

export type ButtonSize = 'small' | 'normal' | 'large'

export declare class Button extends Vue {
  static install(vue: any): void
  static name: string

  size?: ButtonSize

  htmlType?: ButtonHtmlType

  loading?: boolean

  disabled?: boolean

  icon?: string

  type?: ButtonType

  dashed?: boolean
}

export default Button
