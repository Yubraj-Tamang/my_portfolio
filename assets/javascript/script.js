        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-links a');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Neon Text Animation
        const glowElements = document.querySelectorAll('.project-title, .job-title');
        
        function randomGlow() {
            glowElements.forEach(element => {
                // Generate random glow intensity
                const glowIntensity = Math.floor(Math.random() * 10) + 5;
                element.style.textShadow = `0 0 ${glowIntensity}px currentColor`;
                
                // Reset after random time
                setTimeout(() => {
                    element.style.textShadow = '';
                }, Math.random() * 2000 + 1000);
            });
            
            // Call again after random delay
            setTimeout(randomGlow, Math.random() * 3000 + 2000);
        }
        
        // Start the glow animation
        randomGlow();

        // Form Submission Animation
        const contactForm = document.querySelector('.contact-form');
        const submitBtn = document.querySelector('.submit-btn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add submitting class
            submitBtn.textContent = 'Sending...';
            submitBtn.classList.add('submitting');
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.classList.remove('submitting');
                }, 3000);
            }, 2000);
        });

        // Add animation for hamburger menu
        hamburger.addEventListener('click', () => {
            const lines = document.querySelectorAll('.hamburger div');
            
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });

        // Add scroll animations
        const sections = document.querySelectorAll('section');
        
        function checkScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.75) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Initialize section animations
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Check on scroll and initial load
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);