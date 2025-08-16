/* ============================================
   X CAR RENTAL - WHATSAPP INTEGRATION
   WhatsApp booking functionality
   ============================================ */

// WhatsApp Configuration
const WHATSAPP_CONFIG = {
    phoneNumber: "+38971294914", // NDRYSHO ME NUMRIN TUAJ!
    businessName: "X Car Rental",
    defaultMessage: "Përshëndetje! Dëshiroj të rezervoj një makinë."
};

/* ============================================
   MESSAGE TEMPLATES
   ============================================ */

// Create formatted WhatsApp message
function createWhatsAppMessage(carName, carPrice, additionalInfo = null) {
    let message = `🚗 *Rezervim Makine - ${WHATSAPP_CONFIG.businessName}*\n\n`;
    
    // Car details
    message += `*Makina e zgjedhur:* ${carName}\n`;
    message += `*Çmimi:* €${carPrice}/ditë\n\n`;
    
    // Additional info if provided
    if (additionalInfo) {
        if (additionalInfo.startDate && additionalInfo.endDate) {
            message += `*Periudha:*\n`;
            message += `📅 Nga: ${additionalInfo.startDate}\n`;
            message += `📅 Deri: ${additionalInfo.endDate}\n\n`;
        }
        
        if (additionalInfo.customerName) {
            message += `*Emri:* ${additionalInfo.customerName}\n`;
        }
        
        if (additionalInfo.phone) {
            message += `*Telefoni:* ${additionalInfo.phone}\n`;
        }
        
        if (additionalInfo.email) {
            message += `*Email:* ${additionalInfo.email}\n\n`;
        }
    }
    
    // Default greeting
    message += `Përshëndetje! Dëshiroj të rezervoj këtë makinë.\n\n`;
    message += `🙏 Faleminderit për zgjedhjen e ${WHATSAPP_CONFIG.businessName}!\n`;
    message += `Ju lutem kontaktoni për detaje dhe konfirmim të rezervimit.`;
    
    return encodeURIComponent(message);
}

// Create quick booking message (without form data)
function createQuickBookingMessage(carName, carPrice) {
    return createWhatsAppMessage(carName, carPrice);
}

// Create detailed booking message (with form data)
function createDetailedBookingMessage(carName, carPrice, formData) {
    return createWhatsAppMessage(carName, carPrice, formData);
}

/* ============================================
   BOOKING FUNCTIONS
   ============================================ */

// Simple WhatsApp booking - just car info
function bookCarWhatsApp(carName, carPrice) {
    const message = createQuickBookingMessage(carName, carPrice);
    const whatsappURL = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber.replace('+', '')}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Track booking attempt
    console.log(`Booking attempt: ${carName} - €${carPrice}/ditë`);
}

// Detailed WhatsApp booking with form data
function bookCarWithDetails(carName, carPrice, formData) {
    const message = createDetailedBookingMessage(carName, carPrice, formData);
    const whatsappURL = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber.replace('+', '')}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Track detailed booking
    console.log(`Detailed booking: ${carName} by ${formData.customerName || 'Unknown'}`);
}

// General contact via WhatsApp
function contactWhatsApp(customMessage = null) {
    const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

/* ============================================
   EVENT HANDLERS SETUP
   ============================================ */

// Setup WhatsApp booking buttons
function setupWhatsAppBooking() {
    document.addEventListener('click', function(e) {
        // Handle booking buttons
        if (e.target.classList.contains('book-btn') || 
            e.target.classList.contains('whatsapp-btn') ||
            e.target.closest('.whatsapp-btn')) {
            
            e.preventDefault();
            
            // Find the car card
            const card = e.target.closest('.car-card');
            if (!card) {
                console.error('Car card not found');
                return;
            }
            
            // Extract car information
            const carNameElement = card.querySelector('.car-name');
            const carPriceElement = card.querySelector('.car-price');
            
            if (!carNameElement || !carPriceElement) {
                console.error('Car information not found');
                return;
            }
            
            const carName = carNameElement.textContent.trim();
            const carPriceText = carPriceElement.textContent;
            const carPrice = carPriceText.match(/\d+/)[0]; // Extract number
            
            // Initiate WhatsApp booking
            bookCarWhatsApp(carName, carPrice);
        }
        
        // Handle general contact buttons
        if (e.target.closest('a[href*="wa.me"]')) {
            e.preventDefault();
            const href = e.target.closest('a').getAttribute('href');
            window.open(href, '_blank');
        }
    });
}

/* ============================================
   BOOKING FORM INTEGRATION (OPTIONAL)
   ============================================ */

// If you have a booking form, use this function
function handleBookingForm(formId, carName, carPrice) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Extract form data
        const formData = new FormData(form);
        const bookingData = {
            customerName: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate')
        };
        
        // Send to WhatsApp with details
        bookCarWithDetails(carName, carPrice, bookingData);
        
        // Reset form
        form.reset();
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Check if WhatsApp is available
function isWhatsAppAvailable() {
    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // On mobile, WhatsApp app might be available
    // On desktop, it will open WhatsApp Web
    return true; // WhatsApp Web works on all platforms
}

// Format phone number for WhatsApp
function formatPhoneForWhatsApp(phone) {
    // Remove all non-numeric characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Add country code if missing
    if (!cleaned.startsWith('383')) {
        cleaned = '383' + cleaned;
    }
    
    return cleaned;
}

// Validate phone number
function isValidPhone(phone) {
    const phoneRegex = /^(\+389|389)?[0-9]{8,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/* ============================================
   INITIALIZATION
   ============================================ */

// Initialize WhatsApp functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup booking functionality
    setupWhatsAppBooking();
    
    // Check configuration
    if (!WHATSAPP_CONFIG.phoneNumber || WHATSAPP_CONFIG.phoneNumber === "+38971294914") {
        console.warn('⚠️ WARNING: Please update WhatsApp phone number in whatsapp.js!');
    }
    
    console.log('📱 WhatsApp booking system initialized');
});

/* ============================================
   EXPORT FUNCTIONS (if needed)
   ============================================ */

// Make functions available globally
window.WhatsAppBooking = {
    bookCar: bookCarWhatsApp,
    bookWithDetails: bookCarWithDetails,
    contact: contactWhatsApp,
    isAvailable: isWhatsAppAvailable,
    formatPhone: formatPhoneForWhatsApp,
    validatePhone: isValidPhone
};