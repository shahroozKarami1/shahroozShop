import React, { useEffect } from 'react'
import NavBar from './componets/NavBar'
import SubNvaBar from './componets/SubNavBar/SubNvaBar'
import { useState } from 'react'
import Hero from './componets/Hero/Hero'
import Products from './componets/Products/Products'
import AuthContext from './context/AuthContext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopRatePro from './componets/TopRatePro/TopRatePro'
import Banner from './componets/Banner/Banner'
import SubscribeSection from './componets/Subscribe/SubscribeSection'
import Testimonial from './componets/Testimonial/Testimonial'
import Footer from './componets/Footer/Footer'
import PopUpBox from './componets/PopupBox/PopUpBox'


export default function App() {



  const [dataNav, setDataNav] = useState([])
  const  [heroData  , setHeroData]  =   useState([])
const [dataProduct, setDataProduct] = useState([])
  const  [dataTopRate  ,  setDataTopRate]  =  useState([])
  const  [dataTestimonial  ,  setTestimonial]  =  useState([])
  const  [dataFooter  ,  setDataFooter]  =  useState([])
  const  [isshowPopUp  ,  setIsshowPopUp]  =  useState(false)


  function  getDataForNav ( ) {
    fetch("http://localhost:3000/navBar")
    .then(res  =>   {
      return  res.json()
    })
    .then(data  => {
        setDataNav(data)
    })
    
  }
  function  getDataForHero () {

    fetch("http://localhost:3000/hero")
    .then(res  =>   {
      return  res.json()
    })
    .then(data  => {
      setHeroData(data)
    })
    
  }

  function   getDataForProducts () {
    fetch("http://localhost:3000/productsData")
    .then(res  =>   {
      return  res.json()
    })
    .then(data  => {
        setDataProduct(data)
    })
  }
  
  function  getDataForBestRete () {
    fetch("http://localhost:3000/topRatedShirts")
    .then(res  =>   {
      return  res.json()
    })
    .then(data  => {
        setDataTopRate(data)
    })
    
  }

  function  getDataForTestimonial () {

    fetch("http://localhost:3000/Testimonial")
    .then(res  =>   {
      return  res.json()
    })
    .then(data  => {
        setTestimonial(data)
    })
    
  }

  function  getDataForFooter () {

    fetch("http://localhost:3000/Footer")
    .then(res  =>   {
      return  res.json()
    })
    .then(data  => {
        setDataFooter(data)
    })
    
  }

  function  showingPopUp  () {
    setIsshowPopUp(!isshowPopUp)
  }

useEffect(()  =>  {
  getDataForNav()
  getDataForProducts()
  getDataForBestRete ()
  getDataForTestimonial()
  getDataForFooter()
  getDataForHero()

  AOS.init({
    offset: 200, // فاصله از شروع انیمیشن
    duration: 1000, // مدت زمان انیمیشن
    easing: 'ease-in-out', // نوع انیمیشن
    delay: 100, // تاخیر در شروع انیمیشن
  });

  
}  ,  [])



  return (

    <div   className='bg-white  dark:bg-gray-800     duration-200'>

    <AuthContext.Provider  value={{  heroData    , dataProduct  ,  setDataProduct    ,  setDataTopRate   ,   dataTopRate  ,  setTestimonial   ,  dataTestimonial    ,  dataFooter   }}>

    <NavBar     showPopUp   =  {showingPopUp}  ></NavBar>
<SubNvaBar   data={dataNav}></SubNvaBar>
    <Hero   showPopUp   =  {showingPopUp}></Hero>

    <Products  isBtn={false}></Products>

    <TopRatePro    showPopUp   =  {showingPopUp}></TopRatePro>
    <Banner></Banner>

    <SubscribeSection></SubscribeSection>
    <Products  isBtn={true}></Products>

    <Testimonial></Testimonial>
    <Footer></Footer>

    <PopUpBox    isshowPopUp  =  {isshowPopUp}  setIsshowPopUp=  {setIsshowPopUp}></PopUpBox>
    </AuthContext.Provider>



    </div>


  



  )
}
