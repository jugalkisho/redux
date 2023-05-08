import React from 'react'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <NavLink to="/">
                        <img src="https://th.bing.com/th?id=OIP.fQkwX1ZDIGJdxn8gBQ43GwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" height={"40px;"}  alt="" />
                        </NavLink>
                    </div>
                    <div className='nav_searchbar'>
                        <input type='text' name='' id='' />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to="/login">Signin</NavLink>
                    </div>
                    <div className='cart_btn'>
                        <Badge badgeContent={4} color="primary">
                           <ShoppingCartIcon id="icon"/>
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avtar'/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
