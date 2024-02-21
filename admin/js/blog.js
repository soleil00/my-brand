

const addBlogButton = document.getElementById("add-blog-btn");
const blogOverlay = document.getElementById("blog-overlay"); 
const blogForm = document.getElementById("add-blog-form");
const blogTitle = document.getElementById("blog-title");
const blogDescription = document.getElementById("add-blog-description");
const blogImage = document.getElementById("blog-image");
const blogCount = document.getElementById("blog-count");
const blogContainer = document.getElementById("blog-cont");

const fetchBlogs = () => {
  blogCount.innerHTML = `${blogs.length} Blogs`
}

const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function clearForm() {
  blogTitle.value = "";
  blogDescription.value = "";
  blogImage.value = "";
}

function showBlogOverlay() {
  blogOverlay.style.display = "block";
}

function hideBlogOverlay() {
  blogOverlay.style.display = "none";
}

addBlogButton.addEventListener("click", () => {
  showBlogOverlay();
  console.log("Added blog clicked")
});

blogOverlay.addEventListener("click", (e) => {
  if (e.target === blogOverlay || e.target.classList.contains("close-btn")) {
    hideBlogOverlay();
  }
});

blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!blogTitle.value || !blogImage.value || !blogDescription.value) {
    alert("Please fill out all fields");
    return;
  }
  
  const blog = {
    title: blogTitle.value,
    description: blogDescription.value,
    image: blogImage.value
  }

  
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  
  console.log(blog);
  blogCount.innerHTML = `${blogs.length} Blogs`
  blogContainer.innerHTML=""

  clearForm();
  hideBlogOverlay();
  fetchBlogs();
  renderBlogs();
});



const renderBlogs = () => {
  

blogs.forEach((blog, index) => {
  const idToDelete = `delete-${index}`;

  const html = `<div class="blog">
                  <img src="../images/roadmap.jpg" alt="blog image" />
                  <div class="blog-description">
                    <p class="blog-category">web3.0</p>
                    <p>${blog.title}</p>
                    <div class="blog-actions">
                      <button id="${idToDelete}">Delete</button>
                      <button class="edit-blog">Edit</button>
                    </div>
                  </div>
                </div>`;

  blogContainer.insertAdjacentHTML("beforeend", html);
});

blogContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.id.startsWith("delete-")) {
    const index = parseInt(e.target.id.split("-")[1]);
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    blogContainer.innerHTML = ""; 
    blogs.forEach((blog, index) => {
      const idToDelete = `delete-${index}`;
      const html = `<div class="blog">
                      <img src="../images/roadmap.jpg" alt="blog image" />
                      <div class="blog-description">
                        <p class="blog-category">web3.0</p>
                        <p>${blog.title}</p>
                        <div class="blog-actions">
                          <button id="${idToDelete}">Delete</button>
                          <button class="edit-blog">Edit</button>
                        </div>
                      </div>
                    </div>`;
      
      blogContainer.insertAdjacentHTML("beforeend", html);
      fetchBlogs()
    });
  }
});

}


renderBlogs();


