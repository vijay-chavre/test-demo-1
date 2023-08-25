'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const menu = [
  'Feature',
  'Pricing',
  'Download',
  'Company',
  'Support',
];

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='h-[64px] pt-10 px-8 md:px-40 z-50'>
      <ul className='flex items-center justify-between gap-10'>
        <li className='flex items-center'>
          <Image src="https://placehold.co/600x400.png" alt="logo" width={50} height={50}/> <h2 className='font-bold'>ZEROTIER</h2>
        </li>

        <li className='hidden md:flex'>
          <ul className='flex gap-10'> 
            {
              menu.map(item => (
                <li 
                  key={item} 
                  className='font-bold cursor-pointer hover:text-yellow-500'
                >
                  {item}
                </li>
              ))
            }
          </ul>
        </li>
        
        <li className='flex gap-10'>
          <button className='hiddee'>Login</button>
          <button>Sign Up</button>
          <button 
            className='block md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </li>
      </ul>

      {isMenuOpen && (
       <ul
    className='left-0 flex  bottom-0 flex-col w-full gap-5 p-5 bg-black shadow-lg top-full md:hidden z-[9999] relative' >
    {
      menu.map(item => (
        <li
          key={item}
          className='font-bold cursor-pointer hover:text-blue-500'
        >
          {item}
        </li>
      ))
    }
  </ul>
      )}
    </div>
  );
}

export default Header;