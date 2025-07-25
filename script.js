document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Functionality ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-list .mobile-nav-link');

    const toggleMobileMenu = () => {
        mobileMenuOverlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll'); // Prevents scrolling when menu is open
    };

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', toggleMobileMenu);
    }

    
    // Close menu if a link is clicked inside it (optional, but good UX)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOverlay.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    // Close mobile menu if clicking on the overlay itself (outside the menu content)
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (event) => {
            if (event.target === mobileMenuOverlay) {
                toggleMobileMenu();
            }
        });
    }

    // --- Hero Slider Functionality ---
    const heroDesktopImg = document.getElementById('hero-desktop-img');
    const heroMobileImg = document.getElementById('hero-mobile-img');
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');

    // Define slide content
    const slides = [
        {
            desktop: 'images/desktop-image-hero-1.jpg',
            mobile: 'images/mobile-image-hero-1.jpg',
            title: 'Discover innovative ways to decorate',
            description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style and make your property a reflection of you and what you love.'
        },
        {
            desktop: 'images/desktop-image-hero-2.jpg',
            mobile: 'images/mobile-image-hero-2.jpg',
            title: 'We are available all across the globe',
            description: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator.Any questions? Do not hesitate to contact us today .'
        },
        {
            desktop: 'images/desktop-image-hero-3.jpg',
            mobile: 'images/mobile-image-hero-3.jpg',
            title: 'Manufactured with the best materials',
            description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in the industry, we understand what our customers want for their homes and offices '
        }
    ];

    let currentSlideIndex = 0;

    // Function to update the content based on the current slide indexision and c
    const updateSlideContent = () => {
        const currentSlide = slides[currentSlideIndex];

        // Update image sources
        heroDesktopImg.src = currentSlide.desktop;
        heroMobileImg.src = currentSlide.mobile;
        heroMobileImg.alt = currentSlide.title; // Update alt text for accessibility

        // Update text content
        heroTitle.textContent = currentSlide.title;
        heroDescription.textContent = currentSlide.description;

        // Optional: Add a class for animation if desired (e.g., fade-in)
        // For a simple fade, you might toggle a class on hero-text-content
        // and add CSS transitions for opacity.
    };

    // Event listener for previous slide button
    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            updateSlideContent();
        });
    }

    // Event listener for next slide button
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            updateSlideContent();
        });
    }

    // Initialize content with the first slide on load
    updateSlideContent();
});
