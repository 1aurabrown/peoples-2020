import Vue from 'vue';

Vue.component('search-form', {
  data: function () {
    return {
      id: null,
      active: false,
      searchText: '',
      searchPlaceholder: theme.strings.searchPlaceholder,
      searchSubmit: theme.strings.searchSubmit
    }
  },
  template: `
    <div class="search-form" v-click-outside="{ handler: close }">
      <form v-show="active" class="search-form__form" action="/search" method="get" role="search">
        <label :for="'search-input-' + this.uid" class="label-hidden">
          {{ searchPlaceholder }}
        </label>

        <input type="search"
        name="q"
        :id="'search-input-' + this.uid"
        v-model="searchText">


        <button type="button" class="cursor-pointer search-form__clear" @click="clickedClear">X</button>

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
    active() {
      this.clearInput()
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
      this.active = false;
    },

    clickedClear() {
      if (this.searchText.length > 0) {
        this.clearInput()
      } else {
        this.active = false
      }
    }
  }
})

