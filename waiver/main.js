var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
// var height = canvas.height = window.innerHeight * 0.8;
// var width = canvas.width = window.innerWidth * 0.8;
var height = canvas.height = $( window ).height() * 0.8;
var width = canvas.width = $( window ).width() * 0.8;

var penIsDown = true;
var penColor = "#FF362E";

document.addEventListener("keydown", onPenLiftUp, false);
document.addEventListener("keydown", onPenPutDown, false);
document.addEventListener("keydown", changeColor, false);
document.addEventListener("keydown", manualClear, false);
document.addEventListener("mousemove", onMouseMove, false);

document.addEventListener("touchstart", mobileDraw, { passive: false });

window.addEventListener("orientationchange", screenChange, false);

function clearCanvas(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function manualClear(e) {
  if(e.keyCode == 32) {
    clearCanvas(e);
  }
}

function onPenLiftUp(e) {
  if(e.keyCode == 38) {
    penIsDown = false;
  }
}

function onPenPutDown(e) {
  if(e.keyCode == 40) {
    penIsDown = true;
  }
}

function changeColor(e) {
  // Blue
  if(e.keyCode == 66) {
    $('#penColor').val('#4536FF')
  }
  // Green
  else if (e.keyCode == 71) {
    $('#penColor').val('#42FF43')
  }
  // Red
  else if (e.keyCode == 82) {
    $('#penColor').val('#ff0000')
  }
  // Yellow
  else if (e.keyCode == 89) {
    $('#penColor').val('#FFFD4D')
  }
}

// Using an offset of 22 pixels, because that makes the cursor
// seem "in the middle" of the square being drawn
function onMouseMove(e) {
  if(penIsDown) {
    context.beginPath();
    context.rect(e.clientX-22, e.clientY-22, 30, 30);
    // Grabbing the color from the color picker
    inputColor = document.getElementById("penColor");
    context.fillStyle = inputColor.value;
    context.fill();
  }
}

// Using an offset of 22 pixels, because that makes the cursor
// seem "in the middle" of the square being drawn
function mobileDraw(e) {
  e.preventDefault();

  context.beginPath();
  context.rect(e.touches[0].clientX-22, e.touches[0].clientY-22, 30, 30);
  // Grabbing the color from the color picker
  inputColor = document.getElementById("penColor");
  context.fillStyle = inputColor.value;
  context.fill();
}

function screenChange(e) {
  clearCanvas(e);

  canvas.width = $( window ).height() * 0.8;
  canvas.height = $( window ).width() * 0.8;
}
