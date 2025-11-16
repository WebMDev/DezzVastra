import React from 'react';
import Heading from '../utility/Heading';
import { FaArrowsTurnRight, FaWhatsapp } from 'react-icons/fa6';

const Products = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-4 py-[60px] bg-gradient-to-b from-[#fefcf5] to-[#fffcfc] common-padding'>
        <Heading name={"Our Products"} />

        <div>
          {/* <img src="" alt="" /> */}

          <div>
            <h5>title</h5>

            <p>Lorem ipsum dolor sit amet.</p>

            <div className='flex justify-between items-center gap-4'>
              <button className='flex justify-center items-center gap-2'> <FaWhatsapp /> WhatsApp Now </button>

              <button className='flex justify-center items-center gap-2'> View More <FaArrowsTurnRight /> </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products;