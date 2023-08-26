import Button from '@/components/UI/Button'
import Image from 'next/image'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
const Feature = ({imageUrl, title, description , isReverses}) => {
  return (
   <div className={`flex flex-col items-center md:flex-row ${isReverses && 'md:flex-row-reverse'}`  }>
      <div className='w-full md:w-1/2'>
        <Image src={imageUrl} alt="" style={{width: '100%', height: '100%', padding: '3rem',}} width={100} height={100}/>
      </div>
      <div className='pt-10 md:w-1/2'>
        <h1 className='mb-5 text-2xl'>{title}</h1>
        <h3 className='mb-10 text-xl'>{description}</h3>

        <div className='flex items-center justify-center p-3 font-bold button-secondary md:w-1/3'>Learn More <FaAngleRight/> </div>

      </div>
    </div>
  )
}

export default Feature