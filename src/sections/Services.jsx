import React from 'react'
import { services } from '../contants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='flex justify-center gap-9 max-container flex-wrap'>
       {services.map((s)=>
    <ServiceCard key={s.label} {...s}/>)} 
    </section>
  )
}

export default Services