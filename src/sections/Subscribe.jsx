import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
   <section className='max-container flex justify-center items-center flex-col gap-10' id='contact-us'>
    <h3 className='text-4xl font-bold font-palanquin'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h3>
    <div className='lg:max-w-[40%] w-full flex max-sm:flex-col items-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subscribe' className='flex-1 sm:border-none max-sm:rounded-full w-full max-sm:border max-sm:border-coral-red outline-none p-3' />
        <div>
            <div className='flex justify-end'><Button label="Sign Up"/></div>
        </div>
    </div>
    
   </section>
  )
}

export default Subscribe