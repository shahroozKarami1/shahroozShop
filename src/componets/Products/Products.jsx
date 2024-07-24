import React, { useContext } from 'react'
import HeaderSection from '../HaaderSection/HeaderSection'
import AuthContext from '../../context/AuthContext'
import CardProducts from '../CardProducts/CardProducts'

export default function Products({ isBtn }) {
    let { dataProduct } = useContext(AuthContext)
    return (

        <>

            <HeaderSection left={false}></HeaderSection>

            <div className='container   flex  flex-col   items-center  justify-center    ' data-aos="zoom-out">

                <div  className=' grid    my-20   xs:grid-cols-1   md:grid-cols-3   lg:grid-cols-5    gap-20      place-items-center  xs:text-center  '>



                    {


                        dataProduct.map((item) => (

                            <CardProducts className=" " key={item.id} data={item}></CardProducts>
                        ))
                    }

                </div>
                {
                    isBtn ? (



                        <button className='text-white  bg-gradient-to-r from-primary to-secoundry  p-2   rounded-md  hover:rotate-12  transition-all  duration-300' >View All Products</button>


                    ) : (null)
                }



            </div>



        </>
    )
}
