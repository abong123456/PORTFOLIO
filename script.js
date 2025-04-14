document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        } else {
            console.error(`Target element with ID ${targetId} not found.`);
        }
    });
});

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
} else {
    console.error('Form element not found.');
}