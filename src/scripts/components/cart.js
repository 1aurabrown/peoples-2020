import { getState, addItem, removeItem } from '@shopify/theme-cart'
import modalController from './modal-controller'

class Cart {
  constructor() {
    this.state = {}
    this.getState()
  }

  getState() {
    getState().then( state => {
      console.log(state)
      this.state = state
    })
  }

  addItem(id, options) {
    addItem(id, options)
    .then(this.getState)
    .then( () => {
      modalController.invokeModal('cart')
    })
  }

  removeItem(key) {
    removeItem(key).then( state => {
      this.state = state
    })
  }
}

const cart = new Cart()

export default cart;