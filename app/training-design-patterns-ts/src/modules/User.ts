import { Message } from './Message'

interface NotificationObserver {
  onMessage(message: Message): string
}

export class User implements NotificationObserver {
  element: Element

  constructor(element: Element) {
    this.element = element
  }

  onMessage(message: Message) {
    return (this.element.innerHTML += `<li>you have a new message - ${message.getMessage()}</li>`)
  }
}