const contactMeForm = document.getElementById("contact-form");
const names = document.getElementById('contact-name');
const email = document.getElementById('contact-email');
const subject = document.getElementById('contact-subject');
const message = document.getElementById('contact-message');
const isubscribedToNewsletter = document.getElementById('is-newsletter-checked');
const errorMessage = document.getElementById('error-message');
const emailErrorMessage = document.getElementById('email-message');
const sendBtn = document.getElementById('send-ms');



const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

contactMeForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const nameValue = names.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if (!nameValue || !emailValue || !subjectValue || !messageValue) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Please fill out all fields"
        setTimeout(() => {
            errorMessage.style.display="none"
        }, 5000);
        return;
    }

    if (!emailRegex.test(emailValue)) {
        emailErrorMessage.style.display = 'block';
        emailErrorMessage.textContent = 'Please enter a valid email address'
        
        setTimeout(() => {
            emailErrorMessage.style.display="none"
        }, 5000);
        return;
    }

    sendBtn.textContent="Sending..."

    const data = {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
        subscribed: isubscribedToNewsletter.checked
    };

    const response =  await fetch("https://my-brand-backend-1-cqku.onrender.com/api/v1/messages",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })


    const res = await response.json()

    console.log(res)


    

    contactMeForm.reset();
});
