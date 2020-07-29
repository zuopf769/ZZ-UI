import Vue from 'vue'
import { PopperPlacement, PopperTrigger, GetPopupContainer } from './popper'

export declare class Popover extends Vue {
  static install(vue: any): void
  static name: string

  transition?: string
  disabled?: string
  defaultVisible?: string
  size?: 'small' | 'normal'
  title?: string
  content?: string
  popperClass?: string

  visible?: boolean
  appendToContainer?: boolean
  getPopupContainer?: GetPopupContainer
  placement?: PopperPlacement
  trigger?: PopperTrigger
  showArrow?: boolean
  openDelay?: number
  closeDelay?: number

  updatePopper(): void
}

export default Popover
