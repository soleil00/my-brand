const scrollBtn = document.getElementById("scroll-btn");
const blogCategories = document.getElementById("blog-categories");

scrollBtn.addEventListener("click", () => {
  const maxScroll = blogCategories.scrollWidth - blogCategories.clientWidth;
  const currentScroll = blogCategories.scrollLeft;
  const targetScroll = currentScroll - 10;

  if (targetScroll < 0) {
    blogCategories.scrollTo({ left: maxScroll, behavior: "smooth" });
  } else {
    blogCategories.scrollTo({ left: targetScroll, behavior: "smooth" });
  }
});
