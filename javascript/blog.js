const categories = document.querySelectorAll(".blog-category");
const blogContainer = document.getElementById("mySwipper")


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

blogs.forEach((blog, index) => {
 const truncatedDescription = blog.description.length > 30
    ? blog.description.substring(0, 10) + '... <span style="background-color:red;padding:5px 10px;border-radius:5px;white-space:nowrap;font-size:10px;color:white;height:20px;">Read More</span>'
    : blog.description;
  
  const comment= blog.comments.length

  

  const html = ` <swiper-slide>
  
  <div class="blog">
    <img src=${blog.image} alt="blog image here" />
    <div class="blog-description">
      <div class="stats">
        <div class="messs">
          <img src="./images/social/message.png" alt="" />
          <p>${comment}</p>
        </div>
        <div class="messs">
          <img src="./images/social/likes (1).png" alt="" />
          <p>23</p>
        </div>
      </div>
      <div class="title">${blog.title}</div>
      <div class='below-title'>${truncatedDescription}</div>
    </div>
  </div>
  
  </swiper-slide>`;

  blogContainer.insertAdjacentHTML("beforeend", html);
  const currentBlog = blogContainer.lastElementChild;

  currentBlog.addEventListener("click", function (event) {
    window.location.href = `/blog.html?blogId=${index}`;
  });
});


