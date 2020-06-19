import Vue from 'vue'
import isTouch from './is-touch'

Vue.component('product-card', {
  props: ['product', 'link', 'options'],
  data: function() {
    return {
      currentVariant: {},
      hover: false,
      formDisabled: true
    }
  },
  watch: {
    hover(val) {
      setTimeout(() => {
        this.formDisabled = !val
      }, 100)
    }
  },
  computed: {
    image() {
      const currentVariant = this.currentVariant
      return currentVariant.featured_image ? currentVariant.featured_image.src : this.product.featured_image
    }
  },
  methods: {
    touchInfo() {
      if (isTouch) this.hover = !this.hover
    },

    clickOutsideInfo() {
      if (isTouch) this.hover = false
    },

    mouseLeave() {
      if (!isTouch) this.hover = false
    },

    mouseEnter() {
      if (!isTouch) this.hover = true
    },

    submit() {
    },
    variantChanged(variant) {
      this.currentVariant = variant
    },
  },
  template: `
    <div v-cloak class="product-card" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
      <a class="product-card__image block" :href="link" :title="product.title">
        <responsive-crop-image
          :alt="product.title"
          :src="image"
          crop-aspect-ratio=.75
          placeholder-key="product-1"
        ></responsive-crop-image>
      </a>

      <div
        class="product-card__details rel mt1"
        v-touch="touchInfo"
        @mouseleave="clickOutsideInfo">

        <div
          v-show="!hover"
          class="z1 product-card__info abs x y fill bg-white">
          <h3>{{ product.title }}</h3>
          <product-price :variant="currentVariant"></product-price>
        </div>

        <div class="product-card__form">
          <product-form
            @submit="submit"
            :disabled="formDisabled"
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