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
const navMenu = document.querySelector(".navbar");

function fixNav() {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    navMenu.classList.add("navbar-shrink");
  } else {
    navMenu.classList.remove("navbar-shrink");
  }
}

window.addEventListener("scroll", throttle(fixNav, 100));
