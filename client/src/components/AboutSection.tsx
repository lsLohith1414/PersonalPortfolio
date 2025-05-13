export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="John Doe - AI/ML Engineer and Data Scientist" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="md:w-3/5">
            <h3 className="text-2xl font-heading font-semibold mb-4">Who I Am</h3>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate AI/ML Engineer and Data Scientist with over 5 years of experience in developing innovative solutions that transform complex data into actionable insights. My expertise spans machine learning, deep learning, natural language processing, and full-stack development with the MERN stack.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              I've worked with leading tech companies to implement cutting-edge AI solutions that drive business growth and solve real-world problems. I'm committed to staying at the forefront of technological advancements and creating intelligent systems that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <i className="fa-solid fa-download mr-2"></i> Download Resume
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <i className="fa-solid fa-envelope mr-2"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
