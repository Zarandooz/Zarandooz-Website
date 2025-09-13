// Glassy header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Wait for DOM to be fully loaded
function zarandoozInitMenu() {
    // Modern Mobile Menu Functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavClose = document.getElementById('mobile-nav-close');

    function openMobileMenu() {
        mobileNav.classList.add('active');
        mobileOverlay.classList.add('active');
        mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (mobileMenuToggle && mobileNav && mobileOverlay) {
        mobileMenuToggle.onclick = function(e) {
            e.stopPropagation();
            if (mobileNav.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        };
        if (mobileNavClose) {
            mobileNavClose.onclick = closeMobileMenu;
        }
        mobileOverlay.onclick = closeMobileMenu;
        // Close menu on ESC
        document.onkeydown = function(e) {
            if (e.key === 'Escape') closeMobileMenu();
        };
        // Close menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.onclick = closeMobileMenu;
        });
    }
    
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const faqIcon = faqItem.querySelector('.faq-question i');
                faqIcon.className = 'ti ti-plus';
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                icon.className = 'ti ti-minus';
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    // Download button click handlers
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can add actual download logic here
            // console.log('Download button clicked:', this.textContent.trim());
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const mobileInput = this.querySelector('input[type="tel"]');
            const messageInput = this.querySelector('textarea');
            
            // Basic validation
            if (!mobileInput.value.trim()) {
                showNotification('لطفا شماره موبایل خود را وارد کنید', 'error');
                return;
            }
            
            if (!messageInput.value.trim()) {
                showNotification('لطفا پیام خود را وارد کنید', 'error');
                return;
            }
            
            // Simulate form submission
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';
            
            setTimeout(() => {
                showNotification('پیام شما با موفقیت ارسال شد!', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ارسال';
            }, 2000);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .faq-item, .contact-form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Phone mockup hover effects
    const phoneMockups = document.querySelectorAll('.phone-mockup');
    
    phoneMockups.forEach(mockup => {
        mockup.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.replace('rotate(-15deg)', 'rotate(-10deg)') || 'rotate(-10deg)';
            this.style.transform = this.style.transform.replace('rotate(15deg)', 'rotate(10deg)') || 'rotate(10deg)';
        });
        
        mockup.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace('rotate(-10deg)', 'rotate(-15deg)') || 'rotate(-15deg)';
            this.style.transform = this.style.transform.replace('rotate(10deg)', 'rotate(15deg)') || 'rotate(15deg)';
        });
    });
    
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    

    // Add loading animation for images (if any are added later)
    function preloadImages() {
        const imageSources = [
            // Add image sources here when you have actual images
        ];
        
        imageSources.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Initialize any additional functionality
    function init() {
        preloadImages();
        
        // Add any other initialization code here
        console.log('Zarandouz website initialized successfully!');
    }
    
    // Call init function
    init();
}

// Run menu init after includes are loaded
document.addEventListener('includesLoaded', zarandoozInitMenu);
// Also run on DOMContentLoaded in case nav is present from the start
document.addEventListener('DOMContentLoaded', zarandoozInitMenu);
