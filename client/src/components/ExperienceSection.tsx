import { ScrollAnimation } from "./ui/scroll-animation";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "AI/ML Developer Intern",
      company: "Tekcogent Solutions Private Limited",
      duration: "February 2025 - May 2025",
      description: [
        "Built an automated attendance system using FaceNet (face recognition) + YOLOv8 (real-time detection) in Python/OpenCV.",
        "Achieved 95% accuracy, reducing manual errors by 30%. Optimized YOLOv8 for low-light conditions, cutting false positives by 25%.",
        "Deployed via Flask API, integrating with existing workflows. Evaluated performance using precision-recall metrics, improving model robustness.",
        "Processed and prepared a dataset of employee face images for training and validation.",
        "Tested the model in real-time using live camera input to verify detection and recognition accuracy."
      ]
    },
    {
      id: 2,
      role: "Data Science Intern",
      company: "Ai Variant (Information Technology & Services)",
      duration: "December 2024 - February 2025",
      description: [
        "Cleaned and prepared text data by applying tokenization, stop-word removal, stemming, and lemmatization to make it ready for analysis.",
        "Created text features using TF-IDF and word embeddings to better understand the meaning and context of words.",
        "Trained and tested multiple machine learning models — Random Forest, XGBoost, SVM, Logistic Regression, and LGBM — to find the best-performing one.",
        "Found that LGBM gave the highest accuracy of 73%, so it was chosen as the final model for deployment.",
        "Built an interactive Streamlit app where users can enter product reviews and instantly see sentiment results.",
        "Used FastAPI for the backend to deploy the model efficiently and ensure fast, reliable predictions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">
            Professional Experience & Internships
          </h2>
        </ScrollAnimation>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex flex-col md:flex-row items-center">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                </div>
                
                {/* Card layout */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left order-first md:order-last'}`}>
                  <ScrollAnimation 
                    animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"} 
                    delay={200 + (index * 100)}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
                        {exp.duration}
                      </span>
                      <h3 className="font-heading font-bold text-xl mb-1">{exp.role}</h3>
                      <h4 className="text-gray-600 font-semibold mb-4">{exp.company}</h4>
                      <ul className={`space-y-2 text-gray-700 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0 ${index % 2 === 0 ? 'md:order-last md:ml-2' : 'mr-2'}`}></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
