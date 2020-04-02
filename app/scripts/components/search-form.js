const selectors = {
  button: 'a[href="/search"]'
}

const namespace = '.search-form'

export default class SearchForm {
  constructor (el) {
    this.el = el
    this.showForm = this._showForm.bind(this)
    this.hideForm = this._hideForm.bind(this)
    this.button = this.el.querySelector(selectors.button)
    console.log(this.button)
    this.button.addEventListener('click', this.showForm)
  }

  destroy() {
    this.button.removeEventListener('click' + this.namespace, this.showForm)
    window.removeEventListener('click' + this.namespace, this.hideForm)
  }

  _showForm(e) {
    e.preventDefault()
    e.stopPropagation()
    this.el.classList.add('active')
    window.addEventListener('click' + namespace, this.hideForm)
  }

  _hideForm(e) {
    e.preventDefault()
    this.el.classList.remove('active')
    window.removeEventListener('click' + namespace, this.hideForm)
  }

}
