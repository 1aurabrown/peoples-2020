import modalController from '../components/modal-controller'
import Vue from 'vue'

class App {
  constructor(selector) {
    this.selector = selector
    debugger;
    document.addEventListener("DOMContentLoaded", event => {
      this.init()
    });
  }

  init() {
    debugger;
    if (this.vue) this.vue.$destroy();
    this.vue = new Vue( {
      el: document.querySelector(this.selector),
      data: {
        cart: {
          items: [{},{},{}]
        },
        modalController: modalController
      },
      delimiters: ['${', '}'],
      methods: {
        toggleModal: function(modal) {
          this.modalController.toggleModal(modal)
        }
      },
    })
  }
}

const app = new App('#app')

export default app;