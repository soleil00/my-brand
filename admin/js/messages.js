const overlay = document.getElementById("overlay");
const deleteButtons = document.querySelectorAll("#delete");
const replyButtons = document.querySelectorAll("#reply");
const yesButton = document.getElementById("yes");
const noButton = document.querySelectorAll("#no");

const deleteContentModel = document.getElementById("delete-model");
const replyContentForm = document.getElementById("form-setting");

replyContentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Reply button clicked");
  overlay.style.display = "none";
});

replyButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log("Reply button clicked");
    overlay.style.display = "block";
    replyContentForm.style.display = "block";
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log("Delete button clicked");
    overlay.style.display = "block";
    deleteContentModel.style.display = "block";
    replyContentForm.style.display = "none";
  });
});

yesButton.addEventListener("click", function (event) {
  overlay.style.display = "none";
  replyContentForm.style.display = "none";
  deleteContentModel.style.display = "none";
});

noButton.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    overlay.style.display = "none";
    replyContentForm.style.display = "none";
    deleteContentModel.style.display = "none";
  });
});
