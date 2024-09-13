document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const showSection = (entry) => {
        entry.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add('show');
            }
        });
    };

    const observer = new IntersectionObserver(showSection, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
