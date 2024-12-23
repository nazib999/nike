import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px]  rounded-[20px] shadow-3xl px-10 py-16 '>
     <div className='w-11 h-11 flex items-center justify-center bg-coral-red rounded-full'>
        <img src={imgURL} width={24} height={24} alt="" />
     </div>
     <h3 className='font-palanquin text-3xl font-bold mt-5 leading-normal'>{label}</h3>
     <p className='font-montserrat text-lg leading-normal mt-3 break-words text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard 