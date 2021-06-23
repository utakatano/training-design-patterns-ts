import { Toast } from './Toast'

export class MobileToast implements Toast {
  title: string
  body: string
  duration: number
  visible = true
  position = "center"
  template = `
    <div class="mobile-toast">
        <div class="mobile-toast--header">
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

  render(title: string, body: string, duration: number, _position?: string) {
    this.title = title
    this.body = body
    this.visible = true
    this.duration = duration
    this.position = "center"
    return this.template
  }
}