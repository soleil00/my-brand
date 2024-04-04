const { useState, useEffect } = React;

    const BlogDetail = ({ match }) => {
      const [blog, setBlog] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchBlog = async () => {
          try {
            const response = await fetch(`https://my-brand-backend-1-cqku.onrender.com/api/v1/blogs/${match.params.id}`);
            const blogData = await response.json();
            setBlog(blogData);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching blog:', error.message);
          }
        };

        fetchBlog();
      }, [match.params.id]);

      if (loading) return <div>Loading...</div>;

      return (
        <div>
          <h1>{blog.title}</h1>
          <img src={blog.image} alt="blog image" />
          <p>{blog.content}</p>
          <p>Comments: {blog.comments.length}</p>
          <p>Likes: {blog.likes.length}</p>
        </div>
      );
    };

    const App = () => {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/blog/:id" component={BlogDetail} />
          </Switch>
        </BrowserRouter>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));