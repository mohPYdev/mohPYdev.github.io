// Modern Academic Website - Interactive JavaScript

(function() {
    'use strict';

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        renderPublications();
        renderServices();
        initNavigation();
        initScrollAnimations();
        initSmoothScroll();
        initNavbarScroll();
        initParallax();
        initTypingEffect();
    }

    // Escape text before injecting into HTML
    function esc(str) {
        return String(str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    // Format an author list, bolding the site owner's name
    function formatAuthors(authors, owner) {
        return authors.map(name =>
            name === owner ? `<b>${esc(name)}</b>` : esc(name)
        ).join(', ');
    }

    // Status label shown after the author list
    function statusLabel(status) {
        switch (status) {
            case 'accepted':      return '(to appear)';
            case 'under review':  return '(under review)';
            case 'in submission': return '(in submission)';
            default:              return '';   // "published" shows nothing
        }
    }

    // Render Publications from window.PUBLICATIONS (data/site-data.js)
    function renderPublications() {
        const list = document.getElementById('publicationList');
        if (!list || !Array.isArray(window.PUBLICATIONS)) return;
        const owner = window.OWNER_NAME || 'Mohammad Rafieian';

        const html = window.PUBLICATIONS
            .filter(p => p.public !== false)
            .map(p => {
                const badge = esc(`${p.venue} ${p.year}`);
                const status = statusLabel(p.status);
                const statusHtml = status ? ` <span class="status">${status}</span>` : '';
                const pdfHtml = p.pdf
                    ? `<p class="publication-links"><a href="${esc(p.pdf)}" target="_blank" rel="noopener noreferrer">PDF</a></p>`
                    : '';
                return `
                    <div class="publication-item">
                        <div class="publication-badge">${badge}</div>
                        <h4>&ldquo;${esc(p.title)}&rdquo;</h4>
                        <p class="publication-authors">${formatAuthors(p.authors, owner)}${statusHtml}</p>
                        ${pdfHtml}
                    </div>`;
            })
            .join('');

        list.innerHTML = html;
    }

    // Render Academic Service from window.SERVICES (data/site-data.js)
    function renderServices() {
        const list = document.getElementById('serviceList');
        if (!list || !Array.isArray(window.SERVICES)) return;

        list.innerHTML = window.SERVICES.map(s => `
            <div class="committee-item">
                <div class="committee-badge">${esc(String(s.year))}</div>
                <h4>${esc(s.venue)} ${esc(s.role)}</h4>
            </div>`).join('');
    }

    // Navigation Menu
    function initNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', updateActiveNavLink);
    }

    // Smooth Scroll
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Navbar Scroll Effect
    function initNavbarScroll() {
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // Update Active Nav Link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section, .hero');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        const elementsToAnimate = document.querySelectorAll(
            '.section, .project-card, .publication-item, .experience-item, .interest-card, .skill-category, .timeline-item'
        );

        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Stagger animation for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });

        // Stagger animation for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    // Parallax Effect
    function initParallax() {
        const hero = document.querySelector('.hero');
        const orbs = document.querySelectorAll('.gradient-orb');

        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.5;

                orbs.forEach((orb, index) => {
                    const speed = (index + 1) * 0.3;
                    orb.style.transform = `translateY(${rate * speed}px)`;
                });
            });
        }
    }

    // Typing Effect for Hero Title (optional)
    function initTypingEffect() {
        const titleLines = document.querySelectorAll('.title-line');
        if (titleLines.length > 0 && window.innerWidth > 768) {
            titleLines.forEach((line, index) => {
                const text = line.textContent;
                line.textContent = '';
                line.style.opacity = '0';
                
                setTimeout(() => {
                    typeText(line, text, 50);
                }, index * 500);
            });
        }
    }

    function typeText(element, text, speed) {
        let i = 0;
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Add hover effects to cards
    document.querySelectorAll('.project-card, .publication-item, .experience-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth page load
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #c97d60 0%, #b85c38 50%, #8b2635 100%);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Initialize scroll progress (uncomment to enable)
    // initScrollProgress();

    // Console message
    console.log('%c👋 Welcome!', 'font-size: 20px; color: #d4a574;');
    console.log('%cMohammad Rafieian — Ph.D. Candidate in Software Engineering & Security', 'font-size: 14px; color: #c97d60;');

})();

