import { notification } from 'ant-design-vue'
import type { NotificationPlacement } from 'ant-design-vue'
type NotificationType = 'success' | 'info' | 'warning' | 'error'

const openNotification = (
  type: NotificationType = 'info',
  message = 'Message Notification',
  description = 'Ooops! A message was not provided.',
  placement: NotificationPlacement = 'topRight',
) => {
  notification[type]({
    message,
    description,
    placement,
  })
}

export default function useNotifications() {
  return { openNotification }
}
