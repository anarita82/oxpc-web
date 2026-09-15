const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
