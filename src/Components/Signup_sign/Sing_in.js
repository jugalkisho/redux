import React, { useState } from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
const Sing_in = () => {

 const [logdata,setdata]=useState({
    email:"",
    password:""
 });
console.log(logdata)
 const adddata=(e)=>{
    const {name,value}=e.target;
    setdata(()=>{
        return{
            ...logdata,
            [name]:value
        }
    })
 }

  return (
   <>
   <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src="https://w7.pngwing.com/pngs/151/768/png-transparent-amazon-com-brand-logo-e-commerce-customer-international-volunteering-text-orange-logo.png" 
             alt="amazon"/>
        </div>
        <div className='sign_form'>
            <form>
                <h1>Sign-In</h1>
                <div className='form_data'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'onChange={adddata} value={logdata.email} name='email' id='email'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' onChange={adddata} value={logdata.password} name='password' id='password' placeholder='At least 6 char'/>
                </div>
                <button className='signin_btn'>Continue</button>
            </form>
        </div>
        <div className='create_accountinfo'>
            <p>New To Amazon</p>
            <NavLink to="/register">
            <button>Create Your amazon account</button>
            </NavLink>
        </div>
    </div>
   </section>
   </>
  )
}

export default Sing_in;
