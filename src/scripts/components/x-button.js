import Vue from 'vue';

Vue.component('x-button', {
  template: `
    <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>button / x</title>
        <g id="Group" stroke="currentColor" stroke-width="2" fill-rule="evenodd" stroke-linecap="butt">
          <line x1="1" y1="14" x2="14" y2="1" id="Line"></line>
          <line x1="1" y1="14" x2="14" y2="1" id="Line" transform="translate(7.500000, 7.500000) scale(1, -1) translate(-7.500000, -7.500000) "></line>
        </g>
    </svg>
  `
});
