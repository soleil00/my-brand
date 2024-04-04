// const categories = document.querySelectorAll(".blog-category");
// const blogContainer = document.getElementById("mySwipper")
// const loader = document.getElementById("loader")

const { useState, useEffect,ReactDom }=React;

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs");
        const allBlogs = await response.json();
        setBlogs(allBlogs.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    fetchBlogs();
  }, []);


  const handleClick=()=>{
    alert("clicked")
  }

  return (
    <div id="mySwipper">
      {loading ? <div id="loader">Loading...</div> : (
        blogs.map(blog => (
          <div key={blog._id} className="blog">
            <img src={blog.image} alt="blog image here" />
            <div className="blog-description">
              <div className="stats">
                <div className="messs">
                  <img src="./images/social/message.png" alt="" />
                  <p>{blog.comments.length}</p>
                </div>
                <div className="messs">
                  <img src="./images/social/likes (1).png" alt="" />
                  <p>{blog.likes.length}</p>
                </div>
              </div>
              <div className="title">{blog.title}</div>
              <div className='below-title'>{blog.content}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ReactDom.render(<BlogComponent />, document.getElementById("mySwipper"))
