document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');


    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear previous messages
        clearMessages();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        // Name validation
        if (name.value.trim() === '') {
            showError(name, 'Name is required.');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        }

        // Message validation
        if (message.value.trim() === '') {
            showError(message, 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for contacting us!');
            contactForm.reset();
        }
    });

    function showError(input, message) {
        const errorContainer = input.nextElementSibling;
        errorContainer.textContent = message;
    }

    function clearMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');

    }
});