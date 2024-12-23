import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex items-center justify-between max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'>
           
            <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We Provide You</span><br />
            <span className='text-coral-red inline-block mt-3'>Super</span> quality Shoes</h2>
            <p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, illum quisquam? Dignissimos ratione eum saepe optio quasi corrupti soluta vitae!</p>
            <p className='mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, exercitationem.</p>
            <div className='mt-6'>
            <Button label="View details"  />
            </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
            <img src={shoe8} width={570} height={522} className='object-contain' alt="" />
        </div>
    </section>
  )
}

export default SuperQuality