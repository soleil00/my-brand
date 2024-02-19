const addBlogButton = document.getElementById("add-blog-btn");
const blogOverlay = document.getElementById("blog-overlay");

addBlogButton.addEventListener("click", () => {
  blogOverlay.style.display = "block";
});
