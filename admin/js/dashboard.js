

const messageCount = document.getElementById("message-count");
const subscriberCount = document.getElementById("subscriber-count")
const usersCount = document.getElementById("user-count");
const blogCount = document.getElementById("blog-count");
const table= document.getElementById("table");
const recentSubscribers = document.getElementById("recent-subscribers");


// getting storedobjects from local storage
const messages = JSON.parse(localStorage.getItem('contact-messages')) || [];
const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
const users = JSON.parse(localStorage.getItem('users')) || [];
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];



// displaying statistc to admin adashboard
messageCount.innerHTML = `${messages.length} Messages`;
subscriberCount.innerHTML = `${subscribers.length} Subscribers`;
usersCount.innerHTML = `${users.length} Users`;
blogCount.innerHTML = `${blogs.length} Blogs`

users.map(user => {
  const html =`<tr>
                  <td class="sm-hidden">
                    <img src="user1.jpg" alt="User Image" />
                  </td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.role}</td>
                  <td class="sm-hidden">${user.createdAt}</td>
                  
                </tr>`
  
  return table.insertAdjacentHTML("afterbegin",html)
})



//showing recent subs to admin adashboard
subscribers.slice(-5).reverse().forEach(sub => {
    const html = `<div class="subscriber">
                    <img src="../images/me.png" alt="" />
                    <div class="data">
                      <p>${sub.name}</p>
                      <p>${sub.email}</p>
                    </div>
                  </div>`;
    
    recentSubscribers.insertAdjacentHTML("beforeend", html);
});


export const fetchBlogs = () => {
  blogCount.innerHTML = `${blogs.length} Blogs`
}

