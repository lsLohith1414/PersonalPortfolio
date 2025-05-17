import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollAnimation } from "./ui/scroll-animation";

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
}

export default function CertificationsSection() {
  const [openCertificate, setOpenCertificate] = useState<Certificate | null>(null);
  
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Supervised Machine Learning: Regression and Classification",
      organization: "Coursera (deeplearning.ai)",
      date: "March 2025",
      image: `${import.meta.env.BASE_URL}assets/certificate_1.jpg`
    },
    {
      id: 2,
      title: "Development of a Image based Attendance tracking",
      organization: "Tekcogent Solutions Private Limited (Internship)",
      date: "May 2025",
      image: `${import.meta.env.BASE_URL}assets/certificate_2.jpg`
    },
    // {
    //   id: 3,
    //   title: "Data Science Professional Certificate",
    //   organization: "IBM",
    //   date: "May 2022",
    //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    // },
    // {
    //   id: 4,
    //   title: "Machine Learning Engineer Nanodegree",
    //   organization: "Udacity",
    //   date: "January 2022",
    //   image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
    // }
  ];

  const handleOpenCertificate = (certificate: Certificate) => {
    setOpenCertificate(certificate);
  };

  const handleCloseCertificate = () => {
    setOpenCertificate(null);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 text-center mb-16">
            Certifications & Courses
          </h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <ScrollAnimation 
              key={certificate.id} 
              animation="fade-in-up" 
              delay={100 + (index * 100)}
            >
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div 
                  className="h-52 overflow-hidden cursor-pointer"
                  onClick={() => handleOpenCertificate(certificate)}
                >
                  <img 
                    src={certificate.image} 
                    alt={`${certificate.title} Certificate`} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">{certificate.title}</h3>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-building text-blue-900 mr-2"></i>
                      <span className="text-gray-700">{certificate.organization}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt text-blue-900 mr-2"></i>
                      <span className="text-gray-700">{certificate.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenCertificate(certificate)}
                    className="mt-4 inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Certificate <i className="fas fa-external-link-alt ml-2"></i>
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog for Full-Screen View */}
      <Dialog open={openCertificate !== null} onOpenChange={handleCloseCertificate}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
          {openCertificate && (
            <div className="relative bg-white rounded-lg p-4 w-full">
              <DialogTitle className="sr-only">{openCertificate.title}</DialogTitle>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-blue-900">{openCertificate.title}</h3>
                <button 
                  onClick={handleCloseCertificate}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={openCertificate.image} 
                  alt={`${openCertificate.title} Certificate`} 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-700 mb-2">
                  <strong>Organization:</strong> {openCertificate.organization}
                </p>
                <p className="text-gray-700">
                  <strong>Issued:</strong> {openCertificate.date}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}