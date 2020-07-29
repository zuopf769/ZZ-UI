import Vue, { VNode, Component } from 'vue'
import { GetPopupContainer } from './popper'
export declare class ConfirmComponent extends Vue {
  close(): void
}

interface ConfirmData {
  action: 'confirm' | 'cancel' | 'close'
}

interface ConfirmCallbackHandler {
  (data: ConfirmData): void
}

export interface ConfirmOptions {
  className?: string
  type?: 'success' | 'info' | 'warning' | 'error'
  title?: string
  width?: number | string
  message?: string | VNode
  okButtonProps?: object
  okButtonText?: string

  cancelButtonProps?: object
  cancelButtonText?: string

  showOkButton?: boolean
  showCancelButton?: boolean

  closable?: boolean
  maskClosable?: boolean
  onOk?: ConfirmCallbackHandler
  onCancel?: ConfirmCallbackHandler
  dangerouslyUseHTMLString?: boolean
  getPopupContainer?: GetPopupContainer
}

export interface ConfirmInterface {
  readonly COMPONENT: Component
  (options: ConfirmOptions): Promise<ConfirmData>
}

export type Confirm = ConfirmInterface & {
  closeAll: () => void
}

export default Confirm
