var touch

if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
  touch = true
} else {
  touch = false
}

const isTouch = touch
export default isTouch