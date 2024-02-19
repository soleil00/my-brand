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

blogs.slice(-4).map(blog => { 
  const html=`  <div class="blog">
          <img src=${blog.image} alt="blog image here" />
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
            <p class="block">${blog.description}</p>
          </div>
        </div>`
  const allBlog = document.querySelectorAll(".blog");
  allBlog.forEach((article,index) => {
  article.addEventListener("click", function (event) {
    alert(index)
    });
})
  
 return blogContainer.insertAdjacentHTML("beforeend",html)
})


