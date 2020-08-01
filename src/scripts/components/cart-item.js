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
        <button class="z1 abs bg-white f aic jcc top left enlarge-click cursor-pointer cart-item__remove" type="button" @click="removeItem">
          <x-button></x-button>
        </button>
        <a :href="item.url" :title="item.title" class="block cart-item__image">
          <responsive-crop-image
          :src="item.image"
          :alt="item.title"
          className="x"
          placeholder-key="product-1"
          :crop-aspect-ratio=".75"
          ></responsive-crop-image>
        </a>

        <div class="cart-item__details">
          <a class="block cart-item__text" :href="item.url" :title="item.title">
            <p class="uppercase">{{ item.product_title }}</p>
            <formatted-price :price="item.price"></formatted-price>
          </a>

          <div class="mt075 f jcb aic">
            <div class="f jcs aic fdr options-wrapper">
              <div class="options-item">
                <swatch :selected="false" :value="color"></swatch>
              </div>
              <div class="option-item">
                <size :selected="true" :value="size"></size>
              </div>
            </div>
            <div class="f jcc aic mr075">
              <button @click.prevent="decrease" class="mx025 cursor-pointer enlarge-click">-</button>
              <span class="mx05 cart-item__count circle active" :data-content="item.quantity"></span>
              <button @click.prevent="increase" class="mx025 cursor-pointer enlarge-click">+</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  created() {
    // Pre-fetch images and cache them.
    if (!this.item.image) return
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
      cart.removeItem(this.item.key)
    }
  }
})
