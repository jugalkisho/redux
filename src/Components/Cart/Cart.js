import React from 'react';
import './Cart.css';
import { Divider } from '@mui/material';
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf48ilESASX02ivLsP2VyOz8O42vdYzc0uQ&usqp=CAU' alt="cart_img"/>
          <div className='cart_btn'>
            <button className='cart_btn1'>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
        </div>
        <div className='right_cart'>
          <h3>Fitness Gear</h3>
          <h4>Pigeon FAVOURITE Electric Kettle </h4>
          <Divider/>
          <p className='mrp'>M.R.P. : 1195Rs</p>
          <p>Deal of the Day : <span style={{color:"#B12704"}}>625.00</span></p>
          <p>You save : :<span style={{color:"#B12704"}}>570Rs</span></p>
        <div className='discount_box'>
          <h5>Discount :<span style={{color:"#111"}}>Extra 10% off</span></h5>
          <h4>Free Delivery <span style={{color:"#111",fontWeight:"600"}}>Oct 8 - 21 </span>Details</h4>
        <p>Fastest delevery: <span style={{color:"#111",fontWeight:"600"}}>Tomorrow 11AM</span></p>
        </div>
        <p className='description'>About the Items:<span style={{color:"#565959", fontWeight:500, fontSize:14,letterSpacing:"0.4px"}}>
        &nbsp;  This electric kettle from pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. with this handy appliance, you can boll water and use it to make instant noodles, packet soup, coffee and green tea.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart;
