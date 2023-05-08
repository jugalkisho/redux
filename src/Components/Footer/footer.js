import React from 'react'
import './footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
    
  return (
    
   <footer>
    <div className='footer_container'>
        <div className='footer_details_one'>
            <h3>Get to know us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>Amazon Cares</p>
        </div>
        <div className='footer_details_one forres'>
            <h3>Connect with us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

        </div>
        <div className='footer_details_one forres'>
           <h3>Make Money with us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

        </div> 
        <div className='footer_details_one'>
           <h3>Make Money with us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

        </div> 

    </div>
    <div className='lastdetails'>
        <img src='https://cdn-icons-png.flaticon.com/128/10096/10096351.png'/>
        <p style={{color:"#000000"}}>Conditions of Use & Sale       Privacy Notice      Interest-Based Ads      @1996-{year}, Amazon.com </p>
    </div>
   </footer>
  )
}

export default Footer;
