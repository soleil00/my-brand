
const blogImage = document.getElementById("blogImage");
const blogDescription = document.getElementById("blog-description");
const blogTitle = document.getElementById("blog-title");

const relatedBlogs = document.getElementById("related-blogs")

//////
const commentForm = document.getElementById("add-comment-form")
const comment = document.getElementById("comment-content")



function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
const blogIndex = getQueryParam("blogId");

const blogs = JSON.parse(localStorage.getItem("blogs")) || []

const currentBlog = blogs[blogIndex]

blogDescription.innerHTML = currentBlog.description
blogTitle.innerHTML = currentBlog.title

 
console.log("current Blog : ", currentBlog);

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!comment.value) {
    alert("Please fill in comment1");
    return;
  }

  currentBlog.comments.push(comment.value);
  commentForm.reset()

  console.log(currentBlog)
})


blogs.forEach((blog, index) => {
   const truncatedDescription = blog.description.length > 30
    ? blog.description.substring(0, 25) + '... '
    : blog.description;
    const html =`<div class="related-blog" id="redirect">
          <img src="./images/ssss.jpg" alt="" />
          <div>
            <h5>${blog.title}</h5>
            <p>${truncatedDescription}</p>
          </div>
        </div>`
    
    relatedBlogs.insertAdjacentHTML("beforeend", html);
    const currentBlog = relatedBlogs.lastElementChild;
    currentBlog.addEventListener("click", function (event) {
    window.location.href = `/blog.html?blogId=${index}`;
  });
})