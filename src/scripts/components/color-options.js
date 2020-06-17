import Vue from 'vue';

Vue.component('cart-item', {
  props: ['option'],
  data: function () {
    return {}
  },
  template: `
    <formgroup class="color-options">

      <template v-for="value in option.values">
        <input type="radio"
          :id="'Option' + option.position + '-' + value"
          :name="'options[' +  option.name  + ']'"
          :value="value">
        <label for="'Option' + option.position + '-' + value">{{ value }}</label>
      </template>

    </formgroup>
  `
})
