const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent (demo).");
    form.reset();
});
// Scroll Fade-In
const faders = document.querySelectorAll('.scroll-fade');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // only animate once
        }
    });
}, {
    threshold: 0.1
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
