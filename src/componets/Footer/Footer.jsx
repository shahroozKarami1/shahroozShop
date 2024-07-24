import React, { useContext } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import AuthContext from '../../context/AuthContext'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import  footerback   from  "../../assets/website/footer-pattern.jpg"
import  logo  from  "../../assets/logo.png"
export default function Footer() {


    let  {dataFooter}  =  useContext (AuthContext)


    let footerImage  =  {
        backgroundImage    :   `url(${footerback})`  , 
        backgroundPosition :  "bottom" ,  
        backgroundRepeat  :  "no-repeat"  , 
        backgroundSize    : "cover"  , 
        height :   "100%"  ,
        width :   "100%"  
    }
  return (

    <>
    
    <section  className='  p-5     h-full'    style={footerImage}>
        <div className='container     '>
<div  className='  grid  gap-4    mx-10      pb-44   pt-10     place-items-center  grid-cols-12   text-white'    data-aos="zoom-out-right">
<div  className='left-footer     xs:col-span-12     md:col-span-4'>

<div  className='flex  items-center   gap-2'>
<img src= {logo} alt=""  className='w-14  h-14' />
<h1  className='font-semibold  text-2xl'>ShahroozShop</h1>
</div>
<div className=' mt-5'>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit tempora et hic cumque veritatis eaque dicta ab harum iste aut.</p>
</div>
            </div>

            <div  className='middle-footer    xs:col-span-12  md:col-span-5   flex  items-center  gap-14 '>
    
                <ul>

                <h1  className='text-lg    font-semibold  mb-3  '>Important  Links</h1>
                {
                    dataFooter.map((item)  =>  (
                        <li  key={item
                            .id
                        }  className='py-2  text-sm   hover:text-primary   duration-300'>

                            <a href= {item.link}>{item.name}</a>
                        </li>
                    ))
                }
                </ul>
                <ul  className='mx-8'  >

<h1  className='text-lg    font-semibold  mb-3  '> Links</h1>
{
    dataFooter.map((item)  =>  (
        <li    key={item.id} className='py-2  text-sm  cursor-pointer   hover:translate-x-1  duration-200 '>

        <a href={item.link}>
        {item.name}
        </a>
        </li>
    ))
}
</ul>
            </div>
            <div  className='right-footer    xs:col-span-12   md:col-span-3'>
                <div  className='icons   gap-4  text-2xl   flex  items-center  justify-center'>
                <FaInstagram />
                <FaXTwitter />
                <FaLinkedin />

                </div>
                <div  className='flex  items-center    py-4  gap-2  justify-center'>
                <FaLocationArrow />
              <span  className='text-sm'>Tehran    ,  jannat Abad</span>
                </div>
    <div  className='flex  items-center  gap-4  justify-center'>
    <FaMobileAlt />
<span>09305151712</span>
    </div>
            </div    >
</div>
        </div>

    </section>
    
    
    
    
    </>
  )
}
