export const WHATSAPP_NUMBER = "5493517647623";

export const createWhatsappUrl = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}; 