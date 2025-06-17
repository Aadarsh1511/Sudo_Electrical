import React, { useRef, useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/Card";
import { Play, ChevronLeft, ChevronRight, User, ShoppingBag, Search } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const images2 = [
  "https://cdn.pixabay.com/photo/2015/03/03/18/39/vacuum-cleaner-657719_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/07/27/17/29/ironing-403074_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/07/20/15/17/washing-machine-5423359_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/05/15/19/51/fans-7995865_1280.jpg",
];
const images3 = [
  "https://cdn.pixabay.com/photo/2016/10/27/22/08/cooking-1776648_1280.jpg",
  "https://plus.unsplash.com/premium_photo-1719452894874-3da9fa3b882c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1568392816241-44d223d4d490?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719639946820-40dce8ae4d30?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const Categories = [
  { name: "Fan", image: "https://purepng.com/public/uploads/large/purepng.com-black-ceiling-fanelectronics-ceiling-fan-fan-94152466621394pdh.png" },
  { name: "Lighting", image: "https://www.pngmart.com/files/15/Electric-Bulb-PNG-Image.png" },
  { name: "Air Coolers", image: "https://symphonylimited.com/wp-content/uploads/2023/10/WB1-300x300.jpg" },
  { name: "Small Appliances", image: "https://th.bing.com/th/id/R.3e5c95112cc3432ba375fce12d085a23?rik=zVMOQ5N7XR6Rjw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fMixer-Grinder-PNG-Photos.png&ehk=0fFkUWe0U1x%2fvEXZaORXvxAb%2fVyI6%2b1lczuDLAL5CzE%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Water Heaters", image: "https://th.bing.com/th/id/OIP.3cMdnIWdS5dbSapbslV5sAHaRF?rs=1&pid=ImgDetMain" },
  { name: "Switchgears", image: "https://www.elleys.group/assets/switchgearPage/Main.png" },
];
const products = [
  {
    video: 'public/videos/lighting.mp4',
    title: 'Explore Lighting Products',
  },
  {
    video: 'public/videos/lamp2.mp4',
    title: 'Explore Table Lamps',
  },
  {
    video: 'public/videos/AC.mp4',
    title: 'Explore Cooling Air-Conditioner ',
  },
  {
    video: 'public/videos/coffee_mac.mp4',
    title: 'Explore Coffee Machines',
  },
  {
    video: 'public/videos/washing_mac.mp4',
    title: 'Explore Washing Machine',
  },
  {
    video: 'public/videos/Fan.mp4',
    title: 'Explore BDLC Fans',
  },
  {
    video: 'public/videos/coffee_mac.mp4',
    title: 'Explore Lighting Products',
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
    image: "https://www.bajajelectricals.com/cdn/shop/files/Durato_Deco_Choco_Brown_1500x1500px.png?v=1745325217&width=1517"
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
    image: "https://www.bajajelectricals.com/cdn/shop/files/Regal_Gold_4_Blade_1500x1500px_6f6fea73-4bfc-44ca-8b9f-e355b0c63ca1.png?v=1745323921&width=1517"
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
    image: "https://www.bajajelectricals.com/cdn/shop/files/251754EENovella-Dust_SteelGrey_e041c58c-945b-4164-8035-605fb9e95a0e.jpg?v=1745325322&width=800"
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
    image: "https://www.bajajelectricals.com/cdn/shop/files/251747EENovella-ElegantBrown_67fa62be-6018-40df-bd7a-7bc5735430d2.jpg?v=1742663302&width=800"
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
    image: "https://www.bajajelectricals.com/cdn/shop/files/1_ac63a29e-fff4-4e01-8902-6d65acc46470.jpg?v=1749029205&width=1517"
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
    image: "https://www.bajajelectricals.com/cdn/shop/files/Hero_image_8fe17314-d34c-4fa6-a1ae-27f3c6dc043d.jpg?v=1748323364&width=1517"
  }
];
const summer = [
  {
    title: "Aerocool Portable Air Cooler for Home 40L",
    rating: 4.5,
    reviews: 5,
    size: ["40L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 6199,
    mrp: 10490,
    discount: "41% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/Aerocool40L.png?v=1739426936&width=990"
  },
  {
    title: "Smartcool Dx Room Personal Air Cooler 24L",
    rating: 4.9,
    reviews: 5,
    size: ["24L"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 5899,
    mrp: 8990,
    discount: "34% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/smartcool-dx-roompersonal-air-cooler-orient-electric-1.png?v=1696835049&width=990"
  },
  {
    title: "Ultimo Tower Air Cooler With Remote 26L",
    rating: 4.5,
    reviews: 5,
    size: ["26L", "40L", "55L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 10419,
    mrp: 13990,
    discount: "26% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_61100051-09ec-43d9-a14a-88b55068abfe.png?v=1728967662&width=990"
  },
  {
    title: "Ultimo Desert Air Cooler 50L",
    rating: 4.9,
    reviews: 5,
    size: ["50L", "65L", "88L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 9290,
    mrp: 16990,
    discount: "45% OFF",
    image: "https://orientelectric.com/cdn/shop/files/50.png?v=1742984515&width=990"
  },
  {
    title: "Knight Plus Desert Air Cooler 70L",
    rating: 5.0,
    reviews: 5,
    size: ["70L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 15500,
    mrp: 22490,
    discount: "31% OFF",
    image: "https://orientelectric.com/cdn/shop/files/knight-plus-desert-air-cooler-with-ice-chamber-dust-filter-and-high-air-delivery-orient-electric-1.png?v=1696835049&width=990"
  }
];


const limited = [
  {
    title: "Fabrijoy 1000W Non-Stick Dry Iron for Clothes",
    rating: 5.0,
    reviews: 5,
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 549,
    mrp: 1090,
    discount: "50% OFF",
    label: "New Arrival",
    image: "https://orientelectric.com/cdn/shop/files/file_Custom.png?v=1728972332&width=990"
  },
  {
    title: "Sizzle Infrared Cooktop | 2200 Watt Induction Cooktop | All Metal Cookware | 1 Year Warranty",
    rating: 5.0,
    reviews: 5,
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 3299,
    mrp: 6990,
    discount: "53% OFF",
    image: "https://orientelectric.com/cdn/shop/files/ICT_Sizzle_2.png?v=1728971826&width=990"
  },
  {
    title: "Emergency LED Bulb 15W Cool White",
    rating: 4.0,
    reviews: 5,
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/15W_Emergency_Bulb-Infographics.png?v=1719809618&width=990"
  },
  {
    title: "DELONGHI 9 Fin Oil Filled Radiator Room Heater with Fan (White, 2500Watts)",
    rating: 5.0,
    reviews: 5,
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 11990,
    mrp: 19790,
    discount: "39% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image41.png?v=1733296855&width=990"
  },
  {
    title: "Instahot 800W Portable Room Heater",
    rating: 4.6,
    reviews: 5,
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 1149,
    mrp: 2590,
    discount: "56% OFF",
    image: "https://orientelectric.com/cdn/shop/files/2_2.png?v=1733815446&width=990"
  },
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
    <div className="relative w-[200px] h-[170px] rounded overflow-hidden shadow-md flex-shrink-0 group">
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
    <div className="font-serif bg-[#f8f4ee]">
      <div className='bg-[#f8f4ee] flex flex-col md:flex-row w-full h-auto md:h-[500px] gap-4'>

        <div className='md:flex-[9] relative h-[300px] md:h-full w-full overflow-hidden ' data-aos="fade-right">

          <video
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-full object-cover absolute inset-0 z-0'
          >
            <source src="public/videos/front_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div className="absolute inset-0 flex md:items-center md:justify-start items-center justify-center md:pt-40 pt-0 pl-0 md:pl-6 text-center md:text-left z-20">
            <div className="text-white bg-black/40 backdrop-blur-sm p-4 mb-28 md:p-6 rounded-2xl shadow-xl max-w-xl">
              <h1 className='text-2xl md:text-4xl font-extrabold mb-2 leading-tight font-serif'>Welcome to My Site</h1>
              <p className='mb-4 text-sm md:text-lg font-serif'>Shop the latest collection</p>
              <button className='bg-green-600 hover:bg-green-700 font-serif transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full'>
                Explore Now
              </button>
            </div>
          </div>
        </div>

        <div className='hidden md:flex flex-[6] flex-col gap-4'>
          <div className='flex-1 relative overflow-hidden' data-aos="fade-left">
            <video
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-full object-cover absolute inset-0 z-0'
            >
              <source src="public/videos/front_video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className='flex-1 relative overflow-hidden' data-aos="fade-left">
            <video
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-full object-cover absolute inset-0 z-0'
            >
              <source src="public/videos/front_video4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 bg-[#f8f4ee]" data-aos="fade-up" >
        <h2 className="text-center text-2xl sm:text-3xl mb-6 md:mb-8 font-semibold font-serif">
          Show By Category
        </h2>

        <div className="w-full max-w-6xl px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8" data-aos="zoom-in">
            {Categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white shadow-lg  rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center overflow-hidden duration-300 hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                  />
                </div>
                <h1 className="pt-2 text-center text-sm sm:text-base font-serif font-bold text-gray-800 cursor-pointer">
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


      <div className="w-full py-5 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-3xl font-semibold font-serif text-center mb-10">
          Smart by Design, Thoughtful by Nature
        </h2>


        <div className="max-w-[1400px] mx-auto px-6 relative py-10" data-aos="fade-up">
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
                  <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-serif rounded-full font-semibold hover:bg-gray-800">
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

      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold font-serif mb-8">
          Our Latest Innovations
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
              el: '.custom-pagination-3',
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

                    <Button className="mt-3 w-full text-sm font-serif">Add to cart</Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination-3 mt-8 flex justify-center gap-2"></div>
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-2 font-serif" data-aos="fade-up">View all</Button>
        </div>
      </section>
      <div className='flex  flex-col justify-center items-center w-full' data-aos="fade-up">
        <img src='https://orientelectric.com/cdn/shop/files/Colors_9752c826-0e69-48be-8420-73f76aab3354.jpg?v=1747914033&width=2000' alt='bn-image' />
        <Button className=' flex w-[250px]  mb-8 mt-8  font-serif ' data-aos="fade-up">View Unique Colour Fans</Button>
      </div>


      <div className="bg-[#f8f4ee] py-24 px-4" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-10 max-w-6xl mx-auto">


          <div className="flex flex-col items-center text-center max-w-md" data-aos="fade-right">
            <p className="text-2xl sm:text-3xl font-semibold font-serif">Shopping Just</p>
            <p className="text-2xl sm:text-3xl font-semibold mb-4 font-serif">Got Personal</p>
            <p className="text-gray-700 text-sm sm:text-base font-serif">
              We’re here to help you discover products that perfectly match your needs.
              Simply click on product guide to get started.
            </p>
          </div>


          <div className="flex flex-wrap justify-center gap-8" data-aos="fade-left">

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
                <img
                  src="https://orientelectric.com/cdn/shop/files/Group_221701_small.png?v=1676269615"
                  alt="Fans Guide"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-serif">Fans<br />Guide</p>
            </div>


            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
                <img
                  src="https://orientelectric.com/cdn/shop/files/Group_221702_small.png?v=1676269810"
                  alt="Air Cooler Guide"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-serif">Air Cooler<br />Guide</p>
            </div>


            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
                <img
                  src="https://orientelectric.com/cdn/shop/files/Group_221703_small.png?v=1676269815"
                  alt="Lighting Guide"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-serif">Lighting<br />Guide</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#f8f4ee]  pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>
      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold font-serif mb-8">
          Summer Special Offerings
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
            {summer.map((product, index) => (
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

                    <Button className="mt-3 w-full text-sm font-serif">Add to cart</Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination-3 mt-8 flex justify-center gap-2"></div>
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-2 font-serif" data-aos="fade-up">View all</Button>
        </div>
      </section>
      <div className='w-full bg-[#f8f4ee]  pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>
      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold font-serif mb-8">
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
            {limited.map((product, index) => (
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

                    <Button className="mt-3 w-full text-sm font-serif">Add to cart</Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="custom-pagination-3 mt-8 flex justify-center gap-2"></div>
        <div className="mt-10 flex justify-center">
          <Button className="px-6 py-2 font-serif" data-aos="fade-up">View all</Button>
        </div>
      </section>
      <div className='w-full bg-[#f8f4ee]  pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>
      <div className="py-10 text-center bg-[#f8f4ee] " >
        <h2 className="text-4xl font-light mb-10 font-serif" data-aos="fade-up">A Promise of Excellence</h2>

        <div className="flex justify-center gap-32 flex-wrap" data-aos="fade-up">

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
              <img
                src="https://orientelectric.com/cdn/shop/files/65_years.svg?v=1687342854"
                alt="65 Years"
                className="w-32 h-32"
              />
            </div>
            <p className="text-gray-700 text-sm mt-2 font-serif">Expertise<br />of 65+ years</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
              <img
                src="https://orientelectric.com/cdn/shop/files/innovation.svg?v=1687342865"
                alt="Innovation"
                className="w-32 h-32"
              />
            </div>
            <p className="text-gray-700 text-sm mt-2 font-serif">Culture of<br />Innovation & Design</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
              <img
                src="https://orientelectric.com/cdn/shop/files/nationwide_impact.svg?v=1684999189"
                alt="Nationwide"
                className="w-32 h-32"
              />
            </div>
            <p className="text-gray-700 text-sm mt-2 font-serif">Nationwide<br />Presence</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
              <img
                src="https://orientelectric.com/cdn/shop/files/happy_customers.svg?v=1684999228"
                alt="Happy Customers"
                className="w-32 h-32"
              />
            </div>
            <p className="text-gray-700 text-sm mt-2 font-serif">20+ Crore<br />Happy Customers</p>
          </div>
        </div>
        <div className='w-full bg-[#f8f4ee] pt-16 pl-16 pr-16'>
          <hr className='w-full  '></hr>
        </div>
      </div>
      <section className="bg-[#f8f4ee] py-16">
        <h2 className="text-4xl text-center font-light mb-8 font-serif" data-aos="fade-up">
          Our Handpicked Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-40">
          <div data-aos="fade-right">
            <img
              src="https://www.myzeo.com/wp-content/uploads/2020/02/load-image-18-1-1536x1413.jpeg"
              alt="Brand kitchen appliances"
              loading="lazy"
              className="w-full h-72 object-fill rounded-lg"
            />
          </div>
          <div data-aos="fade-left">
            <img
              src="https://thumbs.dreamstime.com/b/seller-household-appliances-section-portrait-male-consultant-working-small-hypermarket-63661856.jpg"
              alt="Home appliances consultant"
              loading="lazy"
              className="w-full h-72 object-fill rounded-lg"
            />
          </div>
        </div>
        <hr className="mx-auto w-full border-t border-gray-300 mt-16" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-10  justify-center bg-[#f8f4ee] items-center gap-5 px-4 md:px-40">
        <div className="flex flex-col  items-center">
          <div className="flex flex-col h-[200px] justify-center  text-justify" data-aos="fade-right">
            <p className="text-3xl font-semibold font-serif">Looking to do</p>
            <p className="text-3xl font-semibold mb-3 font-serif">business with us?</p>
            <p className="w-[250px]  text-gray-700 font-serif">
              We’re happy to help you with your <span className="text-center font-serif">requirements.</span>
            </p>
            <Button className="w-[200px] mt-3 font-serif">Get in Touch</Button>
          </div>
        </div>
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src="https://img.freepik.com/premium-photo/manager-boss-worker-helping-new-employee-as-call-center-agent-training-consultant-work-planning-workflow-with-colleague-company-customer-service-team-conversation-with-coworker_590464-82374.jpg"
            className="w-[400px] h-[300px] rounded-lg object-cover"
            alt="Business consultation"
            loading="lazy"
          />
        </div>
      </div>

      <div className='w-full bg-[#f8f4ee] pt-16 pl-16 pr-16'>
        <hr className='w-full  '></hr>
      </div>
      <div className="pt-10 bg-[#f8f4ee] px-4 md:px-40 relative" data-aos="fade-up">
        <h2 className="text-3xl text-center font-semibold mb-10 font-serif">Blog</h2>


        <div className="absolute top-72 left-4 md:left-24 z-10 -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute top-72 right-4 md:right-[100px] z-10 -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
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
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className="w-full bg-[#f8f4ee] flex flex-col items-center px-4 py-10" >
          <FaFacebook className="text-4xl text-blue-500 mb-2" data-aos="fade-up" />
          <h2 className="text-4xl font-semibold text-center text-[#333] font-serif" data-aos="fade-up">Follow Us</h2>
          <h3 className="text-base text-gray-700 text-center mt-1 font-serif" data-aos="fade-up">@InnomindSolutions</h3>
          <h4 className="text-sm text-gray-600 text-center mb-6 font-serif" data-aos="fade-up">121k followers</h4>

          <div className="flex items-center gap-4 w-full max-w-[1100px]">
            <button
              onClick={prevSlide1}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
              data-aos="fade-up"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-4 overflow-hidden" data-aos="fade-up">
              {videoThumbnails
                .slice(currentIndex1, currentIndex1 + visibleCards)
                .map((src, index) => (
                  <VideoCard key={index} src={src} />
                ))}
            </div>

            <button
              onClick={nextSlide1}
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
              data-aos="fade-up"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="w-full bg-[#f8f4ee] flex flex-col items-center px-4 py-10" >
          <FaInstagram className="text-4xl text-pink-500 mb-2" data-aos="fade-up" />
          <h2 className="text-4xl font-semibold text-center text-[#333] font-serif" data-aos="fade-up">Follow Us</h2>
          <h3 className="text-base text-gray-700 text-center mt-1 font-serif" data-aos="fade-up">@InnomindSolutions</h3>
          <h4 className="text-sm text-gray-600 text-center mb-6 font-serif" data-aos="fade-up">180k followers</h4>

          <div className="flex items-center gap-4 w-full max-w-[1100px]">
            <button
              onClick={prevSlide2}
              data-aos="fade-up"
              className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-4 overflow-hidden" data-aos="fade-up">
              {videoThumbnails
                .slice(currentIndex2, currentIndex2 + visibleCards)
                .map((src, index) => (
                  <VideoCard key={index} src={src} className />
                ))}
            </div>

            <button
              onClick={nextSlide2}
              data-aos="fade-up"
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