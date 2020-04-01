// Styles
import 'svbstrate'
import '../styles/theme.scss'

// External
import 'regenerator-runtime/runtime'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'

// Shopify
import {focusHash, bindInPageLinks} from '@shopify/theme-a11y'
import {cookiesEnabled} from '@shopify/theme-cart'
import {load} from '@shopify/theme-sections'

// Modules

// Sections
import './sections/product';

document.addEventListener("DOMContentLoaded", function(event) {
  load('*');
  search.init();


  // Common a11y fixes
  focusHash();
  bindInPageLinks();

  // Apply a specific class to the html element for browser support of cookies.
  if (cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace(
      'supports-no-cookies',
      'supports-cookies',
    );
  }
});
