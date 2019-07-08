const navbar = document.querySelector(".navbar");
const navlinks = document.querySelectorAll(".navbar-menu a");

/* Nav menu smooth scrolling */
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  easing: "easeInOutQuart"
});

function fixNav() {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

window.addEventListener("scroll", throttle(fixNav, 15));

// run fixNav on page reload
if (performance.navigation.type == 1) {
  fixNav();
  console.info("This page is reloaded");
} else {
  console.info("This page is not reloaded");
}

//  throttle scroll
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
