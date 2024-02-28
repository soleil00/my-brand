
const blogImage = document.getElementById("soleil-image");
const blogDescription = document.getElementById("blog-description");
const blogTitle = document.getElementById("blog-title");
const commentContainer = document.getElementById("comm-cont");
const logoutButton = document.getElementById("user-logout");
const loginButton = document.getElementById("user-login");
const loginOverlay = document.getElementById("soleil-overlay");
const commentOverlay = document.getElementById("comment-overlay");


const relatedBlogs = document.getElementById("related-blogs")


const commentForm = document.getElementById("add-comment-form")
const comment = document.getElementById("comment-content")



function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
const blogIndex = getQueryParam("blogId");

const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

let currrentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

console.log(logoutButton)



const handleLogin = () => {
  if (!currrentUser) {
  logoutButton.style.display = "none";
} else {
  loginButton.style.display = "none"
}
}

handleLogin()


logoutButton.textContent=currrentUser.username


logoutButton.addEventListener("click", () => {
  loginButton.style.display = "block"
  console.log("user logged out")
  localStorage.removeItem("currentUser");
  currrentUser=null
  return handleLogin()
})

const currentBlog = blogs[blogIndex]

blogDescription.innerHTML = currentBlog.description
blogTitle.innerHTML = currentBlog.title
blogImage.src = currentBlog.image
 
console.log("current Blog : ", currentBlog);

const blogComments = currentBlog.comments



commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!comment.value) {
    commentOverlay.style.display = "flex"
    return;
  }

  loadComments()
  
})

const cancel = () => {
  loginOverlay.style.display = "none"
}
const cancel1 = () => {
  commentOverlay.style.display = "none"
}

const login = () => { 
  loginOverlay.style.display = "none"
  
  window.location.href='../login.html'
}



const loadComments = () => {
  commentContainer.innerHTML = "";
  if (comment.value) {
    if (currrentUser) {
      const newComment = {
        username:currrentUser.username,
        body:comment.value
      }
      currentBlog.comments.push(newComment);
    commentForm.reset();
    } else {
      loginOverlay.style.display = "flex"
      initilaCommentLoading()
      return;
    }

    

  }
  blogComments.slice(0-5).reverse().map(content => {
  const html=` <div class="comment">
              <img src="./images/ssss.jpg" alt="clasas" />
              <div>
                <div class="text-1">${content.username}</div>
                <div class="text-2">${content.body}</div>
              </div>
            </div>`
  
    commentContainer.insertAdjacentHTML("beforeend", html);
    
     blogs[blogIndex] = currentBlog;
  

  localStorage.setItem("blogs", JSON.stringify(blogs));
})
}



const initilaCommentLoading = () => {
    blogComments.slice(0,6).reverse().map(content => {
  const html=` <div class="comment">
              <img src="./images/ssss.jpg" alt="clasas" />
              <div>
                <div class="text-1">${content.username}</div>
                <div class="text-2">${content.body}</div>
              </div>
            </div>`
  
    commentContainer.insertAdjacentHTML("beforeend", html);
    
     blogs[blogIndex] = currentBlog;
  

  localStorage.setItem("blogs", JSON.stringify(blogs));
})
}

initilaCommentLoading()



blogs.forEach((blog, index) => {
   const truncatedDescription = blog.description.length > 30
    ? blog.description.substring(0, 25) + '... '
    : blog.description;
    const html =`<div class="related-blog" id="redirect">
          <img src=${blog.image} alt="" />
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

