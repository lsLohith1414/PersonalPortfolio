import emailjs from 'emailjs-com';

/**
 * Initialize EmailJS with user ID
 * This function should be called once when the application starts
 */
export const initEmailJS = () => {
  if (import.meta.env.VITE_EMAILJS_USER_ID) {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    console.log('EmailJS initialized');
  } else {
    console.warn('EmailJS User ID not found. Contact form will not work.');
  }
};