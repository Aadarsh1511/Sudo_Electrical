import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  {
    title: 'Our Culture',
    image: 'https://orientelectric.com/cdn/shop/files/Picture1_488e0d6b-943b-4ff5-893e-97056c384a93.jpg?v=1721388240&width=375',
    description:
      'We foster an environment built on mutual respect, creativity, and innovation. Our culture is rooted in collaboration, where ideas are welcomed, voices are heard, and every individual contributes to a larger purpose.',
  },
  {
    title: 'Diversity & Inclusion',
    image: 'https://orientelectric.com/cdn/shop/files/Picture3.jpg?v=1721388199&width=375',
    description:
      'We embrace people of all backgrounds and experiences. Our inclusive policies empower diverse voices, enabling us to create a rich, balanced workplace that drives innovation through empathy and understanding.',
  },
  {
    title: 'Learning & Development',
    image: 'https://orientelectric.com/cdn/shop/files/Learning_3.jpg?v=1721385012&width=375',
    description:
      'From curated training programs to mentorship and workshops, we offer continuous growth opportunities. We believe that learning is a lifelong journey, and we’re here to support you every step of the way.',
  },
  {
    title: 'Our Commitment to Community',
    image: 'https://orientelectric.com/cdn/shop/files/Picture2_d41f0e57-b40a-4f57-9174-0dd9f33b1d1e.jpg?v=1721388077&width=375',
    description:
      'Giving back is part of who we are. Whether it’s volunteering, education drives, or supporting local causes, we actively contribute to building stronger, more connected communities around us.',
  },
  {
    title: 'Beyond the Paycheck',
    image: 'https://orientelectric.com/cdn/shop/files/Life_at_Orient_1.jpg?v=1726038962&width=375',
    description:
      'We go beyond just compensation. Our employee benefits focus on physical, emotional, and financial well-being, ensuring that you feel supported at every stage of your personal and professional life.',
  },
];
const Careers = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className=' bg-[#fefaf6] pt-[20px]'>
      <div className="relative w-full h-[180px] sm:h-[250px] md:h-[400px]" data-aos="fade-up">

        <img
          src="https://orientelectric.com/cdn/shop/files/myimage_0440f4a4-6e4c-4e11-96e5-4c15b37ad3a4.jpg?v=1721628431&width=2000"
          alt="Team Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-3 sm:px-10 md:px-20">
          <div className="bg-black bg-opacity-60 text-white p-3 sm:p-4 md:p-6 rounded-md w-full max-w-[90%] sm:max-w-[260px] text-center sm:text-left">
            <h2 className="text-sm sm:text-lg md:text-2xl font-semibold font-serif leading-snug mb-2">
              Join our team and help us push innovation forward
            </h2>
            <p className="text-xs sm:text-sm mb-3 font-serif">
              Together, we believe we can make it better. Join us to be a part of it all.
            </p>
            <button className="bg-white text-black text-xs font-serif sm:text-sm px-4 py-1.5 sm:py-2 rounded hover:bg-gray-200 font-semibold">
              Browse Open Jobs
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-5 bg-[#fefaf6]' data-aos="fade-up">
        <h1 className='text-4xl font-semibold font-serif' >Life at Innomind </h1>
      </div>
      <section className="min-h-screen flex items-center justify-center bg-[#fefaf6] py-12 px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 font-serif md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="bg-white p-4 rounded-xl shadow-md text-center font-serif flex flex-col items-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4 font-serif"
              />
              <h3 className="text-lg font-bold mb-2 font-serif">{card.title}</h3>
              <p className="text-sm text-gray-600 font-serif">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#fefaf6] py-16 sm:py-20 mt-28 sm:mt-40" data-aos="fade-up">
        <div className="relative max-w-3xl mx-auto bg-white text-center px-4 py-12 sm:py-16 rounded-lg shadow-sm">


          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://orientelectric.com/cdn/shop/files/Orient_Electric_Limited_-_A_CK_Birla_Group_Company_IN_English_2025_Certification_Badge.png?v=1745905058&width=375"
              alt="Great Place to Work Certified"
              className="w-24 sm:w-32 md:w-30"
            />
          </div>


          <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-gray-800 mt-16 font-serif">
            We are a <span className="font-light font-serif">Great place to work</span> - <span className="font-semibold font-serif">Certified<sup>™</sup></span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium mt-3 font-serif text-gray-700">
            Building & Sustaining High-Trust, High Performance<sup>™</sup> Culture
          </p>
        </div>
      </section>


    </div>
  )
}

export default Careers;