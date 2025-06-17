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

const videos = [
  {
    id: 1,
    src: '/videos/video_1.mp4',
  },
  {
    id: 2,
    src: '/videos/video_2.mp4',
  },
  {
    id: 3,
    src: '/videos/video_3.mp4',
  },
];
const products2 = [
  {
    title: "10 Amp Multi Plug Adaptor (Socket)",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 5299,
    mrp: 7500,
    discount: "29% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/10-amp-multi-plug-adaptor-socket-orient-electric-1.png?v=1696835353&width=990"
  },
  {
    title: "Reel 3 Pin Power Cord Extension Board",
    rating: 4.5,
    reviews: 5,
    size: ["1230MM"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 7399,
    mrp: 10800,
    discount: "31% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/reel-4-metre-power-cord-extension-board-orient-electric-1.png?v=1696835360&width=990"
  },
  {
    title: "I-Nex Wifi 10A Smart Plug Socket",
    rating: 5.0,
    reviews: 5,
    type: ["Underlight", "Non-Underlight"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/i-nex-wifi-10a-smart-plug-socket-orient-electric-1.png?v=1696835360&width=990"
  },
  {
    title: "Reel 3 Pin Power Cord Extension Board",
    rating: 4.5,
    reviews: 5,
    size: ["1230MM"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 7399,
    mrp: 10800,
    discount: "31% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/reel-4-metre-power-cord-extension-board-orient-electric-1.png?v=1696835360&width=990"
  },
  {
    title: "I-Nex Wifi 10A Smart Plug Socket",
    rating: 5.0,
    reviews: 5,
    type: ["Underlight", "Non-Underlight"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/i-nex-wifi-10a-smart-plug-socket-orient-electric-1.png?v=1696835360&width=990"
  },
  {
    title: "10 Amp Multi Plug Adaptor (Socket)",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 5299,
    mrp: 7500,
    discount: "29% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/10-amp-multi-plug-adaptor-socket-orient-electric-1.png?v=1696835353&width=990"
  },
];


const Categories2 = [
  { name: "Fan", image: "https://purepng.com/public/uploads/large/purepng.com-black-ceiling-fanelectronics-ceiling-fan-fan-94152466621394pdh.png" },
  { name: "Lighting", image: "https://www.pngmart.com/files/15/Electric-Bulb-PNG-Image.png" },
  { name: "Air Coolers", image: "https://symphonylimited.com/wp-content/uploads/2023/10/WB1-300x300.jpg" },
  { name: "Water Heaters", image: "https://th.bing.com/th/id/OIP.3cMdnIWdS5dbSapbslV5sAHaRF?rs=1&pid=ImgDetMain" },
  { name: "Small Appliances", image: "https://orientelectric.com/cdn/shop/files/elite-super-mixer-grinder-500w-orient-electric-1.png?v=1696834701&width=990" },
];


const Categories = [
  { name: "Extension Boards", image: "https://orientelectric.com/cdn/shop/files/Extension_Boards_2bc8b644-0e73-470c-887c-0b7345d081f3.png?v=1697094031" },
  { name: "Door Bells", image: "https://orientelectric.com/cdn/shop/files/Extension_Boards_2bc8b644-0e73-470c-887c-0b7345d081f3.png?v=1697094031" },
  { name: "Plugs", image: "https://orientelectric.com/cdn/shop/files/Plug_Top_773003ea-45b5-4f46-be44-608e3e7bbda8.png?v=1697094083" },
  { name: "Multi Plugs", image: "https://orientelectric.com/cdn/shop/files/plug.png?v=1702986819" },
  { name: "Switches", image: "https://orientelectric.com/cdn/shop/files/switches.png?v=1723439026" },
  { name: "Smart Plug", image: "https://orientelectric.com/cdn/shop/files/smart_plug_e8edaf71-498a-4e3e-aa6c-3d2ba9e5560d.png?v=1723439026" },
  { name: "Distribtion Board", image: "https://orientelectric.com/cdn/shop/files/Dist_Board.png?v=1723439025" },
  { name: "Socket", image: "https://orientelectric.com/cdn/shop/files/socket.png?v=1723439025" },
  { name: "MCB", image: "https://orientelectric.com/cdn/shop/files/MCB.png?v=1723439025" },
  { name: "Lamp Holder", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
  { name: "Wires & Cables", image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png" },
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
    q: 'What is a switchgear?',
    a: "A switchgear is a device used to control, protect, and isolate electrical equipment. It includes components like circuit breakers, fuses, isolators, and relays to ensure safe and reliable operation of electrical systems."
  },
  {
    q: 'How do I reverse the direction of my fan?',
    a: "1 .MCB (Miniature Circuit Breaker): Protects against overloads and short circuits. 2. RCCB (Residual Current Circuit Breaker): Detects and protects against earth leakage currents (electric shocks).",
  },
  {
    q: 'Where are switchgears used?',
    a: "Switchgears are used in residential, commercial, and industrial installations to safely manage the flow of electricity. They’re found in main distribution boards, panels, and control rooms.",
  },
  {
    q: 'Can switchgear be installed outdoors?',
    a: "Yes, but outdoor switchgears must be weatherproof and IP-rated (e.g., IP65) to resist dust and moisture. Enclosures should be used for added protection.",
  },
];

const SwitchGears = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);

  const prevRef3 = useRef(null);
  const nextRef3 = useRef(null);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  return (
    <div className='font-serif bg-[#f8f4ee]'>
      <div data-aos="fade-up">
        <img src='https://orientelectric.com/cdn/shop/files/CLP_Banner.jpg?v=1701664823&width=2000' className='w-full h-48 sm:h-64 md:h-80 lg:h-[550px] object-fill' />
      </div>
      <div className="flex flex-col items-center py-16 px-4 md:px-10 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl mb-8 font-semibold font-Radley md:mb-8">
          Shop By Categories
        </h2>

        <div className="w-full">
          <div className="grid grid-cols-9 gap-6" data-aos="zoom-in">
            {Categories.slice(0, 9).map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white shadow-lg rounded-full h-24 w-24 lg:h-32 lg:w-32 flex items-center justify-center overflow-hidden duration-300 hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-20 w-20 lg:h-28 lg:w-28 object-contain"
                  />
                </div>
                <h1 className="py-2 text-center text-sm font-Radley font-bold text-gray-800 cursor-pointer">
                  {category.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>


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


      <div className='w-full bg-[#f8f4ee]   pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>
      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Popular Picks
        </h2>

        <div className="relative px-4 md:px-32">

          <div className="flex justify-between items-center mb-4">
            <button
              ref={prevRef2}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-16 top-[200px] hover:text-black transition"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef2}
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
              swiper.params.navigation.prevEl = prevRef2.current;
              swiper.params.navigation.nextEl = nextRef2.current;
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
      <div className="flex flex-col items-center py-16 px-4 md:px-10 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl mb-8 font-semibold font-serif">
          Shop By Category
        </h2>

        <div className="w-full max-w-6xl px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8" data-aos="zoom-in">
            {Categories2.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white shadow-lg rounded-full h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 flex items-center justify-center overflow-hidden duration-300 hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 object-contain"
                  />
                </div>
                <h1 className="py-2 text-center text-sm sm:text-base font-Radley font-bold text-gray-800 cursor-pointer">
                  {category.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>


      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Our Best Sellers
        </h2>

        <div className="relative px-4 md:px-32">

          <div className="flex justify-between items-center mb-4">
            <button
              ref={prevRef3}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-16 top-[200px] hover:text-black transition"
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef3}
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
              swiper.params.navigation.prevEl = prevRef3.current;
              swiper.params.navigation.nextEl = nextRef3.current;
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
        <h2 className="text-3xl text-center font-semibold mb-10">Switchgears Related Blogs</h2>
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

export default SwitchGears;