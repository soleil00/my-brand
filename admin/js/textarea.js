
const blogTitle = document.getElementById("new-title")
const blogImage = document.getElementById("new-image")
const newBlogForm = document.getElementById("new-blog-form");
const textArea = document.getElementById("mytextarea");
const blogCount = document.getElementById("blog-count");

newBlogForm.addEventListener("submit", e => {
    e.preventDefault();
    
    
    const content = tinymce.get('mytextarea').getContent();

    
    const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    const title = titleMatch ? titleMatch[1] : "";

    const imageMatch = content.match(/<img[^>]*src="([^"]+)"[^>]*>/i);
    const image = imageMatch ? imageMatch[1] : "";

    
    const description = content.replace(/<h1[^>]*>([^<]+)<\/h1>/i, "") 
                               .replace(/<img[^>]*src="([^"]+)"[^>]*>/i, "")
                               .replace(/<[^>]*>/g, "");

    
    const blog = {
        title: title.trim(), 
        image: image.trim(),
        description: description.trim() 
    };


    const blogs = JSON.parse(localStorage.getItem("blogs"));
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
  

    console.log("Blog saved to local storage:", blog);

    blogCount.textContent = `${blogs.length} Blogs`

    newBlogForm.reset();

    console.log("from soleil",blogTitle)
});
