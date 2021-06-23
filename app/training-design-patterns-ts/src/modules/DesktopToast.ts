import { Toast } from './Toast'

export class DesktopToast implements Toast {
  title: string
  body: string
  position: string
  visible = false
  duration: number
  template = `
    <div class="desktop-toast">
        <div class="desktop-toast--header">
          <h2>${this.title}</h2>
          <span>${this.duration}</span>
        </div>
        <hr/>
        <p class="mobile-toast--body">
          ${this.message}
        </p>
    </div>
  `

  hide() {
    this.visible = false
  }

  render(title: string, body: string, duration: number, position: string) {
    this.title = title
    this.body = body
    this.visible = true
    this.duration = duration
    this.position = position
    return this.template
  }
}