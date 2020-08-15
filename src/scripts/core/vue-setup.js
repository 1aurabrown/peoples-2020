import cart from '../core/cart'
import modalController from '../core/modal-controller'
import Vue from 'vue'

import { Swiper as Swiper, Pagination } from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import Vue2TouchEvents from 'vue2-touch-events'
import UniqueId from 'vue-unique-id'

Swiper.use([Pagination])
Vue.use(getAwesomeSwiper(Swiper))
Vue.use(UniqueId)
Vue.use(Vue2TouchEvents)

import '../components/search-form'
import '../components/cart-item'
import '../components/add-to-cart-button'
import '../components/product-form'
import '../components/color-options'
import '../components/size-options'
import '../components/product-card'
import '../components/formatted-price'
import '../components/responsive-image-img-tag'
import '../components/responsive-crop-image'
import '../components/x-button'
import '../components/side-cart'

const vueData = {
  cart: cart,
  modalController: modalController,
  template: theme.template
}

export function vueInstance({ el, data }) {
  return new Vue( {
    el: el,
    data: Object.assign({}, vueData, data),
    delimiters: ['${', '}'],
  })
}

export function registerVueInstances({ selector }) {
  document.querySelectorAll(selector).forEach(el => {
    vueInstance({ el })
  })
}

