import { ScrollAnimation } from "./ui/scroll-animation";

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  link: string;
}

export default function CertificationsSection() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Supervised Machine Learning: Regression & Classification",
      organization: "DeepLearning.AI (Coursera)",
      date: "March 2025",
      image: `${import.meta.env.BASE_URL}assets/certificate_1.jpg`,
      link: "https://www.coursera.org/account/accomplishments/verify/VHTHVZALUCT2"
    },
    {
      id: 2,
      title: "Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp",
      organization: "Udemy",
      date: "October 2025",
      image: `${import.meta.env.BASE_URL}assets/certificate_2.png`,
      link: "https://www.udemy.com/certificate/UC-8ab585bb-9e5e-48e1-8162-ae981cde65d2/"
    },
    {
      id: 3,
      title: "Image-based Attendance Tracking System",
      organization: "Tekcogent Solutions Pvt. Ltd. (Internship)",
      date: "May 2025",
      image: `${import.meta.env.BASE_URL}assets/certificate_3.jpg`,
      link: "https://drive.google.com/file/d/1zRENbyZYI1cGC9eSgNco1VZOzqOcMFg1/view"
    },
    {
      id: 4,
      title: "Sentiment Analysis System",
      organization: "Ai Variant Information Technology & Services (Internship)",
      date: "October 2025",
      image: `${import.meta.env.BASE_URL}assets/certificate_4.png`,
      link: "https://drive.google.com/file/d/1JrWMMgWojsfpACkzSehe6avgwSBMSqBZ/view"
    }
  ];

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
              delay={100 + index * 100}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="h-52 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} Certificate`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {certificate.title}
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-building text-blue-900 mr-2"></i>
                      <span className="text-gray-700">
                        {certificate.organization}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt text-blue-900 mr-2"></i>
                      <span className="text-gray-700">{certificate.date}</span>
                    </div>
                  </div>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                  >
                    View Certificate <i className="fas fa-external-link-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
