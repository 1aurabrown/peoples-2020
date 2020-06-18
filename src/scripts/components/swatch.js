import Vue from 'vue';
import slugify from 'slugify';

Vue.component('swatch', {
  props: ['selected', 'value'],
  data: function () {
    return {}
  },
  methods: {
    className(value) {
      const classes = ['swatch', slugify(value)]
      if (this.selected) classes.push('active')
      return classes.join(' ')
    }
  },
  template: `
    <span :class="className(value)"></span>
  `
})
