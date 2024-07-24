import React, { useContext } from 'react'
import HeaderSection from '../HaaderSection/HeaderSection'
import AuthContext from '../../context/AuthContext'
import Slider from "react-slick";

export default function Testimonial() {


const  {dataTestimonial  }  =   useContext(AuthContext)

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true  ,  
    autoplaySpeed : 2000  , 

    responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2  , 
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
 <>
 
 <section>
 <HeaderSection></HeaderSection>

<main   className='container    my-20   mb-40 '>
<div>

    <Slider  {...settings}  >


{
    dataTestimonial.map((item  ,  index  )  =>  (
        

        <div  key={item.id}   data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
         className=' flex   flex-col     py-8  relative  shadow-lg  shadow-black    dark:bg-gray-700 bg-primary/10   px-6    max-w-[450px]  rounded-lg       '  >  
                <img src= {item.image} alt=""    className='w-20 mb-1   h-20   overflow-hidden  rounded-full '/>
                <p  className='px-2  text-gray-500   dark:text-white'>{item.desc}</p>
                <h1  className='   dark:text-white  font-bold  text-black/80  text-xl   px-2'>{item.title}</h1>
                <span  className='font-serif absolute  -top-4  right-0  text-black/20  text-9xl'>
                    ,,
                </span>
            </div>
            
            
            
        ))
}

        </Slider>



        </div>
</main>


 </section>


 
 
 
 </>
  )
}
