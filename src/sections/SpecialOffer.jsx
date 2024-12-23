import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap  max-xl:flex-col-reverse gap-10 max-container'>
       <div className='flex-1'>
        <img src={offer} height={687} width={773} className='object-contain w-full' alt="" />
        </div>
        <div className='flex flex-1 flex-col justify-center items-start  '>
           
            <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We Provide You</span><br />
            <span className='text-coral-red inline-block mt-3'>Special</span> Offer</h2>
            <p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, illum quisquam? Dignissimos ratione eum saepe optio quasi corrupti soluta vitae!</p>
            <p className='mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, exercitationem.</p>
            <div className='mt-6 flex gap-4 flex-wrap'>
            <Button label="View details"  iconUrl={arrowRight}/>
            <Button label="View details" backgroundColor="bg-white" textColor="text-slate-gray" borderColor="border-slate-gray"/>
            </div>
        </div> 
    </section>
  )
}

export default SpecialOffer