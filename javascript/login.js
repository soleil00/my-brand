document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const users = [
    {
      username: "soleil00",
      email: "soleil00@gmail.com",
      password: "soleil005",
    },
    { username: "soleil", email: "test@user.com", password: "test" },
  ];

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = users.find(
      (user) =>
        (user.username === usernameInput || user.email === usernameInput) &&
        user.password === passwordInput
    );

    window.location.href = "../admin/index.html";
  });
});
