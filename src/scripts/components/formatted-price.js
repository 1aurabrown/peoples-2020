import Vue from 'vue';
import { formatMoney } from '@shopify/theme-currency';

Vue.component('formatted-price', {
  props: ['className', 'price', 'format'],
  computed: {
    formattedPrice() {
      return formatMoney(this.price, (this.format ? this.format : theme.moneyFormat))
    }
  },
  template: `
    <p :class="className">{{ formattedPrice }}</p>
  `
})