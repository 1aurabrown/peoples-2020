import '../components/vue-click-outside'
import Vue from 'vue'
import modalController from '../components/modal-controller'

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
        cart: {
          items: [{},{},{}]
        },
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
      }
    })
  }
}

const app = new App('#app')
window.app = app
export default app;