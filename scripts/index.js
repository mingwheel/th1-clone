const navbar = document.querySelector(".navbar");
const nav_links = [...document.querySelectorAll(".navbar-menu a")];
const scrollItems = [...document.querySelectorAll(".page-section")];
const portfolio_links = document.querySelectorAll(".portfolio-link");
const portfolio_images = [
  "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg",
  "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg",
  "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg",
  "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg",
  "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg",
  "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg"
];
/* Nav menu smooth scrolling */
const scroll = new SmoothScroll(".js-scroll", {
  speed: 1000,
  easing: "easeInOutQuart"
});

/* Event Listeners */
window.addEventListener("scroll", throttle(fixNav, 20));
window.addEventListener("scroll", throttle(highlightCurrNavItem, 20));

function fixNav() {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
function highlightCurrNavItem() {
  let fromTop = this.scrollY + navbar.offsetHeight;
  let currItem = scrollItems.filter(item => {
    if (item.offsetTop < fromTop) return item;
  });
  if (currItem.length) {
    currItem = currItem[currItem.length - 1];
    let currId = currItem.id;
    nav_links.map(item => {
      if (item.getAttribute("href").includes(currId)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    })[0];
  } else {
    nav_links.map(item => {
      item.classList.remove("active");
    });
  }
}

// run fixNav on page reload
if (performance.navigation.type == 1) {
  fixNav();
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
portfolio_links.forEach((link, index) => {
  link.style.backgroundImage = `url(${portfolio_images[index]})`;
});
