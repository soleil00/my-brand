const categories = document.querySelectorAll(".blog-category");
const blogContainer = document.getElementById("blog-container")


categories.forEach(function (category) {
  category.addEventListener("click", function (event) {
    event.preventDefault();
    categories.forEach(function (otherCategory) {
      otherCategory.classList.remove("active");
    });

    this.classList.add("active");
  });
});





const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

blogs.slice(-4).forEach((blog, index) => {
 const truncatedDescription = blog.description.length > 30
    ? blog.description.substring(0, 25) + '... <span style="background-color:red;padding:5px 10px;border-radius:5px;white-space:nowrap;font-size:10px;color:white">Read More</span>'
    : blog.description;


  const html = `<div class="blog">
    <img src="../images/roadmap.jpg" alt="blog image here" />
    <div class="blog-description">
      <div class="stats">
        <div class="messs">
          <img src="./images/social/message.png" alt="" />
          <p>10</p>
        </div>
        <div class="messs">
          <img src="./images/social/likes (1).png" alt="" />
          <p>23</p>
        </div>
      </div>
      <h5 class="title">${blog.title}</h5>
      <p class="block">${truncatedDescription}</p>
    </div>
  </div>`;

  blogContainer.insertAdjacentHTML("beforeend", html);
  const currentBlog = blogContainer.lastElementChild;

  currentBlog.addEventListener("click", function (event) {
    window.location.href = `/blog.html?blogId=${index}`;
  });
});


