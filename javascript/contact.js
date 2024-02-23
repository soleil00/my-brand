const contactMeForm = document.getElementById("contact-form");
const names = document.getElementById('contact-name');
const email = document.getElementById('contact-email');
const subject = document.getElementById('contact-subject');
const message = document.getElementById('contact-message');
const isubscribedToNewsletter = document.getElementById('is-newsletter-checked');
const errorMessage = document.getElementById('error-message');
const emailErrorMessage = document.getElementById('email-message');



const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

contactMeForm.addEventListener('submit', (e) => {
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


    const data = {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
        isSubscribedToNewsletter: isubscribedToNewsletter.checked
    };

    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

    if (isubscribedToNewsletter) {
        const newSub = { name:data.name, email:data.email };
        subscribers.push(newSub);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
    }

    const messages = JSON.parse(localStorage.getItem('contact-messages')) || [];
    messages.push(data);
    localStorage.setItem('contact-messages', JSON.stringify(messages));

    contactMeForm.reset();
});
