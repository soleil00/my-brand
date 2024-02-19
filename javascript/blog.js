const categories = document.querySelectorAll(".blog-category");

categories.forEach(function (category) {
  category.addEventListener("click", function (event) {
    event.preventDefault();
    categories.forEach(function (otherCategory) {
      otherCategory.classList.remove("active");
    });

    this.classList.add("active");
  });
});
