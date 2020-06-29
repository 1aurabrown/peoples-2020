import Vue from 'vue';
import cart from './cart';
import { find } from 'lodash';

Vue.component('cart-item', {
  props: ['item'],
  data: function () {
    return {}
  },
  template: `
    <div class="cart-item">
      <div class="cart-item__inner rel" >
        <button class="z1 abs bg-white top left cursor-pointer cart-item__remove" type="button" @click.prevent="removeItem">
          <span>&times;</span>
        </button>
        <a class="block" :href="item.url" :title="item.title">
          <div class="block cart-item__image">
            <responsive-crop-image
            :src="item.image"
            :alt="item.title"
            className="x"
            placeholder-key="product-1"
            :crop-aspect-ratio=".75"
            ></responsive-crop-image>
          </div>
          <div class="cart-item__text mt1">
            <p class="uppercase">{{ item.product_title }}</p>
            <formatted-price :price="item.price"></formatted-price>
          </div>
        </a>
        <div class="mt075 f jcb aic">
          <div class="f jcs aic fdr">
            <swatch :selected="false" :value="color"></swatch>
            <size :selected="true" :value="size"></size>
          </div>
          <div class="f jcc aic mr075">
            <button @click.prevent="decrease" class="mx025 cursor-pointer">-</button>
            <span class="cart-item__count circle active" :data-content="item.quantity"></span>
            <button @click.prevent="increase" class="mx025 cursor-pointer">+</button>
          </div>
        </div>
      </div>

    </div>
  `,
  created() {
    // Pre-fetch images and cache them.
    const image = new Image()
    image.src = this.item.image
  },
  computed: {
    color() {
      return find(this.item.options_with_values, option => option.name.toLowerCase().includes('color')).value
    },

    size() {
      return find(this.item.options_with_values, option => option.name.toLowerCase().includes('size')).value
    }
  },
  methods: {
    increase() {
      cart.updateItem(this.item.key, {
        quantity: this.item.quantity + 1
      })
    },
    decrease() {
      cart.updateItem(this.item.key, {
        quantity: this.item.quantity - 1
      })
    },
    removeItem() {
      debugger
      cart.removeItem(this.item.key)
    }
  }
})
