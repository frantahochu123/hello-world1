const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Děkujeme za přhlášení ted běžte na hlavní stránku!');
    contactForm.reset();
});