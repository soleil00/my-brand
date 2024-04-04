const { useState, useEffect } = React;

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

  const handleClick = (blog) => {
    window.location.href = `./blog.html?blogId=${blog._id}`;
    // alert(blog?.title)
  };

  return (
    <>
      {loading ? <div className="loading">
        <div className="spinner"></div>
      </div> : (
        blogs.map(blog => {
          const truncatedDescription = blog?.content?.length > 30
            ? `${blog.content.substring(0, 10)}... <span style="background-color:red;padding:5px 10px;border-radius:5px;white-space:nowrap;font-size:10px;color:white;height:20px;">Read More</span>`
            : blog.content;
          const comment = blog.comments.length;
          const likes = blog.likes.length;

          return (
              <swiper-slide key={blog._id} onClick={()=>handleClick(blog)}>
                <div className="blog" >
                  <img src={blog.image} alt="blog image here" />
                  <div className="blog-description">
                    <div className="stats">
                      <div className="messs">
                        <img src="./images/social/message.png" alt="" />
                        <p>{comment}</p>
                      </div>
                      <div className="messs">
                        <img src="./images/social/likes (1).png" alt="" />
                        <p>{likes}</p>
                      </div>
                    </div>
                    <div className="title">{blog.title}</div>
                    <div className='below-title' dangerouslySetInnerHTML={{ __html: truncatedDescription }}></div>
                  </div>
                </div>
          </swiper-slide>
          );
        })
      )}
    </>
  );
};

ReactDOM.render(<BlogComponent />, document.getElementById("mySwipper"));
