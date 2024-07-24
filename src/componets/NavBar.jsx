import React from 'react'
import "./NvaNar.css"
import  logo  from  "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import SwitchTheme from './SwitchTheme/SwitchTheme';

export default function NavBar({showPopUp}) {
  return (

    <>

    <nav   className='    flex   sticky  top-0  z-40    duration-200   lg:justify-around  items-center   shadow-md  text-dark  dark:bg-gray-900  dark:text-white     bg-orange-300     py-3    p-5  '>
<div  className='right   '>
<a href=""  className='flex   items-center  gap-2   '>
    <img src= {logo} alt="logo"   className='w-1/6      '/>
<h1  className='font-bold   text-2xl    '>ShahroozShop</h1>
</a>



</div>

<div  className='left   flex  items-center      '>
    <div  className='group:  flex  items-center  justify-end  relative   '>
<input type="text"   placeholder='Search'    className='  transition-all     w-[200px]   sm:[200px]        hover:w-[300px]  duration-300  rounded-full  border px-2  py-1  focus:outline-none   focus:border-2  focus:border-primary border-gray-300 '  name="" id="" />
<IoSearch  className='  absolute   mr-4   text-gray-600' />

    </div>
<button  className='  bg-gradient-to-r from-primary to  bg-secoundry      mx-4  transition-all   duration-200  hover:w-[100px]    shadow-md  shadow-white   flex  justify-center  items-center   p-3  rounded-lg'

onClick={ ()  =>  {showPopUp()}}
><FaShoppingCart  className='text-white        text-lg' />
</button>


<SwitchTheme></SwitchTheme>

</div>






    </nav>


    
    
    
    </>
  )
}
