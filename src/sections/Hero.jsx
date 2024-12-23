import React from 'react'
import Button from '../components/Button'
import { bigShoe1 } from '../assets/images'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../contants'
import ShowCard from '../components/ShowCard'
import { useState } from 'react'

const Hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' className='flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container   '>

<div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>

<p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold'>
  <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span><br />
<span className='text-coral-red inline-block mt-3'>Nike</span>Shoes</h1>
<p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, nulla?</p>
<Button label="Shop Now" iconUrl={arrowRight} />
<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
  {statistics.map(item=><div key={item.label} >
    <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
    <p className='leading-7 font-montserrat text-slate-gray'>{item.label}</p>
  </div>)}

</div>
</div>

<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
  <img src={bigShoeImg} width={610} height={500} className='object-contain relative z-10' alt="" />
 {/* shoe card  */}

  <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
    {shoes.map(item=>
    <div key={item.thumbnail}>
      <ShowCard imgUrl={item} changeShoeImg={(i)=>{setbigShoeImg(i)}} shoeImg={bigShoeImg}/></div>)}
  </div>
</div>
    </section>
  )
}

export default Hero