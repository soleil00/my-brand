const overlay = document.querySelector(".overlay");
const deleteButtons = document.querySelectorAll(".delete");
const replyButtons = document.querySelectorAll(".reply");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

const deleteContentModel = document.querySelector(".delete-model");
const replyContentForm = document.querySelector(".form-setting");

const messageContainer = document.getElementById("messages");


messageContainer.addEventListener("click", function(event) {
  const target = event.target;
  
  if (target.classList.contains("reply")) {
    overlay.style.display = "block";
    replyContentForm.style.display = "block";
  } else if (target.classList.contains("delete")) {
    overlay.style.display = "block";
    deleteContentModel.style.display = "block";
    replyContentForm.style.display = "none";


    const messageElement = target.closest(".message");
    const messageIndex = Array.from(messageElement.parentNode.children).indexOf(messageElement);
    deleteContentModel.dataset.messageIndex = messageIndex;
  }
});


yesButton.addEventListener("click", function(event) {

  const messageIndex = deleteContentModel.dataset.messageIndex;

  if (messageIndex !== undefined) {
    const messagesFromLocalstorage = JSON.parse(localStorage.getItem("contact-messages")) || [];
    messagesFromLocalstorage.splice(messageIndex, 1);
    localStorage.setItem("contact-messages", JSON.stringify(messagesFromLocalstorage));
    
   
    const messageElement = messageContainer.querySelector(`.message:nth-child(${parseInt(messageIndex) + 1})`);
    if (messageElement) {
      messageElement.remove();
    }
  }


  overlay.style.display = "none";
  deleteContentModel.style.display = "none";
});


noButton.addEventListener("click", function(event) {
 
  overlay.style.display = "none";
  deleteContentModel.style.display = "none";
});


replyContentForm.addEventListener("submit", function(e) {
  e.preventDefault();
 
});


const messagesFromLocalstorage = JSON.parse(localStorage.getItem("contact-messages")) || [];

messagesFromLocalstorage.forEach(info => {
    const html = `
        <div class="message" id="message">
            <div class="message-left">
                <p><strong>From : </strong> ${info.email}</p>
                <p>${info.message}</p>
            </div>
            <div class="message-right">
                <button class="reply">Reply</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        <div class="overlay" id="overlay">
            <div class="delete-model" id="delete-model">
                <div class="delete-model-content">
                    <h3>Are you sure you want to delete this message?</h3>
                    <div class="buttons">
                        <button class="yes">Yes</button>
                        <button class="no">No</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-setting" id="form-setting">
            <form class="reply-form">
                <input type="text" id="reply-subject" placeholder="Enter Subject" />
                <textarea id="reply-message" cols="30" rows="10"></textarea>
                <input type="submit" value="Reply" class="yes" />
                <button class="cancel-reply" class="no">Cancel</button>
            </form>
        </div>
    `;
    
    messageContainer.insertAdjacentHTML("afterbegin", html);
});
