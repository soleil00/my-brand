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

const load = () => {
  const reveals = document.querySelectorAll(".reveals");

  Array.from(reveals).forEach((item, index) => {
    const windowHeight = window.innerHeight;
    const revealPoint = 30;
    const revealTop = item.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", load);

const sidebarLinks = document.querySelectorAll("ul li a");

sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
