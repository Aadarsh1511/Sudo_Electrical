import React, {useRef,useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination ,Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { Card,CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight} from "lucide-react";

const videos = [
{
  id:1,
  src:'/videos/video_1.mp4',
},
  {
    id:2,
    src:'/videos/video_2.mp4',
  },
{
  id:3,
  src:'/videos/video_3.mp4',
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
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"
  }
];
const Categories=[
  { name:"Ceiling Fans",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Table Fans",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Wall Fans",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Stand Fans",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
  { name:"Exhaust Fans",image:"https://static.vecteezy.com/system/resources/previews/023/353/491/original/beautiful-ceiling-fan-png.png"},
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
      q: 'What size fan do I need for my room?',
      a: "The right fan for your home should provide you with adequate and high-speed air across the room. Thus, before buying a fan you must measure the room's square footage and follow the guide given below: 1. For a 6x6 sq. ft room buy a fan with a sweep size of 600mm 2. For an 8x8 sq. ft room buy a fan with a sweep size of 900mm 3. For a 10x10 sq. ft room buy a fan with a sweep size of 1200mm  4. For a 15x15 sq. ft room buy a fan with a sweep size of 1400mm"
    },
    {
      q: 'How do I reverse the direction of my fan?',
      a: "Look for a switch on the fan's remote control to change the direction of the blades, typically clockwise for winter and counterclockwise for summer.",
    },
    {
      q: 'Why is my fan making noise?',
      a: "Loose components can cause noise; clean the fan regularly and tighten any loose screws to resolve the issue.",
    },
    {
      q: 'How do I clean my fan?',
      a: "Use a damp cloth with a brush attachment to clean the blades, and wipe down the motor and housing with a soft, dry cloth.",
    },
  ];

const Fans = ()=> {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div>
      <div>
        <img src='public/images/Fan_ban.webp'/>
      </div>
      <div>
        <div className="flex flex-col items-center  py-16 px-4 md:px-10 bg-[#f8f4ee]">
      <h2 className="text-center text-3xl  mb-8  font-semibold font-Radley md:mb-8">Trending Category</h2>

      <div className="w-full ml-32 max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {Categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-full h-40 w-40 flex items-center justify-center overflow-hidden duration-300 hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-36 w-36 object-contain"
              />
            </div>

              <h1 className="py-2 text-center text-[16px] font-Radley font-bold text-gray-800 cursor-pointer"  >
                {category.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
      <div>
      <div className="flex justify-center flex-col  flex-wrap bg-[#f8f4ee] ">
        <div>
          <h2 className="text-center text-3xl flex flex-col    font-semibold font-Radley md:mb-8">Explore our latest innovations</h2>
        </div>
        <div className='flex flex-row justify-center gap-4'>
          {videos.map((video) => (
            <div key={video.id} className="w-[300px] h-[400px] border rounded-md overflow-hidden">
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
          />
        </div>
      ))}

        </div>
              </div>    
    </div>

<section className="py-12 bg-[#f8f4ee]">
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
                <Button className=' flex w-[250px]   '>View Unique Colour Fans</Button>
              </div>


<div className='pr-32 pl-32 pt-20 pb-20 bg-[#f8f4ee]'>
    <div className="w-full    bg-black overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[400px] object-cover pl-[100px] pr-[100px] "
  >
    <source src="https://cdn.shopify.com/videos/c/o/v/d0f998d241764fb48c41e722dacf7913.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
</div>
<div className='w-full bg-[#f8f4ee]   pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
<section className="py-12 bg-[#f8f4ee]">
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
        <Button className="px-6 py-2">View all</Button>
      </div>
      
      <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
      
    </section>
    <div>
        <div className="flex flex-col items-center   px-4 md:px-10 bg-[#f8f4ee]">
      <h2 className="text-center text-3xl  mb-8  font-semibold font-Radley md:mb-8">Shop By Category</h2>

      <div className="w-full ml-32 max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {Categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-full h-40 w-40 flex items-center justify-center overflow-hidden duration-300 hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-36 w-36 object-contain"
              />
            </div>

              <h1 className="py-2 text-center text-[16px] font-Radley font-bold text-gray-800 cursor-pointer"  >
                {category.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>


<section className="py-12 bg-[#f8f4ee]">
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
        <Button className="px-6 py-2">View all</Button>
      </div>
      
      <div className='w-full bg-[#f8f4ee]  pt-16 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>
      
    </section>
    <div className=" px-4 pl-40 pr-40 bg-[#f8f4ee] relative">
      <h2 className="text-3xl text-center font-semibold mb-10">Fans Related Blogs</h2>
    
    
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



          <section className="py-16 px-4 md:px-20 bg-[#f8f4ee]">
        <h2 className="text-3xl font-bold max-w-4xl text-center mb-8 ">FAQs</h2>
        <div className="max-w-4xl  space-y-4 ">
          {faqs.map((item, i) => (
            <details key={i} className="border rounded-md p-4 bg-white shadow-lg">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>

  )
}

export default Fans;