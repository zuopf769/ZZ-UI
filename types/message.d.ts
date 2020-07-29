import Vue, { VNode, Component } from 'vue'

export declare class MessageComponent extends Vue {
  close(): void
}

export type MessageType = 'success' | 'info' | 'warning' | 'error' | 'loading'

interface HandleClose {
  (): void
}

export interface MessageOptions {
  icon?: string
  message: string | VNode
  type?: MessageType
  dangerouslyUseHTMLString?: boolean
  className?: string
  duration?: number
  showClose?: boolean
  onClose?: HandleClose
}

export interface MessageInterface {
  readonly COMPONENT: Component

  (options: MessageOptions): MessageComponent
  (options: string): MessageComponent

  success(options: MessageOptions): MessageComponent
  info(options: MessageOptions): MessageComponent
  warning(options: MessageOptions): MessageComponent
  error(options: MessageOptions): MessageComponent
  loading(options: MessageOptions): MessageComponent

  success(message: string): MessageComponent
  info(message: string): MessageComponent
  warning(message: string): MessageComponent
  error(message: string): MessageComponent
  loading(message: string): MessageComponent
}

export type Message = MessageInterface & {
  closeAll: () => void
  close: (id: string) => void
}

export default Message
