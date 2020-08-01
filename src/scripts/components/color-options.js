import './swatch'
import Vue from 'vue';
import slugify from 'slugify';

Vue.component('color-options', {
  props: ['selectedValue', 'id', 'option'],
  data: function () {
    return {}
  },
  methods: {
    slugify: slugify
  },
  template: `
    <div class="color-options options-wrapper product-form__option">
      <div class="options-item" v-for="value in option.values">
        <input type="radio"
          @change="$emit('change', option, value)"
          :id="$id('option' + option.position + '-' + slugify(value))"
          :name="$id('option' + option.position + '-' + slugify(value))"
          :value="value"
          :checked="selectedValue === value"
          class="visually-hidden">
        <label
          :for="$id('option' + option.position + '-' + slugify(value))"
          >
          <swatch :value="value" :selected="selectedValue === value"></swatch>
        </label>
      </div>
    </div>
  `
})
