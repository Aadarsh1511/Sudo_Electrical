import React, { useEffect } from 'react';
import { FaUsers, FaShieldAlt, FaLightbulb, FaCogs, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: 'Integrity & Ethics',
      content: 'We stand by our code of conduct and do what we promise with fairness and honesty.'
    },
    {
      icon: <FaUsers className="text-green-600 text-2xl" />,
      title: 'People First',
      content: 'Our people are our core. We empower them with tools, trust, and training.'
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
      title: 'Innovation Driven',
      content: 'We solve tomorrow’s problems today with modern, scalable technologies.'
    },
  ];

  const capabilities = [
    'AI & Data Analytics',
    'Blockchain Solutions',
    'Cloud Infrastructure',
    'Agile Product Development',
    'Cybersecurity Compliance',
    'Enterprise App Modernization',
  ];

  const faqs = [
    {
      q: 'How are you different from other IT providers?',
      a: 'Our customer-first, innovation-led approach with global delivery models sets us apart.',
    },
    {
      q: 'What regions do you serve?',
      a: 'We operate globally across Asia, Europe, and the Americas.',
    },
    {
      q: 'How do you help clients grow revenue?',
      a: 'By optimizing operations, reducing cost, and enabling digital transformation at scale.',
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  return (

    <div className="bg-[#f8f4ee] text-gray-800">

      <section className="relative h-[400px] w-full" data-aos="fade-up">
        <img
          src="/images/about_ban.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40  flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-3 drop-shadow-lg">About Us</h1>
          <p className="text-base md:text-lg max-w-xl drop-shadow font-serif">
            Empowering global businesses with technology, innovation, and trust.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20 bg-[#f8f4ee] " data-aos="fade-up">
        <h2 className="text-3xl font-bold  ld text-center mb-8 font-serif" data-aos="fade-up">Our Vision & Mission</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div className="text-lg space-y-4 font-serif">
            <p>
              Our <span className="font-semibold font-serif">vision</span> is to become the most trusted global IT partner by embracing technology to transform our clients’ future.
            </p>
            <p>
              We envision a world where businesses thrive by harnessing digital disruption, emerging stronger and more resilient than ever.
            </p>
            <p>
              Our <span className="font-semibold font-serif">mission</span> is to deliver technology excellence through empathy, ethics, and innovation.
            </p>
            <p>
              We pledge to consistently exceed expectations, build meaningful digital ecosystems, and treat our stakeholders with fairness and respect.
            </p>
          </div>
          <img src="https://www.flyhigh-abroad.in/wp-content/uploads/2022/04/missionvisionvalues.jpg" alt="Vision and Mission" className="rounded-lg shadow-lg" />
        </div>
      </section>


      <section className="py-16 px-4 md:px-20 bg-[#f8f4ee]">
        <h2 className="text-3xl font-bold font-serif text-center mb-10" data-aos="fade-up">What We Value</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {values.map((val, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition font-serif" data-aos="fade-up">
              <div className="mb-4 flex justify-center">{val.icon}</div>
              <h4 className="text-xl font-semibold mb-2 font-serif">{val.title}</h4>
              <p className="text-gray-600 font-serif">{val.content}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-16 px-4 md:px-20 bg-[#f8f4ee]">
        <h2 className="text-3xl font-bold text-center mb-8 font-serif" data-aos="fade-up">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white shadow-md rounded-xl p-6 text-center text-gray-700 hover:bg-orange-50 transition font-serif"
              data-aos="fade-up"
            >
              <FaCogs className="text-orange-600 text-3xl mb-2 mx-auto font-serif" />
              <p className="font-medium">{cap}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-[#f8f4ee]  py-16 px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">


          <div className="md:w-1/2 w-full" data-aos="fade-right">
            <img
              src="https://orientelectric.com/cdn/shop/files/Who_we_are_timeline_Option_1.jpg?v=1688976483&width=1500"
              alt="Quality Assurance"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>


          <div className="md:w-1/2 w-full text-center md:text-left" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 font-serif">We Deliver Quality</h2>
            <p className="text-lg font-serif">
              At Innomind Solutions, quality isn't just a milestone — it's the foundation of everything we build.
              Every product, every solution is tested under stringent benchmarks to ensure it not only works,
              but excels. It's our commitment to deliver excellence at scale, every single time.
            </p>
          </div>

        </div>
      </section>


      <section className='flex justify-center items-center bg-[#f8f4ee]  grid-col-2 w-[100%]' data-aos="fade-up">
        <div className="py-16 px-4 md:px-20 bg-[#f8f4ee] w-[60%]" data-aos="fade-right">
          <h2 className="text-3xl font-bold max-w-4xl text-center mb-8 font-serif">FAQs</h2>
          <div className="max-w-4xl  space-y-4 ">
            {faqs.map((item, i) => (
              <details key={i} className="border rounded-md p-4 bg-white shadow-lg font-serif">
                <summary className="cursor-pointer font-medium font-serif">{item.q}</summary>
                <p className="mt-2 text-gray-700 font-serif">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className='flex w-[20%] bg-[#f8f4ee] flex-col justify-center items-center' data-aos="fade-left">
          <p className="text-2xl font-semibold font-serif mb-4 ">FOLLOW US</p>
          <div className="flex gap-4 text-3xl">
            <FaTwitter className='text-blue-500 hover:text-blue-400 cursor-pointer' />
            <FaFacebookF className='text-blue-600 hover:text-blue-500 cursor-pointer' />
            <FaInstagram className='text-pink-500 hover:text-pink-400 cursor-pointer' />
            <FaWhatsapp className='text-green-500 hover:text-green-400 cursor-pointer' />
            <FaLinkedinIn className='text-sky-500 hover:text-sky-400 cursor-pointer' />
            <FaYoutube className='text-red-500 hover:text-red-400 cursor-pointer' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
