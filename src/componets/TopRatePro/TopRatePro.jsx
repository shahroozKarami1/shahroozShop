import React, { useContext } from 'react'
import HeaderSection from '../HaaderSection/HeaderSection'
import AuthContext from '../../context/AuthContext'

export default function TopRatePro({
    showPopUp
}) {

    let  {dataTopRate}  =  useContext(AuthContext)

  return (

     <>

     <div  className='  xs:ml-0 md:ml-32'>
     <HeaderSection   left={true}  >

     </HeaderSection>
     </div>

     <div  className='container  '>  
  
<section  className='grid  mx-20  xs:gap-10  md:gap-5   lg:gap-0     xs:grid-cols-1  sm:grid-cols-2    md:grid-cols-2  lg:grid-cols-3      mt-10    place-items-center   text-center  '>

 {
     dataTopRate.map((item  ,  i)  =>  (
         
         <div  key={item.id}     className='  xs:mb-10  flex      items-center  flex-col   rounded-2xl bg-white  relative     duration-500    dark:hover:bg-primary hover:text-white  dark:bg-gray-800  hover:bg-black/80      cursor-pointer  shadow-lg  max-w-[300px]   shadow-black '>

<header   data-aos ="fade-up" >
    <img src= {item.cover} alt=""   className='max-w-[140px]    block object-cover '/>
</header>

<main   data-aos ="fade-up">
    <div  className='rate'>

    </div>
    <h1  className='font-bold  text-2xl   pb-2   dark:text-white '>{item.title}</h1>
    <p  className='text-gray-500  text-sm  px-5   dark:text-white   '>{item.desc}</p>
</main>

<footer  className='my-5'   data-aos ="fade-up">
    <button   className='bg-gradient-to-r from-primary   hover:scale-105  p-2  duration-200   px-6  rounded-full ' onClick={ ()  =>  {showPopUp()}}>Order  Now </button>
</footer>
</div>
        
        
        
    ))
}


</section>


     

</div>

     
     
     </>
  )
}
