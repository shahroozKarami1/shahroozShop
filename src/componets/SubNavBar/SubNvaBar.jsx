import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function SubNvaBar({data}) {

  return (

    <>
    
    <section  >

<ul   className='bg-white   shadow-sm  shadow-black   xs:flex-col   xs:gap-4  md:gap-0  md:flex-row  flex  items-center  justify-center  py-4  '>

{
    data.map((item)  =>  (

        <li   key={item.id} className='px-5   group    item   relative  sm:my-5  xs:text-lg md:my-0     md:text-base ' >
                <div   className='flex   gap-2  items-center    hover:text-primary   duration-200'>
        <a href= {item.link}   className='' >{item.title}</a>

      {
        item.subMenu  &&  (
            <FaChevronDown  className='group-hover:rotate-180  duration-200'    />
        )
      }
                </div>

        {
            item.subMenu &&  (
               
                <div   className='absolute  z-[9999]    top-10     hidden      group-hover:block      w-[150px]  border-2  border-orange-400  rounded-md   bg-white  p-2   text-black'

                >
    
                     
                    <ul  >
{
                            item.subMenu.map((item)  =>  (
                       <li     key={item.id}   >
                        <a href=""   id='boxMenu'    className='inline-block  w-full   rounded-md  p-2           hover:bg-primary   hover:text-white  duration-200  transition-all'>
                        {
                            item.subTitle
                        }
                        </a>
                       </li>
                    ))
                }
                    </ul>
                    </div>
            )
        }  
    </li>

    ))
}


</ul>


    </section>
    

    
    
    
    
    </>
  )
}
