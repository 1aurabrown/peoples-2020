/**
 * Header Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Header template.
 *
 * @namespace header
 */
import SearchForm from '../components/search-form'
import {register} from '@shopify/theme-sections'
import modalController from '../components/modal-controller'
import Vue from 'vue'


const selectors = {
  searchForm: '.search-form',
};

register('header', {
  onLoad() {
    const searchFormEls = this.container.querySelectorAll(selectors.searchForm)
    this.searchForms = Array.from(searchFormEls).map(el => {
      new SearchForm(el)
    })

    this.vue = new Vue( {
      el: this.container,
      data: {
        modalController: modalController
      },
      delimiters: ['${', '}'],
      methods: {
        toggleModal: function(modal) {
          this.modalController.toggleModal(modal)
        }
      },
    })
  },

  onUnload() {
    this.searchForms.forEach( form => {
      form.destroy()
    })
  }
});
