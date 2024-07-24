import React from 'react'
import { IoClose } from "react-icons/io5";

export default function PopUpBox({
    isshowPopUp  ,  setIsshowPopUp
}) {
  return (


<>

    {
        
        isshowPopUp    &&   ( 
            <section   >

            <div  className='w-screen  h-screen   fixed   right-0  top-0   z-50   backdrop-blur-sm   bg-black/50'  data-aos="zoom-in-left">


<main  >

    <div    className='fixed  top-1/2  left-1/2  w-[400px]   rounded-lg  shadow-2xl  shadow-black    -translate-y-1/2   -translate-x-1/2 bg-white  dark:shadow-xl  dark:shadow-white   dark:bg-gray-800  dark:text-white  '>
        <header  className='flex   p-5    items-center  justify-between'>  

     <h1 className='font-semibold  text-lg  '>Order  Now</h1>

     <IoClose   className='text-2xl  cursor-pointer'   onClick={()  => {setIsshowPopUp(false)}}/>


        </header>
<div>

 <div  className='formGroup    flex  items-center  flex-col   gap-5   m-4 '>
    
    <input type="text"   placeholder='Name'  name="" id=""  className='border-2  border-gray-300     w-full  px-3    rounded-full  text-black  p-2   ' />
    <input type="email"   placeholder='email'  name="" id=""  className='border-2  border-gray-300     w-full  px-3    rounded-full  text-black  p-2   ' />
    <input type="text"   placeholder='Address'  name="" id=""  className='border-2  border-gray-300     w-full  px-3    rounded-full  text-black  p-2   ' />

<button   className='bg-gradient-to-r from-primary  to-secoundry hover:scale-105  duration-200   text-white  mt-3  p-2   px-5  rounded-full' >Order Now</button>

    
    </div>       
 


</div>



    </div>
</main>



            </div>
    
        </section>
        )
        
    }

    
    
    </>
    
    
    

  )
}
