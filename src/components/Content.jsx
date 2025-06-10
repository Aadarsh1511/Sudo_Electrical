import React, { useRef,useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/Card";
import {Play, ChevronLeft, ChevronRight, User, ShoppingBag, Search } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const images = [
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
];
const images2 =[
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
];
const images3 =[
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
  "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png",
];
const Categories=[
  { name:"Fan",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Lighting",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Air Coolers",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Small Appliances",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Water Heaters",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Switchgears",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
];
const products = [
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore lighting products',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore table lamps',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore Aquator IoT Geyser',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore coffee machines',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore coffee machines',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore coffee machines',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png',
    title: 'Explore coffee machines',
  },
];
const products2 = [
  {
    title: "AEON VC Smart BLDC Pro...",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 5299,
    mrp: 7500,
    discount: "29% OFF",
    label: "New Arrival",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  },
  {
    title: "Aeroquiet Neu BLDC Pro Ceili...",
    rating: 4.5,
    reviews: 5,
    size: ["1230MM"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 7399,
    mrp: 10800,
    discount: "31% OFF",
    label: "New Arrival",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  },
  {
    title: "Aerosense Smart BLDC Ceiling...",
    rating: 5.0,
    reviews: 5,
    type: ["Underlight", "Non-Underlight"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  },
  {
    title: "Aeon Antidust BLDC Ceiling Fan",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM", "900MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  },
  {
    title: "Aeon Antidust BLDC Ceiling Fan",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM", "900MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 8000,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  },
  {
    title: "Aeon Antidust BLDC Ceiling Fan",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM", "900MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  }
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
const videoThumbnails = [
  '/videos/video_1.mp4',
  '/videos/video_2.mp4',
  '/videos/video_3.mp4',
  '/videos/video_4.mp4',
  '/videos/video_5.mp4',
  '/videos/video_6.mp4',
  '/videos/video_7.mp4',
];
const VideoCard = ({ src }) => {
  return (
    <div className="relative w-[220px] h-[220px] rounded overflow-hidden shadow-md flex-shrink-0 group">
      <video
        src={src}
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onMouseOver={(e) => e.target.play()}
        onMouseOut={(e) => e.target.pause()}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white p-2 rounded-full shadow">
          <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const Content = () => {
   const [currentIndex1, setCurrentIndex1] = useState(0);
   const prevSlide1 = () => setCurrentIndex1((prev) => Math.max(prev - 1, 0));
const nextSlide1 = () => setCurrentIndex1((prev) =>
  Math.min(prev + 1, videoThumbnails.length - visibleCards)
);

const [currentIndex2, setCurrentIndex2] = useState(0);
const prevSlide2 = () => setCurrentIndex2((prev) => Math.max(prev - 1, 0));
const nextSlide2 = () => setCurrentIndex2((prev) =>
  Math.min(prev + 1, videoThumbnails.length - visibleCards)
);

  const visibleCards = 4;
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
 



  
  return (
    <div className="">
      <div className='bg-[#f8f4ee] flex flex-col md:flex-row w-full h-auto md:h-[500px] gap-4'>
  
      <div className='md:flex-[9] relative h-[300px] md:h-full w-full overflow-hidden'>

        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover absolute inset-0 z-0'
        >
          <source src="/public/Videos/vegebg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="absolute inset-0 flex md:items-center md:justify-start items-center justify-center md:pt-40 pt-0 pl-0 md:pl-6 text-center md:text-left z-20">
          <div className="text-white bg-black/40 backdrop-blur-sm p-4 mb-28 md:p-6 rounded-2xl shadow-xl max-w-xl">
            <h1 className='text-2xl md:text-4xl font-extrabold mb-2 leading-tight font-Radley'>Welcome to My Site</h1>
            <p className='mb-4 text-sm md:text-lg font-Radley'>Shop the latest collection</p>
            <button className='bg-green-600 hover:bg-green-700 font-Radley transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full'>
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className='hidden md:flex flex-[6] flex-col gap-4'>
        <div className='flex-1 relative overflow-hidden'>
          <img src={images2[currentIndex1]} alt='right-slide-1' className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className='flex-1 relative overflow-hidden'>
          <img src={images3[currentIndex1]} alt='right-slide-2' className='w-full h-full object-cover' />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
    </div>
      <div className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 bg-[#f8f4ee]">
  <h2 className="text-center text-2xl sm:text-3xl mb-6 md:mb-8 font-semibold font-Radley">
    Show By Category
  </h2>

  <div className="w-full max-w-6xl px-2 sm:px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
      {Categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white shadow-lg rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center overflow-hidden duration-300 hover:scale-105">
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          </div>
          <h1 className="pt-2 text-center text-sm sm:text-base font-Radley font-bold text-gray-800 cursor-pointer">
            {category.name}
          </h1>
        </div>
      ))}
    </div>
  </div>

  <div className="w-full pt-12">
    <hr className="w-full border-gray-300" />
  </div>
</div>

    
  <div className="w-full py-5 bg-[#f8f4ee]">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Smart by Design, Thoughtful by Nature
      </h2>


      <div className="max-w-[1400px] mx-auto px-6 relative py-10">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center">
              <div className="w-[270px] h-[400px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800">
                {product.title}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <div className='w-full  pt-20 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
    </div>

   <section className="py-12 bg-[#f8f4ee]">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Our Latest Innovations
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
            <ChevronRight  />
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
        <Button className="px-6 py-2">View all</Button>
      </div>
    </section>
          <div className='flex  flex-col justify-center items-center w-full'>
            <img src='https://orientelectric.com/cdn/shop/files/Colors_9752c826-0e69-48be-8420-73f76aab3354.jpg?v=1747914033&width=2000' alt='bn-image'/>
            <Button className=' flex w-[250px]  mb-8   '>View Unique Colour Fans</Button>
          </div>


<div className="bg-[#f8f4ee] py-24 px-4">
  <div className="flex flex-col md:flex-row items-center justify-center text-center gap-10 max-w-6xl mx-auto">
    
    {/* Text Section */}
    <div className="flex flex-col items-center text-center max-w-md">
      <p className="text-2xl sm:text-3xl font-semibold">Shopping Just</p>
      <p className="text-2xl sm:text-3xl font-semibold mb-4">Got Personal</p>
      <p className="text-gray-700 text-sm sm:text-base">
        We’re here to help you discover products that perfectly match your needs. 
        Simply click on product guide to get started.
      </p>
    </div>

    {/* Icons Section */}
    <div className="flex flex-wrap justify-center gap-8">
      {/* Fans Guide */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
          <img
            src="https://orientelectric.com/cdn/shop/files/Group_221701_small.png?v=1676269615"
            alt="Fans Guide"
            className="w-20 h-20"
          />
        </div>
        <p className="text-center text-gray-700 mt-2">Fans<br />Guide</p>
      </div>

      {/* Air Cooler Guide */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
          <img
            src="https://orientelectric.com/cdn/shop/files/Group_221702_small.png?v=1676269810"
            alt="Air Cooler Guide"
            className="w-20 h-20"
          />
        </div>
        <p className="text-center text-gray-700 mt-2">Air Cooler<br />Guide</p>
      </div>

      {/* Lighting Guide */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
          <img
            src="https://orientelectric.com/cdn/shop/files/Group_221703_small.png?v=1676269815"
            alt="Lighting Guide"
            className="w-20 h-20"
          />
        </div>
        <p className="text-center text-gray-700 mt-2">Lighting<br />Guide</p>
      </div>
    </div>
  </div>
</div>

<div className='w-full bg-[#f8f4ee]  pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
<section className="py-12 bg-[#f8f4ee]">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Summer Special Offerings
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
            <ChevronRight  />
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
        <Button className="px-6 py-2">View all</Button>
      </div>
    </section>
    <div className='w-full bg-[#f8f4ee]  pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
    <section className="py-12 bg-[#f8f4ee]">
          <h2 className="text-center text-3xl font-semibold mb-8">
            Limited Period Offers
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
                <ChevronRight  />
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
            <Button className="px-6 py-2">View all</Button>
          </div>
        </section>
        <div className='w-full bg-[#f8f4ee]  pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
    <div className="py-10 text-center bg-[#f8f4ee] ">
  <h2 className="text-4xl font-light mb-10">A Promise of Excellence</h2>

  <div className="flex justify-center gap-32 flex-wrap">
    
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
        <img
          src="https://orientelectric.com/cdn/shop/files/65_years.svg?v=1687342854"
          alt="65 Years"
          className="w-32 h-32"
        />
      </div>
      <p className="text-gray-700 text-sm mt-2">Expertise<br />of 65+ years</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
        <img
          src="https://orientelectric.com/cdn/shop/files/innovation.svg?v=1687342865"
          alt="Innovation"
          className="w-32 h-32"
        />
      </div>
      <p className="text-gray-700 text-sm mt-2">Culture of<br />Innovation & Design</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
        <img
          src="https://orientelectric.com/cdn/shop/files/nationwide_impact.svg?v=1684999189"
          alt="Nationwide"
          className="w-32 h-32"
        />
      </div>
      <p className="text-gray-700 text-sm mt-2">Nationwide<br />Presence</p>
    </div>

    
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
        <img
          src="https://orientelectric.com/cdn/shop/files/happy_customers.svg?v=1684999228"
          alt="Happy Customers"
          className="w-32 h-32"
        />
      </div>
      <p className="text-gray-700 text-sm mt-2">20+ Crore<br />Happy Customers</p>
    </div>
  </div>
  <div className='w-full bg-[#f8f4ee] pt-16 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
</div>
<div className='bg-[#f8f4ee] '>
<h2 className="text-4xl text-center font-light mb-8 ">Our Handpicked Brands</h2>
<div className='grid  grid-cols-2  gap-12 pl-40 pr-40'>
  <div>
    <img src='https://www.myzeo.com/wp-content/uploads/2020/02/load-image-18-1-1536x1413.jpeg' className='w-full h-[300px] rounded-lg'/>
  </div>
  <div>
    <img src='https://thumbs.dreamstime.com/b/seller-household-appliances-section-portrait-male-consultant-working-small-hypermarket-63661856.jpg' className='w-full h-[300px] rounded-lg'/>
  </div>
</div>
<div className='w-full bg-[#f8f4ee] pt-16  pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
</div>
<div className='grid  grid-cols-2 pt-10 justify-center bg-[#f8f4ee]  items-center  gap-12 pl-40 pr-40'>
  <div className='flex flex-col'>
   <div className='flex flex-col  h-[200px] items-center  text-justify' >
      <p className='flex  text-3xl text-justify font-semibold  '>Looking to do</p>
      <p className='flex text-justify text-3xl font-semibold mb-3'>business with us?</p>
      <p className='flex flex-col  w-[250px] ml-8 text-gray-700 text-justify '>We’re happy to help you with your <span className='text-center'>requirements.</span> </p>
      <Button className='w-[200px] mt-3'>Get in Touch</Button>
    </div>
  </div>
  <div>
    <img src='https://img.freepik.com/premium-photo/manager-boss-worker-helping-new-employee-as-call-center-agent-training-consultant-work-planning-workflow-with-colleague-company-customer-service-team-conversation-with-coworker_590464-82374.jpg' className='w-[400px] h-[300px] rounded-lg'/>
  </div>
  
</div>
<div className='w-full bg-[#f8f4ee] pt-16 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
<div className="pt-10 px-4 pl-40 pr-40 bg-[#f8f4ee] relative">
  <h2 className="text-3xl text-center font-semibold mb-10">Blog</h2>


<div className="absolute top-1/2 left-24 z-10 translate-y-[20px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft/>
        </button>
      </div>
      <div className="absolute top-1/2 right-[100px] z-10 translate-y-[20px]">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight/>
        </button>
      </div>


  <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
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
      <div className='grid grid-cols-2'>
    <div className="w-full bg-[#f8f4ee] flex flex-col items-center px-4 py-10">
        <FaFacebook className="text-4xl text-blue-500 mb-2" />
      <h2 className="text-4xl font-semibold text-center text-[#333]">Follow Us</h2>
      <h3 className="text-base text-gray-700 text-center mt-1">@InnomindSolutions</h3>
      <h4 className="text-sm text-gray-600 text-center mb-6">121k followers</h4>

      <div className="flex items-center gap-4 w-full max-w-[1100px]">
        <button
          onClick={prevSlide1}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4 overflow-hidden">
          {videoThumbnails
            .slice(currentIndex1, currentIndex1 + visibleCards)
            .map((src, index) => (
              <VideoCard key={index} src={src} />
            ))}
        </div>

        <button
          onClick={nextSlide1}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>

<div className="w-full bg-[#f8f4ee] flex flex-col items-center px-4 py-10">
        <FaInstagram className="text-4xl text-pink-500 mb-2" />
      <h2 className="text-4xl font-semibold text-center text-[#333]">Follow Us</h2>
      <h3 className="text-base text-gray-700 text-center mt-1">@InnomindSolutions</h3>
      <h4 className="text-sm text-gray-600 text-center mb-6">180k followers</h4>

      <div className="flex items-center gap-4 w-full max-w-[1100px]">
        <button
          onClick={prevSlide2}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4 overflow-hidden">
          {videoThumbnails
            .slice(currentIndex2, currentIndex2 + visibleCards)
            .map((src, index) => (
              <VideoCard key={index} src={src} />
            ))}
        </div>

        <button
          onClick={nextSlide2}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>

    </div>


      </div>
  );
}

export default Content;