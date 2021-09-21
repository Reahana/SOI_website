$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["Read Our Blogs....", "About Latest News....", "A Lots More...."],
    typeSpeed: 150,
    backSpeed: 80,
    loop: true
  });
  // owl carousel script
  $('#blogSec').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 10,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

  $('.workshop-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1

      },

      600: {
        items: 1

      },
      1000: {
        items: 1

      }
    }
  })
  $('.webiner-slider').owlCarousel({
    rtl:true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $('.training-slider').owlCarousel({
    rtl:true,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

});
