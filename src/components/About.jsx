import React from 'react';
// import Heading from '../utility/Heading';
import ButtonCTA from '../utility/ButtonCTA';
import team from '../assets/team.jpg';

const About = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-4 py-[60px] bg-gradient-to-b from-[#fefcf5] to-[#fffcfc7b] common-padding'>
        {/* <Heading name={"About Us"} /> */}

        <div className='flex flex-col md:flex-row justify-between items-center md:gap-10 w-full px-5'>

          <div className='flex flex-col md:justify-start justify-center w-full'>
            <h1 className='text-5xl md:text-6xl font-bold mb-8 leading-[1.1] text-center md:text-start text-[#060634]'>Who We Are <span className='text-[#383aa8] text-center'>?</span></h1>
            <p className='text-gray-500 text-md md:text-lg mb-8 text-justify'>This is the DazzVastra Legacy! We are the team, who builds design and craft our work with paition Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eligendi odio dolorum dolore sint maiores. Dazzles Trendy. Comfortable. Made for You. Discover modern fashion essentials that define who you are. Discover modern fashion essentials that define who you are. Discover modern fashion essentials that define who you are.</p>
            <div className="flex md:justify-start justify-center items-center mb-8">
              <ButtonCTA name={"Explore Now"} />
            </div>
          </div>

          <div className='flex justify-center w-full'>
            <img src={team} className='rounded-2xl md:m-0 m-5 h-[380px] md:h-[500px] lg:h-[600px] aspect-auto object-cover shadow-lg md:w-full' alt="Model wearing stylish DazzVastra outfit" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;