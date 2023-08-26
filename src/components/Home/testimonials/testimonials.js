import React from 'react'
import TestimonialCard from './testimonialCard'


const testimonialsData = [
  {
    description: 'ZeroTier provides a robust and essential backbone for our communications stack.',
    team: ["PETER BOIN", "PRINCIPAL SOFTWARE ENGINEER", "ALLUME ENERGY"]
  },
  {
    description: 'ZeroTier has enabled us to build a truly distributed company.',  
    team: ["JOHN DOE", "CTO", "ACME CORP"]
  },
  {
    description: 'We rely on ZeroTier for secure access to all our infrastructure.',
    team: ["JANE SMITH", "VP ENGINEERING", "XYZ STARTUP"]
  }
]
const Testimonials = () => {
  return (
    <div className='mt-10'>
      <h1 className='mb-5 text-4xl font-bold text-center'>Used by the world's most innovative teams</h1>
       <div>
        {
          testimonialsData.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))
        }
       </div>
    </div>
  )
}

export default Testimonials 