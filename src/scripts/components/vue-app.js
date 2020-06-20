import '../components/vue-click-outside'
import '../components/search-form'
import '../components/cart-item'
import '../components/add-to-cart-button'
import '../components/product-form'
import '../components/color-options'
import '../components/size-options'
import '../components/product-card'
import '../components/product-price'
import '../components/responsive-image-img-tag'
import '../components/responsive-crop-image'

import cart from '../components/cart'

import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import UniqueId from 'vue-unique-id'
import modalController from '../components/modal-controller'

Vue.use(UniqueId)
Vue.use(Vue2TouchEvents)

class App {
  constructor(selector) {
    this.selector = selector
    document.addEventListener("DOMContentLoaded", event => {
      this.init()
    });
  }

  init() {
    if (this.vue) this.vue.$destroy();
    this.vue = new Vue( {
      el: document.querySelector(this.selector),
      data: {
        cart: cart,
        modalController: modalController
      },
      computed: {
        visibleModal() {
          return this.modalController.visibleModal
        }
      },
      delimiters: ['${', '}'],
      methods: {
        toggleModal: function(modal) {
          this.modalController.toggleModal(modal)
        },
        invokeModal: function(modal) {
          this.modalController.invokeModal(modal)
        },
        dismissModal: function(modal) {
          this.modalController.dismissModal(modal)
        }
      },
    })
  }
}

const app = new App('#app')
window.app = app
export default app;