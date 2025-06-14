import React, { useState } from 'react';
import { Search, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#f8f4ee] text-sm py-2 px-4">
        <div className="flex flex-row md:flex-row md:items-center md:justify-between justify-evenly w-full gap-10 md:gap-0 relative">
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-xs md:text-sm">
            <p className="flex items-center gap-1 font-semibold font-serif whitespace-nowrap">📩 innomindrajasthan@gmail.com</p>
            <p className="flex items-center gap-1 font-semibold font-serif whitespace-nowrap">📞 +91 9509002899</p>
          </div>
          <div className="flex-1 overflow-hidden mx-4 hidden md:block">
            <marquee behavior="scroll" direction="left" className="text-[13px] font-semibold font-serif whitespace-nowrap">
              <span className="mr-20">Smart, Silent and Stylish Fans are here. Click here to know more 🡢</span>
              <span>Unique color fans for your ceilings. Explore now ! 🡢</span>
            </marquee>
          </div>
          <div className="flex font-serif font-semibold text-[#333] text-xs md:text-sm pt-1 md:pt-0">
            <img src="public/images/Whatsapp_37229.ico" alt="WhatsApp" className="w-5 h-5" />
            <span>Chat With Us</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between py-4 px-4 md:px-6 shadow flex-wrap">
        <div className="flex flex-col items-center">
          <img src="https://www.innomind.com.tr/wp-content/uploads/2024/10/innologodolulucurve.png" alt="Logo" className="h-6" />
          <p className="font-bold text-[#f05a28] text-xs sm:text-sm font-serif">INNOMIND SOLUTIONS</p>
          <p className="font-semibold text-xs sm:text-sm font-serif">INLIGHTNING INNOVATIONS</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-orange-600 font-serif font-semibold">Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
          >
            <h1 className="cursor-pointer hover:text-orange-600 font-serif font-semibold">Products</h1>
            {desktopProductsOpen && (
              <div className="absolute left-0 top-full bg-white shadow-lg p-6 w-[600px] grid grid-cols-2 gap-4 z-50 rounded">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/ceiling-fans-orient-electric_65d437d9-1e23-435d-9ded-79bc26f9c367_small.png?v=1707285876" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/fans" className='font-serif font-semibold hover:text-orange-600'>Fans</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/led-bulbs-orient-electric_c545944d-abc0-4579-a0a5-a00d38057d5e_small.png?v=1707285880" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/lighting" className='font-serif font-semibold hover:text-orange-600'>Lightings</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/desert-coolers-orient-electric_eadb04d2-7fe0-4e77-9ed0-2e5ebc6f155f_small.png?v=1707285876" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/aircooler" className='font-serif font-semibold hover:text-orange-600'>Air Coolers</Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/mixer-grinder-orient-electric_27089bbc-c518-45f1-8f6c-bfb3d12a0420_small.png?v=1707285880" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/smallappliances" className='font-serif font-semibold hover:text-orange-600'>Small Appliances</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/storage-water-heaters-orient-electric_small.png?v=1733464460" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/waterheaters" className='font-serif font-semibold hover:text-orange-600'>Water Heaters</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="https://orientelectric.com/cdn/shop/collections/extension-boards-orient-electric_09994d6e-de87-49d7-84eb-6bb84e3c8a3c_small.png?v=1707285876" className="w-8 h-8 rounded-full object-contain" />
                    <Link to="/switchgears" className='font-serif font-semibold hover:text-orange-600'>Switchgears</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-orange-600 font-serif font-semibold">About Us</Link>
          <Link to="/services" className="hover:text-orange-600 font-serif font-semibold">Services</Link>
          <Link to="/projects" className="hover:text-orange-600 font-serif font-semibold">Projects</Link>
          <Link to="/blogs" className="hover:text-orange-600 font-serif font-semibold">Blogs</Link>
          <Link to="/careers" className="hover:text-orange-600 font-serif font-semibold">Careers</Link>
          <Link to="/contact" className="hover:text-orange-600 font-serif font-semibold">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="relative mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-3 py-1 text-sm w-40 md:w-auto"
          />
          <Search className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="w-full md:hidden mt-4 space-y-2 text-sm font-medium">
          <Link to="/" className="block">Home</Link>
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Products</span>
              <span>{productsOpen ? "▲" : "▼"}</span>
            </button>
            {productsOpen && (
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
          <Link to="/about" className="block">About Us</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/projects" className="block">Projects</Link>
          <Link to="/blogs" className="block">Blogs</Link>
          <Link to="/careers" className="block">Careers</Link>
          <Link to="/contact" className="block">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
