import { Message } from './Message'
import { User } from './User'

interface Notify {
  sendMessage(message: Message): any
}

export class MailingList implements Notify {
  protected observers: User[] = []

  notify(message: Message) {
    this.observers.forEach((observer) => {
      observer.onMessage(message)
    })
  }

  subscribe(observer: User) {
    this.observers.push(observer)
  }

  unsubscribe(observer: User) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== observer
    )
  }

  sendMessage(message: Message) {
    this.notify(message)
  }
}