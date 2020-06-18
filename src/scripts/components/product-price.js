import Vue from 'vue';
import { formatMoney } from '@shopify/theme-currency';

Vue.component('product-price', {
  props: ['variant', 'className'],
  computed: {
    price() {
      return formatMoney(this.variant.price, theme.moneyFormat)
    }
  },
  template: `
    <p :class="className">{{ price }}</p>
  `
})