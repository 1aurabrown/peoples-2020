import Vue from 'vue';
import { find } from 'lodash';

Vue.component('product-form', {
  props: ['product', 'cart', 'initialVariantId', 'options'],
  data: function () {
    return {
      selectedVariant: this.getVariantByID(this.initialVariantId)
    }
  },

  methods: {
    selectedOptionValue(option) {
      return this.selectedOptions['option' + option.position]
    },

    optionChanged(option, value) {
      const newOptions = Object.assign({}, this.selectedOptions)
      const key = 'option' + option.position
      newOptions[key] = value
      console.log(newOptions)
      const selectedVariant = this.getVariantByOptions(newOptions)
      if (selectedVariant !== undefined) this.selectedVariant = selectedVariant
    },

    getVariantByID(id){
      return find(this.product.variants, v => { return v.id.toString() === id.toString() })
    },

    getVariantByOptions(options){
      return find(this.product.variants, options)
    }

  },

  computed: {

    selectedOptions() {
      return this.options.reduce((acc, option) => {
        const key = 'option' + option.position
        acc[key] = this.selectedVariant[key]
        return acc
      }, {})
    },

    selectedVariantID: {
      get() {
        return this.selectedVariant.id
      },

      set(id) {
        const selectedVariant = this.getVariantByID(id)
        if (selectedVariant !== undefined) this.selectedVariant = selectedVariant
      }
    }
  },
  created() {
    console.log(this.product)
  },
  template: `
    <form action="/cart/add" method="post" enctype="multipart/form-data" id="AddToCartForm">
      <div class="js" v-if="product.variants.length > 1">
        <div v-for="option in options">
          <label :for="'Option' + option.position">
            {{ option.name }}
          </label>

          <color-options
            v-if="option.name.toLowerCase() == 'color'"
            :option="option"
            :selectedValue="selectedOptionValue(option)"
            @change="optionChanged">
          </color-options>

          <select v-else @change="optionChanged(option, $event.target.value)">
            <option v-for="value in option.values" :value="value">
              {{ value }}
            </option>
          </select>

        </div>
      </div>

      <noscript>
        <select name="id" v-model="selectedVariantID">
          <template v-for="variant in product.variants">
            <option
              :value="variant.id"
              :disabled="variant.available !== true">
                {{ variant.title }}
            </option>
          </template>
        </select>
      </noscript>

      <input type="number" id="Quantity" name="quantity" value="1" min="1">

      <div data-price-wrapper>
        <span data-product-price>
          {{ selectedVariant.price }}
        </span>

        <template v-if="product.compare_at_price_max > product.price">
          <span class="visually-hidden" data-compare-text>{{ 'products.product.regular_price' | t }}</span>
          <s data-compare-price>
              {{ selectedVariant.compare_at_price  }}
          </s>
        </template>
      </div>

      <add-to-cart-button :selectedVariant=selectedVariant></add-to-cart-button>
    </form>
  `
})
