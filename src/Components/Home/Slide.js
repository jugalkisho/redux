import { Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import { products } from './productdata';
import './Slider.css';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Slide = (props) => {
  return (
    <div className='products_section'>
      <div className='products_deal'>
        <h3>{props.title}</h3>
        <button className='view_btn'>View All</button>

      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        // infinite={true}
        swipeable={false}
        draggable={false}
        showDots={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container' 
        >
        {
          products.map((e, index) => {
            return (
              <div className='products-items'>
                <div className='product_img'>
                  <img key={index} src={e.url} width={"200px;"} alt="productitem" />
                </div>
                <p className='products_name'>{e.title.shortTitle}</p>
                <p className='products_offer'>{e.discount}</p>
                <p className='products_explore'>{e.tagline}</p>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Slide;
