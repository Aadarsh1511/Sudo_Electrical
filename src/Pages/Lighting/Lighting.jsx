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
import {FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';



const videos = [
{
  id:1,
  src:'public/videos/Light_video1.mp4',
},
  {
    id:2,
    src:'public/videos/Light_video2.mp4',
  },
{
  id:3,
  src:'public/videos/Light_video3.mp4',
},
];

const products = [
  {
    video: 'public/videos/lighting.mp4',
    title: 'Explore Bathroom Lighting',
  },
  {
    video: 'public/videos/Light_v1.mp4',
    title: 'Explore Living Room Lighting',
  },
  {
    video: 'public/videos/Light_v2.mp4',
    title: 'Explore Bedroom Lighting ',
  },
  {
    video: 'public/videos/Light_v3.mp4',
    title: 'Explore Kitchen Lighting',
  },
  {
    video: 'public/videos/Light_v4.mp4',
    title: 'Explore Hall Lighting',
  },
];


const products2 = [
  {
    title: "Moodlight LED Recess Panel 3CCT (Cool White, Warm White, Natural White) 10W Round",
    rating: 5.0,
    reviews: 5,
    size: ["10W","15W"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 5299,
    mrp: 7500,
    discount: "29% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/moodlight-led-recess-panel-3cct-cool-white-warm-white-natural-white-orient-electric-1.png?v=1696835037&width=990"
  },
  {
    title: "K Type 2 Way Deco LED Wall Light 6W Warm White",
    rating: 4.5,
    reviews: 5,
    size: ["6W"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 7399,
    mrp: 10800,
    discount: "31% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/k-type-2-way-deco-led-wall-light-orient-electric-1.png?v=1696835028&width=990"
  },
  {
    title: "Eternal Vivid LED Spot Light 2W Warm White",
    rating: 4.5,
    reviews: 5,
    size: ["6W"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/eternal-vivid-led-spot-light-orient-electric-1.png?v=1696835274&width=990"
  },
  {
    title: "Eternal High Glo LED Bulb 9W Cool White",
    rating: 4.8,
    reviews: 5,
    size: ["18W", "9W"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/eternal-high-glo-led-bulb-orient-electric-1.png?v=1696835028&width=990"
  },
  {
    title: "Backlite Trim Recess Panel LED Ceiling Light (Round) 6W Warm White",
    rating: 4.8,
    reviews: 5,
    size: ["6W", "12W","18W"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/backlite-trim-recess-panel-led-ceiling-light-orient-electric-1.png?v=1696835274&width=990"
  },
  {
    title: "Rainbow LED Recess Panel 6W White Blue",
    rating: 4.8,
    reviews: 5,
    size: ["6W"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/rainbow-led-recess-panel-orient-electric-1.png?v=1696835037&width=990"
  }
];




const Festive = [
  {
    title: "TEJAS Diwali Lights Gift Pack of 3",
    rating: 4.6,
    reviews: 5,
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 5299,
    mrp: 7500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/tejas-diwali-lights-gift-pack-of-3-orient-electric-1.jpg?v=1707286199&width=990"
  },
  {
    title: "DEEPTI Diwali Lights Gift Pack of 7",
    rating: 5.0,
    reviews: 5,
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 7399,
    mrp: 10800,
    discount: "31% OFF",
    image: "https://orientelectric.com/cdn/shop/files/deepti-diwali-lights-gift-pack-of-7-orient-electric-1.jpg?v=1707286199&width=990"
  },
  {
    title: "Joylite Kuber Yantra Ganesh Ji Curtain Light Warm White",
    rating: 6.0,
    reviews: 5,
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    image: "https://orientelectric.com/cdn/shop/files/joylite-kuber-yantra-ganesh-ji-curtain-light-orient-electric-1.png?v=1707286204&width=990"
  },
  {
    title: "Joylite Rosary 10M LED String Light for Home Decoration Warm White",
    rating: 4.8,
    reviews: 5,
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "45% OFF",
    image: "https://orientelectric.com/cdn/shop/files/Rosary_-_warm_white.png?v=1728968277&width=990"
  },
  {
    title: "Joylite Diya LED Curtain Light for Home Warm White",
    rating: 4.8,
    reviews: 5,
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "31% OFF",
    image: "https://orientelectric.com/cdn/shop/files/joylite-diya-led-curtain-light-for-home-orient-electric-1.png?v=1707286203&width=990"
  },
  {
    title: "JoyLite 5-meter 120 LED Rope Strip Light Warm White",
    rating: 4.8,
    reviews: 5,
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "63% OFF",
    image: "https://orientelectric.com/cdn/shop/files/yellow_00000_1.png?v=1728968207&width=990"
  }
];







const Categories=[
  { name:"LED Bulbs",image:"https://static.vecteezy.com/system/resources/previews/052/988/751/non_2x/decorative-lights-hanging-in-front-home-interior-product-photography-minimalist-style-close-up-view-free-png.png"},
  { name:"Ceiling Lights",image:"https://www.destinationlighting.com/images/products_dtl/642/P2175642~dtl.jpg"},
  { name:"Outdoor Lights",image:"https://th.bing.com/th/id/OIP.vgGv9Nj-KUX2eO8XvYAKTQHaJf?w=3185&h=4084&rs=1&pid=ImgDetMain"},
  { name:"Desk Lamps",image:"https://th.bing.com/th/id/OIP.vgGv9Nj-KUX2eO8XvYAKTQHaJf?w=3185&h=4084&rs=1&pid=ImgDetMain"},
  { name:"Wall Lights",image:"https://www.pngall.com/wp-content/uploads/12/Wall-Light-Interior.png"},
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
      q: 'What is the difference between LED and CFL bulbs?',
      a: "LED bulbs are more energy-efficient, last longer (up to 25,000+ hours), and consume less power than CFLs. LEDs also turn on instantly and are more environmentally friendly."
    },
    {
      q: 'How do I choose the right wattage for my room?',
      a: "The right wattage depends on room size and purpose: 1.Bedroom/Living room: 7W–12W LEDs 2.Kitchen/Study: 12W–18W LEDs 3.Large areas: Use higher wattage or multiple light points.",
    },
    {
      q: 'Are LED lights dimmable?',
      a: "Not all LED lights are dimmable. If you need dimming functionality, look for bulbs labeled as dimmable LEDs and ensure your dimmer switch is compatible with LED technology.",
    },
    {
      q: 'Can I use indoor lights for outdoor purposes?',
      a: "No. Outdoor lights must have weatherproof ratings (like IP65) to protect against dust, rain, and moisture. Always choose lights designed for outdoor use.",
    },
  ];

const Lighting = ()=> {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div>
     <div className="w-full">
  <img 
    src="https://orientelectric.com/cdn/shop/files/3200x1000_catagory_page.jpg?v=1727681658&width=2000"
    alt="Category Banner"
    className="w-full h-48 sm:h-64 md:h-80 lg:h-[550px] object-fill"
  />
</div>

       <div className="flex flex-col items-center py-16 px-4 md:px-10 bg-[#f8f4ee]">
  <h2 className="text-center text-3xl mb-8 font-semibold font-Radley">
    Trending Categories
  </h2>

  <div className="w-full max-w-6xl px-2 sm:px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
      {Categories.map((category, index) => (
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
     <div className="bg-[#f8f4ee] pb-20">
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-center text-3xl sm:text-4xl font-semibold font-serif mb-8">
      Explore our latest innovations
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="w-full sm:w-[300px] h-[250px] sm:h-[400px] border rounded-md overflow-hidden"
        >
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


<section className="relative py-12 bg-[#f8f4ee] overflow-hidden ">
  {/* Background image */}
  <div className="absolute inset-0">
    <img 
      src="https://img.freepik.com/premium-photo/empty-room-with-brick-wall-wooden-floor-modern-ceiling-lamp-interior-loft-style-3d-rendering_1421-4280.jpg?w=740" 
      className="w-full h-full object-cover " 
      alt="Background" 
    />
  </div>

  {/* Content wrapper */}
  <div className="relative z-10 pt-20">
    <h2 className="text-center text-4xl font-bold mt-16 text-white  mb-2">
      Explore Our Range
    </h2>
    <p className='text-center text-lg text-white font-serif'>Set the perfect ambience for every occasion with innovative Lighting Solutions</p>

    <div className="relative px-4 md:px-32 mt-8">
      <div className="flex justify-between items-center mb-4">
        <button
          ref={prevRef}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-4 md:left-16 top-[200px] hover:text-black transition"
        >
          <ChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute right-4 md:right-16 top-[200px] hover:text-black transition"
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
          1024: { slidesPerView: 4 },
        }}
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
  </div>
</section>

    <div className='flex  flex-col justify-center items-center w-full bg-[#f8f4ee] pt-20'>
      <h2 className="text-center text-4xl font-bold  font-serif  mb-2">
      Brighter spaces, better living
    </h2>
    <p className='text-center text-lg  flex flex-col font-serif pb-14'>Bring to light your home’s true essence with downlights, wall lights, smart lights, and more.</p>
                <img src='https://orientelectric.com/cdn/shop/files/Screenshot_2024-09-09_6.47.43_PM_04fb9569-6836-4121-9c6a-c2daee1532a2.png?v=1728022684' alt='bn-image'/>
                <Button className=' flex w-[250px]  mt-6 '>View Unique Designing Lights</Button>
              </div>




<div className="w-full py-5 bg-[#f8f4ee] pt-14">
      <h2 className="text-4xl flex flex-col justify-center font-serif font-semibold text-center mb-2">
       Lighting up spaces, enhancing your everyday life
      </h2>
      <p className='text-center text-lg  flex flex-col font-serif pb-8'>Specially curated lights for your contemporary interiors</p>


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
                <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover  inset-0 z-0'
        >
          <source src={product.video} type="video/mp4" className='object-contain' />
          Your browser does not support the video tag.
        </video>
              </div>
              <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800">
                {product.title}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>


<section className="relative py-12 bg-[#f8f4ee] overflow-hidden ">
  {/* Background image */}
  <div className="absolute inset-0">
    <img 
      src="https://img.freepik.com/premium-photo/empty-room-with-brick-wall-wooden-floor-modern-ceiling-lamp-interior-loft-style-3d-rendering_1421-4280.jpg?w=740" 
      className="w-full h-full object-cover " 
      alt="Background" 
    />
  </div>

  {/* Content wrapper */}
  <div className="relative z-10 pt-20">
    <h2 className="text-center text-4xl font-bold mt-16 text-white  mb-2">
      Explore Our Festive Lighting
    </h2>
    <p className='text-center text-lg text-white font-serif'>Set the perfect ambience for every occasion with innovative Lighting Solutions</p>

    <div className="relative px-4 md:px-32 mt-8">
      <div className="flex justify-between items-center mb-4">
        <button
          ref={prevRef}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute left-4 md:left-16 top-[200px] hover:text-black transition"
        >
          <ChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 absolute right-4 md:right-16 top-[200px] hover:text-black transition"
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
          1024: { slidesPerView: 4 },
        }}
      >
        {Festive.map((product, index) => (
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
  </div>
</section>



<div className="bg-[#f8f4ee] py-20 px-4 sm:px-10 md:px-20 lg:px-32">
  <div className="w-full bg-black overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-52 sm:h-64 md:h-80 lg:h-[400px] object-cover px-0 sm:px-8 md:px-12 lg:px-24"
    >
      <source
        src="https://cdn.shopify.com/videos/c/o/v/77a7ef53da994745b74b8f804f94a775.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div className='w-full bg-[#f8f4ee]  pb-8 pl-16 pr-16'>
      <hr className='w-full  '></hr>
      </div>

    <div className="px-4 sm:px-10 md:px-20 lg:px-40 bg-[#f8f4ee] relative">
      <h2 className="text-3xl text-center font-semibold mb-10">Lighting Related Blogs</h2>
    
      {/* Left Button */}
      <div className="hidden md:block absolute top-1/2 left-4 md:left-10 lg:left-24 z-10 -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft />
        </button>
      </div>
    
      {/* Right Button */}
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



          <section className="flex flex-col lg:flex-row justify-center items-center bg-[#f8f4ee] w-full px-4 md:px-10 lg:px-20 py-10">
            {/* FAQ Section */}
            <div className="w-full lg:w-3/4 xl:w-3/5 py-8 lg:py-16">
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
          
            {/* Follow Us Section */}
            <div className="w-full lg:w-1/4 flex flex-col items-center mt-8 lg:mt-0">
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

export default Lighting;