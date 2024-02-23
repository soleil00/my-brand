

const addBlogButton = document.getElementById("add-blog-btn");
const blogOverlay = document.getElementById("blog-overlay"); 
const blogForm = document.getElementById("add-blog-form");
const blogTitle = document.getElementById("blog-title");
const blogDescription = document.getElementById("add-blog-description");
const blogImage = document.getElementById("blog-image");
const blogCount = document.getElementById("blog-count");
const blogContainer = document.getElementById("blog-cont");
const editOverlay = document.getElementById("edit-overlay");

///edit blog form




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
function hideEditOverlay() {
  editOverlay.style.display = "none";
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
editOverlay.addEventListener("click", (e) => {
  if (e.target === blogOverlay || e.target.classList.contains("close-btn")) {
    hideEditOverlay();
  }
});

blogForm.addEventListener("submit", (e) => {
  // e.preventDefault();

  if (!blogTitle.value || !blogImage.value || !blogDescription.value) {
    alert("Please fill out all fields");
    return;
  }
  
  const blog = {
    title: blogTitle.value,
    description: blogDescription.value,
    image: blogImage.value,
    comments: [],
    likes:[]
  }

  
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  
  console.log(blog);
  blogCount.innerHTML = `${blogs.length} Blogs`
  // blogContainer.innerHTML=""

  clearForm();
  hideBlogOverlay();
  fetchBlogs();
  renderBlogs();
});



const renderBlogs = () => {
  

blogs.forEach((blog, index) => {
  const idToDelete = `delete-${index}`;
  const idToEdit = `edit-${index}`;

  const html = `<div class="blog">
                  <img src="../images/roadmap.jpg" alt="blog image" />
                  <div class="blog-description">
                    <p class="blog-category">web3.0</p>
                    <p>${blog.title}</p>
                    <div class="blog-actions">
                      <button id="${idToDelete}">Delete</button>
                      <button class="edit-blog" id="${idToEdit}">Edit</button>
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
  } else if (e.target.tagName === "BUTTON" && e.target.id.startsWith("edit-")) {

    const index = parseInt(e.target.id.split("-")[1]);
    const blog = blogs[index];
    console.log(blog)

    const editBlogForm = document.getElementById("edit-blog-form")

    const editBlogTitle = document.getElementById("edit-blog-title");
    const editBlogDescription = document.getElementById("edit-blog-description");
    editBlogTitle.value = blog.title;
    editBlogDescription.value = blog.description;
    
    editOverlay.style.display = "block"

    



  }
})

}

renderBlogs()




