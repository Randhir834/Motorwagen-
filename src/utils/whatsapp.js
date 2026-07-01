// ============================================================
// WhatsApp Utility Functions
// ============================================================

// WhatsApp Business Phone Number (without + symbol)
export const WHATSAPP_NUMBER = '917899741100';

/**
 * Open WhatsApp with a pre-filled message
 * @param {string} message - The message to send
 * @param {boolean} newTab - Whether to open in a new tab (default: true)
 */
export function openWhatsApp(message, newTab = true) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (newTab) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

/**
 * Get WhatsApp link with pre-filled message
 * @param {string} message - The message to send
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppLink(message = '') {
  if (message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

/**
 * Format contact form data into a WhatsApp message
 * @param {Object} data - Form data
 * @returns {string} Formatted message
 */
export function formatContactMessage(data) {
  return `Hello! I'd like to inquire about your services.

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Service:* ${data.service}

*Message:*
${data.message}`;
}

/**
 * Format booking form data into a WhatsApp message
 * @param {Object} data - Booking form data
 * @returns {string} Formatted message
 */
export function formatBookingMessage(data) {
  return `Hello! I'd like to book an appointment.

*PERSONAL INFORMATION*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.city}

*SERVICE DETAILS*
Service: ${data.service}
Vehicle Type: ${data.vehicleType}
Vehicle: ${data.vehicleMake} ${data.vehicleModel}

*APPOINTMENT*
Date: ${data.date}
Time: ${data.time}
Location: ${data.serviceType === 'doorstep' ? 'Doorstep Service' : 'Studio Visit'}${data.serviceType === 'doorstep' ? `\nAddress: ${data.address}` : ''}

${data.notes ? `*Additional Notes:*\n${data.notes}` : ''}`;
}
