let mybutton = document.getElementsByClassName("top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton[0].style.display = "block";
  } else {
    mybutton[0].style.display = "none";
  }
}

function goBackToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}
