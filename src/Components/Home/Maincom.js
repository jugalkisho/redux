import React from 'react'
import Banner from './Banner';
import './Home.css';
import Slide from './Slide';
const Maincom = () => {
  return (
    <div className='home_section'>
      <div className='banner_part'>
        <Banner/>
      </div>
      <div className='slide_part'>
        <div className='left_slide'>
          <Slide title="Deal of The Day"/>
        </div>
        <div className='right_slide'>
          <h4>Festive latest launches</h4>
          <img src="https://img.freepik.com/free-photo/pink-white-rose-is-shown-with-word-love-it_1340-22938.jpg?size=626&ext=jpg&ga=GA1.2.449272730.1681290974&semt=sph"/>
          <a href="#">See More</a>
        </div>
      </div>
     <Slide title="Today's Deal"/>
     <div className='center_img'>
      <img src="https://img.freepik.com/free-vector/spring-pink-rose-floral-background-with-watercolor_65186-2890.jpg?size=626&ext=jpg&ga=GA1.1.449272730.1681290974&semt=sph"/>
     </div>
     <Slide title="Best Seller"/>
     <Slide title="Upto 80% off"/>
    </div>
  )
}

export default Maincom
