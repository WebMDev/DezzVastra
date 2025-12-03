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

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.831468135615!2d75.8267392!3d26.9239368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1edb5a6b9e1%3A0xd39ab8af2a92782!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1704378400001!5m2!1sen!2sin" className='w-full' style={{ border: 0 }}></iframe>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;