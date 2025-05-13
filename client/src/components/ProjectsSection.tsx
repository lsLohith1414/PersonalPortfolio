export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">Projects & Case Studies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="AI-Powered Customer Sentiment Analysis Dashboard" 
                className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-2">AI-Powered Sentiment Analysis</h3>
              <p className="text-gray-600 mb-4">
                Developed a real-time sentiment analysis system for customer feedback using NLP and machine learning algorithms, increasing customer satisfaction by 35%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Python</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">TensorFlow</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">BERT</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Flask</span>
              </div>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fab fa-github mr-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Medical Image Analysis using Deep Learning" 
                className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-2">Medical Image Analysis</h3>
              <p className="text-gray-600 mb-4">
                Built a deep learning system for automated detection of abnormalities in medical images with 94% accuracy, reducing diagnostic time by 60%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">PyTorch</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">CNN</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Computer Vision</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">React</span>
              </div>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fab fa-github mr-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Financial Forecasting Platform" 
                className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-2">Financial Forecasting Platform</h3>
              <p className="text-gray-600 mb-4">
                Designed and implemented a MERN stack application for financial forecasting using time series analysis and machine learning algorithms.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">MongoDB</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Express</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">React</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Node.js</span>
              </div>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fab fa-github mr-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Intelligent Conversational AI Assistant" 
                className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-2">Intelligent Conversational AI</h3>
              <p className="text-gray-600 mb-4">
                Created an advanced conversational AI assistant using natural language processing and reinforcement learning for contextual understanding.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">NLP</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Transformer Models</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">GPT</span>
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">FastAPI</span>
              </div>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a 
                  href="#" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                >
                  <i className="fab fa-github mr-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
