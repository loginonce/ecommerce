import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Karya Indah</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("adhesives")}}><Link style={{ textDecoration: 'none' }} to='/adhesives'>Adhesives</Link>{menu==="adhesives"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("spareparts")}}><Link style={{ textDecoration: 'none' }} to='/spareparts'>Spareparts</Link>{menu==="spareparts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("appliances")}}><Link style={{ textDecoration: 'none' }} to='/appliances'>Appliances</Link>{menu==="appliances"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>   
      </div>
    </div>
  )
}

export default Navbar
