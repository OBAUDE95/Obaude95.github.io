document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.animate-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
    });

    gsap.from('.animate-card', {
        scrollTrigger: {
            trigger: '.projects-container',
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
    });
});
