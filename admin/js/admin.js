

document.addEventListener('DOMContentLoaded', () => {
    const logout = document.getElementById("logout")
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

logout.addEventListener("click", () => {
  localStorage.removeItem("currentUser")
  window.location.href = "../login.html"
})
    
    if (!currentUser) {
        window.location.href ="../login.html"
    }
})