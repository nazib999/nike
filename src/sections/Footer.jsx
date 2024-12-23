import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../contants'

const Footer = () => {
  return (
    <footer className='max-container'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
            <div className='flex flex-col items-start'>
<a href="/">
<img src={footerLogo} width={150} height={46} alt="" /></a>
<p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus.</p>
<div className='flex items-center gap-5 mt-8'>
    {socialMedia.map((item)=>
    <div key={item.alt} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
        <img src={item.src} alt="" width={24} height={24} />
    </div>
    )}
</div>

            </div>
            <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                {footerLinks.map((item)=>
                <div key={item}>
                    <h4 className='text-white font-montserrat text-2xl font-medium mb-6'>{item.title}</h4>
                    <ul>
                        {item.links.map((link)=>
                        <li key={link} className='mt-3 text-white-400 text-base font-montserrat hover:text-slate-gray cursor-pointer'><a href="">{link.name}</a></li>)}
                    </ul>
                </div>)}

            </div>
        </div>
        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
            <p>&copy; Copyright . All rights reserved.</p>
            <p>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer