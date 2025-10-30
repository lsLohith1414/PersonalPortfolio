// import { useEffect, useRef } from "react";
// import { ScrollAnimation } from "./ui/scroll-animation";

// export default function SkillsSection() {
//   const progressBarsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const animateProgressBars = () => {
//       if (!progressBarsRef.current) return;
      
//       const progressBars = progressBarsRef.current.querySelectorAll('.progress-bar-fill');
      
//       progressBars.forEach(bar => {
//         const barElement = bar as HTMLElement;
//         const barPosition = barElement.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.3;
        
//         if (barPosition < screenPosition) {
//           const widthText = barElement.getAttribute('data-width') || '0%';
//           barElement.style.width = widthText;
//         }
//       });
//     };
    
//     window.addEventListener('scroll', animateProgressBars);
//     // Initial animation
//     setTimeout(animateProgressBars, 500);
    
//     return () => {
//       window.removeEventListener('scroll', animateProgressBars);
//     };
//   }, []);

//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <ScrollAnimation>
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">Skills & Technologies</h2>
//         </ScrollAnimation>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={progressBarsRef}>
//           {/* Technical Skills */}
//           <ScrollAnimation animation="fade-in-right" delay={100}>
//             <h3 className="text-2xl font-heading font-semibold mb-8">Technical Skills</h3>
            
//             <div className="space-y-6">
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-body font-semibold">Machine Learning</span>
//                   <span>95%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out" data-width="95%" style={{width: "0%"}}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-body font-semibold">Deep Learning</span>
//                   <span>90%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out" data-width="90%" style={{width: "0%"}}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-body font-semibold">Natural Language Processing</span>
//                   <span>85%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out" data-width="85%" style={{width: "0%"}}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-body font-semibold">Data Analysis & Visualization</span>
//                   <span>92%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out" data-width="92%" style={{width: "0%"}}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-body font-semibold">Full-Stack Development</span>
//                   <span>88%</span>
//                 </div>
//                 <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out" data-width="88%" style={{width: "0%"}}></div>
//                 </div>
//               </div>
//             </div>
//           </ScrollAnimation>
          
//           {/* Technologies */}
//           <ScrollAnimation animation="fade-in-left" delay={200}>
//             <h3 className="text-2xl font-heading font-semibold mb-8">Technologies</h3>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               <ScrollAnimation animation="scale-in" delay={300} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <i className="fab fa-python text-4xl text-blue-900 mb-3"></i>
//                 <span className="font-body font-semibold">Python</span>
//               </ScrollAnimation>
              
//               <ScrollAnimation animation="scale-in" delay={400} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <i className="fab fa-react text-4xl text-blue-900 mb-3"></i>
//                 <span className="font-body font-semibold">React</span>
//               </ScrollAnimation>
              
//               <ScrollAnimation animation="scale-in" delay={500} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <i className="fab fa-node-js text-4xl text-blue-900 mb-3"></i>
//                 <span className="font-body font-semibold">Node.js</span>
//               </ScrollAnimation>
              
//               <ScrollAnimation animation="scale-in" delay={600} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <i className="fas fa-database text-4xl text-blue-900 mb-3"></i>
//                 <span className="font-body font-semibold">MongoDB</span>
//               </ScrollAnimation>
              
//               <ScrollAnimation animation="scale-in" delay={700} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <i className="fas fa-brain text-4xl text-blue-900 mb-3"></i>
//                 <span className="font-body font-semibold">TensorFlow</span>
//               </ScrollAnimation>
              
//               <ScrollAnimation animation="scale-in" delay={800} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <i className="fas fa-chart-bar text-4xl text-blue-900 mb-3"></i>
//                 <span className="font-body font-semibold">Data Analysis</span>
//               </ScrollAnimation>
//             </div>
//           </ScrollAnimation>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef } from "react";
import { ScrollAnimation } from "./ui/scroll-animation";

export default function SkillsSection() {
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateProgressBars = () => {
      if (!progressBarsRef.current) return;

      const progressBars = progressBarsRef.current.querySelectorAll('.progress-bar-fill');

      progressBars.forEach(bar => {
        const barElement = bar as HTMLElement;
        const barPosition = barElement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition) {
          const widthText = barElement.getAttribute('data-width') || '0%';
          barElement.style.width = widthText;
        }
      });
    };

    window.addEventListener('scroll', animateProgressBars);
    setTimeout(animateProgressBars, 500);

    return () => {
      window.removeEventListener('scroll', animateProgressBars);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">
            Skills & Technologies
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={progressBarsRef}>
          {/* Technical Skills */}
          <ScrollAnimation animation="fade-in-right" delay={100}>
            <h3 className="text-2xl font-heading font-semibold mb-8">Technical Skills</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-semibold">Python</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out"
                    data-width="95%"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-semibold">Machine Learning</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out"
                    data-width="90%"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-semibold">Natural Language Processing (NLP)</span>
                  <span>88%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out"
                    data-width="88%"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-semibold">Deep Learning</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out"
                    data-width="85%"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-semibold">Data Analysis & Visualization</span>
                  <span>92%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar-fill bg-blue-600 h-full rounded-full transition-all duration-1000 ease-in-out"
                    data-width="92%"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Technologies */}
          <ScrollAnimation animation="fade-in-left" delay={200}>
            <h3 className="text-2xl font-heading font-semibold mb-8">Technologies</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <ScrollAnimation
                animation="scale-in"
                delay={300}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fab fa-python text-4xl text-blue-900 mb-3"></i>
                <span className="font-body font-semibold">Python</span>
              </ScrollAnimation>

              <ScrollAnimation
                animation="scale-in"
                delay={400}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fas fa-brain text-4xl text-blue-900 mb-3"></i>
                <span className="font-body font-semibold">TensorFlow</span>
              </ScrollAnimation>

              <ScrollAnimation
                animation="scale-in"
                delay={500}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fas fa-language text-4xl text-blue-900 mb-3"></i>
                <span className="font-body font-semibold">NLTK & SpaCy</span>
              </ScrollAnimation>

              <ScrollAnimation
                animation="scale-in"
                delay={600}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fas fa-chart-line text-4xl text-blue-900 mb-3"></i>
                <span className="font-body font-semibold">Scikit-learn</span>
              </ScrollAnimation>

              <ScrollAnimation
                animation="scale-in"
                delay={800}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fas fa-database text-4xl text-blue-900 mb-3"></i>
                <span className="font-body font-semibold">SQL / PostgreSQL</span>
              </ScrollAnimation>

              <ScrollAnimation
                animation="scale-in"
                delay={900}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <i className="fas fa-project-diagram text-4xl text-blue-900 mb-3"></i>
                <span className="font-body font-semibold">Pandas & NumPy</span>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
