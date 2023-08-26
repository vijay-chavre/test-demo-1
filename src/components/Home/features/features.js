import React from 'react'
import './features.style.scss'
import Feature from './feature'

const featuresData = [
  {
    title: 'Feature 1',  
    description: 'Securely connect any device, anywhere.',
    imageUrl:'https://placehold.co/600x400.png'
  },
  {
    title: 'Feature 2',
    description: 'Easily manage all your devices in one place.',  
    imageUrl:'https://placehold.co/600x400.png'
  },
  {
    title: 'Feature 3',
    description: 'Get real-time alerts and notifications.',
    imageUrl:'https://placehold.co/600x400.png' 
  }
]
 const Features = () => {
  return (
    <div className='features_wrapper'>
      {
       featuresData.map((feature, i) => (
         <Feature key={feature.title} {...feature} isReverses={i%2 !== 0  }/>
       ))
      }
    </div>
  )
}

export default Features