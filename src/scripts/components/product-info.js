import Vue from 'vue'
import isTouch from './is-touch'

Vue.component('product-info', {
  props: ['product', 'options', 'initialVariantId'],
  data: function() {
    return {
      price: '',
      currentVariant: {}
    }
  },
  methods: {
    variantChanged(variant) {
      this.currentVariant = variant
      this.price = variant.price
    },
  },
  template: `
    <div v-cloak class="product-info">

        <h1 class="uppercase">{{ product.title }}</h1>
        <formatted-price class-name="mt1 pt05" :price="price"></formatted-price>

        <div v-html="product.description" class="rte mt1 pt05">
        </div>

        <div class="pdp__form"">
          <product-form
            @variantChanged="variantChanged"
            :product="product"
            :options="options"
            :initial-variant-id="initialVariantId"
            >
          </product-form>
        </div>
      </div>
    </div>
  `
})