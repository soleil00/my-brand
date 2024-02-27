document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const userError = document.getElementById("user-error");

  let validate = 0
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const users = [
    {
      username: "soleil00",
      email: "soleil00@gmail.com",
      isAdmin: true,
      password: "soleil005",
    },
    { username: "newuser", email: "test@user.com", password: "test" ,isAdmin: false},
  ];

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = users.find(
      (user) =>
        (user.username === usernameInput.value || user.email === usernameInput.value) 
        
    );

    if (!passwordInput.value || !usernameInput.value) {
      userError.style.display = "block";
      userError.textContent = "Please fill out all fields"
      setTimeout(() => {
        userError.style.display = "none"
      }, 5000);
      return;
    }

    if (user) {
      if (user.password === passwordInput.value) {
      userError.style.display = "block";
        // userError.textContent = "user found"
        
        localStorage.setItem("currentUser", JSON.stringify(user))
        if (user.isAdmin) {
          window.location.href = "../admin/index.html"
        } else {
          window.location.href = "./blog.html"
        }
      
      setTimeout(() => {
        userError.style.display = "none"
      }, 5000);
      } else {
        validate++;
      userError.style.display = "block";
      userError.textContent = "Invalid username or password"
       setTimeout(() => {
        userError.style.display = "none"
       }, 5000);
        
        if (validate >= 3) {
          usernameInput.disabled = true
          passwordInput.disabled = true
          setTimeout(() => {
            window.location.href="./index.html"
          }, 2000);
        }
    }
    } else {
      validate++;
      userError.style.display = "block";
      userError.textContent = "user not found"
       setTimeout(() => {
        userError.style.display = "none"
      }, 3000);
   }


    loginForm.reset()
  });










});
