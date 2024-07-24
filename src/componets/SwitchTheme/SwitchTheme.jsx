import React, { useEffect, useState } from 'react'
import  lightBtn from "../../assets/website/light-mode-button.png"
import  DarkBtn from "../../assets/website/dark-mode-button.png"

export default function SwitchTheme() {
const [theme, settheme] = useState(

localStorage.getItem("theme")  ?  (localStorage.getItem("theme") ) :  ( "light")

    
)


let  htmlElement   =  document.documentElement

useEffect(()  => {

if (theme  ===  "dark") {
    
htmlElement.classList.add("dark")
localStorage.setItem("theme"  , 'dark')
}else {
    htmlElement.classList.remove("dark")
localStorage.setItem("theme"  , 'light')
}


}  ,  [[theme]])

  return (

    <>
<div  className='  relative '  >
  
<img src= {lightBtn} alt=""    onClick={()  =>  settheme (theme  == "light"  ?  "dark"  :  "light"   )}     className={`w-16    ${theme  ==  "dark"   ?  "opacity-100"  :  "opacity-0"}    sm:hidden   md:block  absolute        transition-all  duration-200   cursor-pointer`}/>
<img src= {DarkBtn} alt=""   onClick={()  =>  settheme (theme  == "light"    ?  "dark"  :  "light" )}  className={`w-16    ${theme  ==  "light"   ?  "opacity-100"  :  "opacity-0"}    sm:hidden   md:block       transition-all  duration-200  cursor-pointer   `}/>
</div>
    
    

    </>
  )
}
