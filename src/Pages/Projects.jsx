import React,{useEffect} from "react";
import { FaShoppingCart, FaMoneyCheckAlt, FaMapMarkerAlt, FaUserMd } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    icon: <FaShoppingCart className="text-red-600 text-lg" />,
    title: "Himalayan Marketplace",
    description: "A comprehensive e-commerce platform connecting Nepalese artisans with global markets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: <FaMoneyCheckAlt className="text-red-600 text-lg" />,
    title: "NepalPay",
    description: "A secure digital payment solution designed for the Nepalese market with local integration.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Firebase", "Blockchain"],
  },
  {
    icon: <FaMapMarkerAlt className="text-red-600 text-lg" />,
    title: "Himalaya Explorer",
    description: "An interactive tourism application showcasing Nepal's natural beauty and cultural heritage.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "GraphQL", "AWS"],
  },
  {
    icon: <FaUserMd className="text-red-600 text-lg" />,
    title: "HealthConnect",
    description: "A telemedicine platform connecting remote Nepalese communities with healthcare professionals.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Python", "WebRTC"],
  },
  {
    icon: <FaShoppingCart className="text-red-600 text-lg" />,
    title: "Himalayan Marketplace",
    description: "A comprehensive e-commerce platform connecting Nepalese artisans with global markets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: <FaMoneyCheckAlt className="text-red-600 text-lg" />,
    title: "NepalPay",
    description: "A secure digital payment solution designed for the Nepalese market with local integration.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Firebase", "Blockchain"],
  },
  {
    icon: <FaMapMarkerAlt className="text-red-600 text-lg" />,
    title: "Himalaya Explorer",
    description: "An interactive tourism application showcasing Nepal's natural beauty and cultural heritage.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "GraphQL", "AWS"],
  },
  {
    icon: <FaUserMd className="text-red-600 text-lg" />,
    title: "HealthConnect",
    description: "A telemedicine platform connecting remote Nepalese communities with healthcare professionals.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Python", "WebRTC"],
  },
];

const Projects = () => {


useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
 


  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold " data-aos="fade-up">
          <span className="border-red-500 border-b-4" >Our</span> <span className="relative inline-block  ">Projects</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto" data-aos="fade-up">
          Discover our innovative solutions that have transformed businesses across Nepal and beyond.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 flex-col pb-4 " data-aos="fade-up">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-blue-900 font-semibold">
                {project.icon}
                <h3>{project.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
