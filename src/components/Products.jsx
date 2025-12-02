import React from 'react';
import Heading from '../utility/Heading';
import { FaArrowsTurnRight, FaWhatsapp } from 'react-icons/fa6';
import { Cards } from '../assets/content.js';
import ButtonCTA from '../utility/ButtonCTA';
import { useNavigate } from 'react-router-dom';


const Products = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className='flex flex-col justify-center items-center gap-8 py-16 bg-white common-padding'>
        <Heading name={"Our Products"} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-5'>

          {
            Cards.map((card, id) => (
            <div className=' bg-white shadow-md mb-5 rounded-2xl overflow-hidden transition-transform hover:scale-[1.01] hover:shadow-lg md:text-start text-center' key={id}>
              <img src={card.img} alt={card.title} className='w-full aspect-[6/4] object-cover' />

              <div className='p-5'>
                <h5 className='text-xl font-semibold text-gray-900 mb-2'>{card.title}</h5>

                <p className='text-gray-500 text-sm font-medium mb-5'>{card.desc}</p>

                <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                  <ButtonCTA name={"WhatsApp Now"} btnLT={<FaWhatsapp className='text-lg' />} style={'flex justify-center items-center gap-2 text-sm px-4 py-2 md:w-full w-auto'} onClick={() => window.open('https://wa.me/918989898989', '_blank') } />

                  <ButtonCTA name={"View More"} btnRT={<FaArrowsTurnRight className='text-lg' />} style={'flex justify-center items-center gap-2 text-sm px-4 py-2 md:w-full w-auto'} onClick={() => navigate(`/productinfo/${card.id}`)} />
                </div>
              </div>

            </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Products;