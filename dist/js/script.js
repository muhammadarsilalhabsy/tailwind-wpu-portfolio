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
  const btnToTop = document.querySelector("#btnToTop");
  // * Check if (windows is scroll) window.pageYOffSet > fixedNav

  // window.pageYOffset > fixedNav
  //   ? header.classList.add("navbar-fixed")
  //   : header.classList.remove("navbar-fixed");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    btnToTop.classList.remove("hidden");
    btnToTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    btnToTop.classList.add("hidden");
    btnToTop.classList.remove("flex");
  }
};

// ! hiden nav menu saat mobile
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  // darkToggle.checked
  //   ? html.classList.add("dark")
  //   : html.classList.remove("dark");

  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// move the toggle sesuai dengan local storage theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
