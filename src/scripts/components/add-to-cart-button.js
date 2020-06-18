import Vue from 'vue';

Vue.component('add-to-cart-button', {
  props: ['className', 'buttonText', 'disabled'],

  template: `
    <button
      :class="'button ' + className"
      type="submit"
      data-submit-button
      :disabled="disabled"
      >
        <span data-submit-button-text>
          {{ buttonText }}
        </span>
    </button>
  `
})
