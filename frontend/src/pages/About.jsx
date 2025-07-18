import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to <b className='text-gray-800'>Shopit</b>, your one-stop destination for an exceptional online shopping experience! We are passionate about providing high-quality products at competitive prices, ensuring that each customer’s shopping journey is smooth, enjoyable, and convenient.</p>
          <p>We are a passionate team committed to bringing you a wide selection of products that meet your needs, whether it's the latest fashion trends, cutting-edge tech gadgets, home essentials, or unique gifts. Our goal is to provide you with a seamless and enjoyable shopping experience that keeps you coming back for more.</p>
          <b className='text-gray-800'>Mission</b>
          <p><b className='text-gray-800'>Our mission is simple:</b> to offer a diverse range of top-notch products from trusted brands and deliver them right to your doorsteps. Whether you’re looking for the latest fashion trends, innovative gadgets, or essential home goods, we’ve got you covered. We strive to make shopping hassle-free by offering secure payment options, fast shipping, and outstanding customer service.</p>
          Founded with the belief that shopping should be simple, enjoyable, and accessible to everyone, [Your Store Name] started as a small project with big dreams. Today, we’re proud to serve customers worldwide, offering an ever-growing collection of top-tier products from trusted brands and emerging designers.
          <p>Founded with the belief that shopping should be simple, enjoyable, and accessible to everyone, [Your Store Name] started as a small project with big dreams. Today, we’re proud to serve customers worldwide, offering an ever-growing collection of top-tier products from trusted brands and emerging designers.</p>
          
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We carefully select every product we offer, ensuring they meet the highest standards of quality, durability, and style.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Customer Satisfaction</b>
          <p className='text-gray-600'>We put our customers at the heart of everything we do. Our customer service team is always ready to assist you, answer your questions, and help resolve any concerns you may have.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Fast & Reliable Shipping</b>
          <p className='text-gray-600'>We understand the excitement of receiving your order quickly. That’s why we offer fast shipping and reliable delivery services to make sure your order arrives on time, every time.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
