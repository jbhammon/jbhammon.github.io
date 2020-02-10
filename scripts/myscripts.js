function navBarHandling() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openDesign(event) {
  document.getElementById('design-work').style.display = "flex";
  document.getElementById('dev-work').style.display = "none";
}
function openDev(event) {
  document.getElementById('design-work').style.display = "none";
  document.getElementById('dev-work').style.display = "flex";
}
