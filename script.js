const menuBtn = document.querySelector(".menu-btn");
const navOver = document.querySelector(".nav-menu-overlay");
const nav = document.querySelector(".nav-menu");

const shopBtn = document.querySelector(".cart-btn-icon");
const cartOver = document.querySelector(".cart-overlay");
const cart = document.querySelector(".cart");

menuBtn.addEventListener("click", () => {
  navOver.classList.add("hidden");
  nav.classList.add("hide");
});

navOver.addEventListener("click", () => {
  navOver.classList.remove("hidden");
  nav.classList.remove("hide");
});

shopBtn.addEventListener("click", () => {
  cartOver.classList.add("hidden");
  cart.classList.add("hide");
});

cartOver.addEventListener("click", () => {
  cartOver.classList.remove("hidden");
  cart.classList.remove("hide");
});
