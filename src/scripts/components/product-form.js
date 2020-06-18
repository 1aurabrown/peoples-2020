import Vue from 'vue';
import { find } from 'lodash';

Vue.component('product-form', {
  props: ['product', 'initialVariantId', 'options', 'buttonClass'],
  data: function () {
    return {
      selectedVariant:{}
    }
  },

  mounted: function() {
    // set after mounting to emit change event
    this.selectedVariant =  this.initialVariantId ? this.getVariantByID(this.initialVariantId) : this.product.variants[0]
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

  watch: {
    selectedVariant(variant) {
      this.$emit('variantChanged', variant)
    }
  },

  computed: {
    buttonText() {
      return this.selectedVariant.available ? theme.strings.addToCart : theme.strings.soldOut
    },

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
  template: `
    <form class="product-form" action="/cart/add" method="post" enctype="multipart/form-data" id="AddToCartForm">
      <div class="js product-form__options f aic f-wrap jcb" v-if="product.variants.length > 1">
        <template v-for="option in options">
          <color-options
            v-if="option.name.toLowerCase() == 'color'"
            :option="option"
            :selectedValue="selectedOptionValue(option)"
            @change="optionChanged">
          </color-options>

          <size-options
            v-else-if="option.name.toLowerCase() == 'size'"
            :option="option"
            :selectedValue="selectedOptionValue(option)"
            @change="optionChanged">
          </size-options>

          <select v-else @change="optionChanged(option, $event.target.value)">
            <option v-for="value in option.values" :value="value">
              {{ value }}
            </option>
          </select>

        </template>
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

      <add-to-cart-button
        :className="buttonClass + ' product-form__button'"
        :disabled="!selectedVariant.available"
        :buttonText="buttonText"></add-to-cart-button>
    </form>
  `
})
