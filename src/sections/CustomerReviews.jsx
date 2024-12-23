import React from 'react'
import { reviews } from '../contants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
 
  return (
    <section className='max-container'>
      <h3 className='font-bold font-palanquin text-center text-4xl'>What Our <span className='text-coral-red'>Customers</span> Say? </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum similique cumque vel dolor sapiente aperiam.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      
      </div>
    </section>
  )
}

export default CustomerReviews