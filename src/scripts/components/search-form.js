const selectors = {
  button: '.search-form__button',
  input: 'input[type=search]',
  form: '.search-form__form',
  clear: '.search-form__clear'
}

export default class SearchForm {
  constructor (el) {
    this.el = el
    this.clickedCTA = this._clickedCTA.bind(this)
    this.clickedOutside = this._clickedOutside.bind(this)
    this.clickedClear = this._clickedClear.bind(this)
    this.clickedInside = this._clickedInside.bind(this)

    this.button = this.el.querySelector(selectors.button)
    this.form = this.el.querySelector(selectors.form)
    this.input = this.el.querySelector(selectors.input)
    this.clear = this.el.querySelector(selectors.clear)
    this.el.addEventListener('click', this.clickedInside)
    this.button.addEventListener('click', this.clickedCTA)
    this.clear.addEventListener('click', this.clickedClear)
  }

  show() {
    this.clearInput()
    this.el.classList.add('active')
    window.addEventListener('click', this.clickedOutside)
  }

  hide() {
    this.el.classList.remove('active')
    window.removeEventListener('click', this.clickedOutside)
  }

  clearInput() {
    this.input.value = '';
  }

  destroy() {
    this.button.removeEventListener('click', this.clickedCTA)
    window.removeEventListener('click', this.clickedOutside)
  }

  _clickedInside(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  _clickedClear(e) {
    if (this.input.value.length > 0) {
      this.clearInput()
    } else {
      this.hide()
    }
  }

  _clickedCTA(e) {
    e.preventDefault()
    e.stopPropagation()
    this.show()
  }


  _clickedOutside(e) {
    e.preventDefault()
    this.hide()
  }
}
