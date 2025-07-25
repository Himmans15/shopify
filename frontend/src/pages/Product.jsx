import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const {productId} = useParams();
    const {products,currency,addToCart} = useContext(ShopContext)
    const [productData,setProductData] = useState(false)
    const [image,setImage] = useState('')
    const [size,setSize] = useState('')

    const fetchProductData = async () => {

        products.map((item)=>{
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })
    }

    useEffect(()=>{
        fetchProductData();
    },[productId,products])

  return productData ? (
    <div className='border-t-2  pt-10 transition-opacity ease-in duration-500 opacity-100'>
    {/* product data */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
    {/* product images */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'> 
    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
    {
        productData.image.map((item,index)=>(
            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt='' />
        ))
    }
    </div>
    <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt=''/>
    </div>
    </div>
    {/* ---Product Info--- */}
    <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2 '>
        <img src={assets.star_icon} alt=' ' className='w-4'/>
        <img src={assets.star_icon} alt=' ' className='w-4'/>
        <img src={assets.star_icon} alt=' ' className='w-4'/>
        <img src={assets.star_icon} alt=' ' className='w-4'/>
        <img src={assets.star_dull_icon} alt=' ' className='w-4'/>
        <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='text-1xl mt-5 font-medium text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
           <p>Select Size</p>
           <div className='flex gap-2'>
            {
                productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-black' : ''}`}>{item}</button>
                ))
            }
           </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='bg-green-700 text-white px-8 py-2 rounded text:sm active:bg-green-500 '>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'></hr>
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on delivery on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
        </div>
    </div>
    </div>
    {/* Description and comment for products part */}
    <div className='mt-20'>
      <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Description</b>
        <p className='border px-5 py-3 text-sm'>Reviews (120)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>An e-commerce website is an online platform that allows businesses and consumers to buy and sell products or services over the internet. It serves as a virtual marketplace where customers can browse various categories of goods, add items to their cart, and complete secure transactions.</p>
        <p>E-commerce sites typically include features like product listings, customer reviews, payment gateways, shopping carts, and order tracking to enhance the shopping experience. Additionally, they may offer personalized recommendations, discounts, and promotions to attract and retain customers.</p>
      </div>
    </div>
    {/* ---------Display realted product----------- */}
    <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
    
  ): <div className='opacity-0'></div>
}

export default Product