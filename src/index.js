"use strict";

let toggler = document.getElementById("navbarToggler");
let navbar = document.getElementById("mainNav");

const toggleAriaExp = (string) => (string === "false" ? "true" : "false");

toggler.addEventListener("click", function () {
  toggler.setAttribute(
    "aria-expanded",
    toggleAriaExp(this.attributes["aria-expanded"].textContent)
  );
  navbar.classList.toggle("expanded");
});
