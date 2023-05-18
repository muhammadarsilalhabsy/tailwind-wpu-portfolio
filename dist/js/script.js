// ! Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// ! header fixed
// * check windows scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop; // * by default header have value 0

  // * Check if (windows is scroll) window.pageYOffSet > fixedNav

  window.pageYOffset > fixedNav
    ? header.classList.add("navbar-fixed")
    : header.classList.remove("navbar-fixed");
};

// ! navbar
