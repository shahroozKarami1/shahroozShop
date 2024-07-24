import React from 'react'

export default function HeaderSection({ left }) {
  
  return (

    <>

      <header className={`flex   justify-center  ${left ? "md:items-start" : "md:items-center"}     my-5   mt-14  flex-col   xs:text-center `} data-aos="fade-up">

        <p className='text-primary    text-lg'>Lorem ipsum dolor sit amet.</p>
        <h1 className='font-bold  text-2xl   py-1   dark:text-white ' >Products</h1>
        <p className='text-gray-500  dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, praesentium.</p>
      </header>



    </>
  )
}
