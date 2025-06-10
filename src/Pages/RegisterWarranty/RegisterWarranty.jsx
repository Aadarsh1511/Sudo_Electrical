import React from 'react'
import { Button } from '@/components/ui/button';
const RegisterWarranty=()=> {
  return (
    <div className=' bg-[#f8f4ee] pt-5 pb-5'>
<div className='grid grid-cols-2   h-[450px] '>
            <div className='ml-40 bg-white w-[600px] border border-black  rounded-l-lg pl-6 flex flex-col justify-center'>
                <img src='https://orientelectric.com/cdn/shop/files/Online_Warranty_Registration_KV_1x1_38644bc0-941b-40a0-b83c-9e0d7169b8ea.jpg?v=1747806500&width=1500' className='w-full h-[450px] object-contain ' ></img>
            </div>
            <div className=' bg-white w-[600px] border border-black border-l-white  flex flex-col  rounded-r-lg justify-normal pt-10 pr-6'>
                <h1 className='text-justify font-semibold text-xl'>REGISTER WARRANTY</h1>
        <p className='text-red-400 text-justify text-xs'>*only applicable for Fans, Water Heaters & Air Coolers</p>

        <label className='mt-12 text-sm pb-1 text-gray-700'>Serial Number</label>
       <div className=''>
          <div className="flex  items-center border-2 h-8 border-black rounded-md overflow-hidden w-[520px]">
            <div className="bg-white px-3 py-2 border-r-2 border-black  ">
        <img src="https://www.matthews.com.au/upload/images/QR(1).jpg" alt="QR" className="w-5 h-5"/>
      </div>
      <input type="text" placeholder="Enter serial number" className=" px-3 py-1 w-full border-none  "/>
    </div>
    
        </div>
        <Button className='ml-36 mt-3 w-52  rounded-sm h-8'>Submit</Button> 
            </div>
        </div>
        </div>

  )
}

export default RegisterWarranty;