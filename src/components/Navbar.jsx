import React from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-xl md:text-2xl px-6 md:px-12 py-6'>
        <span className='font-semibold'>Grow Studio</span>
        <div className='flex items-center gap-4 md:gap-6'>
          <a href="#how-we-work" className='hover:underline hidden sm:block'>How we work</a>
          <HiOutlineMenuAlt4 className='hover:cursor-pointer text-3xl'/>
        </div>
    </div>
  )
}

export default Navbar;