const switcher = document.querySelector(".switcher");
const body = document.querySelector("body");

switcher.addEventListener("click", () => {
  body.classList.toggle("dark");
});
