import '../components/search-form'
import '../components/cart-item'
import '../components/side-cart'
import '../components/add-to-cart-button'
import '../components/product-form'
import '../components/color-options'
import '../components/size-options'
import '../components/product-card'
import '../components/formatted-price'
import '../components/responsive-image-img-tag'
import '../components/responsive-crop-image'
import '../components/x-button'

import cart from '../components/cart'
import modalController from '../components/modal-controller'


import { Swiper as Swiper, Pagination } from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import UniqueId from 'vue-unique-id'

Swiper.use([Pagination])
Vue.use(getAwesomeSwiper(Swiper))
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
        modalController: modalController,
        template: theme.template
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