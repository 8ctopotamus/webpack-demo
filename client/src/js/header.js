import { headerEl } from "./elements"

export function changeHeaderColor() {
  const currColor = headerEl.style.color
  if (currColor === 'black') {
    headerEl.style.color = 'blue'
  } else {
    headerEl.style.color = 'black'
  }
}

export function changeHeaderSize() {

}