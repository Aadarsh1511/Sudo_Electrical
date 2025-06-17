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
    src: 'public/videos/Fan_video1.mp4',
  },
  {
    id: 2,
    src: 'public/videos/Fan_video2.mp4',
  },
  {
    id: 3,
    src: 'public/videos/Fan_video3.mp4',
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


const Popular = [
  {
    title: "Tornado-II 450mm Pedestal Fan Black",
    rating: 4.5,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 4049,
    mrp: 6185,
    discount: "35% OFF",
    image: "https://orientelectric.com/cdn/shop/files/TornadoWallII_2.png?v=1742980344&width=990"
  },
  {
    title: "Aeroslim IoT Remote Fan with Light 1200mm White",
    rating: 4.5,
    reviews: 5,
    size: ["1200MM"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 11399,
    mrp: 17000,
    discount: "33% OFF",
    label: "Free Intallation",
    image: "https://orientelectric.com/cdn/shop/files/Aeroslim.png?v=1728966813&width=990"
  },
  {
    title: "EcoTech Prime BLDC Ceiling Fan Brown",
    rating: 4.4,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 3149,
    mrp: 4600,
    discount: "32% OFF",
    image: "https://orientelectric.com/cdn/shop/files/ZenoBLDC.png?v=1728969115&width=990"
  },
  {
    title: "Wendy Stylish Ceiling Fan 900mm Azure Blue Silver",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM", "900MM", "1400MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 3619,
    mrp: 5265,
    discount: "31% OFF",
    image: "https://orientelectric.com/cdn/shop/files/Image0_8ae663c7-480c-4281-8ad0-714c55c5b98d.png?v=1728967597&width=990"
  },
  {
    title: "Mozart Nature Designer Ceiling Fan Floral Black",
    rating: 5.0,
    reviews: 5,
    size: ["1200MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4179,
    mrp: 7000,
    discount: "40% OFF",
    image: "https://orientelectric.com/cdn/shop/files/Image0_498a60ba-97df-4681-8d2a-3f873e283b57.png?v=1728969359&width=990"
  },
];

const Best_seller = [
  {
    title: "EcoTech Supreme 1200mm Energy Efficient BLDC Ceiling Fan Remote Brown",
    rating: 4.2,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6", "#E5E5E5"],
    price: 3509,
    mrp: 5235,
    discount: "33% OFF",
    image: "https://orientelectric.com/cdn/shop/files/Brown_488aebc9-6e5d-46df-ad77-99a72a5dcc6b.png?v=1728968413&width=990"
  },
  {
    title: "Wendy BLDC Remote Ceiling Fan Azure Blue Silver",
    rating: 4.5,
    reviews: 5,
    size: ["1200MM"],
    color: ["#DCDCDC", "#B06F3E", "#A49A91", "#999999"],
    price: 11399,
    mrp: 17000,
    discount: "33% OFF",
    label: "Free Intallation",
    image: "https://orientelectric.com/cdn/shop/files/AzureBlue_fb3092f5-bfd9-4546-a549-39760f10a74e.png?v=1728967988&width=990"
  },
  {
    title: "Aeroquiet BLDC Noiseless Ceiling Fan 1200mm Caramel Brown",
    rating: 4.4,
    reviews: 5,
    size: ["1200MM"],
    color: ["#8B8B8B", "#D3CFC9", "#C6C6C6"],
    price: 3149,
    mrp: 4600,
    discount: "32% OFF",
    image: "https://orientelectric.com/cdn/shop/files/CaramelBrown.png?v=1728967444&width=990"
  },
  {
    title: "Hector 500 BLDC Ceiling Fan 1200mm Brown",
    rating: 4.8,
    reviews: 5,
    size: ["1200MM", "900MM", "1400MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 3619,
    mrp: 5265,
    discount: "31% OFF",
    image: "https://orientelectric.com/cdn/shop/files/Brown.png?v=1728967310&width=990"
  },
  {
    title: "Mozart Nature Designer Ceiling Fan Floral Black",
    rating: 5.0,
    reviews: 5,
    size: ["1200MM"],
    color: ["#F8F8F8", "#E6E6E6", "#D9D9D9", "#C0C0C0", "#4A4A4A", "#000000"],
    price: 4179,
    mrp: 7000,
    discount: "40% OFF",
    image: "https://orientelectric.com/cdn/shop/files/Image0_498a60ba-97df-4681-8d2a-3f873e283b57.png?v=1728969359&width=990"
  },
];



const Categories = [
  { name: "Ceiling Fans", image: "https://orientelectric.com/cdn/shop/files/Image0_17282fee-8829-42da-b9f7-74a622a0f01b.png?v=1728970830&width=990" },
  { name: "Table Fans", image: "https://orientelectric.com/cdn/shop/files/table-27-trendz-400mm-high-speed-table-fan-orient-electric-1.png?v=1696835062&width=990" },
  { name: "Wall Fans", image: "https://orientelectric.com/cdn/shop/files/azureblue.png?v=1742962662&width=990" },
  { name: "Stand Fans", image: "https://cdn.shopify.com/s/files/1/0568/5166/0962/files/TornadoWallII_2_600x.png?v=1742980344" },
  { name: "Exhaust Fans", image: "https://cdn.shopify.com/s/files/1/0568/5166/0962/files/hill-air-exhaust-fan-orient-electric-1_600x.png?v=1696834859" },

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
const videoThumbnails = [
  'public/videos/Fan_video1.mp4',
  'public/videos/Fan_video2.mp4',
  'public/videos/Fan_video3.mp4',
  'public/videos/Fan_video1.mp4',
  'public/videos/Fan_video2.mp4',
  'public/videos/Fan_video3.mp4',
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



const Fans = () => {

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
    <div className='font-serif bg-[#f8f4ee]'>
      <div data-aos="fade-up">
        <img src='public/images/Fan_ban.webp' className='w-full h-48 sm:h-64 md:h-80 lg:h-[550px] object-fill' />
      </div>
      <div className="flex flex-col items-center py-16 px-4 md:px-10 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl mb-8 font-semibold font-Radley">
          Trending Category
        </h2>

        <div className="w-full max-w-6xl px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {Categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center" data-aos="zoom-in">
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

      <div className="bg-[#f8f4ee] py-10 px-4">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold font-Radley mb-8">
            Explore our latest innovations
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {videos.map((video) => (
              <div key={video.id} className="w-full max-w-[300px] aspect-[3/4] border rounded-md overflow-hidden">
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



      <section className="py-12 bg-[#f8f4ee]" data-aos="fade-up">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Featured Products
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
          <Button className="px-6 py-2" data-aos="fade-up" >View all</Button>
        </div>

      </section>

      <div className='flex  flex-col justify-center items-center w-full' data-aos="fade-up">
        <img src='https://orientelectric.com/cdn/shop/files/Colors_9752c826-0e69-48be-8420-73f76aab3354.jpg?v=1747914033&width=2000' alt='bn-image' />
        <Button className=' flex w-[250px]  mt-8 ' data-aos="fade-up">View Unique Colour Fans</Button>
      </div>


      <div className="px-4 sm:px-10 md:px-32 py-10 bg-[#f8f4ee]" data-aos="fade-up">
        <div className="w-full bg-black overflow-hidden rounded-md">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/d0f998d241764fb48c41e722dacf7913.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
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
            {Best_seller.map((product, index) => (
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
        <h2 className="text-3xl text-center font-semibold mb-10">Fans Related Blogs</h2>


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
              <details key={i} className="border rounded-md p- 4 bg-white shadow-lg">
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

export default Fans;