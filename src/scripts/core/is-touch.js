function isTouch() {
  if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    return true
  } else {
    return false
  }
}

export default isTouch