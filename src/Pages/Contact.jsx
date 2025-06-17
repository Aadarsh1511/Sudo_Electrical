import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaTwitter, FaInstagram, FaFacebookF, FaTumblr, FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className='pb-10 bg-[#f8f4ee]'>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f8f4ee] pb-5 pt-10" data-aos="fade-up">
        <div className="bg-gray-900 rounded-t-lg md:rounded-l-lg md:rounded-tr-none w-full md:w-[600px] h-auto md:h-[120px] pl-6 py-6 md:py-0 flex flex-col justify-center ml-0 md:ml-40">
          <h1 className="font-semibold text-2xl text-white font-serif">Online Service Complaint</h1>
          <p className="text-white font-serif">
            Register an online complaint and someone from our team will get back to you
          </p>
        </div>
        <div className="bg-gray-900 rounded-b-lg md:rounded-r-lg md:rounded-bl-none w-full md:w-[600px] gap-4 flex flex-col md:flex-row items-center justify-center md:justify-end pr-0 md:pr-6 pt-3 md:pt-0 py-4">
          <Button className="border border-white text-[17px] w-3/4 md:w-auto font-serif">Track Complaint</Button>
          <Button className="border border-white text-[17px] w-3/4 md:w-auto font-serif">Register Complaint</Button>
        </div>
      </div>


      <div className="bg-gray-900 rounded-md text-white px-4 sm:px-6 md:px-20 py-10 md:py-14 mx-4 md:mx-40" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-2 font-serif">Get in Touch</h2>
        <p className="text-center mb-8 md:mb-10 text-gray-300 font-serif">
          Have a query? Feel free to drop us a line and we’ll reach out to you immediately!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[280px] md:w-[480px] h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <video
                src="public/videos/video_1.mp4"
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex justify-center">
              <img src="https://www.matthews.com.au/upload/images/QR(1).jpg" alt="Scan QR" className="w-24 h-24 md:w-28 md:h-28 rounded" />
            </div>
            <p className="text-center font-serif text-sm px-2">
              <strong>Scan QR Code</strong> or{' '}
              <a href="#" className="text-orange-400 font-serif underline">
                Click here
              </a>{' '}
              to connect with an agent on WhatsApp
            </p>
            <div className="flex flex-col gap-3 text-sm text-center font-serif md:text-left">
              <div className="flex items-center justify-center font-serif md:justify-start gap-2">
                <Phone size={16} />
                <span>+91 9509002899</span>
              </div>
              <div className="flex items-center justify-center md:justify-start font-serif gap-2">
                <Mail size={16} />
                <span>innomindrajasthan@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 font-serif">
                <MapPin size={16} />
                <span>
                  M-12, Madhuban Colony, Tonk Phatak, Jaipur- 302015
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 font-serif">
                <Mail size={16} />
                <span><strong>For Escalations:</strong> service.head@innomindsolutions.com</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4 text-lg text-white">
              <FaTwitter className="hover:text-sky-500" />
              <FaFacebookF className="hover:text-blue-500" />
              <FaInstagram className="hover:text-pink-500" />
              <FaTumblr className="hover:text-indigo-500" />
              <FaYoutube className="hover:text-red-500" />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
export default Contact;
