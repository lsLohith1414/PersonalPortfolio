import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-heading font-bold text-2xl">John Doe</a>
            <p className="mt-2 text-blue-300">AI/ML Engineer & Data Scientist</p>
          </div>
          
          <div className="flex flex-wrap justify-center mb-6 md:mb-0">
            <a href="#home" className="mx-3 my-2 hover:text-blue-300 transition-colors">Home</a>
            <a href="#about" className="mx-3 my-2 hover:text-blue-300 transition-colors">About</a>
            <a href="#skills" className="mx-3 my-2 hover:text-blue-300 transition-colors">Skills</a>
            <a href="#projects" className="mx-3 my-2 hover:text-blue-300 transition-colors">Projects</a>
            <a href="#certifications" className="mx-3 my-2 hover:text-blue-300 transition-colors">Certifications</a>
            <a href="#blog" className="mx-3 my-2 hover:text-blue-300 transition-colors">Blog</a>
            <a href="#contact" className="mx-3 my-2 hover:text-blue-300 transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors transform hover:-translate-y-1">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors transform hover:-translate-y-1">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors transform hover:-translate-y-1">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors transform hover:-translate-y-1">
              <i className="fab fa-medium-m text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
          
          {showButton && (
            <button 
              id="back-to-top" 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 flex items-center animate-bounce"
            >
              <i className="fas fa-arrow-up mr-2"></i> Back to Top
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
