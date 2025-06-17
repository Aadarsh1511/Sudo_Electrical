import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 font-serif text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Get in Touch
          </h2>
          <div className="w-14 h-[2px] bg-red-500 mb-4" />
          <p className="text-sm text-gray-300 mb-1 font-semibold">Corporate Address</p>
          <p className="mb-1 font-semibold">Innomind Innovations</p>
          <p className="text-gray-300 text-sm">
            M-12, Madhuban Colony, Tonk Phatak <br />
            Jaipur- 302015
          </p>
          <button className="mt-6 border px-6 py-2 rounded hover:bg-white hover:text-black transition">Contact Us</button>
        </div>


        <div>
          <div className="mb-6">
            <p className="text-sm text-gray-300 mb-1 font-semibold">For Business Orders</p>
            <p className="flex items-center text-sm gap-2"><FaPhoneAlt /> +91 9509002899</p>
            <p className="flex items-center text-sm gap-2"><FaEnvelope /> <span>innomindrajasthan@gmail.com</span></p>
          </div>
          <div>
            <p className="text-sm text-gray-300 mb-1 font-semibold">For International Sales</p>
            <p className="flex items-center text-sm gap-2"><FaEnvelope /> <span>innomindrajasthan@gmail.com</span></p>
          </div>
          <button className="mt-6 border px-6 py-2 rounded hover:bg-white hover:text-black transition">Corporate Enquiry</button>
        </div>


        <div>
          <div className="mb-6">
            <p className="text-sm text-gray-300 mb-1 font-semibold">For Consumer Complaints, Contact :</p>
            <p className="text-sm text-gray-300 mb-1">Customer Service Executive</p>
            <p className="flex items-center text-sm gap-2"><FaPhoneAlt /> +91 9509002899</p>
            <p className="flex items-center text-sm gap-2"><FaEnvelope /> innomindrajasthan@gmail.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-300 mb-1 font-semibold">For Escalations:</p>
            <p className="flex items-center text-sm gap-2"><FaEnvelope /> innomindrajasthan@gmail.com</p>
          </div>
          <div className="w-36 h-[2px] bg-red-500 my-4" />
          <p className="text-sm font-semibold mb-2">FOLLOW US</p>
          <div className="flex gap-4 text-lg">
            <FaTwitter className='hover:text-sky-500' />
            <FaFacebookF className='hover:text-blue-500' />
            <FaInstagram className='hover:text-pink-500' />
            <FaWhatsapp className='hover:text-green-500' />
            <FaLinkedinIn className='hover:text-blue-500' />
            <FaYoutube className='hover:text-red-500' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;