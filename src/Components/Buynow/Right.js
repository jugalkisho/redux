import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
     <img src='https://img.freepik.com/premium-photo/shopping-mall-online-laptop-with-delivery-man-cup-coffee_262243-19.jpg?size=626&ext=jpg&ga=GA1.1.1674155804.1665076633&semt=sph'/> 
    <div className='cost_right'>
      <p>Your order is eligible for FREE Delivery.</p><br/>
      <span style={{color:'#565959'}}>Select this option at checkout. Details</span>
      <h3>Subtotal(1 items):<span style={{fontWeight:700}}></span>4049 Rs</h3>
    <button className='rightbuy_btn'>Process to Buy</button>
   <div className='emi'>
    Emi available
   </div>
    </div>
    </div>
  )
}

export default Right;
