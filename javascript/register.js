
const registerForm = document.getElementById('register-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const newUser = {
        username:usernameValue,
        password:passwordValue,
        email: emailValue,
        role: "user",
        isAdmin: false,
        createdAt: new Date().toISOString()
    }

    if (!emailValue || !usernameValue || !passwordValue) {
        alert('Please fill in all fields');
        return;
    }

    if (!emailRegex.test(newUser.email)) {
        alert('Please enter a valid email address');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    registerForm.reset()
})