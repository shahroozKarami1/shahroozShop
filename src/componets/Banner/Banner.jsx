import React from 'react'
import BannerDetails from './BannerDetails/BannerDetails'
import { CiLock } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

export default function Banner() {
  return (

    <React.Fragment>
    
    <div  className='container   mt-20   '>
        
        <div  className='grid   grid-cols-12    items-stretch     place-items-center  ' >
        <div  className='  xs:col-span-12  xs:text-center      md:col-span-6'   data-aos="fade-right">
            <img src="../../../src/assets/women/women2.jpg"   className='   xs:w-3/4  xs:mx-auto      rounded-lg    shadow-2xl  object-cover   h-full  max-w-[400px]   shadow-black'  alt="" />
        </div>
        <div  className='  xs:col-span-12  xs:text-center    md:col-span-5   xs:mt-4 '   data-aos="fade-left">
            <main  className=''>
<h1  className='font-bold  text-4xl  pb-3    dark:text-white '>Winter Sale Up  To 505 Off</h1>
<p  className='  max-w-[600px]  my-3   dark:text-white text-gray-500'>Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, illo! consectetur adipisicing elit. Quam, saepe distinctio ex optio perferendis non.</p>


<div  className=' xs:ml-6 '>

    <BannerDetails   text={"Quality  Products"}     bgColor={"bg-lime-200"}   icon={<CiLock />}></BannerDetails>
    <BannerDetails  text={"Fast Delivery"}  bgColor={"bg-gray-200"}  icon={<MdDeliveryDining />}></BannerDetails>
    <BannerDetails  text={"easy  Payment method"}  bgColor={"bg-pink-200"}  icon={<MdPayment />}></BannerDetails>
    <BannerDetails  text={"Get Offers"}   bgColor={"bg-yellow-200"} icon={<BiSolidOffer />}></BannerDetails>
</div>

            </main>
        </div>
        
        
        </div>

        
         </div>
    
    
    
    
    
    
    </React.Fragment>

  )
}
