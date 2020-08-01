import './size'
import Vue from 'vue';
import slugify from 'slugify';

Vue.component('size-options', {
  props: ['selectedValue', 'id', 'option'],
  data: function () {
    return {}
  },
  methods: {
    slugify: slugify
  },
  template: `
    <div class="size-options options-wrapper product-form__option">
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
          <size :value="value" :selected="selectedValue === value"></size>
        </label>

      </div>
    </div>
  `
})
