import React from 'react';
import { FaLocationDot, FaMobileButton, FaRegEnvelope } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col items-center gap-6 text-[#cecece] text-[14px] bg-[#060634] py-[60px] common-padding'>
        <div className='grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-10 mb-4 text-center md:text-justify w-full'>

          <div className="flex flex-col md:items-start items-center justify-start gap-3">
            <h5 className='text-[16px] text-white font-bold'>About Us</h5>
            <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis maxime dese runtdsfsdm aliquam repellat, unde beat praesentium dignissimos.</p>
          </div>

          <div className="flex flex-col items-center md:items-start xl:items-center justify-start gap-3 ">
            
            <h5 className='text-[16px] text-white font-bold'>Contact Details</h5>

            <div className='flex flex-col md:items-start justify-center gap-3 xl:pl-[60px] text-[13px]'>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                <FaRegEnvelope />
                <p >dazzvastrain@gmail.com</p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                <FaMobileButton />
                <p>91*****001</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-start md:items-center justify-start gap-3">

            <h5 className='text-[16px] text-white font-bold w-fit'>Links</h5>

            <ul className='flex xl:flex-row xl:justify-center md:items-center gap-5 md:flex-col text-[10px] font-[500] uppercase isolate'>
              <li className="cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-[55%]">Home</li>
              
              <li className="cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-[60%]">Product</li>

              <li className="cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-[60%]">About</li>

              <li className="cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-35%] after:bottom-3 after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-[75%]">Contact</li>
            </ul>

          </div>

          <div className="flex flex-col items-center md:items-start justify-start gap-2">

            <h5 className='text-[16px] text-white font-bold'>Address</h5>
            
            <div className="flex flex-col md:flex-row justify-center items-center text-[13px] gap-3">
              <FaLocationDot className=''/>
              <span>1A, Amravati Fort, near by JJM, Jaipur, Rajasthan, India, ***001</span>
            </div>

          </div>
        </div>
        
        <div className='pt-[40px] border-t-1 w-full border-white text-center'>
          Copyright <sup>©</sup>2025 DazzVastra Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer;