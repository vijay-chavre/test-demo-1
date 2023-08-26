import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import './testimonials.style.scss'
const TestimonialCard = ({description, team=[]}) => {
  return (
    <div className='flex flex-wrap gap-5 testimonial-card'>
      <div className='rounded'><AiOutlineUser className='text-black bg-white rounded-full' size={50}/></div>
      <div>
        <p className='card_desc'>{description}</p>
        <h3 className='card_team'>{team.join(', ')}</h3>
      </div>
    </div>
  )
}

export default TestimonialCard