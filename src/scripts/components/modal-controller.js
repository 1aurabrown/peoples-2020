class ModalController  {
  constructor () {
    this.visibleModal = null
  }

  invokeModal(modal) {
    this.visibleModal = modal
  }

  dismissModal(modal) {
    if (modal === this.visibleModal) {
      this.visibleModal = null
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