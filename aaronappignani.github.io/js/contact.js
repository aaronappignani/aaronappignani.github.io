// Initialize EmailJS
emailjs.init({
    publicKey: "nJ8kuXFZ2LehIebtT", // Replace with your actual public key
});

// DOM Elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

// Form submission handler
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Set loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.style.color = "inherit";
    
    try {
        // Send the email
        const response = await emailjs.sendForm(
            'service_iapipk5', 
            'template_45sou5p', 
            contactForm
        );
        
        // Success handling
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
    } catch (error) {
        // Error handling
        console.error('EmailJS Error:', error);
        
        let errorMessage = "Failed to send message. Please try again.";
        if (error.text) {
            errorMessage += ` (${error.text})`;
        }
        
        formStatus.textContent = errorMessage;
        formStatus.style.color = "red";
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    }
});