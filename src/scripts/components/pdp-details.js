import Vue from 'vue'
import { zipWith, compact, trim } from 'lodash'
import { filter } from 'lodash'

Vue.component('pdp-details', {
  props: ['headings', 'contents'],
  data() {
    return {
      items: []
    };
  },
  template: `
    <div class="pdp-details">
      <div v-for="item, i in items" class="pdp-details__item">
        <h3 class="cursor-pointer pdp-details__heading" @click="toggleSlide(item)">
          <span class="uppercase">{{ item.heading }}</span> <span v-text="item.expanded ? '-' : '+'""></span>
        </h3>

        <div
        class="pdp-details__content-wrapper"
        ref="contentWrapper">
          <div class="pdp-details__content pt05 pb1" ref="content">
            <p class="pt-3">{{ item.content }}</p>
          </div>
        </div>

      </div>
    </div>
  `,
  created() {
    this.items = compact(
      zipWith(this.headings, this.contents, function(heading, content) {
        heading = trim(heading)
        content = trim(content)
        if (heading.length > 0 && content.length > 0) return {
          heading,
          content,
          expanded: false
        }
      })
    )
  },
  methods: {
    toggleSlide(selectedItem) {
      if (selectedItem.expanded) {
        this.slideUp(selectedItem)
      } else {
        this.slideDown(selectedItem)
      }
    },

    slideDown(selectedItem) {
      const i = this.items.indexOf(selectedItem)

      this.items.forEach((item, j) => {
        if (i !== j && item.expanded) {
          this.slideUp(item)
        }
      })

      const content = this.$refs.content[i]
      const contentWrapper = this.$refs.contentWrapper[i]
      contentWrapper.setAttribute('style', `max-height: ${content.scrollHeight}px`)
      selectedItem.expanded = true

    },

    slideUp(selectedItem) {
      const i = this.items.indexOf(selectedItem)
      const content = this.$refs.content[i]
      selectedItem.expanded = false


      const contentWrapper = this.$refs.contentWrapper[i]
      contentWrapper.setAttribute('style', `max-height: 0`)
    }

  }
})
