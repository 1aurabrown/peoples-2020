// External
import '../styles/theme.scss'

import 'regenerator-runtime/runtime'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'

// Shopify
import {focusHash, bindInPageLinks} from '@shopify/theme-a11y'
import {load} from '@shopify/theme-sections'

// Global
import {registerVueInstances} from './core/vue-setup'

document.addEventListener("DOMContentLoaded", function(event) {
  load('*');
  // Common a11y fixes
  focusHash();
  bindInPageLinks();
  registerVueInstances({ selector: '[data-vue-instance]' })
});

