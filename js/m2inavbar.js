const navbar = document.querySelector("nav");

window.addEventListener("scroll", function (e) {
  e.stopPropagation();

  console.log("scroll");

  if (scrollY > 10) {
    navbar.classList.add("js-navbar-change");
  } else {
    navbar.classList.remove("js-navbar-change");
  }
});
