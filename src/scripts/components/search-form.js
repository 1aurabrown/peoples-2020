import Vue from 'vue';

Vue.component('search-form', {
  props: ['alwaysOpen'],
  data: function () {
    return {
      id: null,
      active: !!this.alwaysOpen,
      searchText: '',
      searchPlaceholder: theme.strings.searchPlaceholder,
      searchSubmit: theme.strings.searchSubmit
    }
  },
  template: `
    <div class="search-form">
      <form v-show="active" class="search-form__form" action="/search" method="get" role="search">
        <label :for="'search-input-' + this.uid" class="label-hidden">
          {{ searchPlaceholder }}
        </label>

        <div class="rel">
          <input type="search"
          ref="input"
          class="x py025 pr1 border-bottom"
          name="q"
          placeholder="search"
          :id="'search-input-' + this.uid"
          v-model="searchText"/>


          <button type="button" class="py05 cursor-pointer abs y top right bottom" @click="clickedClear">
            <x-button></x-button>
          </button>
        </div>

        <button type="submit" class="no-js button">
          <span class="icon-fallback-text">{{ searchSubmit }}</span>
        </button>

      </form>

      <a v-show="!active" class="search-form__button" href="/search" @click.prevent="open">
        <span class="icon-fallback-text">{{ searchSubmit }}</span>
      </a>
    </div>
  `,

  watch: {
    active(val) {
      this.clearInput()
      if (val === true) {
        setTimeout(() => {
          this.$refs.input.focus()
        }, 10)
      }
    }
  },

  methods: {
    clearInput() {
      this.searchText = '';
    },

    open() {
      this.active = true
    },

    close() {
      if (this.alwaysOpen) return
      this.active = false;
    },

    clickedClear() {
      if (this.searchText.length > 0) {
        this.clearInput()
        this.$refs.input.focus()
      } else {
        if (this.alwaysOpen) return
        this.active = false
      }
    }
  }
})

