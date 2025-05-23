import { useRef, useState } from "react";
import { ScrollAnimation } from "./ui/scroll-animation";
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Prepare template parameters for EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'lohithls14@gmail.com' // Your email address
        };
        
        // Send email using EmailJS
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, 
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
        
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        
        setIsSubmitted(true);
        
        // Reset form after successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Error sending message",
          description: "Sorry, there was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">Get In Touch</h2>
        </ScrollAnimation>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <ScrollAnimation animation="fade-in-right" className="md:w-7/12">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            
            <form id="contact-form" ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`} 
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                  placeholder="Project Discussion"
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                  placeholder="I'd like to discuss a potential project..."
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollAnimation>
          
          {/* Contact Information */}
          <ScrollAnimation animation="fade-in-left" delay={200} className="md:w-5/12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Contact Information</h3>
              <p className="text-lg mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <ScrollAnimation animation="fade-in-left" delay={300}>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-blue-900"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">lohithls14@gmail.com</p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fade-in-left" delay={400}>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-blue-900"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+91 8296389725</p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fade-in-left" delay={500}>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-blue-900"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600">Shimoga, Karnataka, India</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            
            <ScrollAnimation animation="fade-in-up" delay={600}>
              <div className="mt-12">
                <h3 className="text-xl font-heading font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/lohith-hs-8a707a2b5/" 
                    className="bg-blue-100 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://github.com/lsLohith1414" 
                    className="bg-blue-100 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                    href="https://twitter.com/Lohithhs14" 
                    className="bg-blue-100 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-100 text-blue-900 hover:bg-blue-900 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-medium-m text-xl"></i>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
