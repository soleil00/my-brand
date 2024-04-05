const SingleBlog = ({
  blog,
  currentUser,
  setIsCommentPopupOpen,
  setIsLoginPopupOpen,
}) => {
  const [comment, setComment] = useState("");
  const [blogComments, setBlogComments] = useState([]);
  const [value, setValue] = useState("");
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [test, setTest] = useState(blog?.comments);

  const hasLiked =
    blog &&
    currentUser &&
    blog.likes.some((like) => like.includes(currentUser?._id));

  const newComment = {
    author: currentUser?.username,
    content: comment,
  };

  const handleComment = async () => {
    if (value.trim() === "") {
      setIsCommentPopupOpen(true);
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
          body: JSON.stringify({ content: value }),
        }
      );
      if (response.ok) {
        const data = await response.json();

        setComment("");
      } else {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
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
              />
            ) : (
              <img
                src="./javascript/unlike.png"
                alt="yes"
                className="like"
                id="track-like"
              />
            )}
            <span id="likes">{hasLiked ? "liked" : "nop"}</span>
          </div>
          <p id="blog-description">{blog.content}</p>
          {/* <Test /> */}
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
        {/* <div>
          {!blog ? (
            <CustomerLoader width={40} height={40} />
          ) : (
            <>
              {blog?.comments > 0
                ? blog.comments.slice(0, 6).map((content) => (
                    <div className="comment" key={content._id}>
                      <img src="./images/ssss.jpg" alt="clasas" />
                      <div>
                        <div className="text-1">{content.author}</div>
                        <div className="text-2">{content.content}</div>
                      </div>
                    </div>
                  ))
                : "No comments yet"}
            </>
          )}
        </div> */}

        <div>
          {blog.comments
            .reverse()
            .slice(-5)
            .map((b) => {
              console.log(b.content);

              return (
                <div className="comment" key={b._id}>
                  <img src="./images/ssss.jpg" alt="clasas" />
                  <div>
                    <div className="text-1">{b.author}</div>
                    <div className="text-2">{b.content}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <p>blog comment {blogComments.length}</p>
      </div>
    </div>
  );
};
