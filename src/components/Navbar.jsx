import React, { useEffect, useState } from 'react';
import logo from "../assets/logo2.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  
    // useEffect(() => {
    //   console.log("value in console = ", menu);
    // }, [menu]);
  
  return (
    <>
        {/* Navbar */}
        <nav className='flex justify-between items-center bg-[#fefcf5ba] py-[10px] sticky top-0 w-full shadow-md z-50 common-padding'>

          {/* Logo */}
          <img className='h-[45px] md:h-[65px] cursor-pointer' src={logo} alt="LogoImg" />

          {
            menu === false
              
              // {/* NavList */}
            ? <ul className='hidden md:flex justify-center items-center gap-4 text-[16px] font-[500] uppercase'>
              
                <li className="p-[15px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[65%]">Home</li>
              
                <li className="p-[15px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[70%]">Product</li>

                <li className="p-[15px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[65%]">About</li>

                <li className="p-[15px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-3 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[65%]">Contact</li>
              </ul>

              // {/* Mobile view Menu */}
            : <ul className='md:hidden flex flex-col justify-center items-end gap-2 bg-[#ffffff8f] shadow-md text-[13px] font-[500] uppercase absolute top-[100%] right-2 p-[20px] mx-3 w-fit rounded-b-lg common-padding'>
                <li className="p-[5px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[85%]" onClick={() => setMenu(false)}>Home</li>

                <li className="p-[5px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[80%]" onClick={() => setMenu(false)}>Product</li>

                <li className="p-[5px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[85%]" onClick={() => setMenu(false)}>About</li>

                <li className="p-[5px] hover:text-[#3c3eb5] cursor-pointer relative after:absolute after:content-[''] after:left-1/2 after:translate-x-[-50%] after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3c3eb5] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[85%]" onClick={() => setMenu(false)}>Contact</li>
              </ul>
          }

          {/* Hamburger Icon */}
          <div className='md:hidden text-2xl text-[#383aa8] cursor-pointer' onClick={() => {setMenu(!menu)}}>
            <FiMenu />
          </div>

        </nav>
    </>
  )
}

export default Navbar;