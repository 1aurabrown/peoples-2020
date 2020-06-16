import Vue from 'vue';

Vue.component('cart-item', {
  props: ['item'],
  data: function () {
    return {}
  },
  template: `
    <div class="cart-item p1">
      <div class="cart-item__inner">
        {{ item.product_title }}
      </div>
    </div>
  `
})


 // {% include 'swatch', color: 'red', size: 'sm' %}
 //        {% include 'swatch', color: 'blue', size: 'sm' %}
 //        {% include 'swatch', color: 'green', size: 'sm' %}