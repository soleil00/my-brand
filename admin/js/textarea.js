const blogTitle = document.getElementById("new-title");
const blogImage = document.getElementById("new-image");
const newBlogForm = document.getElementById("new-blog-form");
const textArea = document.getElementById("mytextarea");
const blogCount = document.getElementById("blog-count");
const showImage = document.getElementById("show-image");
const label = document.getElementById("label");

const onFileChange = (e) => {
    if (e.target.files) {

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        
        reader.onload = e => {
            blogImage.src = e.target.result;
            showImage.src = e.target.result
            showImage.style.display = "block"
            // label.style.display = "none"
        };
    }
};

blogImage.addEventListener("change", onFileChange);

newBlogForm.addEventListener("submit", e => {
    e.preventDefault();
    
    const content = tinymce.get('mytextarea').getContent();

    const description = content.replace(/<h1[^>]*>([^<]+)<\/h1>/i, "") 
                           .replace(/<img[^>]*src="([^"]+)"[^>]*>/i, "")
                           .replace(/<[^>]*>/g, "");

    const blog ={
        title: blogTitle.value,
        image: blogImage.src,
        description: description,
        comments: [],
        likes:[]
    };

    const blogs = JSON.parse(localStorage.getItem("blogs"));
blogs.push(blog);
localStorage.setItem("blogs", JSON.stringify(blogs));

    
    console.log("Blog saved to local storage:", blog);


    newBlogForm.reset();
    showImage.style.display ="none"
});


