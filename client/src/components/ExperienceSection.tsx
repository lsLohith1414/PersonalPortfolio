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
      role: "Senior AI Engineer",
      company: "TechVision AI",
      duration: "January 2023 - Present",
      description: [
        "Lead a team of 5 engineers in developing state-of-the-art computer vision solutions for autonomous vehicles, increasing detection accuracy by 27%.",
        "Architected and implemented a real-time object detection system using YOLO and TensorFlow, processing 60+ frames per second.",
        "Collaborated with cross-functional teams to integrate AI solutions into production systems, reducing deployment time by 40%."
      ]
    },
    {
      id: 2,
      role: "Machine Learning Engineer",
      company: "DataCraft Solutions",
      duration: "June 2021 - December 2022",
      description: [
        "Developed and optimized machine learning models for natural language processing tasks, achieving 92% accuracy in sentiment analysis.",
        "Built a recommendation engine that increased user engagement by 35% and improved content discovery metrics.",
        "Implemented CI/CD pipelines for ML models, reducing model deployment time from days to hours."
      ]
    },
    {
      id: 3,
      role: "Data Science Intern",
      company: "QuantumLeap Analytics",
      duration: "January 2021 - May 2021",
      description: [
        "Analyzed large datasets using Python, SQL, and visualization tools to extract actionable insights for business decisions.",
        "Created automated data processing workflows that reduced manual data cleaning time by 60%.",
        "Contributed to the development of a predictive maintenance model that decreased equipment downtime by 25%."
      ]
    },
    {
      id: 4,
      role: "Research Assistant",
      company: "University AI Research Lab",
      duration: "September 2020 - December 2020",
      description: [
        "Assisted in research projects focused on reinforcement learning applications in robotics.",
        "Implemented and tested various deep learning architectures to improve model performance.",
        "Co-authored a research paper on efficient training methods for large language models."
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
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <ScrollAnimation animation="scale-in" delay={100}>
                    <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                  </ScrollAnimation>
                </div>
                
                {/* Content layout - alternating sides on desktop */}
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
                
                {/* Empty div for layout balance */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}