import React from 'react';

const Heading = ({name, style}) => {
  return (
    <>
        <section className='flex flex-col justify-center items-center gap-4 mb-[50px]'>
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 leading-[1.1] text-[#2e2f91] uppercase relative after:absolute after:content-[''] after:top-15 after:left-1/2 after:translate-x-[-50%] after:w-3/4 after:h-[5px] ${style} after:bg-[#3c3eb5]`}>{name}</h2>
            <p className='text-gray-500 text-center text-md md:text-lg mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, vero. Beatae magni reprehenderit aspernatur itaque dolores, ipsum asperiores necessitatibus vitae.</p>
        </section>
    </>
  )
}

export default Heading;