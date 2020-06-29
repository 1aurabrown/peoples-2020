import Vue from 'vue';
import slugify from 'slugify';

Vue.component('size', {
  props: ['className', 'selected', 'value'],
  data: function () {
    return {}
  },
  computed: {
    classes() {
      const classes = ['size', this.className, slugify(this.value)]
      if (this.selected) classes.push('active')
      return classes.join(' ')
    }
  },
  template: `
    <span :data-content="value" :class="classes"></span>
  `
})
