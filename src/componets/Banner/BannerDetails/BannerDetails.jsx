import React from 'react'

export default function BannerDetails({icon  ,  text   ,  bgColor}) {
  return (

    <>
    
    
    <div  className='flex   items-center  gap-4  py-2'   data-aos  = "fade-up">

<div  className={`right   rounded-full    p-3   ${bgColor}` }>

<span  className='text-2xl '>
    {icon}

</span>
</div>
<div  className='left'>
  <span  className='text-gray-600   dark:text-white '>    {text}</span>
</div>

    </div>
    
    
    
    </>

  )
}
