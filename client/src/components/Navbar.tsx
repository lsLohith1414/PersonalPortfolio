import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-primary font-heading font-bold text-2xl">Lohith H S</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Home
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            About
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Skills
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#experience" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Experience
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Projects
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#certifications" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Certifications
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* <a href="#blog" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Blog
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a> */}
          <a href="#contact" className="nav-link font-body font-semibold relative hover:text-primary-light transition-colors duration-300">
            Contact
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-primary text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white py-4 px-4 shadow-md transition-all duration-300", 
        isMenuOpen ? "opacity-100 visible h-auto" : "opacity-0 invisible h-0"
      )}>
        <nav className="flex flex-col space-y-4">
          <a href="#home" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Home</a>
          <a href="#about" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">About</a>
          <a href="#skills" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Skills</a>
          <a href="#experience" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Experience</a>
          <a href="#projects" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Projects</a>
          <a href="#certifications" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Certifications</a>
          <a href="#blog" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Blog</a>
          <a href="#contact" onClick={closeMenu} className="font-body font-semibold py-2 hover:text-primary-light transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
