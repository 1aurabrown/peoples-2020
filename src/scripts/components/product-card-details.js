import Vue from 'vue';

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
  template: `
    <div class="product-card__details">
      <div class="product-card__info">
        <h3>{{ product.title }}</h3>
        <product-price :variant="currentVariant"></product-price>
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