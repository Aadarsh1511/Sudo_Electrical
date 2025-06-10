import React, {useRef,useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"; 
import { ChevronLeft, ChevronRight} from "lucide-react";





const blogData = [
  {
    id:1,
    image: "https://orientelectric.com/cdn/shop/articles/Different_Types_of_Ceiling_Lights_477443c8-f379-4261-b9fb-22aaec03f33c.jpg?v=1747995982&width=1100",
    title: "Exploring the Different Types of Ceiling Lights to Illuminate Your...",
    date: "18 Apr, 2025",
    link:'#',
    desc: "When it comes to interior décor, one cannot overlook the role of lighting...",
    imgText:"What are the different types of ceiling lights?",
    category:"Fans",
  },
  {
    id:2,
    image: "https://orientelectric.com/cdn/shop/articles/How_to_Use_Air_Cooler_92b88f7d-52a8-4a57-8dcd-01675da3af78.jpg?v=1747995406&width=1100",
    title: "How to Use Air Cooler: The Ultimate Guide to Smarter &...",
    date: "11 Apr, 2025",
    desc: "As temperatures rise, air coolers have become a popular and energy-efficient...",
    category:"Air Coolers"
  },
  {
    id:3,
    image: "https://orientelectric.com/cdn/shop/articles/Orient_s_Ceiling_Fans_Transform_Modern_Homes.jpg?v=1747122387",
    title: "Whisper-Quiet Comfort Meets Design Elegance: How Orient’s...",
    date: "04 Apr, 2025",
    desc: "Imagine this. It's a Sunday afternoon. Outside, the world buzzes...",
    category:"Fans",
  },
   {
    id:4,
    image: "https://orientelectric.com/cdn/shop/articles/How_to_Use_Air_Cooler_92b88f7d-52a8-4a57-8dcd-01675da3af78.jpg?v=1747995406&width=1100",
    title: "How to Use Air Cooler: The Ultimate Guide to Smarter &...",
    date: "11 Apr, 2025",
    desc: "As temperatures rise, air coolers have become a popular and energy-efficient...",
    category:"Air Coolers",
  },
   {
    id:5,
    image: "https://orientelectric.com/cdn/shop/articles/How_to_Use_Air_Cooler_92b88f7d-52a8-4a57-8dcd-01675da3af78.jpg?v=1747995406&width=1100",
    title: "How to Use Air Cooler: The Ultimate Guide to Smarter &...",
    date: "11 Apr, 2025",
    desc: "As temperatures rise, air coolers have become a popular and energy-efficient...",
    category:"Air Coolers",    
  },
  {
    id:6,
    image: "https://orientelectric.com/cdn/shop/articles/How_to_Use_Air_Cooler_92b88f7d-52a8-4a57-8dcd-01675da3af78.jpg?v=1747995406&width=1100",
    title: "How to Use Air Cooler: The Ultimate Guide to Smarter &...",
    date: "11 Apr, 2025",
    desc: "As temperatures rise, air coolers have become a popular and energy-efficient...",
    category:"Air Coolers",    
  },
];

const categories = ["All", "Fans", "Water Heaters", "Small Appliances", "Air Coolers", "Lighting"];
const Blogs=()=> {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filteredblogData = blogData.filter(blog => {
    const matchesCategory = activeCat === "All" || blog.category === activeCat;
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
 <div className="py-10 bg-[#fefaf6] relative">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex justify-between items-center mb-4">
          <button
            ref={prevRef}
            className="text-3xl text-gray-700 absolute left-36 top-48 hover:text-black transition"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            ref={nextRef}
            className="text-3xl text-gray-700 absolute right-36 top-48 hover:text-black transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {blogData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fff] rounded-xl overflow-hidden flex flex-col md:flex-row shadow-md">
                {/* Text side */}
                <div className="flex-1 p-6 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <a href={item.link} className="text-blue-700 font-semibold inline-flex items-center gap-1">
                    Read more →
                  </a>
                </div>

                {/* Image side */}
                <div className="flex-1  flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-xl font-semibold mb-4 text-gray-800">
                      {item.imgText}
                    </p>
                    <img src={item.image} alt="Lights" className="w-full max-w-md mx-auto" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

<div className="w-full pl-[200px] pr-[200px] mx-auto px-4 bg-[#fefaf6] py-6">
      
      <div className="flex gap-6 justify-center mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            className={`text-sm px-3 py-1 border-b-2 transition ${
              activeCat === cat ? "border-black font-semibold" : "border-transparent"
            }`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

    
      <div className="flex  justify-center mb-6">
        <input
          type="text"
          placeholder="What are you looking for..."
          className="border rounded-md px-4 py-2 w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
        {filteredblogData.map(blog => (
          <div key={blog.id} className="bg-white border rounded-lg shadow-sm p-3">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-3 font-semibold text-lg leading-tight">{blog.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
            <p className="text-sm text-gray-600 mt-2">{blog.desc}</p>
            <button className="text-blue-600 text-sm mt-3 flex items-center gap-1">
              Read more <span>&rarr;</span>
            </button>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-6">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          View More
        </button>
      </div>
    </div>


    </div>
  )
}

export default Blogs;