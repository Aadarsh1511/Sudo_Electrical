import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const products2 = [
  {
    title: "Aquator IoT 5 Star Water heater (Geyser), Suitable for High-rise Buildings | 7 year Tank Warranty | Free Installation and Connecting Pipes | Geyser with Temperature Control 15L",
    rating: 4.8,
    reviews: 5,
    size: ["15L", "25L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 5299,
    mrp: 7500,
    discount: "29% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/aquator-iot-5-star-glassline-tank-storage-water-heater-geyser-white-orient-electric-1.png?v=1707286140&width=990"
  },
  {
    title: "Maverick 5 Star Rated Polymer Coated Tank Water Heater (Geyser) 6L",
    rating: 4.5,
    reviews: 5,
    size: ["6L", "10L", "15L", "25L"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 7399,
    mrp: 10800,
    discount: "31% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/maverick-5-star-rated-polymer-storage-water-heater-geyser-orient-electric-1.png?v=1696835252&width=990"
  },
  {
    title: "Aura Rapid Pro 5.9L Instant Water Heater (Geyser) | Bathroom Geyser",
    rating: 5.0,
    reviews: 5,
    size: ["6L", "10L", "15L", "25L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/Image0_e75d0292-ba8d-4f85-b7cc-f728400e431f.png?v=1732189852&width=990"
  },
  {
    title: "Rapidus 5.5L Instant Water Heater (Geyser) White",
    rating: 4.8,
    reviews: 5,
    size: ["10L", "25L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/rapidus-5-5l-instant-water-heater-geyser-white-orient-electric-1.png?v=1696835239&width=990"
  },
  {
    title: "Aura Rapid Pro 5.9L Instant Water Heater (Geyser) | Bathroom Geyser",
    rating: 5.0,
    reviews: 5,
    size: ["6L", "10L", "15L", "25L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/Image0_e75d0292-ba8d-4f85-b7cc-f728400e431f.png?v=1732189852&width=990"
  },

];


const features = [
  {
    icon: "https://orientelectric.com/cdn/shop/files/Artboard_1_copy_3.png?v=1702979601", // Replace with your actual icon URL
    title: "Whirlflow technology",
    description: "Ensures 20% more hot water output",
  },
  {
    icon: "https://orientelectric.com/cdn/shop/files/Artboard_1_copy_4.png?v=1702979601",
    title: "Ultra diamond glassline tank",
    description: "40% longer tank lifespan",
  },
  {
    icon: "https://orientelectric.com/cdn/shop/files/Artboard-new.png?v=1733735679",
    title: "Safety",
    description: "5-level shield & precision thermostat",
  },
  {
    icon: "https://orientelectric.com/cdn/shop/files/Artboard_1_22.png?v=1733503245",
    title: "Shock-proof",
    description: "IPX4 High-strength ABS Body",
  },
];


const Categories = [
  { name: "Ceiling Fans", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
  { name: "Table Fans", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
  { name: "Wall Fans", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
  { name: "Stand Fans", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
  { name: "Exhaust Fans", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
];
const blogData = [
  {
    image: "https://orientelectric.com/cdn/shop/articles/Different_Types_of_Ceiling_Lights_477443c8-f379-4261-b9fb-22aaec03f33c.jpg?v=1747995982&width=1100",
    title: "Exploring the Different Types of Ceiling Lights to Illuminate Your...",
    date: "18 Apr, 2025",
    desc: "When it comes to interior décor, one cannot overlook the role of lighting...",
  },
  {
    image: "https://orientelectric.com/cdn/shop/articles/How_to_Use_Air_Cooler_92b88f7d-52a8-4a57-8dcd-01675da3af78.jpg?v=1747995406&width=1100",
    title: "How to Use Air Cooler: The Ultimate Guide to Smarter &...",
    date: "11 Apr, 2025",
    desc: "As temperatures rise, air coolers have become a popular and energy-efficient...",
  },
  {
    image: "https://orientelectric.com/cdn/shop/articles/Orient_s_Ceiling_Fans_Transform_Modern_Homes.jpg?v=1747122387",
    title: "Whisper-Quiet Comfort Meets Design Elegance: How Orient’s...",
    date: "04 Apr, 2025",
    desc: "Imagine this. It's a Sunday afternoon. Outside, the world buzzes...",
  },
  {
    image: "https://orientelectric.com/cdn/shop/articles/Orient_s_Ceiling_Fans_Transform_Modern_Homes.jpg?v=1747122387",
    title: "Whisper-Quiet Comfort Meets Design Elegance: How Orient’s...",
    date: "04 Apr, 2025",
    desc: "Imagine this. It's a Sunday afternoon. Outside, the world buzzes...",
  },
  {
    image: "https://orientelectric.com/cdn/shop/articles/Orient_s_Ceiling_Fans_Transform_Modern_Homes.jpg?v=1747122387",
    title: "Whisper-Quiet Comfort Meets Design Elegance: How Orient’s...",
    date: "04 Apr, 2025",
    desc: "Imagine this. It's a Sunday afternoon. Outside, the world buzzes...",
  },
];

const faqs = [
  {
    q: 'What is Whirlflow Technology?',
    a: "Whirlflow Technology ensures that cold water enters the water heater laterally, where the heating element is located avoiding direct mixing with the already heated water at the top of the tank . This design enhances overall heating efficiency, providing more hot water and saving time with efficient heating. As a result, Whirlflow Technology enables a 20% increase in hot water delivery."
  },
  {
    q: 'Is a 5-star or 1-star rating more energy-efficient?',
    a: "The higher the star rating, the higher be energy efficiency as per the BEE 2023 regulations for storage water heaters. 25% energy savings basis BEE star rating guidelines for standing loss of 5-Star vs 1-Star Water Heater (kWH/24-hour/45 C) ",
  },
  {
    q: 'How much time does it take for an electric water heater to heat the water?',
    a: "Storage tank water heaters take around 10 minutes, instant water heater takes approximately 3 minutes and immersion rods heats the water in a minute and gas water geysers heats the water instantly as well.",
  },
  {
    q: 'Is a storage water heater better than an instant water heater?',
    a: "It depends on your requirements. If you need hot water on demand then you should go for instant water heaters, but if you live with a family of 4 then you would want to store hot water for an extended period, then you should buy a storage water geyser. ",
  },
];

const WaterHeaters = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className='font-serif bg-[#f8f4ee]'>
      <div data-aos="fade-up">
        <img src='https://orientelectric.com/cdn/shop/files/Water_heater_1460f505-e35c-4b65-941a-f66ac27f4a2e.jpg?v=1743050869&width=2000' className='w-full h-48 sm:h-64 md:h-80 lg:h-[550px] object-fill' />
      </div>
      <section className="py-12 px-4 pt-20 md:px-10 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-14">
          Water Heaters for every need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-sm" data-aos="fade-right">
            <img
              src="https://orientelectric.com/cdn/shop/files/storage-water-heater.webp?v=1736311975" // replace with your actual image URL
              alt="Storage Geyser"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4">
              <p className="text-white text-sm md:text-base font-medium">
                LARGE CAPACITY
              </p>
              <h3 className="text-white text-lg md:text-2xl font-bold">
                STORAGE GEYSERS
              </h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-sm" data-aos="fade-left">
            <img
              src="https://orientelectric.com/cdn/shop/files/instant-water-heater.webp?v=1736312006" // replace with your actual image URL
              alt="Instant Geyser"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4">
              <p className="text-white text-sm md:text-base font-medium">
                FAST HEATING
              </p>
              <h3 className="text-white text-lg md:text-2xl font-bold">
                INSTANT GEYSERS
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>

      <section className="relative py-12 bg-[#f8f4ee] overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240108/pngtree-bathroom-shower-and-black-tile-wall-design-image_15571222.jpg"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>

        <div className="relative z-10 pt-20" data-aos="fade-up">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-2">
            Our Fatt Se Garam Picks
          </h2>
          <p className="text-center text-sm md:text-lg text-white font-serif">
            Fast heating | Corrosion resistant | Long lasting performance
          </p>

          <div className="relative px-4 sm:px-6 md:px-20 mt-8">
            <button
              ref={prevRef}
              className="hidden md:flex bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="hidden md:flex bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute right-0 top-1/2 transform -translate-y-1/2 z-20"
            >
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {products2.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative bg-white rounded-lg shadow p-4 mx-4 sm:mx-6">
                    {product.label && (
                      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {product.label}
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-24 sm:h-28 md:h-32 mb-4 object-contain"
                      />
                      <h3 className="text-xs sm:text-sm font-medium truncate w-full">
                        {product.title}
                      </h3>
                      <div className="text-orange-500 text-xs sm:text-sm">
                        {"★".repeat(Math.round(product.rating))} {product.rating} / {product.reviews}
                      </div>

                      {product.size && (
                        <div className="text-xs sm:text-sm mt-2">
                          Size:
                          {product.size.map((s) => (
                            <span
                              key={s}
                              className="ml-1 border rounded px-1 py-0.5 text-xs"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="text-xs sm:text-sm mt-2">
                        Color:
                        {product.color.map((c, i) => (
                          <span
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full inline-block mx-0.5 border"
                            style={{ backgroundColor: c }}
                          ></span>
                        ))}
                      </div>

                      <div className="mt-2 text-xs sm:text-sm">
                        From ₹<span className="font-semibold">{product.price.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        MRP: ₹{product.mrp.toLocaleString()}
                      </div>
                      <div className="text-green-600 text-xs">{product.discount}</div>

                      <Button className="mt-3 w-full text-xs sm:text-sm">Add to cart</Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-8 flex justify-center">
            <Button className="px-6 py-2 text-sm sm:text-base" data-aos="fade-up">View all</Button>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Featured Products
        </h2>

        <div className="relative px-4 md:px-32">

          <div className="flex justify-between items-center mb-4">
            <button
              ref={prevRef}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-16 top-[200px] hover:text-black transition"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute right-16 top-[200px] hover:text-black transition"
            >
              <ChevronRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pagination-1',
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className=''
          >
            {products2.map((product, index) => (
              <SwiperSlide key={index}>
                <Card className="relative">
                  {product.label && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {product.label}
                    </div>
                  )}
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-32 mb-4 object-contain"
                    />
                    <h3 className="text-sm font-medium truncate w-full">
                      {product.title}
                    </h3>
                    <div className="text-orange-500 text-sm">
                      {"★".repeat(Math.round(product.rating))} {product.rating} /{" "}
                      {product.reviews}
                    </div>

                    {product.size && (
                      <div className="text-sm mt-2">
                        Size:{" "}
                        {product.size.map((s) => (
                          <span
                            className="ml-1 border rounded px-2 py-0.5 text-xs"
                            key={s}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {product.type && (
                      <div className="text-sm mt-2">
                        Type:{" "}
                        {product.type.map((t) => (
                          <span
                            className="ml-1 border rounded px-2 py-0.5 text-xs"
                            key={t}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="text-sm mt-2">
                      Color:
                      {product.color.map((c, i) => (
                        <span
                          key={i}
                          className="w-4 h-4 rounded-full inline-block mx-0.5 border"
                          style={{ backgroundColor: c }}
                        ></span>
                      ))}
                    </div>

                    <div className="mt-2 text-sm">
                      From ₹
                      <span className="font-semibold">
                        {product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      MRP: ₹{product.mrp.toLocaleString()}
                    </div>
                    <div className="text-green-600 text-xs">
                      {product.discount}
                    </div>

                    <Button className="mt-3 w-full text-sm">Add to cart</Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination-1 mt-8 flex justify-center gap-2"></div>
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-2" data-aos="fade-up">View all</Button>
        </div>
      </section>
      <div className='bg-[#f8f4ee] pt-20' data-aos="fade-up">
        <section className="bg-[#333230]  py-12 px-4 " data-aos="zoom-in">
          <h2 className="text-center text-white text-3xl font-semibold mb-10">
            Why Innomind Electric Water Heaters?
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="bg-orange-500 rounded-full border-2 border-white p-4 w-24 h-24 flex items-center justify-center mb-4">
                  <img src={item.icon} alt={item.title} className=" object-cover" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Popular Picks
        </h2>

        <div className="relative px-4 md:px-32">

          <div className="flex justify-between items-center mb-4">
            <button
              ref={prevRef}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-16 top-[200px] hover:text-black transition"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute right-16 top-[200px] hover:text-black transition"
            >
              <ChevronRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pagination-2',
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className=''
          >
            {products2.map((product, index) => (
              <SwiperSlide key={index}>
                <Card className="relative">
                  {product.label && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {product.label}
                    </div>
                  )}
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-32 mb-4 object-contain"
                    />
                    <h3 className="text-sm font-medium truncate w-full">
                      {product.title}
                    </h3>
                    <div className="text-orange-500 text-sm">
                      {"★".repeat(Math.round(product.rating))} {product.rating} /{" "}
                      {product.reviews}
                    </div>

                    {product.size && (
                      <div className="text-sm mt-2">
                        Size:{" "}
                        {product.size.map((s) => (
                          <span
                            className="ml-1 border rounded px-2 py-0.5 text-xs"
                            key={s}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {product.type && (
                      <div className="text-sm mt-2">
                        Type:{" "}
                        {product.type.map((t) => (
                          <span
                            className="ml-1 border rounded px-2 py-0.5 text-xs"
                            key={t}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="text-sm mt-2">
                      Color:
                      {product.color.map((c, i) => (
                        <span
                          key={i}
                          className="w-4 h-4 rounded-full inline-block mx-0.5 border"
                          style={{ backgroundColor: c }}
                        ></span>
                      ))}
                    </div>

                    <div className="mt-2 text-sm">
                      From ₹
                      <span className="font-semibold">
                        {product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      MRP: ₹{product.mrp.toLocaleString()}
                    </div>
                    <div className="text-green-600 text-xs">
                      {product.discount}
                    </div>

                    <Button className="mt-3 w-full text-sm">Add to cart</Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination-2 mt-8 flex justify-center gap-2"></div>
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-2" data-aos="fade-up">View all</Button>
        </div>

        <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
          <hr className='w-full  '></hr>
        </div>

      </section>


      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Our Best Sellers
        </h2>

        <div className="relative px-4 md:px-32">

          <div className="flex justify-between items-center mb-4">
            <button
              ref={prevRef}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-16 top-[200px] hover:text-black transition"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute right-16 top-[200px] hover:text-black transition"
            >
              <ChevronRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.custom-pagination-3',
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className=''
          >
            {products2.map((product, index) => (
              <SwiperSlide key={index}>
                <Card className="relative">
                  {product.label && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {product.label}
                    </div>
                  )}
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-32 mb-4 object-contain"
                    />
                    <h3 className="text-sm font-medium truncate w-full">
                      {product.title}
                    </h3>
                    <div className="text-orange-500 text-sm">
                      {"★".repeat(Math.round(product.rating))} {product.rating} /{" "}
                      {product.reviews}
                    </div>

                    {product.size && (
                      <div className="text-sm mt-2">
                        Size:{" "}
                        {product.size.map((s) => (
                          <span
                            className="ml-1 border rounded px-2 py-0.5 text-xs"
                            key={s}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {product.type && (
                      <div className="text-sm mt-2">
                        Type:{" "}
                        {product.type.map((t) => (
                          <span
                            className="ml-1 border rounded px-2 py-0.5 text-xs"
                            key={t}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="text-sm mt-2">
                      Color:
                      {product.color.map((c, i) => (
                        <span
                          key={i}
                          className="w-4 h-4 rounded-full inline-block mx-0.5 border"
                          style={{ backgroundColor: c }}
                        ></span>
                      ))}
                    </div>

                    <div className="mt-2 text-sm">
                      From ₹
                      <span className="font-semibold">
                        {product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      MRP: ₹{product.mrp.toLocaleString()}
                    </div>
                    <div className="text-green-600 text-xs">
                      {product.discount}
                    </div>

                    <Button className="mt-3 w-full text-sm">Add to cart</Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination-3 mt-8 flex justify-center gap-2"></div>
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-2" data-aos="fade-up">View all</Button>
        </div>

        <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
          <hr className='w-full  '></hr>
        </div>

      </section>
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 bg-[#f8f4ee] relative" data-aos="fade-up">
        <h2 className="text-3xl text-center font-semibold mb-10">Water Heaters Related Blogs</h2>


        <div className="hidden md:block absolute top-1/2 left-4 md:left-10 lg:left-24 z-10 -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeft />
          </button>
        </div>


        <div className="hidden md:block absolute top-1/2 right-4 md:right-10 lg:right-24 z-10 -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Navigation]}
        >
          {blogData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-sm bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mb-4 w-full h-48 object-cover"
                />
                <div className="px-2 pb-4">
                  <h3 className="text-lg font-medium leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm mt-2 inline-flex items-center gap-1"
                  >
                    Read more <span className="text-xs">➜</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>

      <section className="flex flex-col lg:flex-row justify-center items-center bg-[#f8f4ee] w-full px-4 md:px-10 lg:px-20 py-10" data-aos="fade-up">
        <div className="w-full lg:w-3/4 xl:w-3/5 py-8 lg:py-16" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="border rounded-md p-4 bg-white shadow-lg">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-2 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col items-center mt-8 lg:mt-0" data-aos="fade-left">
          <p className="text-2xl font-semibold font-serif mb-4">FOLLOW US</p>
          <div className="flex gap-4 text-3xl flex-wrap justify-center">
            <FaTwitter className="text-blue-500 hover:text-blue-400 cursor-pointer" />
            <FaFacebookF className="text-blue-600 hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:text-pink-400 cursor-pointer" />
            <FaWhatsapp className="text-green-500 hover:text-green-400 cursor-pointer" />
            <FaLinkedinIn className="text-sky-500 hover:text-sky-400 cursor-pointer" />
            <FaYoutube className="text-red-500 hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </section>
    </div>

  )
}

export default WaterHeaters;