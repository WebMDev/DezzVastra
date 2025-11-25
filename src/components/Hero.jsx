import React from 'react';
import hero from '../assets/hero.jpg';
import ButtonCTA from '../utility/ButtonCTA';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='flex flex-col md:flex-row justify-between items-center gap-5 w-full h-full bg-gradient-to-b from-[#fefcf5] to-[#fffcfc7b] common-padding md:py-24 py-16 overflow-hidden'>

        <div className='flex flex-col md:flex-row justify-between items-center md:gap-10 w-full px-5'>

          <div className='flex flex-col justify-between w-full'>
            <h1 className='text-5xl md:text-6xl font-bold mb-8 leading-[1.1]'>Style with <span className='text-[#2e2f91]'>DazzVastra</span></h1>
            <p className='text-gray-500 text-md md:text-lg mb-8'>Dazzles Trendy. Comfortable. Made for You. Discover modern fashion essentials that define who you are.</p>
            <div className="flex md:justify-start justify-center items-center mb-8">
              <ButtonCTA name={"Shop Now"} />
            </div>
          </div>

          <div className='flex justify-center w-full'>
            <img src={hero} className='rounded-2xl md:m-0 m-5 max-h-[600px] aspect-3/6 object-cover shadow-lg md:w-full' alt="Model wearing stylish DazzVastra outfit" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;