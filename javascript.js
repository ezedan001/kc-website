const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
