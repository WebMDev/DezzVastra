import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapLocation, FaPhone, FaXTwitter } from 'react-icons/fa6';
// import ButtonCTA from '../utility/ButtonCTA';

const Contact = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-4 py-[60px] bg-white common-padding'>
        {/* <Heading name={"Contact Us"} /> */}
        
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 w-full px-5'>
          <div className='flex justify-center p-6 bg-white rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.25)] w-full h-auto md:h-[450px] lg:h-[435px]'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" className='w-full' frameborder="0"></iframe>
          </div>

          <div className='flex justify-start items-center gap-4 py-6 px-6 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.25)] w-full'>
            <div className='flex flex-col justify-center md:items-start items-center gap-6 w-full'>

              <div className='flex flex-col md:flex-row md:justify-start items-center justify-center gap-4 py-3 px-3 rounded-xl'>
                <span className='p-4 bg-amber-50 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
                  <FaMapLocation className='text-2xl text-[#060634]' />
                </span>

                <span className='flex flex-col justify-center md:items-start items-center text-center text-md md:text-lg font-semibold leading-[1.1]'>
                  <h5 className='text-[#060634]'>Address</h5>
                  <p className='text-gray-500 text-sm'>1A, Amravati Fort, near by JJM, Jaipur, Rajasthan, India, ***001</p>
                </span>
              </div>

              <div className='flex flex-col md:flex-row md:justify-start items-center justify-center gap-4 py-3 px-3 rounded-xl'>
                <span className='p-4 bg-amber-50 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
                  <FaPhone className='text-2xl text-[#060634]' />
                </span>

                <span className='flex flex-col justify-center md:items-start items-center text-center text-md md:text-lg font-semibold leading-[1.1]'>
                  <h5 className='text-[#060634]'>Phone Number</h5>
                  <p className='text-gray-500 text-sm'>91*****001</p>
                </span>
              </div>

              <div className='flex flex-col md:flex-row md:justify-start items-center justify-center gap-4 py-3 px-3 rounded-xl'>
                <span className='p-4 bg-amber-50 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
                  <FaEnvelope className='text-2xl text-[#060634]' />
                </span>

                <span className='flex flex-col justify-center md:items-start items-center text-center text-md md:text-lg font-semibold leading-[1.1]'>
                  <h5 className='text-[#060634]'>Email</h5>
                  <p className='text-gray-500 text-sm'>dazzvastrain@gmail.com</p>
                </span>
              </div>

              <div className="flex justify-evenly items-center gap-4 py-3 bg-white shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-xl w-full">
                <span className='p-1.5 md:p-3 bg-white rounded-full hover:shadow-[0_3px_15px_rgba(0,0,0,0.25)] hover:bg-amber-50 cursor-pointer transition-all duration-300 ease-in-out'>
                  <FaLinkedin className='text-xl md:text-2xl' />
                </span>

                <span className='p-1.5 md:p-3 bg-white rounded-full hover:shadow-[0_3px_15px_rgba(0,0,0,0.25)] hover:bg-amber-50 cursor-pointer transition-all duration-300 ease-in-out'>
                  <FaXTwitter className='text-xl md:text-2xl' />
                </span>

                <span className='p-1.5 md:p-3 bg-white rounded-full hover:shadow-[0_3px_15px_rgba(0,0,0,0.25)] hover:bg-amber-50 cursor-pointer transition-all duration-300 ease-in-out'>
                  <FaInstagram className='text-xl md:text-2xl' />
                </span>

                <span className='p-1.5 md:p-3 bg-white rounded-full hover:shadow-[0_3px_15px_rgba(0,0,0,0.25)] hover:bg-amber-50 cursor-pointer transition-all duration-300 ease-in-out'>
                  <FaFacebook className='text-xl md:text-2xl' />
                </span>
              </div>
            </div>
            
            {/* <form action="" className='flex flex-col justify-center items-center gap-4 border-l-1 border-gray-300 w-full p-10 h-full'>
              <div className='flex justify-center items-center gap-4 mb-5'>
                <label htmlFor="">Name</label>
                <input type="text" className='border-1 border-gray-400 rounded-sm px-4 py-2' />
              </div>

              <div className='flex justify-center items-center gap-4 mb-5'>
                <label htmlFor="">Email</label>
                <input type="email" className='border-1 border-gray-400 rounded-sm px-4 py-2' />
              </div>

              <div className='flex justify-center items-start gap-4 mb-5'>
                <label htmlFor="" cla>Message</label>
                <textarea type="textarea" className='border-1 border-gray-400 rounded-sm px-4 py-2' />
              </div>

              <div>
                <ButtonCTA name={"Submit"}/>
              </div>
            </form> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;