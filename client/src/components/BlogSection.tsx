export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">Latest Blog Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Demystifying Transformer Models in NLP" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">NLP</span>
                <span className="text-gray-400 text-sm ml-auto">June 15, 2023</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Demystifying Transformer Models in NLP</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                An in-depth explanation of transformer architectures and how they revolutionized natural language processing tasks from translation to question answering.
              </p>
              <a href="#" className="font-semibold text-blue-900 hover:text-blue-600 transition-colors inline-flex items-center">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          
          {/* Blog Post 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Building Ethical AI Systems" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">AI Ethics</span>
                <span className="text-gray-400 text-sm ml-auto">May 28, 2023</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Building Ethical AI Systems</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Exploring the challenges and best practices for developing AI systems that are transparent, fair, and accountable while mitigating potential biases.
              </p>
              <a href="#" className="font-semibold text-blue-900 hover:text-blue-600 transition-colors inline-flex items-center">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          
          {/* Blog Post 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Optimizing MERN Stack Applications" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">Web Development</span>
                <span className="text-gray-400 text-sm ml-auto">April 10, 2023</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Optimizing MERN Stack Applications</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Tips and techniques for optimizing MongoDB, Express, React, and Node.js applications for better performance and user experience.
              </p>
              <a href="#" className="font-semibold text-blue-900 hover:text-blue-600 transition-colors inline-flex items-center">
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
