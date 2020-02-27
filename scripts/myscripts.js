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

  document.getElementById('design-tab').classList.add('active-tab');
  document.getElementById('dev-tab').classList.remove('active-tab');
}
function openDev(event) {
  document.getElementById('design-work').style.display = "none";
  document.getElementById('dev-work').style.display = "flex";

  document.getElementById('design-tab').classList.remove('active-tab');
  document.getElementById('dev-tab').classList.add('active-tab');
}
