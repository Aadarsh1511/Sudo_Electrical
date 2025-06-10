import React from 'react'
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaTwitter,FaInstagram, FaFacebookF, FaTumblr, FaYoutube } from 'react-icons/fa';
 const Contact=()=> {
  return (
    <div className='pb-10 bg-[#f8f4ee]'>
        <div className='grid grid-cols-2 bg-[#f8f4ee] pb-5 pt-10 '>
            <div className='ml-40 bg-gray-900 w-[600px] h-[120px] rounded-l-lg pl-6 flex flex-col justify-center'>
                <h1 className='font-semibold text-2xl text-white'>Online Service Complaint</h1>
                <p className='text-white'>Register an online complaint and someone from our team will get back to you</p>
            </div>
            <div className='pt-3 bg-gray-900 w-[600px] gap-4  flex items-center rounded-r-lg justify-end pr-6'>
                <Button className='border border-white text-[17px]'>Track Complaint</Button>
                <Button className='border border-white text-[17px]'>Register Complaint</Button> 
            </div>
        </div>
      
            <div className="bg-gray-900 ml-40 mr-40 rounded-md  text-white px-6 md:px-20 py-14 ">
      <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
      <p className="text-center mb-10 text-gray-300">
        Have a query? Feel free to drop us a line and we’ll reach out to you immediately!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-[280px] md:w-[480px] h-[400px] rounded-xl overflow-hidden shadow-lg">
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
        
        <div className="w-full  md:w-1/2 flex  flex-col gap-6">
          <div className="flex justify-center">
            <img src="https://www.matthews.com.au/upload/images/QR(1).jpg" alt="Scan QR" className="w-28 h-28 rounded" />
          </div>
          <p className="text-center text-sm">
            <strong>Scan QR Code</strong> or{' '}
            <a href="#" className="text-orange-400 underline">
              Click here
            </a>{' '}
            to connect with an agent on WhatsApp
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9509002899</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>innomindrajasthan@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                M-12, Madhuban Colony, Tonk Phatak, Jaipur- 302015
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span><strong>For Escalations:</strong> service.head@innomindsolutions.com</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4 text-lg text-white">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaTumblr />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
export default Contact;
