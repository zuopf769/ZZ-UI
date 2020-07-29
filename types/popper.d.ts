import Vue from 'vue'

export type PopperTrigger = 'click' | 'focus' | 'hover' | 'custom'

export type PopperPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export interface GetPopupContainer {
  (): HTMLElement
}
export declare class Popper extends Vue {
  visible?: boolean
  appendToContainer?: boolean
  getPopupContainer?: GetPopupContainer
  placement?: PopperPlacement
  popperOptions?: object
  trigger?: PopperTrigger
  popperDisabled?: boolean
  showArrow?: boolean
  openDelay?: number
  closeDelay?: number

  updatePopper(): void
}

export default Popper
