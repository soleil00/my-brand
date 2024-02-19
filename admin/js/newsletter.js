
const newsletters = document.getElementById("newsletter")


const subscribers = JSON.parse(localStorage.getItem("subscribers")) || []

subscribers.forEach((sub,index) => { 
    const html = `<div class="subscriber">
            <img src="../images/me.png" alt="" />
            <div class="data">
              <p>${sub.name}</p>
              <p>${sub.email}</p>
            </div>
            <div class="newsletter-acts">
              <button id="delete-subscriber" class="unsub">Unsubscribe</button>
            </div>
          </div>`;
    
    newsletters.insertAdjacentHTML("beforeend", html);
})