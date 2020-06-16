import { freezeScroll, releaseScroll } from './freeze-scroll'

class ModalController  {
  constructor () {
    this.visibleModal = null
  }

  invokeModal(modal) {
    this.visibleModal = modal
    freezeScroll()
  }

  dismissModal(modal) {
    if (modal === this.visibleModal) {
      this.visibleModal = null
      releaseScroll()
    }
  }

  toggleModal(modal) {
    if (this.visibleModal === modal) {
      this.dismissModal(modal)
    } else {
      this.invokeModal(modal)
    }
  }
}

const modalController = new ModalController()

export default modalController;