window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
    document.getElementsById("mytext").className = "slideUp";
  
  }
}