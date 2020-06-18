import Vue from 'vue';

Vue.component('product-card', {
  props: ['product', 'options'],
  data: function() {
    return {
      currentVariant: {},
      hover: false
    }
  },
  methods: {
    variantChanged(variant) {
      this.currentVariant = variant
    },
  },
  template: `
    <div class="product-card" @mouseleave="hover = false" @mouseover="hover = true">
      <a class="product-card__image"></a>
      <div class="product-card__details rel">
        <div v-show="!hover" class="z1 product-card__info abs x y fill bg-white">
          <h3>{{ product.title }}</h3>
          <product-price :variant="currentVariant"></product-price>
        </div>

        <div class="product-card__form">
          <product-form
            @variantChanged="variantChanged"
            :product="product"
            :options="options"
            buttonClass="button--full"
            >
          </product-form>
        </div>
      </div>
    </div>
  `
})