export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white relative pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"}}
      ></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
          I am <span className="text-blue-300">John Doe</span>
        </h1>
        <h2 className="font-heading font-semibold text-xl md:text-2xl mb-6">
          AI/ML Engineer | Data Scientist | MERN Stack Developer
        </h2>
        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transforming Data into Actionable Insights
        </p>
        <a 
          href="#projects" 
          className="inline-block bg-blue-400 hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
