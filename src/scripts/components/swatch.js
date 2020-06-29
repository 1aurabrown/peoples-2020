import Vue from 'vue';
import slugify from 'slugify';

Vue.component('swatch', {
  props: ['className', 'selected', 'value'],
  data: function () {
    return {}
  },
  computed: {
    classes() {
      const classes = ['swatch', this.className, slugify(this.value)]
      if (this.selected) classes.push('active')
      return classes.join(' ')
    }
  },
  template: `
    <span :class="classes"></span>
  `
})
