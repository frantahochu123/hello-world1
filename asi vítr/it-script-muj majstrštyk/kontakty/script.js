const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Děkujeme za vaši zprávu!');
    contactForm.reset();
});