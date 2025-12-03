const hamburgerBtn = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("toggle-btn");
});
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("toggle-btn");
});
