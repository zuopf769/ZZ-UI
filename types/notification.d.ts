import Vue, { VNode, Component } from 'vue'

export declare class NotificationComponent extends Vue {
  close(): void
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

interface HandleClose {
  (): void
}

export interface NotificationOptions {
  title?: string
  message: string | VNode
  type?: NotificationType
  className?: string
  icon?: string
  dangerouslyUseHTMLString?: boolean
  duration?: number
  showClose?: boolean
  onClose?: HandleClose
  offset?: number
}

export interface NotificationInterface {
  readonly COMPONENT: Component
  (options: NotificationOptions): NotificationComponent
  (options: string): NotificationComponent

  success(options: NotificationOptions): NotificationComponent
  info(options: NotificationOptions): NotificationComponent
  warning(options: NotificationOptions): NotificationComponent
  error(options: NotificationOptions): NotificationComponent

  success(message: string): NotificationComponent
  info(message: string): NotificationComponent
  warning(message: string): NotificationComponent
  error(message: string): NotificationComponent
}

export type Notification = NotificationInterface & {
  closeAll: () => void
  close: (id: string) => void
}
export default Notification
