/*
==============================================
HINDU TEMPLE PILGRIMAGE WEBSITE - MAIN JAVASCRIPT
Features: Slider, Mega Menu, Scroll Animations, Parallax, Ticker
==============================================
*/

// ============================================
// UTILITY FUNCTIONS
// ============================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Debounce function for performance
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

// ============================================
// HERO SLIDER
// ============================================

class HeroSlider {
    constructor() {
        this.slides = $$('.hero-slide');
        this.dots = $$('.slider-dot');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Set first slide as active
        this.showSlide(0);
        
        // Add click events to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index);
            });
        });
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause on hover
        const heroSlider = $('.hero-slider');
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', () => this.stopAutoPlay());
            heroSlider.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }
    
    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

class MobileMenu {
    constructor() {
        this.menuToggle = $('.menu-toggle');
        this.navMenu = $('.nav-menu');
        this.menuItems = $$('.nav-menu > li > a');
        
        if (this.menuToggle) {
            this.init();
        }
    }
    
    init() {
        // Toggle menu on click
        this.menuToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a menu item
        this.menuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.navMenu.classList.remove('active');
                    this.menuToggle.classList.remove('active');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-toggle')) {
                this.navMenu.classList.remove('active');
                this.menuToggle.classList.remove('active');
            }
        });
    }
}

// ============================================
// STICKY HEADER
// ============================================

class StickyHeader {
    constructor() {
        this.header = $('.header');
        this.lastScroll = 0;
        
        if (this.header) {
            this.init();
        }
    }
    
    init() {
        window.addEventListener('scroll', debounce(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            this.lastScroll = currentScroll;
        }, 10));
    }
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

class ScrollReveal {
    constructor() {
        this.elements = $$('.scroll-reveal');
        
        if (this.elements.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Create Intersection Observer
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, options);
        
        // Observe all elements
        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ============================================
// PARALLAX EFFECT
// ============================================

class Parallax {
    constructor() {
        this.parallaxSections = $$('.parallax-section');
        
        if (this.parallaxSections.length > 0) {
            this.init();
        }
    }
    
    init() {
        window.addEventListener('scroll', debounce(() => {
            this.parallaxSections.forEach(section => {
                const scrolled = window.pageYOffset;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                    const yPos = -(scrolled - sectionTop) * 0.5;
                    section.style.backgroundPosition = `center ${yPos}px`;
                }
            });
        }, 10));
    }
}

// ============================================
// TICKER ANIMATION
// ============================================

class Ticker {
    constructor() {
        this.ticker = $('.ticker-items');
        
        if (this.ticker) {
            this.init();
        }
    }
    
    init() {
        // Clone ticker items for seamless loop
        const tickerContent = this.ticker.innerHTML;
        this.ticker.innerHTML += tickerContent;
        
        // Pause animation on hover
        this.ticker.addEventListener('mouseenter', () => {
            this.ticker.style.animationPlayState = 'paused';
        });
        
        this.ticker.addEventListener('mouseleave', () => {
            this.ticker.style.animationPlayState = 'running';
        });
    }
}

// ============================================
// FLOATING MENU
// ============================================

class FloatingMenu {
    constructor() {
        this.floatingMenu = $('.floating-menu');
        
        if (this.floatingMenu) {
            this.init();
        }
    }
    
    init() {
        // Show/hide based on scroll
        let lastScroll = 0;
        
        window.addEventListener('scroll', debounce(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 300) {
                this.floatingMenu.style.opacity = '1';
                this.floatingMenu.style.visibility = 'visible';
            } else {
                this.floatingMenu.style.opacity = '0';
                this.floatingMenu.style.visibility = 'hidden';
            }
            
            lastScroll = currentScroll;
        }, 10));
        
        // Smooth scroll to top
        const scrollTopBtn = $('.floating-btn.scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

// ============================================
// GALLERY LIGHTBOX
// ============================================

class GalleryLightbox {
    constructor() {
        this.galleryItems = $$('.gallery-item');
        this.lightbox = null;
        
        if (this.galleryItems.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Create lightbox element
        this.createLightbox();
        
        // Add click events to gallery items
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.querySelector('.gallery-caption');
                this.openLightbox(img.src, caption ? caption.textContent : '');
            });
        });
    }
    
    createLightbox() {
        const lightboxHTML = `
            <div class="lightbox" id="lightbox" style="display: none;">
                <div class="lightbox-overlay"></div>
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="" alt="" class="lightbox-image">
                    <div class="lightbox-caption"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightbox = $('#lightbox');
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
            }
            .lightbox-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
            }
            .lightbox-content {
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }
            .lightbox-image {
                max-width: 90%;
                max-height: 80vh;
                object-fit: contain;
                border-radius: 8px;
            }
            .lightbox-caption {
                color: white;
                margin-top: 1rem;
                font-size: 1.2rem;
                text-align: center;
            }
            .lightbox-close {
                position: absolute;
                top: 2rem;
                right: 2rem;
                font-size: 3rem;
                color: white;
                background: none;
                border: none;
                cursor: pointer;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.3s;
            }
            .lightbox-close:hover {
                transform: rotate(90deg);
            }
        `;
        document.head.appendChild(style);
        
        // Close lightbox events
        const closeBtn = this.lightbox.querySelector('.lightbox-close');
        const overlay = this.lightbox.querySelector('.lightbox-overlay');
        
        closeBtn.addEventListener('click', () => this.closeLightbox());
        overlay.addEventListener('click', () => this.closeLightbox());
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.style.display === 'block') {
                this.closeLightbox();
            }
        });
    }
    
    openLightbox(src, caption) {
        const img = this.lightbox.querySelector('.lightbox-image');
        const captionEl = this.lightbox.querySelector('.lightbox-caption');
        
        img.src = src;
        captionEl.textContent = caption;
        
        this.lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Fade in animation
        setTimeout(() => {
            this.lightbox.style.opacity = '1';
        }, 10);
    }
    
    closeLightbox() {
        this.lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// FORM VALIDATION
// ============================================

class FormValidator {
    constructor(formSelector) {
        this.form = $(formSelector);
        
        if (this.form) {
            this.init();
        }
    }
    
    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'This field is required');
                isValid = false;
            } else {
                this.clearError(input);
            }
            
            // Email validation
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    this.showError(input, 'Please enter a valid email');
                    isValid = false;
                }
            }
            
            // Phone validation
            if (input.type === 'tel' && input.value) {
                const phoneRegex = /^[0-9]{10}$/;
                if (!phoneRegex.test(input.value.replace(/\D/g, ''))) {
                    this.showError(input, 'Please enter a valid 10-digit phone number');
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    showError(input, message) {
        const formGroup = input.closest('.form-group');
        let errorElement = formGroup.querySelector('.form-error');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'form-error';
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.5rem';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = '#e74c3c';
    }
    
    clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.style.borderColor = '#ddd';
    }
    
    submitForm() {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = '✓ Form submitted successfully! We will contact you soon.';
        successMessage.style.cssText = `
            background: #27ae60;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 600;
        `;
        
        this.form.insertBefore(successMessage, this.form.firstChild);
        this.form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

class LazyLoader {
    constructor() {
        this.images = $$('img[loading="lazy"]');
        
        if (this.images.length > 0) {
            this.init();
        }
    }
    
    init() {
        const options = {
            root: null,
            threshold: 0,
            rootMargin: '50px'
        };
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, options);
        
        this.images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
    const anchorLinks = $$('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '#!') {
                const target = $(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = $('.header') ? $('.header').offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ============================================
// PAGE LOADER
// ============================================

function initPageLoader() {
    window.addEventListener('load', () => {
        const loader = $('.page-loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
    });
}

// ============================================
// DONATION OPTIONS
// ============================================

function initDonationOptions() {
    const donationOptions = $$('.donation-option');
    
    donationOptions.forEach(option => {
        option.addEventListener('click', function() {
            donationOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// ============================================
// REAL-TIME WEATHER UPDATE
// ============================================

// Weather API Configuration
const WEATHER_CONFIG = {
    // Option 1: OpenWeatherMap (requires free API key from openweathermap.org)
    // API_KEY: 'YOUR_API_KEY_HERE',
    // BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    
    // Option 2: Open-Meteo (FREE, NO API KEY REQUIRED) - Currently Active
    BASE_URL: 'https://api.open-meteo.com/v1/forecast',
    USE_OPEN_METEO: true, // Set to false to use OpenWeatherMap instead
    UNITS: 'metric' // Celsius
};

// Weather icon mapping
function getWeatherIcon(weatherCode, description) {
    const iconMap = {
        // Thunderstorm
        200: '⛈️', 201: '⛈️', 202: '⛈️', 210: '🌩️', 211: '🌩️', 212: '⛈️', 221: '⛈️', 230: '⛈️', 231: '⛈️', 232: '⛈️',
        // Drizzle
        300: '🌦️', 301: '🌦️', 302: '🌧️', 310: '🌦️', 311: '🌦️', 312: '🌧️', 313: '🌦️', 314: '🌧️', 321: '🌦️',
        // Rain
        500: '🌧️', 501: '🌧️', 502: '⛈️', 503: '⛈️', 504: '⛈️', 511: '🌨️', 520: '🌦️', 521: '🌧️', 522: '⛈️', 531: '⛈️',
        // Snow
        600: '🌨️', 601: '❄️', 602: '❄️', 611: '🌨️', 612: '🌨️', 613: '🌨️', 615: '🌨️', 616: '🌨️', 620: '🌨️', 621: '❄️', 622: '❄️',
        // Atmosphere
        701: '🌫️', 711: '🌫️', 721: '🌫️', 731: '🌫️', 741: '🌫️', 751: '🌫️', 761: '🌫️', 762: '🌫️', 771: '💨', 781: '🌪️',
        // Clear
        800: '☀️',
        // Clouds
        801: '🌤️', 802: '⛅', 803: '🌥️', 804: '☁️'
    };
    
    return iconMap[weatherCode] || '🌤️';
}

// Fetch weather data for a location
async function fetchWeatherData(lat, lon, locationName) {
    try {
        if (WEATHER_CONFIG.USE_OPEN_METEO) {
            // Use Open-Meteo API (FREE, NO API KEY REQUIRED)
            const url = `${WEATHER_CONFIG.BASE_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia/Kolkata`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            const current = data.current;
            
            return {
                temp: Math.round(current.temperature_2m),
                feelsLike: Math.round(current.temperature_2m), // Open-Meteo doesn't provide feels_like
                humidity: current.relative_humidity_2m,
                windSpeed: Math.round(current.wind_speed_10m),
                description: getWeatherDescription(current.weather_code),
                icon: getWeatherIconFromCode(current.weather_code),
                weatherCode: current.weather_code,
                locationName: locationName
            };
        } else {
            // Use OpenWeatherMap API (requires API key)
            if (!WEATHER_CONFIG.API_KEY || WEATHER_CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
                throw new Error('API_KEY_NOT_SET');
            }
            
            const url = `${WEATHER_CONFIG.BASE_URL}?lat=${lat}&lon=${lon}&units=${WEATHER_CONFIG.UNITS}&appid=${WEATHER_CONFIG.API_KEY}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            return {
                temp: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
                description: data.weather[0].description,
                icon: getWeatherIcon(data.weather[0].id, data.weather[0].description),
                weatherCode: data.weather[0].id,
                locationName: locationName
            };
        }
    } catch (error) {
        console.error(`Weather fetch error for ${locationName}:`, error);
        return null;
    }
}

// Get weather description from Open-Meteo weather code
function getWeatherDescription(code) {
    const descriptions = {
        0: 'Clear sky',
        1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Foggy', 48: 'Depositing rime fog',
        51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
        56: 'Light freezing drizzle', 57: 'Dense freezing drizzle',
        61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
        66: 'Light freezing rain', 67: 'Heavy freezing rain',
        71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
        85: 'Slight snow showers', 86: 'Heavy snow showers',
        95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
    };
    return descriptions[code] || 'Unknown';
}

// Get weather icon from Open-Meteo weather code
function getWeatherIconFromCode(code) {
    if (code === 0) return '☀️';
    if (code === 1) return '🌤️';
    if (code === 2) return '⛅';
    if (code === 3) return '☁️';
    if (code === 45 || code === 48) return '🌫️';
    if (code >= 51 && code <= 57) return '🌦️';
    if (code >= 61 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 77) return '❄️';
    if (code >= 80 && code <= 82) return '⛈️';
    if (code >= 85 && code <= 86) return '🌨️';
    if (code >= 95 && code <= 99) return '⛈️';
    return '🌤️';
}

// Update weather widget UI
function updateWeatherWidget(widget, weatherData) {
    const loadingEl = widget.querySelector('.weather-loading');
    const contentEl = widget.querySelector('.weather-content');
    
    if (!weatherData) {
        // Show error message
        if (loadingEl) {
            loadingEl.innerHTML = `
                <div style="font-size: 2rem;">⚠️</div>
                <p style="font-size: 0.9rem;">Weather data unavailable</p>
                <p style="font-size: 0.75rem; margin-top: 0.5rem;">Check API key configuration</p>
            `;
        }
        return;
    }
    
    // Hide loading, show content
    if (loadingEl) loadingEl.style.display = 'none';
    if (contentEl) contentEl.style.display = 'block';
    
    // Update elements
    const iconEl = widget.querySelector('.weather-icon');
    const tempEl = widget.querySelector('.weather-temp');
    const descEl = widget.querySelector('.weather-description');
    const humidityEl = widget.querySelector('.humidity');
    const windEl = widget.querySelector('.wind');
    
    if (iconEl) iconEl.textContent = weatherData.icon;
    if (tempEl) tempEl.textContent = `${weatherData.temp}°C`;
    if (descEl) descEl.textContent = weatherData.description;
    if (humidityEl) humidityEl.textContent = weatherData.humidity;
    if (windEl) windEl.textContent = weatherData.windSpeed;
}

// Get weather advice based on temperature
function getWeatherAdvice(temp, description) {
    if (temp < 5) return 'Very cold - Heavy woolen clothes required';
    if (temp < 10) return 'Cold - Carry warm clothes';
    if (temp < 15) return 'Cool - Light woolens recommended';
    if (temp < 25) return 'Pleasant weather for darshan';
    if (temp < 30) return 'Warm - Carry light clothes';
    return 'Hot - Stay hydrated';
}

// Main weather update function
async function updateWeather() {
    const weatherWidgets = $$('.weather-widget');
    
    if (weatherWidgets.length === 0) return;
    
    // Fetch weather for all locations
    const weatherPromises = Array.from(weatherWidgets).map(async (widget) => {
        const lat = widget.getAttribute('data-lat');
        const lon = widget.getAttribute('data-lon');
        const location = widget.getAttribute('data-location');
        
        if (lat && lon) {
            const weatherData = await fetchWeatherData(lat, lon, location);
            updateWeatherWidget(widget, weatherData);
            return weatherData;
        }
        return null;
    });
    
    // Wait for all weather data
    const allWeatherData = await Promise.all(weatherPromises);
    
    // Update header weather (use first location - Badrinath)
    const badrinathWeather = allWeatherData[0];
    const headerWeather = $('#header-weather');
    if (headerWeather && badrinathWeather) {
        headerWeather.textContent = `${badrinathWeather.icon} ${badrinathWeather.temp}°C`;
    }
    
    // Update last update time
    const lastUpdateEl = $('#weather-last-update');
    if (lastUpdateEl) {
        const now = new Date();
        lastUpdateEl.textContent = now.toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    }
    
    console.log('✅ Weather data updated');
}

// Initialize weather updates
function initWeatherUpdates() {
    // Initial update
    updateWeather();
    
    // Update every 10 minutes (600000 ms)
    setInterval(updateWeather, 600000);
}

// ============================================
// MEGA MENU TOGGLE (for mobile)
// ============================================

function initMegaMenu() {
    const menuItems = $$('.nav-menu > li');
    
    menuItems.forEach(item => {
        const megaMenu = item.querySelector('.mega-menu');
        
        if (megaMenu && window.innerWidth <= 768) {
            const link = item.querySelector('a');
            
            link.addEventListener('click', function(e) {
                if (megaMenu) {
                    e.preventDefault();
                    megaMenu.style.display = megaMenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        }
    });
}

// ============================================
// LIVE YATRA STATUS UPDATE
// ============================================

function updateYatraStatus() {
    // Demo function to update yatra status
    const yatraItems = $$('.yatra-status');
    
    if (yatraItems.length > 0) {
        const currentHour = new Date().getHours();
        
        yatraItems.forEach(item => {
            // Morning darshan: 4am - 12pm
            // Evening darshan: 5pm - 9pm
            if ((currentHour >= 4 && currentHour < 12) || (currentHour >= 17 && currentHour < 21)) {
                item.textContent = 'Available';
                item.className = 'yatra-status status-available';
            } else {
                item.textContent = 'Closed';
                item.className = 'yatra-status status-closed';
            }
        });
    }
}

// ============================================
// LOGIN MODAL
// ============================================

class LoginModal {
    constructor() {
        this.createModal();
        this.initEventListeners();
    }
    
    createModal() {
        const modalHTML = `
            <div id="loginModal" class="login-modal">
                <div class="login-modal-overlay"></div>
                <div class="login-modal-content">
                    <button class="login-modal-close">&times;</button>
                    <div class="login-modal-header">
                        <div class="login-icon">🕉️</div>
                        <h2>Pilgrim Login</h2>
                        <p class="devanagari">यात्री प्रवेश</p>
                    </div>
                    <form id="loginForm" class="login-form">
                        <div class="form-group">
                            <label class="form-label">Email / Registration ID</label>
                            <input type="text" class="form-input" name="username" required placeholder="Enter email or registration ID">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-input" name="password" required placeholder="Enter password">
                        </div>
                        <div class="form-checkbox-group" style="margin: 1rem 0;">
                            <label class="checkbox-label" style="background: transparent;">
                                <input type="checkbox" name="remember">
                                <span>Remember me</span>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
                    </form>
                    <div class="login-footer">
                        <a href="#forgot-password" class="login-link">Forgot Password?</a>
                        <span style="color: #999;">|</span>
                        <a href="register.html" class="login-link">New User? Register</a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('loginModal');
    }
    
    initEventListeners() {
        // Open modal on login link click
        document.querySelectorAll('a[href="#login"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        });
        
        // Close modal on close button
        const closeBtn = this.modal.querySelector('.login-modal-close');
        closeBtn.addEventListener('click', () => this.closeModal());
        
        // Close modal on overlay click
        const overlay = this.modal.querySelector('.login-modal-overlay');
        overlay.addEventListener('click', () => this.closeModal());
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
        
        // Handle form submission
        const form = this.modal.querySelector('#loginForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e.target);
        });
    }
    
    openModal() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    handleLogin(form) {
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');
        
        // Demo login (replace with actual API call)
        console.log('Login attempt:', { username, password });
        
        // Show success message
        alert('Login functionality will be connected to backend. For now, this is a demo.');
        this.closeModal();
        form.reset();
    }
}

// ============================================
// INITIALIZE ALL MODULES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new HeroSlider();
    new MobileMenu();
    new StickyHeader();
    new ScrollReveal();
    new Parallax();
    new Ticker();
    new FloatingMenu();
    new GalleryLightbox();
    new LazyLoader();
    new LoginModal();
    
    // Initialize forms
    new FormValidator('#contactForm');
    new FormValidator('#yatraForm');
    new FormValidator('#sevaForm');
    
    // Initialize other features
    initSmoothScroll();
    initPageLoader();
    initDonationOptions();
    initMegaMenu();
    initWeatherUpdates(); // Initialize real-time weather updates
    updateYatraStatus();
    
    // Update yatra status every minute
    setInterval(updateYatraStatus, 60000);
    
    console.log('🕉️ Temple Website Initialized');
});

// ============================================
// HANDLE WINDOW RESIZE
// ============================================

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        initMegaMenu();
    }, 250);
});

// ============================================
// UTILITY: Format Numbers (Indian system)
// ============================================

function formatIndianNumber(num) {
    return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
}

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HeroSlider,
        MobileMenu,
        StickyHeader,
        ScrollReveal,
        Parallax,
        Ticker,
        FloatingMenu,
        GalleryLightbox,
        FormValidator,
        LazyLoader
    };
}

