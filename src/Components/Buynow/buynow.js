import React from 'react'
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './option';
import Subtotal from './Subtotal';
import Right from './Right';
const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className='leftbuyprice'>Price</span>
          <Divider/>
          <div className='item_container'>
            <img src='https://img.freepik.com/free-vector/illustration-new-year-decoration_53876-37431.jpg?size=626&ext=jpg&ga=GA1.1.1674155804.1665076633&semt=sph' width={"250px"}/>
            <div className='item_details'>
              <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize)</h3>
              <h3>Smart Watches</h3>
              <h3 className='diffrentprice'>$4003</h3>
              <p className='unusall'>Usually dispatched in 8 days</p>
              <p>Eligible for FREE Shipping</p>
              <img src='https://img.freepik.com/premium-photo/shopping-mall-online-laptop-with-delivery-man-cup-coffee_262243-19.jpg?size=626&ext=jpg&ga=GA1.1.1674155804.1665076633&semt=sph' width={"450px;"}/>
              <Option />
            </div>
            <h3 className='item_price'>4049 Rs</h3>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
        <Right/>
      </div>
    </div>
  )
}

export default Buynow;
