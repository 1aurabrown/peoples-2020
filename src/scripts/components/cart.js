import { getState, addItem, removeItem, updateItem } from '@shopify/theme-cart'
import modalController from './modal-controller'

class Cart {
  constructor() {
    this.state = {}
    this.getState()
  }

  clearError() {
    this.error = null;
  }

  getState() {
    this.clearError()
    return getState().then( state => {
      this.state = state
      return state
    })
    .catch((res) => {
      this.error = res.statusText.length > 0 ? res.statusText : "There was an error retreiving your cart."
    })
  }

  addItem(id, options) {
    this.clearError()
    return addItem(id, options)
    .then( () => this.getState())
    .catch((res) => {
      this.error = res.statusText.length > 0 ? res.statusText : "The item could not be added to your cart."
    })
    .then( () => {
      modalController.invokeModal('cart')
    })
  }

  updateItem(key, options) {
    this.clearError()
    return updateItem(key, options).then( state => {
      this.state = state
    })
    .catch((res) => {
      this.error = res.statusText.length > 0 ? res.statusText : "The item could not be updates."
    })
  }

  hasItems() {
    return (!!this.state && !!this.state.items && (this.state.items.length > 0))
  }

  removeItem(key) {
    this.clearError()
    return removeItem(key).then( state => {
      this.state = state
    })
    .catch((res) => {
      this.error = res.statusText.length > 0 ? res.statusText : "The item could not be removed from your cart."
    })
  }
}

const cart = new Cart()

export default cart;