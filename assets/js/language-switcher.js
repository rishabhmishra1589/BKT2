/*
==============================================
LANGUAGE SWITCHER - ENGLISH / HINDI
Badrinath Kedarnath Temple Committee Website
==============================================
*/

// Default language
let currentLanguage = localStorage.getItem('siteLanguage') || 'en';

// Translation Dictionary
const translations = {
    en: {
        // Header & Navigation
        'site-title': 'Badrinath Kedarnath Temple Committee',
        'home': 'Home',
        'temples': 'Temples',
        'services': 'Services',
        'contact': 'Contact',
        'register': 'Register',
        'login': 'Login',
        'weather': 'Weather',
        'timings': 'Timings',
        
        // Common Words
        'about': 'About',
        'location': 'Location',
        'altitude': 'Altitude',
        'open-season': 'Open Season',
        'contact-us': 'Contact Us',
        'helpline': 'Helpline',
        'email': 'Email',
        'phone': 'Phone',
        'address': 'Address',
        'map': 'Map',
        'gallery': 'Gallery',
        'testimonials': 'Testimonials',
        
        // Buttons & Links
        'book-now': 'Book Now',
        'register-now': 'Register Now',
        'learn-more': 'Learn More',
        'view-details': 'View Details',
        'get-directions': 'Get Directions',
        'open-in-maps': 'Open in Google Maps',
        'submit': 'Submit',
        'send-message': 'Send Message',
        
        // Temple Names
        'badrinath': 'Badrinath',
        'kedarnath': 'Kedarnath',
        'char-dham': 'Char Dham',
        
        // Services
        'yatra-registration': 'Yatra Registration',
        'puja-booking': 'Puja Booking',
        'accommodation': 'Accommodation',
        'helicopter-service': 'Helicopter Service',
        'transport': 'Transport',
        'donations': 'Donations',
        
        // Weather
        'live-weather': 'Live Weather Updates',
        'temperature': 'Temperature',
        'humidity': 'Humidity',
        'wind-speed': 'Wind Speed',
        'weather-condition': 'Weather Condition',
        
        // Footer
        'quick-links': 'Quick Links',
        'important': 'Important',
        'follow-us': 'Follow Us',
        'official-website': 'Official Website',
        'all-rights-reserved': 'All Rights Reserved',
        
        // Messages
        'welcome-message': 'Welcome to Badrinath Kedarnath Temple Committee',
        'registration-mandatory': 'Online registration is mandatory for all pilgrims',
        'weather-note': 'Weather in Himalayan region changes frequently. Please check updates before starting your journey.',
        
        // Registration Page
        'char-dham-registration': 'Char Dham Yatra Registration',
        'register-desc': 'Complete your online registration for the sacred Char Dham pilgrimage. Mandatory for all devotees visiting Badrinath, Kedarnath, Gangotri, and Yamunotri.',
        'quick-process': 'Quick Process',
        'instant-confirmation': 'Instant Confirmation',
        'secure-payment': 'Secure Payment',
        'support': '24/7 Support',
        'govt-approved': 'Government Approved',
        'eco-friendly': 'Eco-Friendly Yatra',
        
        // Contact Page
        'get-in-touch': 'Get In Touch',
        'office-hours': 'Office Hours',
        'emergency-numbers': 'Emergency Numbers',
        'send-us-message': 'Send Us a Message',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'subject': 'Subject',
        'your-message': 'Your Message',
        
        // Services Page
        'our-services': 'Our Services',
        'online-registration': 'Online Registration',
        'book-puja': 'Book Puja & Seva',
        'helicopter-booking': 'Helicopter Booking',
        'accommodation-booking': 'Accommodation Booking',
        'transport-service': 'Transport Services',
        'donation-service': 'Make a Donation',
        
        // Temple Page
        'about-temple': 'About the Temple',
        'temple-timings': 'Temple Timings',
        'how-to-reach': 'How to Reach',
        'significance': 'Significance',
        'legends': 'Legends & History',
        'rituals': 'Rituals & Pujas',
        'other-temples': 'Other Temples Managed by BKTC'
    },
    hi: {
        // Header & Navigation
        'site-title': 'बद्रीनाथ केदारनाथ मंदिर समिति',
        'home': 'मुखपृष्ठ',
        'temples': 'मंदिर',
        'services': 'सेवाएं',
        'contact': 'संपर्क',
        'register': 'पंजीकरण',
        'login': 'लॉगिन',
        'weather': 'मौसम',
        'timings': 'समय',
        
        // Common Words
        'about': 'के बारे में',
        'location': 'स्थान',
        'altitude': 'ऊँचाई',
        'open-season': 'खुलने का मौसम',
        'contact-us': 'संपर्क करें',
        'helpline': 'हेल्पलाइन',
        'email': 'ईमेल',
        'phone': 'फोन',
        'address': 'पता',
        'map': 'नक्शा',
        'gallery': 'गैलरी',
        'testimonials': 'प्रशंसापत्र',
        
        // Buttons & Links
        'book-now': 'अभी बुक करें',
        'register-now': 'अभी पंजीकरण करें',
        'learn-more': 'और जानें',
        'view-details': 'विवरण देखें',
        'get-directions': 'दिशा-निर्देश प्राप्त करें',
        'open-in-maps': 'गूगल मैप में खोलें',
        'submit': 'जमा करें',
        'send-message': 'संदेश भेजें',
        
        // Temple Names
        'badrinath': 'बद्रीनाथ',
        'kedarnath': 'केदारनाथ',
        'char-dham': 'चार धाम',
        
        // Services
        'yatra-registration': 'यात्रा पंजीकरण',
        'puja-booking': 'पूजा बुकिंग',
        'accommodation': 'आवास',
        'helicopter-service': 'हेलीकॉप्टर सेवा',
        'transport': 'परिवहन',
        'donations': 'दान',
        
        // Weather
        'live-weather': 'लाइव मौसम अपडेट',
        'temperature': 'तापमान',
        'humidity': 'आर्द्रता',
        'wind-speed': 'हवा की गति',
        'weather-condition': 'मौसम की स्थिति',
        
        // Footer
        'quick-links': 'त्वरित लिंक',
        'important': 'महत्वपूर्ण',
        'follow-us': 'हमें फॉलो करें',
        'official-website': 'आधिकारिक वेबसाइट',
        'all-rights-reserved': 'सर्वाधिकार सुरक्षित',
        
        // Messages
        'welcome-message': 'बद्रीनाथ केदारनाथ मंदिर समिति में आपका स्वागत है',
        'registration-mandatory': 'सभी तीर्थयात्रियों के लिए ऑनलाइन पंजीकरण अनिवार्य है',
        'weather-note': 'हिमालयी क्षेत्र में मौसम अक्सर बदलता रहता है। कृपया अपनी यात्रा शुरू करने से पहले अपडेट जांचें।',
        
        // Registration Page
        'char-dham-registration': 'चार धाम यात्रा पंजीकरण',
        'register-desc': 'पवित्र चार धाम तीर्थ के लिए अपना ऑनलाइन पंजीकरण पूर्ण करें। बद्रीनाथ, केदारनाथ, गंगोत्री और यमुनोत्री जाने वाले सभी श्रद्धालुओं के लिए अनिवार्य।',
        'quick-process': 'त्वरित प्रक्रिया',
        'instant-confirmation': 'तत्काल पुष्टि',
        'secure-payment': 'सुरक्षित भुगतान',
        'support': '24/7 सहायता',
        'govt-approved': 'सरकार द्वारा अनुमोदित',
        'eco-friendly': 'पर्यावरण के अनुकूल यात्रा',
        
        // Contact Page
        'get-in-touch': 'संपर्क करें',
        'office-hours': 'कार्यालय समय',
        'emergency-numbers': 'आपातकालीन नंबर',
        'send-us-message': 'हमें संदेश भेजें',
        'your-name': 'आपका नाम',
        'your-email': 'आपका ईमेल',
        'subject': 'विषय',
        'your-message': 'आपका संदेश',
        
        // Services Page
        'our-services': 'हमारी सेवाएं',
        'online-registration': 'ऑनलाइन पंजीकरण',
        'book-puja': 'पूजा और सेवा बुक करें',
        'helicopter-booking': 'हेलीकॉप्टर बुकिंग',
        'accommodation-booking': 'आवास बुकिंग',
        'transport-service': 'परिवहन सेवाएं',
        'donation-service': 'दान करें',
        
        // Temple Page
        'about-temple': 'मंदिर के बारे में',
        'temple-timings': 'मंदिर का समय',
        'how-to-reach': 'कैसे पहुंचें',
        'significance': 'महत्व',
        'legends': 'कथाएं और इतिहास',
        'rituals': 'अनुष्ठान और पूजा',
        'other-temples': 'BKTC द्वारा प्रबंधित अन्य मंदिर'
    }
};

// Switch Language Function
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('siteLanguage', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('lang-' + lang).classList.add('active');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-translate attribute
    translatePage();
    
    // Show success message (optional)
    console.log(`Language switched to: ${lang === 'en' ? 'English' : 'हिन्दी'}`);
}

// Translate Page Content
function translatePage() {
    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Handle lang-content visibility
    document.querySelectorAll('[lang-content]').forEach(element => {
        const lang = element.getAttribute('lang-content');
        if (lang === currentLanguage) {
            element.classList.add('active-lang');
        } else {
            element.classList.remove('active-lang');
        }
    });
    
    // Handle lang-content-block visibility
    document.querySelectorAll('[lang-content-block]').forEach(element => {
        const lang = element.getAttribute('lang-content-block');
        if (lang === currentLanguage) {
            element.classList.add('active-lang');
        } else {
            element.classList.remove('active-lang');
        }
    });
}

// Initialize Language on Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    if (currentLanguage !== 'en') {
        switchLanguage(currentLanguage);
    } else {
        // Still need to set active button for English
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const enBtn = document.getElementById('lang-en');
        if (enBtn) enBtn.classList.add('active');
    }
    
    console.log('✅ Language Switcher Initialized');
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { switchLanguage, translations, currentLanguage };
}

