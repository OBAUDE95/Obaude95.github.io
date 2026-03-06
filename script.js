/* Core Script Configurations */
document.addEventListener('DOMContentLoaded', () => {
    // --- Typed.js configuration ---
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Autonomous Agents', 'AI Sales Bots', 'EdTech Solutions', 'Predictive Models'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000
        });
    }

    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // --- Styling Skill Pills Programmatically ---
    const pills = document.querySelectorAll('.skill-pill');
    pills.forEach(pill => {
        pill.className = 'px-4 py-2 bg-dark-700/50 backdrop-blur-md hover:bg-brand hover:text-white rounded-full text-sm text-gray-300 font-medium transition-all cursor-default select-none border border-transparent hover:border-brand-accent/50 shadow-md transform hover:-translate-y-1';
    });

    // --- GSAP Scroll Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero element animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Animate header and text elements progressively
    heroTl.fromTo('#hero .opacity-0', 
        { y: 30, autoAlpha: 0 }, 
        { y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, delay: 0.2 }
    );

    // Floating animation for image container
    gsap.to('.hero-image-container', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Section Headers Animation
    gsap.utils.toArray('section h2').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Services Cards Staggered Entry
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '#services .grid',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    });

    // Experience Timeline Entries
    gsap.from('.experience-card', {
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Skill Panels Entry
    gsap.from('.skill-panel', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Projects Staggered Entry
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects .grid',
            start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)'
    });

    // Education Cards Staggered Entry
    gsap.from('.education-card', {
        scrollTrigger: {
            trigger: '#education .grid',
            start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.2)'
    });
});
