
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });    
} 
navSlide();


window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("navbar").style.backgroundColor = "#161e29";
    document.getElementById("navbar").style.marginTop = "-5px";
    document.getElementById("logo").style.fontSize = "20px";     
    document.getElementById("navbar").style.boxShadow = "0 0 5px 5px #fff";      
    
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("links").style.marginTop = "100px"; 
  }
}
