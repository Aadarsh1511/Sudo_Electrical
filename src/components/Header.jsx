import React, { useState } from 'react';
import { Search, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
     {/* Top Bar */}
{/* Top Bar */}
<div className="bg-[#f8f4ee] text-sm py-2 px-4">
  <div className="flex flex-row  md:flex-row md:items-center md:justify-between w-full gap-12 md:gap-0 relative">
    
    {/* Left: Email & Phone (always visible, smaller on mobile) */}
    <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-xs md:text-sm">
      <p className="flex items-center gap-1 font-semibold whitespace-nowrap">📩 innomindrajasthan@gmail.com</p>
      <p className="flex items-center gap-1 font-semibold whitespace-nowrap">📞 +91 9509002899</p>
    </div>

    {/* Center: Marquee (visible on md and up) */}
    <div className="flex-1 overflow-hidden mx-4 hidden md:block">
      <marquee behavior="scroll" direction="left" className="text-[13px] font-semibold whitespace-nowrap">
        <span className="mr-20">Smart, Silent and Stylish Fans are here. Click here to know more 🡢</span>
        <span>Unique color fans for your ceilings. Explore now ! 🡢</span>
      </marquee>
    </div>

    {/* Right: Chat With Us */}
    <div className="flex items-center gap-2 font-medium text-[#333] text-xs md:text-sm pt-1 md:pt-0">
      <img src="public/images/Whatsapp_37229.ico" alt="WhatsApp" className="w-5 h-5" />
      <span>Chat With Us</span>
    </div>
  </div>
</div>




      {/* Main Header */}
      <div className="flex items-center justify-between py-4 px-4 md:px-6 shadow flex-wrap">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src="https://www.innomind.com.tr/wp-content/uploads/2024/10/innologodolulucurve.png" alt="Logo" className="h-6" />
          <p className="font-bold text-[#f05a28] text-xs sm:text-sm">INNOMIND SOLUTIONS</p>
          <p className="font-semibold text-xs sm:text-sm">INLIGHTNING INNOVATIONS</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('/products')}
            onMouseLeave={() => setOpenMenu('')}
          >
            <h1 className="cursor-pointer">Products</h1>
            {openMenu === '/products' && (
              <div className="absolute left-0 top-full bg-white shadow-lg p-6 w-[600px] grid grid-cols-2 gap-4 z-50 rounded">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/ceiling-fans-orient-electric_65d437d9-1e23-435d-9ded-79bc26f9c367_small.png?v=1707285876" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/fans">Fans</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/led-bulbs-orient-electric_c545944d-abc0-4579-a0a5-a00d38057d5e_small.png?v=1707285880" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/lighting">Lightings</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/desert-coolers-orient-electric_eadb04d2-7fe0-4e77-9ed0-2e5ebc6f155f_small.png?v=1707285876" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/aircooler">Air Coolers</Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/mixer-grinder-orient-electric_27089bbc-c518-45f1-8f6c-bfb3d12a0420_small.png?v=1707285880" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/smallappliances">Small Appliances</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/storage-water-heaters-orient-electric_small.png?v=1733464460" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/waterheaters">Water Heaters</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/extension-boards-orient-electric_09994d6e-de87-49d7-84eb-6bb84e3c8a3c_small.png?v=1707285876" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/switchgears">Switchgears</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-orange-600">About Us</Link>
          <Link to="/services" className="hover:text-orange-600">Services</Link>
          <Link to="/projects" className="hover:text-orange-600">Projects</Link>
          <Link to="/blogs" className="hover:text-orange-600">Blogs</Link>
          <Link to="/careers" className="hover:text-orange-600">Careers</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="relative ml-48  md:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-3 py-1 text-sm w-40 md:w-auto"
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>

        {/* Mobile Menu Navigation */}
        {mobileMenuOpen && (
  <div className="w-full md:hidden mt-4 space-y-2 text-sm font-medium">

    <Link to="/" className="block">Home</Link>

    {/* PRODUCTS DROPDOWN */}
    <div>
      <button
        onClick={() => setProductsOpen(!mobileMenuOpen)}
        className="flex justify-between items-center w-full"
      >
        <span>Products</span>
        <span>{mobileMenuOpen ? "▲" : "▼"}</span>
      </button>

      {mobileMenuOpen && (
        <div className="ml-4 mt-2 space-y-1">
          <Link to="/fans" className="block">Fans</Link>
          <Link to="/lighting" className="block">Lighting</Link>
          <Link to="/aircooler" className="block">Air Coolers</Link>
          <Link to="/smallappliances" className="block">Small Appliances</Link>
          <Link to="/waterheaters" className="block">Water Heaters</Link>
          <Link to="/switchgears" className="block">Switchgears</Link>
        </div>
      )}
    </div>

    {/* Other Links */}
    <Link to="/about" className="block">About Us</Link>
    <Link to="/services" className="block">Services</Link>
    <Link to="/projects" className="block">Projects</Link>
    <Link to="/blogs" className="block">Blogs</Link>
    <Link to="/careers" className="block">Careers</Link>
    <Link to="/contact" className="block">Contact</Link>
  </div>
)}
      </div>
    </div>
  );
};

export default Header;
