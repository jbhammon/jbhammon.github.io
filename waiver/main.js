var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
var height = canvas.height = $( window ).height() * 0.8;
var width = canvas.width = $( window ).width() * 0.8;

// Bool to track if the user's pen is down
var penIsDown = true;
// var to track the color the user should be painting with
var penColor = "#ff0000";

// Listener to grab the color when the user uses the color picker
document.getElementById("penColor").addEventListener("input", colorPicked, false);

// Listen for up arrow, lift up the pen
document.addEventListener("keydown", onPenLiftUp, false);
// Listen for down arrow, put down the pen
document.addEventListener("keydown", onPenPutDown, false);
// Listen for color changes from keyboard input
document.addEventListener("keydown", changeColor, false);
// Listen for space bar presses to clear canvas
document.addEventListener("keydown", manualClear, false);

// Listen for mouse movements to draw the squares
document.addEventListener("mousemove", onMouseMove, false);

// Listen for touches to draw squares on mobile
document.addEventListener("touchstart", mobileDraw, { passive: false });

// Listen for orientation changes, clear the canvas, and resize canvase
window.addEventListener("orientationchange", screenChange, false);

function colorPicked(e) {
  inputColor = document.getElementById("penColor");
  penColor = inputColor.value;
}

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
    // $('#penColor').val('#1617FF')
    penColor = '#1617FF';
  }
  // Green
  else if (e.keyCode == 71) {
    // $('#penColor').val('#42FF43')
    penColor = '#42FF43';
  }
  // Red
  else if (e.keyCode == 82) {
    // $('#penColor').val('#ff0000')
    penColor = '#ff0000';
  }
  // Yellow
  else if (e.keyCode == 89) {
    // $('#penColor').val('#FFFD4D')
    penColor = '#FFFD4D';
  }
}

// Using an offset of 22 pixels, because that makes the cursor
// seem "in the middle" of the square being drawn
function onMouseMove(e) {
  if(penIsDown) {
    context.beginPath();
    context.rect(e.clientX-22, e.clientY-22, 30, 30);
    context.fillStyle = penColor;
    context.fill();
  }
}

// Using an offset of 22 pixels, because that makes the cursor
// seem "in the middle" of the square being drawn
function mobileDraw(e) {
  e.preventDefault();

  context.beginPath();
  context.rect(e.touches[0].clientX-22, e.touches[0].clientY-22, 30, 30);
  context.fillStyle = penColor;
  context.fill();
}

function screenChange(e) {
  clearCanvas(e);
  canvas.width = $( window ).height() * 0.8;
  canvas.height = $( window ).width() * 0.8;
}
