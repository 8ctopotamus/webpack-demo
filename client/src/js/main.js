import { headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from "./box"
import { changeHeaderColor } from "./header"

import '../css/styles.css'

headerEl.style.color = 'black'

boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)


// register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('SW registered!!!'))
    .catch(err => console.log('Err registering SW', err))
} else {
  console.log('Your browser does not support Service Worker')
}