import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css';
const data=[
    "https://img.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23307.jpg?size=626&ext=jpg&ga=GA1.1.1592894697.1679900493&semt=sph",
    "https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?size=626&ext=jpg&ga=GA1.2.1592894697.1679900493&semt=sph",
    "https://img.freepik.com/free-vector/blue-background-with-floating-particles-technology-concept_1017-14791.jpg?size=626&ext=jpg&ga=GA1.2.1592894697.1679900493&semt=sph"
]
const Banner = () => {
  return (
   <Carousel className='carasousel' autoPlay='true' animation='slide' indicators='false' navButtonsAlwaysInvisible='true' cycleNavigation='true'
   navButtonsProps={{
    style:{
        background:'#fff',
        color:'#49494',
        borderRadius:0,
        marginTop:-22,
        height:'104'
    }
   }}>
    {
        data.map((imag,i)=>{
            return(
                <>
                <img src={imag} width={"100%"} height={"10%"} alt=""/>
                </>
            )
        })
    }
   </Carousel>
  )
}

export default Banner
