// $("#heroTextFirst").delay(500).animate({opacity: 1, left: "+=10"}, 700);
//
// $("#heroTextSecond").delay(1500).animate({opacity: 1, left: "+=5"}, 700);
//
// $("#heroTextThird").delay(2000).animate({opacity: 1, left: "+=5"}, 700);

function navBarHandling() {
  var x = document.getElementById("myTopnav");
  if (x.className === "myNavBar") {
    x.className += " responsive";
  } else {
    x.className = "myNavBar";
  }
}
