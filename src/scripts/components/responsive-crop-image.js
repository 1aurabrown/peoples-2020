import Vue from 'vue';

Vue.component('responsive-crop-image', {
  props: [
    'imageClass',
    'fit',
    'src',
    'defaultAspectRatio',
    'cropAspectRatio',
    'alt',
    'defaultWidth',
    'wrapperClass',
    'placeholderKey'
  ],
  computed: {
    aspectRatio() {
      const aspectRatio = this.cropAspectRatio ? this.cropAspectRatio : this.defaultAspectRatio
      return aspectRatio ? aspectRatio : 1
    }
  },
  template: `
    <div
      :id="$id('ImageWrapper')"
      height="0"
      :class="'overflow-hidden rel p0 ' + wrapperClass">

      <div class="overflow-hidden p0 x" :style="'padding-bottom: ' + (100 / this.aspectRatio) + '%'">
        <responsive-img-tag
          :src='src'
          :crop-aspect-ratio='cropAspectRatio'
          :fit="fit"
          :alt="alt"
          :default-width="defaultWidth"
          :class-name="'x y fill abs ' + (imageClass ? imageClass : '')"
          :placeholder-key="placeholderKey"
        ></responsive-img-tag>
      </div>

    </div>
  `
})
