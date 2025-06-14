import React,{useEffect} from "react";
import { FaBolt, FaSolarPanel, FaTools, FaChartLine, FaHome } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <FaBolt className="text-white text-4xl mb-4" />,
    title: "Electrical Installations",
    desc: "Professional electrical wiring and installations for residential, commercial, and industrial projects.",
    image: "https://southeast-electrical.uk/wp-content/uploads/2019/09/electrician.jpeg",
  },
  {
    icon: <FaSolarPanel className="text-white text-4xl mb-4" />,
    title: "Solar Panel Setup",
    desc: "End-to-end solar panel system design, supply, and installation for energy efficiency.",
    image: "https://static.wixstatic.com/media/da4831aece5e45a4b1e790dc4d435b17.jpg",
  },
  {
    icon: <FaTools className="text-white text-4xl mb-4" />,
    title: "Maintenance & Repair",
    desc: "Routine servicing and emergency repair of electrical and solar systems.",
    image: "https://www.bettselectric.com/wp-content/uploads/2016/05/routine-electrical-maintenance-e1464723082183.jpg",
  },
  {
    icon: <FaChartLine className="text-white text-4xl mb-4" />,
    title: "Energy Audits & Consulting",
    desc: "Detailed assessments and guidance to reduce energy consumption and optimize resources.",
    image: "https://e6qg27vt7gu.exactdn.com/wp-content/uploads/2023/08/energyaudit1-1200x751.jpg?strip=all&lossy=1&ssl=1",
  },
  {
    icon: <FaHome className="text-white text-4xl mb-4" />,
    title: "Smart Home Integration",
    desc: "Advanced automation solutions for lighting, energy, and security systems.",
    image: "https://img.freepik.com/premium-photo/smart-home-integration-homeowners-are-installing-smart-home-systems_114016-14119.jpg",
  },
];

  
const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
 
  return (
    <section className="bg-[#f9fafb] py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800" data-aos="fade-up"> <span className=" border-red-500 border-b-4" >Our</span> Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto" data-aos="fade-up">
          We provide a wide range of professional services in the field of electrical and solar energy solutions, tailored for homes and businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center text-white">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
