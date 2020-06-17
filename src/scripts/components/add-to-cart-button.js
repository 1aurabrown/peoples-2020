import Vue from 'vue';

Vue.component('add-to-cart-button', {
  props: ['selectedVariant'],

  computed: {
    buttonText() {
      return this.selectedVariant.available ? theme.strings.addToCart : theme.strings.soldOut
    }
  },

  template: `
    <button
      class="button"
      type="submit"
      data-submit-button
      :disabled="selectedVariant.available !== true"
      >
        <span data-submit-button-text>
          {{ buttonText }}
        </span>
    </button>
  `
})
