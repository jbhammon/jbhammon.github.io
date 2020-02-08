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
  // let position = document.body.scrollTop || document.documentElement.scrollTop;
  //   if (position) {
  //       window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
  //       scrollAnimation = setTimeout("goBackToTop()", 10);
  //   } else {
  //     clearTimeout(scrollAnimation);
  //   }
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
}
