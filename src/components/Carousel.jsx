import React from 'react';
import {CardItem} from "../assets/contant.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
      {/* Categories Slider */}
      <div className='flex justify-center w-full h-[60vh] bg-white common-padding'>
        
        <Swiper  modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={12}
        // sensible mobile-first defaults
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 6 }
        }}
        className="w-full">
          {CardItem.map((card, id) => (

            <SwiperSlide key={id} className='relative w-full rounded-[400px] px-3 md:px-3 cursor-pointer brightness-90 transition-all duration-300 ease-in-out hover:brightness-100 font-semibold hover:text-[#2e2f91]'>
                
                <img
                  src={card.img}
                  alt={`${card.name} Loading...`}
                  className='bg-cover h-[75%] w-full object-cover my-2 border-10 border-white shadow-[0_5px_10px_5px_rgba(0,0,0,0.25)] rounded-[400px] transition-all duration-300 ease-in-out scale-100 hover:scale-105'
                />

                <h5 className='text-center text-[16px] md:text-[17px] rounded-xl text-[#060634] bg-[#f1f1fff7] mx-10 md:mx-5 lg:mx-2 mt-6'>
                  {card.name}
                </h5>

                {/* <div className='border-[2px] border-white rounded-[100px] absolute top-8 md:top-10 left-8 md:left-9 right-8 md:right-9 h-[63%]'></div>
                <div className='border-[2px] border-white rounded-[100px] absolute top-9 md:top-11 left-9 md:left-10 right-9 md:right-10 h-[61%]'></div> */}
              {/* </> */}
            </SwiperSlide>

          ))}
        </Swiper>
        
      </div>
    </>
  )
}

export default Carousel;  