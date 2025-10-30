import { ScrollAnimation } from "./ui/scroll-animation";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">
            Projects & Case Studies
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <ScrollAnimation animation="fade-in-up" delay={100}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}assets/project1.png`}
                  alt="Malicious Website Detection"
                  className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2">
                  Malicious Website Detection Using Machine Learning
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a machine learning model to classify websites as safe or malicious using extracted URL-based features. Trained and evaluated models such as Random Forest and Decision Tree to ensure accurate and reliable predictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Python</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Scikit-learn</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Machine Learning</span>
                </div>
                <div className="flex space-x-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lsLohith1414/ML_Project_Networksecurity.git"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Project 2 */}
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}assets/project2.png`}
                  alt="Sentiment Analysis on Product Reviews"
                  className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2">
                  Sentiment Analysis on Product Reviews
                </h3>
                <p className="text-gray-600 mb-4">
                  Built an end-to-end system using LGBM with a Streamlit frontend and FastAPI backend to analyze customer review sentiments with 73% accuracy. Implemented NLP preprocessing using NLTK and spaCy for effective text analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Python</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">NLTK</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">spaCy</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">LGBM</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">FastAPI</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Streamlit</span>
                </div>
                <div className="flex space-x-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lsLohith1414/-Sentiment_Analysis_on_review_product.git"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Project 3 */}
          <ScrollAnimation animation="fade-in-up" delay={300}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}assets/project3.png`}
                  alt="COVID-19 Detection using Chest X-ray Images"
                  className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2">
                  COVID-19 Detection using Chest X-ray Images
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a CNN-based deep learning model using TensorFlow and VGG19 architecture to classify chest X-rays into Normal, Pneumonia, and COVID-19 categories with high accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Python</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">TensorFlow</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">CNN</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">VGG19</span>
                  <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Deep Learning</span>
                </div>
                <div className="flex space-x-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/lsLohith1414/COVID_19_Chest_X_ray_Classifier.git"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
