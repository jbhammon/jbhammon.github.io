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
    penColor = "#4536FF";
  }
  // Green
  else if (e.keyCode == 71) {
    penColor = "#42FF43";
  }
  // Red
  else if (e.keyCode == 82) {
    penColor = "#FF362E";
  }
  // Yellow
  else if (e.keyCode == 89) {
    penColor = "#FFFD4D";
  }
}

function onMouseMove(e) {
  if(penIsDown) {
    console.log("one")
    context.beginPath();
    context.rect(e.clientX-22, e.clientY-22, 30, 30);
    context.fillStyle = penColor;
    context.fill();
  }
}

function mobileDraw(e) {
  console.log("two")
  e.preventDefault();
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  context.beginPath();
  context.rect(e.touches[0].clientX-22, e.touches[0].clientY-22, 30, 30);
  context.fillStyle = penColor;
  context.fill();
}

function screenChange(e) {
  clearCanvas(e);
  console.log("We're about to set the new size, the height is:");
  console.log($( window ).height());
  canvas.width = $( window ).height() * 0.8;
  canvas.height = $( window ).width() * 0.8;
}
