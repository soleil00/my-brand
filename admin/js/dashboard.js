const fetchSubscribers = () => {
  subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
  const subscriberCount = document.getElementById("subscriber-count")
  subscriberCount.innerHTML = `${subscribers.length} Subscribers`;

}

const updateDashboard = () => {
  const messageCount = document.getElementById("message-count");
  const subscriberCount = document.getElementById("subscriber-count")
  const usersCount = document.getElementById("user-count");
  const blogCount = document.getElementById("blog-count");
  const table= document.getElementById("table");
  const recentSubscribers = document.getElementById("recent-subscribers");

  


  // getting stored objects from local storage
  const messages = JSON.parse(localStorage.getItem('contact-messages')) || [];
  const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  messageCount.innerHTML = `${messages.length} Messages`;
  subscriberCount.innerHTML = `${subscribers.length} Subscribers`;
  usersCount.innerHTML = `${users.length} Users`;
  blogCount.innerHTML = `${blogs.length} Blogs`;

  table.innerHTML = ''; // Clear the existing table content
  
  users.forEach(user => {
    const html = `<tr>
                    <td class="sm-hidden">
                      <img src="user1.jpg" alt="User Image" />
                    </td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td class="sm-hidden">${user.createdAt}</td>
                  </tr>`;
    
    table.insertAdjacentHTML("beforeend", html);
  });

  recentSubscribers.innerHTML = ''; 
  
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
};

updateDashboard()


export { updateDashboard };
