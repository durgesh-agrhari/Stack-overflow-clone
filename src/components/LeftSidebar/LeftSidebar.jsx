//rafec
import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSidebar.css'
//import Globe from '../../assets/globe.png'
//import Questions from '../HomeMainbar/Questions'

const Leftsidebar = () => {
  return (
    <div className='left-sidebsr'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p className='active1'>Home</p>
            </NavLink>

            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink exact path to='/' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    {/* <img src={Globe} alt='Globe'style={{width: "10px", hight:"10px"}} className='globe' /> */}
                    <p style={{paddingLeft:"10px" ,color: "black"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    <p style={{paddingLeft:"10px" ,color: "black"}}>Tags</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
                    <p style={{paddingLeft:"10px" ,color: "black"}}>Users</p>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Leftsidebar