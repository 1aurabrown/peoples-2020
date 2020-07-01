import Vue from 'vue';
import modalController from './modal-controller';
import cart from './cart';

Vue.component('cart', {
  props: ['header', 'visible', 'modalController'],
  data: function () {
    return {
      cart: cart
    }
  },
  methods: {
    dismissModal: function(modal) {
      modalController.dismissModal(modal)
    }
  },
  template: `
    <div v-cloak class="cart bg-white f fdc y">
      <div v-if="header" class="cart__header f aic jcb f-0">
        <h2 class="uppercase">Cart</h2>
        <button class="cursor-pointer cart__close" type="button" v-on:click="dismissModal('cart')">
          <x-button></x-button>
        </button>
      </div>

      <div class="cart__inner f-1">
        <div v-if="cart.error">
          <p class="mb1">There was a problem! <span class="mb1" v-text="cart.error"></span></p>
        </div>
        <div v-if="cart.state && cart.state.items && cart.state.items.length > 0" class="cart__grid">
          <cart-item
            v-for="(item, index) in cart.state.items"
            :item="item"
            :index="index"
            :key="item.id"></cart-item>
        </div>

        <div v-else>
          Your cart is empty.
        </div>
      </div>

      <div class="cart__bottom x right left bottom z1 bg-white">
        <div class="cart__bottom__grid">
          <div class="cart__bottom__inner">
            <div class="f aic jcb"><span>Subtotal</span><span>$100.00</span></div>
            <button class="button button--full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  `
})
