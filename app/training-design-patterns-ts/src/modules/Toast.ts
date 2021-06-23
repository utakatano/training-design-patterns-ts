export interface Toast {
  template: string
  title: string
  body: string
  position: string
  visible: boolean
  hide(): void
  render(
    title: string,
    body: string,
    duration?: number,
    position?: string
  ): string
}