import React from 'react'
import Button from '../UI/Button'
import {FaAngleRight
} from 'react-icons/fa'
const TopBanner = () => {
  return (
    <div className='pt-10 md:w-1/2 '>
       <h1 className='mb-10 text-4xl'>Securely connect any device, anywhere.</h1>
       <h4 className='text-xl'>
       ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.
       </h4>
       <div className='flex items-center gap-10 mt-10 cursor-pointer'>
        <Button text='Get Started'/>
         <div className='flex items-center p-3 font-bold hover:text-amber-500 hover:rounded-full hover:bg-[#262626]'>Learn More <FaAngleRight/> </div>
       </div>
    </div>
  )
}

export default TopBanner