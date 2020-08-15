import Vue from 'vue';

Vue.component('cart', {
  props: ['header', 'modalController', 'cart'],
  computed: {
    hasItems() {
      return this.cart.hasItems();
    }
  },
  template: `
    <div v-cloak class="cart bg-white f fdc y">
      <div v-if="header" class="cart__header f aic jcb f-0">
        <h2 class="uppercase">Cart</h2>
        <button class="cursor-pointer cart__close" type="button" v-on:click="modalController.dismissModal('cart')">
          <x-button></x-button>
        </button>
      </div>

      <div class="cart__inner f-1">
        <div class="cart__messages" v-if="cart.error || !hasItems">
          <p v-if="cart.error" class="mb1">There was a problem! <span class="mb1" v-text="cart.error"></span></p>
          <p v-if="!hasItems" class="mb1">Your cart is empty.</p>
        </div>
        <div v-if="hasItems" class="cart__grid">
          <cart-item
            v-for="(item, index) in cart.state.items"
            :item="item"
            :index="index"
            :cart="cart"
            :key="item.id"></cart-item>
        </div>
      </div>

      <div v-if="hasItems" class="cart__bottom x right left bottom z1 bg-white">
        <div class="cart__bottom__grid">
          <div class="cart__bottom__inner">
            <div class="f aic jcb"><span>Subtotal</span><span>$100.00</span></div>
            <button class="button x">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  `
})