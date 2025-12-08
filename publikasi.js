// Accordion functionality
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');
        
        // Toggle current accordion
        content.classList.toggle('open');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
        
        // Close other accordions in the same group
        const parentGroup = button.closest('.accordion-group');
        document.querySelectorAll('.accordion-group').forEach(group => {
            if (group !== parentGroup) {
                const otherContent = group.querySelector('.accordion-content');
                const otherIcon = group.querySelector('.accordion-icon');
                if (otherContent && otherIcon) {
                    otherContent.classList.remove('open');
                    otherIcon.classList.remove('fa-chevron-up');
                    otherIcon.classList.add('fa-chevron-down');
                }
            }
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        alert('Mobile menu akan dikembangkan');
        // Implement mobile menu functionality here
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

if (searchInput && searchButton) {
    const handleSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Mencari: "${query}"`);
            // Implement search functionality here
            // You can filter articles based on the query
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all main sections
document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});

// Handle newsletter subscription
const newsletterButton = document.querySelector('.newsletter-button');
const newsletterInput = document.querySelector('.newsletter-input');

if (newsletterButton && newsletterInput) {
    newsletterButton.addEventListener('click', () => {
        const email = newsletterInput.value.trim();
        if (email && validateEmail(email)) {
            alert(`Terima kasih! Email ${email} telah berlangganan newsletter kami.`);
            newsletterInput.value = '';
        } else {
            alert('Silakan masukkan alamat email yang valid.');
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Handle download buttons
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', function() {
        const articleTitle = this.closest('.article-card').querySelector('.article-card-title').textContent;
        alert(`Mengunduh: ${articleTitle}`);
        // Implement actual download functionality here
    });
});

// Handle view buttons
document.querySelectorAll('.view-button, .view-analysis-button').forEach(button => {
    button.addEventListener('click', function() {
        let title = '';
        const card = this.closest('.putusan-item, .uji-materi-card, .article-card');
        if (card) {
            title = card.querySelector('.putusan-title, .uji-materi-card-title, .article-card-title')?.textContent || 'Dokumen';
        }
        alert(`Membuka: ${title}`);
        // Implement actual view functionality here
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in animation to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.animation = 'fadeIn 0.8s ease-out forwards';
    }
});