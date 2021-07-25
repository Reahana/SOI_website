window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop >70 || document.documentElement.scrollTop >70) {
    document.getElementsById("right").className = "slideUp";
  
  }
}