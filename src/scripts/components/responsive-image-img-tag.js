import Vue from 'vue';
import { getSizedImageUrl } from '@shopify/theme-images'

Vue.component('responsive-img-tag', {
  props: [
    'className',
    'fit',
    'src',
    'cropAspectRatio',
    'alt',
    'defaultWidth',
    'placeholderKey'
  ],
  methods: {
    imageUrl({ w, h }) {
      const fit = this.fit ? this.fit : 'cover'
      var str = w + 'x'
      if (this.cropAspectRatio && h) {
        str = str + h
        if (fit == 'cover') {
          str = str + '_crop_center'
        }
      }
      return getSizedImageUrl(this.src, str)
    },
  },
  watch: {
    src() {
      // this.$recompute('classes')
    }
  },
  computed: {
    classes() {
      // force class list to re-render to re-trigger lazysizes when src changes by adding a unique string.
      const src = this.src
      const date = Date.now().toString(36)
      return [date, 'lazyload', this.className, `object-${ this.fit ? this.fit : 'cover' }`].join(' ')
    },
    placeholder() {
      return 'data:image/svg+xml;utf8,' + theme.placeholders[this.placeholderKey ? this.placeholderKey : 'image']
    },
    urlTemplate() {
      return this.imageUrl({ w: '{width}', h: '{height}'})
    },

    defaultURL() {
      const defaultWidth = this.defaultWidth ? this.defaultWidth : 500;
      if (this.cropAspectRatio) {
        var defaultHeight = Math.round(defaultWidth / this.cropAspectRatio)
      }
      return this.imageUrl({ w: defaultWidth, h: defaultHeight })
    },
  },
  template: `
    <img
      v-if="src"
      :class="classes"
      :src="defaultURL"
      :data-src="urlTemplate"
      :data-aspectratio="cropAspectRatio"
      data-sizes="auto"
      :alt="alt"
    />

    <img
      v-else
      style="background-color: #aaa"
      :class="classes"
      :src="placeholder"
    />
  `
})
