const links = document.querySelectorAll(".links p");
const mainContents = document.querySelectorAll(".main-contents > div");
const sidebar = document.getElementById("side-bar");
const closeMe = document.getElementById("close-me");
const burger = document.getElementById("burger");

let windowWidth;

burger.addEventListener("click", () => (sidebar.style.display = "block"));
closeMe.addEventListener("click", () => (sidebar.style.display = "none"));
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });

    link.classList.add("active");

    mainContents.forEach((content) => {
      content.style.display = "none";
    });

    const targetId = link.textContent.toLowerCase();

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.display = "block";
      sidebar.style.display = "none"
    }
  });
});

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth > 786) {
    sidebar.style.display = "block";
  } else {
  }
});
