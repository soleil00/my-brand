const humburge = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const slides = document.getElementById("slides");
const slideContainer = document
  .getElementById("slide-container")
  .cloneNode(true);

slides.appendChild(slideContainer);

humburge.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
