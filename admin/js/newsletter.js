const newsletters = document.getElementById("newsletter");
let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

const fetchSubscribers = () => {
  subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
  const subscriberCount = document.getElementById("subscriber-count")
  subscriberCount.innerHTML = `${subscribers.length} Subscribers`;

}

function renderSubscribers() {
  newsletters.innerHTML = ""; 
  
  if (subscribers.length === 0) {
    newsletters.innerHTML = "<div>No Subscribers Yet</div>";
    return;
  }
  
  subscribers.forEach((sub, index) => {
    const id = `delete-${index}`;
    const html = `<div class="subscriber">
            <img src="../images/me.png" alt="" />
            <div class="data">
              <p>${sub.name}</p>
              <p>${sub.email}</p>
            </div>
            <div class="newsletter-acts">
              <button id="${id}" class="unsub">Unsubscribe</button>
            </div>
          </div>`;

    newsletters.insertAdjacentHTML("beforeend", html);

    // const unsubscribe = document.getElementById(id);
    // unsubscribe.addEventListener("click", () => {
    //   subscribers.splice(index, 1);
    //   localStorage.setItem("subscribers", JSON.stringify(subscribers));
    //   renderSubscribers(); 
    //   fetchSubscribers();
    // });
  });
}

renderSubscribers();
