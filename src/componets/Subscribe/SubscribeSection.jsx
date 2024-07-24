import React from 'react'
import banner  from "../../assets/website/orange-pattern.jpg"
export default function SubscribeSection() {
let bannerImgDetails  =  {
    backgroundImage    :   `url(${banner})`  , 
    backgroundPosition :  "center" ,  
    backgroundRepeat  :  "no-repeat"  , 
    backgroundSize    : "cover"  , 
    height :   "100%"  ,
    width :   "100%"  
}

  return (
    <>
    
<div  className='text-white    dark:bg-gray-800   bg-gray-100    mt-20  container   backdrop-blur-sm'  style={bannerImgDetails}   data-aos="zoom-in">
<main  className='flex  xs:text-center  md:text-balance  items-center justify-center  flex-col  gap-2  '>
<h1  className='py-4    font-semibold    text-4xl    '>Get  Notified  About  New  Products</h1>
<input type="text" name="" id=""  className='  xs:w-3/4  md:w-2/5     rounded-sm text-black  outline-none   p-2  mb-5'  placeholder='Enter  your  Email .... '/>
</main>

</div>


    </>

  )
}
