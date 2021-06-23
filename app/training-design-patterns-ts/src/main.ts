import { Logger } from './modules/Logger'
import { MailingList } from './modules/MailingList'
import { Message } from './modules/Message'
import { Toast } from './modules/Toast'
import { ToastFactory } from './modules/ToastFactory'
import { User } from './modules/User'
import './style.css'

// Singleton
const useLogger = Logger.getInstance()
useLogger.log('Log 1')

const anotherLogger = Logger.getInstance()
anotherLogger.log('Log 2')

useLogger.getLog()

// Observer
const messageInput = document.querySelector<HTMLInputElement>('.message-input')

const user1 = document.querySelector<Element>('.user1-messages')
const user2 = document.querySelector<Element>('.user2-messages')

const subscribeU1 = document.querySelector<Element>('.user1-subscribe')
const subscribeU2 = document.querySelector<Element>('.user2-subscribe')

const unSubscribeU1 = document.querySelector<Element>('.user1-unsubscribe')
const unSubscribeU2 = document.querySelector<Element>('.user2-unsubscribe')

const sendBtn = document.querySelector<Element>('.send-btn')

if (user1 && user2 && subscribeU1 && subscribeU2 && unSubscribeU1 && unSubscribeU2 && sendBtn && messageInput) {
  const u1 = new User(user1)
  const u2 = new User(user2)

  const mailingList = new MailingList()

  mailingList.subscribe(u1)
  mailingList.subscribe(u2)

  subscribeU1.addEventListener('click', () => {
    mailingList.subscribe(u1)
  })
  subscribeU2.addEventListener('click', () => {
    mailingList.subscribe(u2)
  })

  unSubscribeU1.addEventListener('click', () => {
    mailingList.unsubscribe(u1)
  })
  unSubscribeU2.addEventListener('click', () => {
    mailingList.unsubscribe(u2)
  })

  sendBtn.addEventListener('click', () => {
    mailingList.sendMessage(new Message(messageInput.value))
  })
}

// Factory Method

class App {
  toast: Toast
  factory = new ToastFactory()
  render() {
    this.toast = this.factory.createToast(true ? 'mobile' : 'desktop')

    if (this.toast.visible) {
      this.toast.render('Toast Header', 'Toast body')
    }
  }
}

const app = new App()
app.render()