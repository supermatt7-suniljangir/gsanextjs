
// Track Visit Us Click
export const handleVisitUsClick = () => {
    if (window.fbq) {
        fbq("trackCustom", "VisitUsClick");
    }
};

// Track Call Click
export const handleCallClick = () => {
    if (window.fbq) {
        fbq("track", "CallClick");
    }
};

// Track WhatsApp Click
export const handleWhatsAppClick = () => {
    if (window.fbq) {
        fbq("trackCustom", "WhatsAppClick");
    }
};


export const trackCategoryVisit = (category) => {
    if (window.fbq) {
        fbq("trackCustom", "CategoryVisit", {
            category,
        });
    }
};


