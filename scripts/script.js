var containerNode =  document.querySelector('.drawingContainer')

var paintBox = function(event) {
  // identify the box that was clicked
  var boxNode = event.target
  // color that box blue
  if (boxNode.style.background === 'tomato') {
    boxNode.style.background = 'white'
  }
  else {
    boxNode.style.background = 'tomato'
  }
}

containerNode.addEventListener('click',paintBox)