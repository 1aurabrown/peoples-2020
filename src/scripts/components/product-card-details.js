import Vue from 'vue';
import { formatMoney } from '@shopify/theme-currency';
Vue.component('product-card-details', {
  props: ['product', 'options'],
  data: function() {
    return {
      currentVariant: {}
    }
  },
  methods: {
    variantChanged(variant) {
      this.currentVariant = variant
    }
  },
  computed: {
    price() {
      const currentVariant = this.currentVariant
      return formatMoney(currentVariant.price, theme.moneyFormat)
    }
  },
  template: `
    <div class="product-card__details">
      <div class="product-card__info">
        <h3>{{ product.title }}</h3>
        <p>{{ price }}</p>
      </div>

      <div class="product-card__form">
        <product-form
          @variantChanged="variantChanged"
          :product="product"
          :options="options"
          >
        </product-form>
      </div>
    </div>
  `
})