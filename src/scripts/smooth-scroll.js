document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelectorAll('nav').offsetHeight;

    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            smoothScroll(targetSection);
        });
    });

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        const vh = window.innerHeight; // 100vh in pixels
        const fiftyVh = vh * 0.5; // 50vh in pixels

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - fiftyVh;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});