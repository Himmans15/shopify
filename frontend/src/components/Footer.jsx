import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div >
            <img src={assets.shopit} className='mb-5 w-32' alt='' />
            <p className='w-full md:w-2/3 text-gray-600'>
            At ShopIt, we are committed to bringing you the best online shopping experience. Our diverse range of products is curated to meet your needs and desires, offering top-notch quality and customer service.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 222-444-7600</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>
            Copyright 2025@-forever.com - All Right Reseverd 
        </p>
      </div>
    </div>
  )
}

export default Footer
