/* ============================================
   X CAR RENTAL - MAIN JAVASCRIPT
   Core functionality and animations
   ============================================ */

// Global variables
let currentFilter = 'all';
let isLoading = false;

/* ============================================
   CAR DISPLAY FUNCTIONS
   ============================================ */

// Display cars in the grid
function displayCars(carsToShow) {
    const container = document.getElementById('cars-container');
    if (!container) {
        console.error('Cars container not found');
        return;
    }
    
    // Ensure we have cars data
    if (!carsToShow || carsToShow.length === 0) {
        console.warn('No cars data provided to displayCars');
        return;
    }
    
    console.log(`🚗 Displaying ${carsToShow.length} cars...`);
    
    // Clear existing content
    container.innerHTML = '';
    
    // Check if no cars to show
    if (carsToShow.length === 0) {
        container.innerHTML = `
            <div class="no-cars-message">
                <h3>Nuk ka makina të disponueshme</h3>
                <p>Provoni një kategori tjetër ose kontaktoni me ne</p>
            </div>
        `;
        return;
    }
    
    // Create and append car cards
    carsToShow.forEach((car, index) => {
        const card = createCarCard(car, index);
        container.appendChild(card);
        console.log(`✅ Created card for ${car.name}`);
    });
    
    console.log(`🎯 Total cards created: ${container.children.length}`);
    
    // Trigger animation for new cards
    animateCarCards();
}

// Create individual car card
function createCarCard(car, index) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.dataset.category = car.category;
    card.dataset.carId = car.id;
    
    // Create card HTML
    card.innerHTML = `
        <div class="car-image">
            <div class="car-image-placeholder">
                <i class="fas fa-car" style="font-size: 3rem; color: var(--primary-color);"></i>
                <span style="font-size: 1rem; color: var(--text-white); margin-top: 10px;">${car.name}</span>
            </div>
        </div>
        <h3 class="car-name">${car.name}</h3>
        <div class="car-specs">
            <div class="spec-item">
                <i class="fas fa-users"></i>
                <span>${car.seats} vende</span>
            </div>
            <div class="spec-item">
                <i class="fas fa-gas-pump"></i>
                <span>${car.fuel}</span>
            </div>
            <div class="spec-item">
                <i class="fas fa-cog"></i>
                <span>${car.transmission}</span>
            </div>
            <div class="spec-item">
                <i class="fas fa-suitcase"></i>
                <span>${car.luggage} çanta</span>
            </div>
        </div>
        <div class="car-features">
            ${car.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
        <div class="car-price">€${car.price}/ditë</div>
        <button class="whatsapp-btn" onclick="bookCarWhatsApp('${car.name}', ${car.price})">
            <i class="fab fa-whatsapp"></i>
            Rezervo në WhatsApp
        </button>
    `;
    
    return card;
}

// Animate car cards entrance
function animateCarCards() {
    const cards = document.querySelectorAll('.car-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/* ============================================
   FILTER FUNCTIONALITY
   ============================================ */

// Filter cars by category
function filterCars(category) {
    currentFilter = category;
    
    // Update active filter button
    updateActiveFilter(category);
    
    // Get filtered cars
    const filtered = CarDataHelpers.getCarsByCategory(category);
    
    // Display filtered cars
    displayCars(filtered);
    
    // Update URL (optional)
    updateURL(category);
}

// Update active filter button styling
function updateActiveFilter(activeCategory) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === activeCategory) {
            btn.classList.add('active');
        }
    });
}

// Setup filter button event listeners
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.dataset.filter;
            filterCars(filter);
        });
    });
}

/* ============================================
   PARTICLE SYSTEM
   ============================================ */

// Create floating particles and shapes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth < 768 ? 20 : 35; // Fewer on mobile
    
    // Create different types of particles
    const particleTypes = ['circle', 'square', 'triangle', 'star'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const particleType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        particle.className = `particle ${particleType}`;
        
        // Random positioning and timing
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        
        // Random size variation based on type
        let size;
        switch(particleType) {
            case 'circle':
                size = Math.random() * 6 + 3;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                break;
            case 'square':
                size = Math.random() * 8 + 4;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                break;
            case 'triangle':
                const triangleSize = Math.random() * 8 + 4;
                particle.style.borderLeftWidth = triangleSize + 'px';
                particle.style.borderRightWidth = triangleSize + 'px';
                particle.style.borderBottomWidth = (triangleSize * 2) + 'px';
                break;
            case 'star':
                size = Math.random() * 12 + 6;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                break;
        }
        
        particlesContainer.appendChild(particle);
    }
}

// Create floating geometric shapes
function createFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';
    document.body.appendChild(shapesContainer);
    
    const shapeCount = window.innerWidth < 768 ? 8 : 15;
    const shapeTypes = ['large', 'medium', 'small'];
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `floating-shape ${shapeType}`;
        
        // Random positioning and timing
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 30 + 's';
        shape.style.animationDuration = (Math.random() * 20 + 20) + 's';
        
        shapesContainer.appendChild(shape);
    }
}

// Interactive particle effect on mouse move
function setupInteractiveParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create interactive particles on mouse move
        if (Math.random() < 0.1) { // 10% chance
            createInteractiveParticle(mouseX, mouseY);
        }
    });
}

function createInteractiveParticle(x, y) {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle circle interactive';
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.position = 'fixed';
    particle.style.animation = 'interactiveFloat 2s ease-out forwards';
    particle.style.zIndex = '1000';
    
    const size = Math.random() * 8 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particlesContainer.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 2000);
}

/* ============================================
   SMOOTH SCROLLING
   ============================================ */

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Special handling for cars section navigation
                if (targetId === 'cars') {
                    console.log('🎯 Cars section navigation clicked, ensuring cars are loaded...');
                    setTimeout(() => {
                        if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
                            displayCars(carsData);
                            animateCarCards();
                            console.log('✅ Cars loaded via navigation click');
                        } else {
                            console.log('⏳ Cars data not ready via navigation, retrying...');
                            retryCarLoading();
                        }
                    }, 800); // Wait for scroll to complete
                }
            }
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

// Intersection Observer for fade-in animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                                  // Special handling for cars section
                  if (entry.target.classList.contains('cars-section')) {
                      console.log('🚗 Cars section is now visible, ensuring cars are loaded...');
                      // Ensure cars are loaded when section becomes visible
                      if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
                          displayCars(carsData);
                          animateCarCards();
                          console.log('✅ Cars loaded and animated in cars section');
                      } else {
                          console.log('⏳ Cars data not ready, retrying...');
                          retryCarLoading();
                      }
                  }
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   HEADER SCROLL EFFECTS
   ============================================ */

// Header background change on scroll
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Change header background opacity
        if (currentScrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(30px)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.backdropFilter = 'blur(20px)';
        }
        
        // Optional: Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

/* ============================================
   INTERACTIVE EFFECTS
   ============================================ */

// Setup hover effects for car cards
function setupInteractiveEffects() {
    // Car card hover effects
    document.addEventListener('mouseover', function(e) {
        const carCard = e.target.closest('.car-card');
        if (carCard) {
            carCard.style.transform = 'translateY(-15px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', function(e) {
        const carCard = e.target.closest('.car-card');
        if (carCard) {
            carCard.style.transform = '';
        }
    });
    
    // Button hover effects
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('cta-button')) {
            e.target.style.transform = 'translateY(-5px) scale(1.05)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('cta-button')) {
            e.target.style.transform = '';
        }
    });
}

/* ============================================
   SEARCH FUNCTIONALITY (OPTIONAL)
   ============================================ */

// Search cars by name or category
function searchCars(searchTerm) {
    if (!searchTerm || searchTerm.length < 2) {
        // If search is empty, show current filter
        filterCars(currentFilter);
        return;
    }
    
    const results = CarDataHelpers.searchCars(searchTerm);
    displayCars(results);
}

// Setup search functionality if search input exists
function setupSearch() {
    const searchInput = document.getElementById('search-cars');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        searchCars(searchTerm);
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Update URL with current filter (optional)
function updateURL(filter) {
    if (history.pushState) {
        const newURL = filter === 'all' ? 
            window.location.pathname : 
            `${window.location.pathname}?category=${filter}`;
        history.pushState({ filter }, '', newURL);
    }
}

// Get filter from URL on page load
function getFilterFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || 'all';
}

// Show loading state
function showLoading() {
    const container = document.getElementById('cars-container');
    if (container) {
        container.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Duke ngarkuar makinat...</p>
            </div>
        `;
    }
    isLoading = true;
}

// Error handling
function showError(message) {
    const container = document.getElementById('cars-container');
    if (container) {
        container.innerHTML = `
            <div class="error-state">
                <h3>Gabim në ngarkim</h3>
                <p>${message}</p>
                <button onclick="location.reload()" class="cta-button">Provo Përsëri</button>
            </div>
        `;
    }
}

/* ============================================
   MOBILE MENU FUNCTIONALITY
   ============================================ */

// Setup mobile menu functionality
function setupMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

          // Close menu when clicking on links
      mobileMenuLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              closeMobileMenu();
              
              // Special handling for cars link in mobile menu
              if (link.getAttribute('href') === '#cars') {
                  console.log('📱 Mobile cars link clicked, ensuring cars are loaded...');
                  setTimeout(() => {
                      if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
                          displayCars(carsData);
                          animateCarCards();
                          console.log('✅ Cars loaded via mobile navigation');
                      } else {
                          console.log('⏳ Cars data not ready via mobile navigation, retrying...');
                          retryCarLoading();
                      }
                  }, 800); // Wait longer for mobile scroll
              }
          });
      });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy load images (if you add real car images)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ============================================
   INITIALIZATION
   ============================================ */

// Main initialization function
function initializeWebsite() {
    try {
        console.log('🚀 Initializing website...');
        console.log('📊 carsData status:', typeof carsData, carsData ? carsData.length : 'undefined');
        
        // Check if carsData is available
        if (typeof carsData === 'undefined' || !carsData || carsData.length === 0) {
            console.error('❌ carsData not available, retrying in 100ms...');
            setTimeout(initializeWebsite, 100);
            return;
        }
        
        // Core functionality - Simple approach
        console.log('🎯 Attempting to load cars...');
        if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
            console.log('✅ carsData available, displaying cars...');
            displayCars(carsData);
            animateCarCards();
        } else {
            console.log('❌ carsData not available, will retry...');
            // Retry after a short delay
            setTimeout(() => {
                if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
                    console.log('✅ Retry successful, carsData now available...');
                    displayCars(carsData);
                    animateCarCards();
                } else {
                    console.log('❌ Still no carsData, final retry...');
                    retryCarLoading();
                }
            }, 200);
        }
        setupFilters();
        
        // Visual effects
        createParticles();
        createFloatingShapes();
        setupInteractiveParticles();
        setupSmoothScrolling();
        setupScrollAnimations();
        setupHeaderScroll();
        setupInteractiveEffects();
        
        // Mobile functionality
        setupMobileMenu();
        
        // Optional features
        setupSearch();
        setupLazyLoading();
        
        // About Us functionality
        setupAboutUsFeatures();
        
        // Language system
        setupLanguageSwitcher();
        
        // Footer functionality
        setupFooterFeatures();
        
        // Set initial filter from URL
        const initialFilter = getFilterFromURL();
        if (initialFilter !== 'all') {
            filterCars(initialFilter);
        }
        
        console.log('✅ X Car Rental website initialized successfully!');
        console.log(`📊 Loaded ${carsData.length} cars total`);
        console.log('🚗 Cars loading system ready!');
        
    } catch (error) {
        console.error('❌ Error initializing website:', error);
        showError('Ka ndodhur një gabim gjatë ngarkimit të faqes.');
    }
}

// Language switcher setup
function setupLanguageSwitcher() {
    console.log('🔧 Setting up language switcher...');
    
    // Wait for LanguageSystem to be available
    const checkLanguageSystem = () => {
        if (window.LanguageSystem) {
            console.log('✅ LanguageSystem found, initializing...');
            window.LanguageSystem.initializeLanguageSystem();
            setupLanguageEventListeners();
        } else {
            console.log('⏳ LanguageSystem not ready, retrying...');
            setTimeout(checkLanguageSystem, 100);
        }
    };
    
    checkLanguageSystem();
}

// Setup language event listeners
function setupLanguageEventListeners() {
    console.log('🔧 Setting up language event listeners...');
    
    // Desktop dropdown functionality
    const dropdownBtn = document.getElementById('lang-dropdown-btn');
    const dropdown = document.getElementById('lang-dropdown');
    
    if (dropdownBtn && dropdown) {
        console.log('✅ Desktop dropdown elements found');
        
        // Toggle dropdown
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('show');
            dropdownBtn.classList.toggle('active');
            console.log('🖱️ Dropdown toggled');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            dropdown.classList.remove('show');
            dropdownBtn.classList.remove('active');
        });
        
        // Language option selection
        const langOptions = dropdown.querySelectorAll('.lang-option');
        console.log(`🔧 Found ${langOptions.length} language options`);
        
        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.dataset.lang;
                console.log(`🌍 Language option clicked: ${lang}`);
                
                if (window.LanguageSystem) {
                    window.LanguageSystem.switchLanguage(lang);
                    console.log(`✅ Language switched to: ${lang}`);
                } else {
                    console.error('❌ LanguageSystem not available');
                }
                
                dropdown.classList.remove('show');
                dropdownBtn.classList.remove('active');
            });
        });
    } else {
        console.error('❌ Desktop dropdown elements not found');
    }
    
    // Mobile language switcher
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');
    console.log(`🔧 Found ${mobileLangOptions.length} mobile language options`);
    
    mobileLangOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            console.log(`🌍 Mobile language option clicked: ${lang}`);
            
            if (window.LanguageSystem) {
                window.LanguageSystem.switchLanguage(lang);
                console.log(`✅ Mobile language switched to: ${lang}`);
            } else {
                console.error('❌ LanguageSystem not available');
            }
        });
    });
    
    console.log('🌍 Language switcher event listeners setup complete');
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);

// Preloader functionality
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
}

// Advanced preloader animation sequence
function startPreloaderAnimation() {
    console.log('🚗 Starting preloader animation sequence...');
    
    const logo = document.getElementById('power-logo');
    const powerFill = document.getElementById('power-fill');
    const logoGlow = document.getElementById('logo-glow');
    const carSilhouette = document.getElementById('car-silhouette');
    const progressCounter = document.getElementById('progress-counter');
    const readyMessage = document.getElementById('ready-message');
    const carGlow = document.getElementById('car-glow');
    
    // Phase 1: Logo Fade-In (0-0.5s)
    setTimeout(() => {
        logo.classList.add('visible');
        progressCounter.classList.add('visible');
        progressCounter.textContent = '0%';
    }, 100);
    
    // Phase 2: Power-Up (0.5-1.5s)
    setTimeout(() => {
        powerFill.classList.add('active');
        logoGlow.classList.add('active');
        carSilhouette.classList.add('visible');
        
        // Progress animation
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 2;
            progressCounter.textContent = progress + '%';
            if (progress >= 70) {
                clearInterval(progressInterval);
            }
        }, 30);
        
        // Activate car glow effect
        carGlow.classList.add('active');
        
    }, 500);
    
    // Phase 3: Car Separation (1.5-2s)
    setTimeout(() => {
        carSilhouette.classList.add('separated');
        
        // Progress 70-90%
        let progress = 70;
        const progressInterval = setInterval(() => {
            progress += 2;
            progressCounter.textContent = progress + '%';
            if (progress >= 90) {
                clearInterval(progressInterval);
            }
        }, 30);
        
    }, 1500);
    
    // Phase 4: Drive-Out (2-2.5s)
    setTimeout(() => {
        carSilhouette.classList.add('driving');
        
        // Progress 90-100%
        let progress = 90;
        const progressInterval = setInterval(() => {
            progress += 2;
            progressCounter.textContent = progress + '%';
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 30);
        
        // Create orange particles
        createOrangeParticles();
        
    }, 2000);
    
    // Phase 5: Fade Transition (2.5-3s)
    setTimeout(() => {
        logo.style.opacity = '0';
        carSilhouette.style.opacity = '0';
        progressCounter.style.opacity = '0';
        
        readyMessage.classList.add('visible');
        
        // Hide preloader after showing ready message
        setTimeout(() => {
            hidePreloader();
        }, 1000);
        
    }, 2500);
}

// Create orange particles for car trail
function createOrangeParticles() {
    const container = document.getElementById('particle-container');
    const car = document.getElementById('car-silhouette');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'orange-particle';
            
            const carRect = car.getBoundingClientRect();
            particle.style.left = (carRect.left + 60) + 'px';
            particle.style.top = (carRect.top + 30) + 'px';
            
            container.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }, i * 50);
    }
}

// Start preloader animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    startPreloaderAnimation();
});

// Hide preloader when everything is loaded (fallback)
window.addEventListener('load', function() {
    console.log('🌍 Window fully loaded...');
    // Preloader will be hidden by animation sequence
});

// Additional safety check when window is fully loaded
window.addEventListener('load', function() {
    console.log('🌍 Window fully loaded, checking cars...');
    setTimeout(() => {
        if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
            console.log('✅ Window load: carsData available, displaying cars...');
            displayCars(carsData);
            animateCarCards();
        } else {
            console.log('❌ Window load: carsData not available, calling global function...');
            if (typeof window.forceLoadCars === 'function') {
                window.forceLoadCars();
            }
        }
    }, 1000);
});

// ============================================
// CAR LOADING SAFETY FUNCTIONS
// ============================================

// Check if device is mobile
function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Simple retry function
function retryCarLoading() {
    console.log('🔄 Retrying car loading...');
    setTimeout(() => {
        if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
            console.log('✅ Retry successful, displaying cars...');
            displayCars(carsData);
            animateCarCards();
        } else {
            console.log('❌ Retry failed, trying one more time...');
            // One more attempt
            setTimeout(() => {
                if (typeof carsData !== 'undefined' && carsData && carsData.length > 0) {
                    console.log('✅ Final retry successful!');
                    displayCars(carsData);
                    animateCarCards();
                } else {
                    console.error('❌ Failed to load cars after all attempts');
                }
            }, 1000);
        }
    }, 500);
}

// ============================================
// PREMIUM FOOTER FUNCTIONALITY
// ============================================

// Setup footer functionality
function setupFooterFeatures() {
    setupBackToTop();
    setupNewsletterForm();
    setupFooterAnimations();
}

// Back to Top functionality
function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Smooth scroll to top
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Newsletter form functionality
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Show success message
                showNewsletterMessage('Faleminderit! Tani jeni të regjistruar për ofertat speciale!', 'success');
                emailInput.value = '';
                
                // Store email in localStorage
                localStorage.setItem('newsletterEmail', email);
            } else {
                showNewsletterMessage('Ju lutem vendosni një email të vlefshëm.', 'error');
            }
        });
    }
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show newsletter message
function showNewsletterMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.newsletter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `newsletter-message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 15px 20px;
        border-radius: 10px;
        margin-top: 20px;
        font-weight: 600;
        text-align: center;
        transition: all 0.3s ease;
        ${type === 'success' 
            ? 'background: rgba(37, 211, 102, 0.2); color: #25D366; border: 1px solid rgba(37, 211, 102, 0.3);' 
            : 'background: rgba(231, 76, 60, 0.2); color: #e74c3c; border: 1px solid rgba(231, 76, 60, 0.3);'
        }
    `;
    
    // Insert message
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.appendChild(messageDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                setTimeout(() => messageDiv.remove(), 300);
            }
        }, 5000);
    }
}

// Footer animations
function setupFooterAnimations() {
    // Animate footer elements on scroll
    const footerElements = document.querySelectorAll('.footer-column, .newsletter-section');
    
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    footerElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        footerObserver.observe(element);
    });
}

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Page became visible, refresh if needed
        console.log('📱 Page became visible');
    }
});

/* ============================================
   ABOUT US FUNCTIONALITY
   ============================================ */

// Setup all About Us interactive features
function setupAboutUsFeatures() {
    setupAnimatedCounters();
    setupTimelineAnimations();
    setupFlipCards();
    setupParallaxEffects();
    setupTypewriterAnimation();
    setupExpandButtons();
}

// Animated Counter Stats
function setupAnimatedCounters() {
    const statCards = document.querySelectorAll('.stat-card');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statCard = entry.target;
                const targetNumber = parseInt(statCard.dataset.target);
                const statNumber = statCard.querySelector('.stat-number');
                const progressFill = statCard.querySelector('.progress-fill');
                
                // Animate counter
                animateCounter(statNumber, targetNumber);
                
                // Animate progress bar
                if (progressFill) {
                    progressFill.style.width = '100%';
                }
                
                // Animate icon rotation
                const statIcon = statCard.querySelector('.stat-icon');
                if (statIcon) {
                    statIcon.style.animation = 'rotate 2s ease';
                }
                
                counterObserver.unobserve(statCard);
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => counterObserver.observe(card));
}

// Counter animation function
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// Timeline Animations
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timelineItem = entry.target;
                const timelineDot = timelineItem.querySelector('.timeline-dot');
                
                // Animate timeline dot
                if (timelineDot) {
                    timelineDot.style.animation = 'pulse 1s ease';
                }
                
                timelineObserver.unobserve(timelineItem);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => timelineObserver.observe(item));
}

// 3D Flip Cards
function setupFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            const inner = this.querySelector('.flip-card-inner');
            const currentRotation = inner.style.transform;
            
            if (currentRotation === 'rotateY(180deg)') {
                inner.style.transform = 'rotateY(0deg)';
            } else {
                inner.style.transform = 'rotateY(180deg)';
            }
        });
    });
}

// Parallax Background Effects
function setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-shape, .car-silhouette');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Typewriter Text Animation
function setupTypewriterAnimation() {
    const typewriterHeading = document.getElementById('typewriter-heading');
    const splitTexts = document.querySelectorAll('.split-text');
    
    if (typewriterHeading) {
        const text = typewriterHeading.textContent;
        typewriterHeading.textContent = '';
        
        let i = 0;
        const typewriter = setInterval(() => {
            typewriterHeading.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typewriter);
            }
        }, 100);
    }
    
    // Split text reveal animation
    splitTexts.forEach((text, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 500);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(text);
    });
}

// Expand/Collapse Buttons
function setupExpandButtons() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.parentElement.querySelector('.expand-content');
            const expandText = this.querySelector('.expand-text');
            const icon = this.querySelector('i');
            
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
                expandText.textContent = 'Shiko Më Pak';
                this.classList.add('expanded');
            } else {
                content.style.display = 'none';
                expandText.textContent = 'Shiko Më Shumë';
                this.classList.remove('expanded');
            }
        });
    });
}

// Toggle expand function (for onclick in HTML)
function toggleExpand(button) {
    const content = button.parentElement.querySelector('.expand-content');
    const expandText = button.querySelector('.expand-text');
    const icon = button.querySelector('i');
    
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        expandText.textContent = 'Shiko Më Pak';
        button.classList.add('expanded');
    } else {
        content.style.display = 'none';
        expandText.textContent = 'Shiko Më Shumë';
        button.classList.remove('expanded');
    }
}

/* ============================================
   EXPORT FUNCTIONS (for external use)
   ============================================ */

// Make key functions available globally
window.XCarRental = {
    displayCars,
    filterCars,
    searchCars,
    bookCarWhatsApp,
    carsData: carsData,
    helpers: CarDataHelpers
};