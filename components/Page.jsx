const { useState, useEffect } = React;

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

const loginUser = () => {
  window.location.href = "../login.html";
};

const fetchBlogId = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};

const CustomerLoader = ({ width, height }) => {
  const loaderStyle = {
    border: "6px solid rgba(0, 0, 0, 0.1)",
    borderTop: "6px solid blue",
    borderRadius: "50%",
    width: width,
    height: height,
    animation: "spin 1s linear infinite",
    margin: "0 auto",
  };

  return <div style={loaderStyle}></div>;
};

const RelatedBlogs = ({ toggle }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const allBlogs = await response.json();
      setBlogs(allBlogs.data);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  const handleClick = (blog) => {
    window.location.href = `/blog.html?blogId=${blog._id}`;
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="main-right" id="related-blogs">
      <h3>Related Blogs</h3>
      <button onClick={toggle}>Toggle</button>
      {blogs.length > 0 ? (
        blogs.map((blog) => {
          const truncatedDescription =
            blog?.content?.length > 30
              ? blog.content.substring(0, 25) + "... "
              : blog.content;

          return (
            <div
              class="related-blog"
              id="redirect"
              key={blog._id}
              onClick={() => handleClick(blog)}
            >
              <img src={blog.image} alt="" />
              <div>
                <h5>${blog.title}</h5>
                <p>${truncatedDescription}</p>
              </div>
            </div>
          );
        })
      ) : (
        <CustomerLoader width={50} height={50} />
      )}
    </div>
  );
};

const SingleBlog = ({
  blog,
  currentUser,
  setIsCommentPopupOpen,
  setIsLoginPopupOpen,
}) => {
  const [comment, setComment] = useState("");
  const [blogComments, setBlogComments] = useState([]);
  const [value, setValue] = useState({});
  const [likes, setLikes] = useState(blog.likes.length);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [test, setTest] = useState(blog?.comments);
  const [hasLiked, setHasLiked] = useState(
    blog.likes.some((like) => like.includes(currentUser?._id))
  );

  const createComment = () => {
    const newComment = {
      author: currentUser?.username,
      content: comment,
    };

    setBlogComments((state) => [...state, newComment]);
  };

  const handleComment = async () => {
    if (comment.trim() === "") {
      setIsCommentPopupOpen(true);
      return;
    } else if (!currentUser) {
      setIsLoginPopupOpen(true);
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/${blog._id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content: comment }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        createComment();

        setComment("");
      } else {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/${blog._id}/likes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      if (response.ok) {
        setHasLiked((state) => !state);
        setLikes(hasLiked ? likes - 1 : likes + 1);
      } else {
        throw new Error("Failed to like/unlike blog");
      }
    } catch (error) {
      console.error("Error liking/unliking blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const likingFn = async () => {
    alert(hasLiked);
    hasLiked = !hasLiked;
  };

  useEffect(() => {
    setBlogComments((state) => [...state, ...blog?.comments]);
  }, []);

  return (
    <div className="main-left">
      {!blog ? (
        <CustomerLoader width={100} height={100} />
      ) : (
        <>
          <h3 id="blog-title">{blog.title}</h3>
          <img src={blog.image} alt="blog image" id="soleil-image" />
          <div className="like-holder" id="like-holder">
            {hasLiked ? (
              <img
                src="./javascript/like.png"
                alt="yes"
                className="like"
                id="track-like"
                onClick={() => handleLike()}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src="./javascript/unlike.png"
                alt="yes"
                className="like"
                id="track-like"
                onClick={() => handleLike()}
                style={{ cursor: "pointer" }}
              />
            )}
            <span id="likes">{likes}</span>
          </div>
          <p id="blog-description">{blog.content}</p>
        </>
      )}
      <div>
        <h3>Comments</h3>
        <div className="add-comment-cont">
          <input
            style={{ width: "100%", padding: "10px 5px", borderRadius: "5px" }}
            type="text"
            placeholder="Enter comments"
            id="comment-content"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            id="comment-btn"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              float: "right",
              padding: "10px 5px",
              borderRadius: "5px",
              margin: "5px 0 20px 0",
            }}
            onClick={handleComment}
          >
            {isLoading ? <CustomerLoader width={20} height={20} /> : "Comment"}
          </button>
        </div>

        <div>
          {blogComments
            .slice(-5)
            .reverse()
            .map((b) => (
              <div className="comment" key={b._id}>
                <img src="./images/ssss.jpg" alt="clasas" />
                <div>
                  <div className="text-1">{b.author}</div>
                  <div className="text-2">{b.content}</div>
                </div>
              </div>
            ))}
        </div>
        <p>blog comment {blogComments.length}</p>
      </div>
    </div>
  );
};

const LoginPopup = ({ setIsLoginPopupOpen }) => {
  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "300px",
  };

  const svgStyle = {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "#ce3680",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
  };

  const onCancel = () => {
    // Handle cancel action
  };

  const onLogin = () => {
    // Handle login action
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsLoginPopupOpen(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
      onClick={(e) => handleClose(e)}
    >
      <div style={popupStyle}>
        <h3 style={{ marginBottom: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={svgStyle}
          >
            <path
              fill="#ce3680"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"
            />
          </svg>
          Login Required
        </h3>
        <p>To perform an action, please log in or sign up.</p>
        <button style={buttonStyle} onClick={loginUser}>
          Login
        </button>
        <button style={buttonStyle} onClick={() => setIsLoginPopupOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};
const CommentPopup = ({ setIsCommentPopupOpen }) => {
  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "300px",
  };

  const svgStyle = {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    backgroundColor: "#f00000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
  };

  const onCancel = () => {
    // Handle cancel action
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsCommentPopupOpen((state) => !state);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
      onClick={(e) => handleClose(e)}
    >
      <div style={popupStyle}>
        <h3 style={{ marginBottom: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={svgStyle}
          >
            <path
              fill="#f00000"
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"
            />
          </svg>
          Empty Comment
        </h3>
        <p>comment field must be empty try to fill in some content</p>
        <button
          style={buttonStyle}
          onClick={() => setIsCommentPopupOpen((state) => !state)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NavBar = ({ user }) => {
  const headerStyle = {
    textDecoration: "none",
    marginRight: "10px",
    fontSize: "25px",
  };

  return (
    <nav>
      <h3>SoleilApp</h3>
      <div className="tail">
        <a href="./index.html" style={headerStyle}>
          Home
        </a>
        {user ? (
          <div className="log" id="auth2" onClick={logout}>
            <img
              src="https://up.yimg.com/ib/th?id=OIP.52T8HHBWh6b0dwrG6tSpVQHaFe&%3Bpid=Api&rs=1&c=1&qlt=95&w=156&h=115"
              alt=""
            />
            <p>Logout</p>
          </div>
        ) : (
          <div id="auth1" className="login-btn" onClick={loginUser}>
            Login
          </div>
        )}
      </div>
    </nav>
  );
};

const Page = () => {
  const [currentBlog, setCurrentBlog] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [blogComments, setBlogComments] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [commentContent, setCommentContent] = useState("");
  const [allBlogs, setAllBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);
  const blogId = fetchBlogId("blogId");

  useEffect(() => {
    autoLoginUser();
    getCurrentBlog();
    fetchBlogs();
  }, []);

  const autoLoginUser = async () => {
    try {
      const response = await fetch(
        "https://my-brand-backend-1-cqku.onrender.com/api/v1/users/auth/verify-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setCurrentUser(data.data);
      console.log("after setting current user : ", data.data);
    } catch (error) {
      console.error("Error auto login user:", error.message);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const allBlogs = await response.json();
      setAllBlogs(allBlogs.data);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  const getCurrentBlog = async () => {
    try {
      const response = await fetch(
        `https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/${blogId}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.ok) {
        setIsLoading(false);
        const foundBlog = await response.json();
        setCurrentBlog(foundBlog.data);
        console.log("after getting blog ", foundBlog.data);
        setIsLiked(foundBlog.data.likes.includes(currentUser?._id));
        setBlogComments(foundBlog.data.comments);
      } else {
        alert("Couldn't find blog");
      }
    } catch (error) {
      console.error("Error fetching current blog:", error.message);
    }
  };

  const toggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div>
      <NavBar user={currentUser} />
      <div style={{ width: "100%", height: "100px" }}></div>
      <main class="common testing">
        {currentBlog ? (
          <SingleBlog
            blog={currentBlog}
            currentUser={currentUser}
            setIsCommentPopupOpen={setIsCommentPopupOpen}
            setIsLoginPopupOpen={setIsLoginPopupOpen}
          />
        ) : (
          <CustomerLoader width={100} height={100} />
        )}
        <RelatedBlogs toggle={toggle} />
      </main>

      {isLoginPopupOpen && (
        <LoginPopup setIsLoginPopupOpen={setIsLoginPopupOpen} />
      )}
      {isCommentPopupOpen && (
        <CommentPopup setIsCommentPopupOpen={setIsCommentPopupOpen} />
      )}
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("body"));
