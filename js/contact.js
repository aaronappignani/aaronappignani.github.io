document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('fzV6b6NManmNZ0HZF');
    
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            date: new Date().toLocaleString()
        };
        
        // Disable submit button to prevent multiple submissions
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;

        submitBtn.textContent = 'Sending...';
        formStatus.textContent = '';
        
        // Send email using EmailJS
        emailjs.send('service_iapipk5', 'template_e5otfwl', formData)
            .then(function(response) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'green';
                contactForm.reset();
            }, function(error) {
                formStatus.textContent = 'Failed to send message. Please try again.';
                formStatus.style.color = 'red';
                console.error('EmailJS Error:', error);
            })
            .finally(function() {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
    });
});