import React from 'react';

const ButtonCTA = ({ name, btnLT, btnRT, style, onClick}) => {
  return (
    <>
        <button className={`text-white bg-[#383aa8] px-6 py-3 md:px-8 md:py-3 w-fit mb-3 rounded-lg font-bold transition-all duration-300 ease-in-out hover:bg-[#2f3195] shadow-md hover:shadow-lg ${style} cursor-pointer`} onClick={onClick}>
          {btnLT} {name} {btnRT}
        </button>
    </>
  )
}

export default ButtonCTA;