import Vue from 'vue';
import slugify from 'slugify';

Vue.component('color-options', {
  props: ['selectedValue', 'id', 'option'],
  data: function () {
    return {}
  },
  methods: {
    slugify: slugify,
    className(value) {
      const classes = ['swatch', this.slugify(value)]
      if (this.selectedValue === value) classes.push('active')
      return classes.join(' ')
    }
  },
  template: `
    <div class="color-options f aic">
      <template v-for="value in option.values">
        <input type="radio"
          @change="$emit('change', option, value)"
          :id="$id('option' + option.position + '-' + slugify(value))"
          :value="value"
          :checked="selectedValue === value"
          class="hide">
        <label
          :for="$id('option' + option.position + '-' + slugify(value))"
          :class="className(value)">
        </label>
      </template>

    </div>
  `
})
