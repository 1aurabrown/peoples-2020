import Vue from 'vue';
import { getSizedImageUrl } from '@shopify/theme-images'

Vue.component('responsive-img-tag', {
  props: [
    'className',
    'fit',
    'src',
    'cropAspectRatio',
    'alt',
    'defaultWidth'
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
    }
  },
  computed: {
    urlTemplate() {
      return this.imageUrl({ w: '{width}', h: '{height}'})
    },

    defaultURL() {
      const defaultWidth = this.defaultWidth ? this.defaultWidth : 500;
      if (this.cropAspectRatio) {
        var defaultHeight = defaultWidth * this.cropAspectRatio
      }
      return this.imageUrl({ w: defaultWidth, h: defaultHeight })
    },

    classes() {
      return [this.className, `object-${ this.fit ? this.fit : 'cover' }`].join(' ')
    }
  },
  template: `
    <img
      v-if="src"
      :class="'lazyload ' + classes"
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
    />
  `
})
