const contactMeForm = document.getElementById("contact-form");
const names = document.getElementById('contact-name');
const email = document.getElementById('contact-email');
const subject = document.getElementById('contact-subject');
const message = document.getElementById('contact-message');
const isubscribedToNewsletter = document.getElementById('is-newsletter-checked');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

contactMeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = names.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if (!nameValue || !emailValue || !subjectValue || !messageValue) {
        alert('Please fill in all fields');
        return;
    }

    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address');
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
