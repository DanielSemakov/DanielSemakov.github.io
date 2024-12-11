const form = document.querySelector('#contact-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const phone = document.querySelector('#phone');
const feedback = document.createElement('div');

form.appendChild(feedback);

form.addEventListener('submit', (e) => {
    let errors = [];

    feedback.innerHTML = '';
    feedback.style.color = 'red';

    if (firstName.value.trim() === '') {
        errors.push('First name is required.');
    }

    if (lastName.value.trim() === '') {
        errors.push('Last name is required.');
    }

    if (email.value.trim() === '') {
        errors.push('Email is required.');
    }

    if (message.value.trim() === '') {
        errors.push('Message is required.');
    }

    if (errors.length > 0) {
        feedback.innerHTML = errors.join('<br>');
        e.preventDefault();
    } else {
        feedback.style.color = 'green';
        feedback.innerHTML = 'Your message has been sent successfully!';
    }
});