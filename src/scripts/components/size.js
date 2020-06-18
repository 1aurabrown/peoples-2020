import Vue from 'vue';
import slugify from 'slugify';

Vue.component('size', {
  props: ['selected', 'value'],
  data: function () {
    return {}
  },
  methods: {
    className(value) {
      const classes = ['size', slugify(value)]
      if (this.selected) classes.push('active')
      return classes.join(' ')
    }
  },
  template: `
    <span :data-size="value" :class="className(value)"></span>
  `
})
