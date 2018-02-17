document.addEventListener('DOMContentLoaded', function () {
  // let canv = document.getElementById('canvas')
  let canvs = document.getElementsByClassName('canvas')
  let bruss = document.getElementsByClassName('brusher')
  // let brus = document.getElementById('brusher').style.backgroundColor
  let whichBrush = ''
  for (let i = 0; i < bruss.length; i++) {
    if (bruss[i].classList.contains('selected')) {
      whichBrush = bruss[i].classList.item(1)
      // console.log('whichBrush is ', whichBrush)
    }
  }
  // let canv = canvs[0];
  // console.log('start??')
  function toggleBrush() {
    let colo = this.classList.item(1)
    if (whichBrush !== colo) {
      for (let i = 0; i < bruss.length; i++) {
        bruss[i].classList.remove('selected')
      }
      this.classList.add('selected')
      whichBrush = colo
      // console.log(whichBrush, ' selected')
    }
  }
  function toggleRed() {
    if (this.classList.contains('white')) {
      this.classList.replace('white', 'red')
      // console.log('is now red')
    }
    else {
      this.classList.replace('red', 'white')
      // console.log('is now white')
    }
  }
  function toggleColor() {
    if (!this.classList.contains(whichBrush)) {
      this.classList.replace(this.classList.item(1), whichBrush)
      // console.log('is now ', whichBrush)
    }
  }
  for (let i = 0; i < canvs.length; i++) {
    canvs[i].addEventListener('click', toggleColor)
  }
  for (let i = 0; i < bruss.length; i++) {
    bruss[i].addEventListener('click', toggleBrush)
  }
  // if (canv.getAttribute('col').className === 'white') {
  //   canv.setAttribute('col', 'red')
  //   console.log('turned red')
  // }
  // else {
  //   canv.setAttribute('col', 'white')
  //   console.log('turned white')
  // }
  //
  // canv.addEventListener('click', toggleColor)
})
