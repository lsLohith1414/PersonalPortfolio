import { ScrollAnimation } from "./ui/scroll-animation";

export default function AboutSection() {
  const handleDownloadResume = () => {
    // Use Vite's built-in BASE_URL environment variable
    const resumeUrl = `${window.location.origin}${import.meta.env.BASE_URL}assets/resume.pdf`;
    
    // Create a direct download link
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">About Me</h2>
        </ScrollAnimation>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <ScrollAnimation animation="fade-in-right" className="md:w-2/5 flex justify-center">
            <div className="relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 w-full max-w-[400px]">
              <img 
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt="Lohith H S - AI/ML Engineer and Data Scientist" 
                className="w-full h-[500px] object-cover object-center rounded-lg"
              />
            </div>
          </ScrollAnimation>
          
          {/* Bio Content */}
          <ScrollAnimation animation="fade-in-left" className="md:w-3/5" delay={200}>
            <h3 className="text-2xl font-heading font-semibold mb-4">Who I Am</h3>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate AI/ML Engineer and Data Scientist with over 5 years of experience in developing innovative solutions that transform complex data into actionable insights. My expertise spans machine learning, deep learning, natural language processing, and full-stack development with the MERN stack.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              I've worked with leading tech companies to implement cutting-edge AI solutions that drive business growth and solve real-world problems. I'm committed to staying at the forefront of technological advancements and creating intelligent systems that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <i className="fa-solid fa-download mr-2"></i> Download Resume
              </button>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <i className="fa-solid fa-envelope mr-2"></i> Contact Me
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
