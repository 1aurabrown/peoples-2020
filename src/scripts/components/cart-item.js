import Vue from 'vue';
import cart from './cart';

Vue.component('cart-item', {
  props: ['item'],
  data: function () {
    return {}
  },
  template: `
    <div class="cart-item p1 rel">

      <button class="cursor-pointer hamburger is-active" type="button" @click="removeItem">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <a class="block cart-item__inner" :href="item.url" :title="item.title">
        <div class="cart-item__image">
          <responsive-img-tag
          :src="item.image"
          :alt="item.title"
          className="x"
          placeholder-key="product-1"
          ></responsive-img-tag>
        </div>
        <div class="cart-item__text">
          <p>{{ item.product_title }}</p>
        </div>
      </a>

    </div>
  `,
  created() {
    // Pre-fetch images and cache them.
    const image = new Image()
    image.src = this.item.image
  },
  methods: {
    removeItem() {
      debugger
      cart.removeItem(this.item.key)
    }
  }
})
