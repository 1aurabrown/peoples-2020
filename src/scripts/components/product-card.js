import Vue from 'vue';

Vue.component('product-card', {
  props: ['product', 'options'],
  data: function() {
    return {
      currentVariant: {},
      hover: false
    }
  },
  computed: {
    image() {
      const currentVariant = this.currentVariant
      return currentVariant.featured_image ? currentVariant.featured_image.src : this.product.featured_image
    }
  },
  mounted() {
    console.log(this.currentVariant)
  },
  methods: {
    variantChanged(variant) {
      this.currentVariant = variant
    },
  },
  template: `
    <div v-cloak class="product-card" @mouseleave="hover = false" @mouseover="hover = true">
      <a class="product-card__image block" :href="product.url" :title="product.title">
        <responsive-crop-image
          :alt="product.title"
          :src="image"
          crop-aspect-ratio=.75
          placeholder-key="product-1"
        ></responsive-crop-image>
      </a>

      <div class="product-card__details rel mt1">
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