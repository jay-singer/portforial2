const humberger = document.querySelector("#humburger");
const menu = document.querySelector("#menu");
const darkChange = document.querySelector("body");
const darkMode = document.querySelector("#night");
const humbergerIcon = document.querySelectorAll(".humburger");
const hLinks = document.querySelectorAll("#hLink");
humberger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  humberger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    humberger.classList.toggle("bg-white");
  });
});
darkMode.addEventListener("click", () => {
  darkChange.classList.toggle("dark");
});
