// declare var React: any;

// const Test = require("./Test.jsx");

const headerStyle = {
  textDecoration: "none",
  marginRight: "10px",
  fontSize: "25px",
};

const NavBar = () => {
  return (
    <>
      <h3>SoleilApp</h3>
      <div className="tail">
        <a href="./index.html" style={headerStyle}>
          Home
        </a>
        <div className="log" id="auth2">
          <img
            src="https://up.yimg.com/ib/th?id=OIP.52T8HHBWh6b0dwrG6tSpVQHaFe&%3Bpid=Api&rs=1&c=1&qlt=95&w=156&h=115"
            alt=""
          />
          <p>Logout</p>
        </div>
        <div id="auth1" className="login-btn">
          Login
        </div>
        {/* <Test /> */}
      </div>
    </>
  );
};

ReactDOM.render(<NavBar />, document.getElementById("navbar"));
