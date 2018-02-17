document.addEventListener('DOMContentLoaded', function () {
  let canvs = document.getElementsByClassName('canvas')
  let bruss = document.getElementsByClassName('brusher')
  let whichBrush = ''
  let isClick = false
  for (let i = 0; i < bruss.length; i++) {
    if (bruss[i].classList.contains('selected')) {
      whichBrush = bruss[i].classList.item(1)
    }
  }
  function toggleBrush() {
    let colo = this.classList.item(1)
    if (whichBrush !== colo) {
      for (let i = 0; i < bruss.length; i++) {
        bruss[i].classList.remove('selected')
      }
      this.classList.add('selected')
      whichBrush = colo
    }
  }
  function toggleColor() { // depricated
    if (!this.classList.contains(whichBrush)) {
      this.classList.replace(this.classList.item(1), whichBrush)
    }
  }
  function toggleColorDown() {
    isClick = true;
    if (!this.classList.contains(whichBrush)) {
      this.classList.replace(this.classList.item(1), whichBrush)
    }
  }
  function toggleColorEnter() {
    if (isClick) {
      if (!this.classList.contains(whichBrush)) {
        this.classList.replace(this.classList.item(1), whichBrush)
      }
    }
  }
  function toggleColorUp() {
    isClick = false;
  }
  for (let i = 0; i < canvs.length; i++) {
    // canvs[i].addEventListener('click', toggleColor)
    canvs[i].addEventListener('mousedown', toggleColorDown)
    canvs[i].addEventListener('mouseenter', toggleColorEnter)
    canvs[i].addEventListener('mouseup', toggleColorUp)
  }
  for (let i = 0; i < bruss.length; i++) {
    bruss[i].addEventListener('click', toggleBrush)
  }
})
