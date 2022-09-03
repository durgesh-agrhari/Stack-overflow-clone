import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import logo from '../../assets/logo1.png'
import Search  from '../../assets/search.svg'
import Avatar from '../Avatar/Avater'
//import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
 
  var User = null

  // const [isMobile, setISMobile] = useState(false);

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-logo'>
                <img src={logo} alt='logo' width='200px' height='44px'/>
            </Link>
            <Link to='/about' className='nav-item nav-btn' >About</Link>
            <Link to='/#' className='nav-item nav-btn' >Products</Link>
            <Link to='/#' className='nav-item nav-btn' >For Teams</Link>
            <form>
                <input type="text" placeholder='Search' className='nav-item '/>
                <Link to='/'>
                <img src={Search} alt="Search" width="18" className='nav-item search-icon' />
                </Link>
            </form>

            { User === null?
               <Link to='/Auth' className='nav-item nav-links' >Lohin</Link>:
               < >
                 <Avatar backgroundColor='#009dff' px="0px" py="7px" borderRadius="50%"> <Link to='/' className='pro' style={{color:"white", textDecoration:"none"}} >M</Link> </Avatar>
                 <button className='nav-item nav-links'>Log Out</button>
               </>
            }

        </div>
{/* 
        <button className='mobile-menu-icon'>
          {isMobile ? 
          (<i className='fas fa-times '></i>) : 
          (<i className='fas fa-bars'></i>)}
        </button> */}
    </nav>
  )
}

export default Navbar 