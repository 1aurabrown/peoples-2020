/**
 * Header Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Header template.
 *
 * @namespace header
 */
import SearchForm from '../components/search-form'
import {register} from '@shopify/theme-sections';

const classes = {
  active: 'active',
};

const selectors = {
  searchForm: '.search-form',
};

register('header', {
  async onLoad() {
    const searchFormEls = this.container.querySelectorAll(selectors.searchForm)
    console.log(searchFormEls)
    this.searchForms = Array.from(searchFormEls).map(el => {
      new SearchForm(el)
    })
  },

  onUnload() {
    this.searchForms.forEach( form => {
      form.destroy()
    })
  }
});
