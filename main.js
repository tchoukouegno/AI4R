// Typing effect for "Coming Soon"
function typeWriter() {
    const text = "Coming Soon...";
    const element = document.getElementById("typingText");
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => {
                element.innerHTML = "";
                i = 0;
                type();
            }, 3000);
        }
    }
    
    type();
}

// Animate numbers
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (end > 1000) {
            obj.innerHTML = (value / 1000).toFixed(1) + 'K+';
        } else {
            obj.innerHTML = value + (end === 75 ? '' : '+');
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate feature cards on scroll
function animateFeatures() {
    const cards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => observer.observe(card));
}

// Navbar scroll effect
function handleNavbarScroll() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
}

// Smooth scroll for any future anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero::before');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px) rotate(25deg)`;
        }
    });
}

// Add floating animation to cards with mouse interaction
function initFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animationPlayState = 'paused';
            card.style.transform = 'translateY(-30px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animationPlayState = 'running';
            card.style.transform = '';
        });
    });
}

// Performance optimization - preload images
function preloadImages() {
    // Si on ajoute des images plus tard, on peut les précharger ici
    console.log('Images preloaded for optimal performance');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Shalto.tech Landing Page initialized');
    
    // Initialize all features
    typeWriter();
    animateNumbers();
    animateFeatures();
    handleNavbarScroll();
    initSmoothScroll();
    initParallax();
    initFloatingCards();
    preloadImages();
    
    // Add some loading optimization
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate animations if needed on resize
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        console.log('Window resized - adjusting animations');
    }, 250);
});

// Easter egg for developers 😉
console.log(`
╔═══════════════════════════════════════╗
║           SHALTO.TECH                 ║
║     IA & Recherche Scientifique       ║
║                                       ║
║  Built with ❤️ by a passionate dev    ║
║     HTML5 + CSS3 + Vanilla JS        ║
╚═══════════════════════════════════════╝
`);