import React from 'react'
import { IoStar } from "react-icons/io5";

export default function CardProducts({data}) {



 
  return (


<section  className='rounded-md  dark:shadow-white   cursor-pointer  hover:-translate-y-10  transition-all duration-500  overflow-hidden    '>
<img  className='h-[220px]  w-[150px]   object-cover ' src= {data.cover} alt="" />
<div  className='p-5'>
<h1  className='font-semibold  py-2   dark:text-white'>{data.title}</h1>
<h2  className='text-sm   dark:text-white'>{data.color}</h2>
<div  className='rated    flex  items-center    mt-2'>
   
<span  className='dark:text-white'>{data.Rated}</span>
<div  className='flex      items-center   ml-3    xs:mx-auto'>

<IoStar  className='   text-yellow-500' />
<IoStar  className='   text-yellow-500' />
<IoStar  className='   text-yellow-500' />
<IoStar  className='  text-yellow-500' />

</div>
</div>
</div>
</section>
 
 




  )
}
