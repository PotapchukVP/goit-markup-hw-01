// script.js
const modalWindow = document.getElementById("modal");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

openMenuButton.addEventListener("click", () => {
  modalWindow.style.display = "flex";
});

closeMenuButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
});
