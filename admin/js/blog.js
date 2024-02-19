

const addBlogButton = document.getElementById("add-blog-btn");
const blogOverlay = document.getElementById("blog-overlay"); 
const blogForm = document.getElementById("add-blog-form");
const blogTitle = document.getElementById("blog-title");
const blogDescription = document.getElementById("add-blog-description");
const blogImage = document.getElementById("blog-image");
const blogCount = document.getElementById("blog-count");

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

  clearForm();
  hideBlogOverlay();
  fetchBlogs();
});

