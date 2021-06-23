import { DesktopToast } from './DesktopToast';
import { MobileToast } from './MobileToast';
import { Toast } from './Toast'

export class ToastFactory {
  createToast(type: 'mobile' | 'desktop'): Toast {
    if (type === 'mobile') {
      return new MobileToast()
    } else {
      return new DesktopToast()
    }
  }
}