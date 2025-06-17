import React, {useRef,useState,useEffect} from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';


const products2 = [
  {
    title: "Ultimo Desert Air Cooler 50L",
    rating: 4.9,
    reviews: 5,
    size: ["50L","65L","88L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 9290,
    mrp: 16990,
    discount: "45% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/50.png?v=1742984515&width=990"
  },
  {
    title: "Optimo Desert Air Cooler for Home 95L",
    rating: 4.8,
    reviews: 5,
    size: ["95L"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 10490,
    mrp: 18990,
    discount: "31% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/Optimo_Desert_Cooler_Orient.png?v=1745221795&width=990"
  },
  {
    title: "Titan Desert Air Cooler with Honeycomb Pads 75L",
    rating: 4.8,
    reviews: 5,
    size: ["75L","100L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/titan-desert-air-cooler-with-honeycomb-pads-orient-electric-1.png?v=1696835062&width=990"
  },
  {
    title: "Tornado Desert Air Cooler 52L",
    rating: 4.8,
    reviews: 5,
    size: ["52L", "65L","88L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_b21af0d7-8406-4c15-ae81-54132f81d52d.png?v=1728969592&width=990"
  },
  {
    title: "Avante Desert Air Cooler with Honeycomb Pads 90L",
    rating: 4.8,
    reviews: 5,
    size: ["90L", "105L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_2776a36e-0cf3-4037-873a-e1cbe25eb2ee.png?v=1728970005&width=990"
  },
  {
    title: "Knight Desert Air Cooler with Honeycomb pads, Ice Chamber & Dust Filter 70L",
    rating: 4.8,
    reviews: 5,
    size: ["70L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image0_56ed17c7-3674-4cfd-a407-914e4864f675.png?v=1728967828&width=990"
  }
];


const Lowest = [
  {
    title: "Aerocool Portable Air Cooler for Home 40L",
    rating: 4.9,
    reviews: 5,
    size: ["50L","65L","88L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 9290,
    mrp: 16990,
    discount: "45% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/Aerocool40L.png?v=1739426936&width=990"
  },
  {
    title: "Smartcool Dx Room Personal Air Cooler 24L",
    rating: 4.8,
    reviews: 5,
    size: ["95L"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 10490,
    mrp: 18990,
    discount: "31% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/smartcool-dx-roompersonal-air-cooler-orient-electric-1.png?v=1696835049&width=990"
  },
  {
    title: "Ultimo Tower Air Cooler With Remote 26L",
    rating: 4.8,
    reviews: 5,
    size: ["75L","100L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/image1_61100051-09ec-43d9-a14a-88b55068abfe.png?v=1728967662&width=990"
  },
  {
    title: "Ultimo Desert Air Cooler 50L",
    rating: 4.8,
    reviews: 5,
    size: ["52L", "65L","88L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/50.png?v=1742984515&width=990"
  },
  {
    title: "Knight Plus Desert Air Cooler 70L",
    rating: 4.8,
    reviews: 5,
    size: ["90L", "105L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/knight-plus-desert-air-cooler-with-ice-chamber-dust-filter-and-high-air-delivery-orient-electric-1.png?v=1696835049&width=990"
  },
  {
    title: "Knight Desert Air Cooler with Honeycomb pads, Ice Chamber & Dust Filter 70L",
    rating: 4.8,
    reviews: 5,
    size: ["70L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image0_56ed17c7-3674-4cfd-a407-914e4864f675.png?v=1728967828&width=990"
  }
];

const Popular = [
  {
    title: "Smartcool Dx Room Personal Air Cooler 24L",
    rating: 4.9,
    reviews: 5,
    size: ["50L","65L","88L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 9290,
    mrp: 16990,
    discount: "45% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/smartcool-dx-roompersonal-air-cooler-orient-electric-1.png?v=1696835049&width=990"
  },
  {
    title: "Avante Desert Air Cooler with Honeycomb Pads 90L",
    rating: 4.8,
    reviews: 5,
    size: ["95L"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 10490,
    mrp: 18990,
    discount: "31% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/image1_2776a36e-0cf3-4037-873a-e1cbe25eb2ee.png?v=1728970005&width=990"
  },
  {
    title: "Ocean Air Desert Cooler with Honeycomb Pads 70L",
    rating: 4.8,
    reviews: 5,
    size: ["75L","100L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/image0_718ff5d2-5cf0-4e75-a55c-921cb36a7c38.png?v=1728970047&width=990"
  },
  {
    title: "Tornado Desert Air Cooler 52L",
    rating: 4.8,
    reviews: 5,
    size: ["52L", "65L","88L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_b21af0d7-8406-4c15-ae81-54132f81d52d.png?v=1728969592&width=990"
  },
  {
    title: "Avante Desert Air Cooler with Honeycomb Pads 90L",
    rating: 4.8,
    reviews: 5,
    size: ["90L", "105L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_2776a36e-0cf3-4037-873a-e1cbe25eb2ee.png?v=1728970005&width=990"
  },
  {
    title: "Knight Desert Air Cooler with Honeycomb pads, Ice Chamber & Dust Filter 70L",
    rating: 4.8,
    reviews: 5,
    size: ["70L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image0_56ed17c7-3674-4cfd-a407-914e4864f675.png?v=1728967828&width=990"
  }
];


const Best = [


  {
    title: "Knight Desert Air Cooler with Honeycomb pads, Ice Chamber & Dust Filter 70L",
    rating: 4.8,
    reviews: 5,
    size: ["70L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image0_56ed17c7-3674-4cfd-a407-914e4864f675.png?v=1728967828&width=990"
  },
  
  {
    title: "Optimo Desert Air Cooler for Home 95L",
    rating: 4.8,
    reviews: 5,
    size: ["95L"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 10490,
    mrp: 18990,
    discount: "31% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/Optimo_Desert_Cooler_Orient.png?v=1745221795&width=990"
  },


  {
    title: "Ultimo Desert Air Cooler 50L",
    rating: 4.9,
    reviews: 5,
    size: ["50L","65L","88L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 9290,
    mrp: 16990,
    discount: "45% OFF",
    label: "Lowest Price",
    image: "https://orientelectric.com/cdn/shop/files/50.png?v=1742984515&width=990"
  },
  {
    title: "Titan Desert Air Cooler with Honeycomb Pads 75L",
    rating: 4.8,
    reviews: 5,
    size: ["75L","100L"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 8799,
    mrp: 13000,
    discount: "32% OFF",
    label: "Free Installation",
    image: "https://orientelectric.com/cdn/shop/files/titan-desert-air-cooler-with-honeycomb-pads-orient-electric-1.png?v=1696835062&width=990"
  },
  {
    title: "Tornado Desert Air Cooler 52L",
    rating: 4.8,
    reviews: 5,
    size: ["52L", "65L","88L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_b21af0d7-8406-4c15-ae81-54132f81d52d.png?v=1728969592&width=990"
  },
  {
    title: "Avante Desert Air Cooler with Honeycomb Pads 90L",
    rating: 4.8,
    reviews: 5,
    size: ["90L", "105L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_2776a36e-0cf3-4037-873a-e1cbe25eb2ee.png?v=1728970005&width=990"
  },
  {
    title: "Tornado Desert Air Cooler 52L",
    rating: 4.8,
    reviews: 5,
    size: ["52L", "65L","88L"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4589,
    mrp: 6500,
    discount: "29% OFF",
    image: "https://orientelectric.com/cdn/shop/files/image1_b21af0d7-8406-4c15-ae81-54132f81d52d.png?v=1728969592&width=990"
  },
];

const Categories=[
  { name:"Desert Coolers",image:"https://orientelectric.com/cdn/shop/files/50.png?v=1742984515&width=990"},
  { name:"Personal Coolers",image:"https://orientelectric.com/cdn/shop/files/smartcool-dx-roompersonal-air-cooler-orient-electric-1.png?v=1696835049&width=990"},
  { name:"Window Coolers",image:"https://orientelectric.com/cdn/shop/files/magicool-window-air-cooler-with-powerful-air-delivery-orient-electric-1.png?v=1696835049&width=990"},
  { name:"Tower Coolers",image:"https://orientelectric.com/cdn/shop/files/image1_61100051-09ec-43d9-a14a-88b55068abfe.png?v=1728967662&width=990"},
  { name:"Commercial Coolers",image:"https://orientelectric.com/cdn/shop/files/Stark110LCommercialCooler.png?v=1739524557&width=990"},
];


const T_Categories=[
  { name:"Desert Coolers",image:"https://orientelectric.com/cdn/shop/files/50.png?v=1742984515&width=990"},
  { name:"Personal Coolers",image:"https://orientelectric.com/cdn/shop/files/smartcool-dx-roompersonal-air-cooler-orient-electric-1.png?v=1696835049&width=990"},
  { name:"Window Coolers",image:"https://orientelectric.com/cdn/shop/files/magicool-window-air-cooler-with-powerful-air-delivery-orient-electric-1.png?v=1696835049&width=990"},
  { name:"Tower Coolers",image:"https://orientelectric.com/cdn/shop/files/image1_61100051-09ec-43d9-a14a-88b55068abfe.png?v=1728967662&width=990"},
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
      q: 'Can I use an air cooler in a closed room?',
      a: "Air coolers work best in well-ventilated areas as they rely on fresh air. Using them in closed rooms may reduce their effectiveness, so it's recommended to have some degree of ventilation."
    },
    {
      q: 'Are air coolers suitable for humid climates?',
      a: "Air coolers are less effective in high humidity since they rely on evaporation. In humid conditions, the air is already saturated with moisture, limiting the cooling effect of the evaporation process.",
    },
    {
      q: 'Can I use tap water in my air cooler?',
      a: "It's recommended to use clean and filtered water to prevent mineral deposits in the cooler. If tap water is hard, using distilled or treated water can extend the life of the cooling pads.",
    },
    {
      q: 'How do I maintain and clean my air cooler?',
      a: "Regularly clean the cooling pads and water tank to prevent bacterial growth. Also, ensure proper ventilation and store the unit in a dry place when not in use to avoid mould and odours.",
    },
  ];

const AirCooler = ()=> {
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
  <img
    src="https://thomsonhome.in/wp-content/uploads/2023/03/Banner2.webp"
    alt="Banner"
    className="w-full h-48 sm:h-64 md:h-80 lg:h-[550px] object-fill"
  />
</div>

       <div className="flex flex-col items-center py-16 px-4 md:px-10 bg-[#f8f4ee]" data-aos="fade-up">
  <h2 className="text-center text-3xl mb-8 font-semibold font-Radley">
    Shop By Category
  </h2>

  <div className="w-full max-w-6xl px-2 sm:px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8" data-aos="zoom-in">
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

<section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Coolest Deals
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
        <Button className="px-6 py-2" data-aos="fade-up">View all</Button>
      </div>
    </section>
    <div className="flex flex-col justify-center bg-[#f8f4ee] items-center w-full" data-aos="fade-up">
  <img
    src="public/images/Cooler3 (1).jpg"
    alt="bn-image"
    className="w-full h-48 sm:h-64 md:h-80 lg:h-[600px] object-fill"
  />
  <Button className="flex w-48 sm:w-60 md:w-64 lg:w-[250px] mt-6 p-3 sm:p-4" data-aos="fade-up">
    View Unique Cooling Coolers
  </Button>
</div>



<section className="py-10 pt-24 bg-[#f8f4ee]" data-aos="fade-up">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Lowest Prices Ever
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
          {Lowest.map((product, index) => (
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
    </section>



<div className="px-4 sm:px-8 md:px-16 lg:px-32 pt-16 pb-20 bg-[#f8f4ee]" data-aos="fade-up">
  <div className="w-full bg-black overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-contain px-0 sm:px-12 md:px-24 lg:px-[100px]"
    >
      <source
        src="https://cdn.shopify.com/videos/c/o/v/0ef6b5d6d0034109b95d6748466c6f49.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


<section className="py-8 bg-[#f8f4ee]" data-aos="fade-up">
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
          {Popular.map((product, index) => (
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
  <h2 className="text-center text-3xl mb-8 font-semibold font-Radley">
    Trending Categories
  </h2>

  <div className="w-full max-w-6xl px-2 sm:px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8" data-aos="zoom-in">
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
          {Best.map((product, index) => (
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
         <h2 className="text-3xl text-center font-semibold mb-10">Air Cooler Related Blogs</h2>
       
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


<section className="flex flex-col lg:flex-row justify-center items-center bg-[#f8f4ee] w-full px-4 md:px-10 lg:px-20 py-10" data-aos="fade-up">
  {/* FAQ Section */}
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

  {/* Follow Us Section */}
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

export default AirCooler;