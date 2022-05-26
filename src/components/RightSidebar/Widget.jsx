import React from 'react'
import pen from '../../assets/pen-solid.svg'
import comment from '../../assets/message-solid.svg'
import logo from '../../assets/logo.png'
import './RightSidebar.css'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='Pen' width='18' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='Pen' width='18' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
        </div>

        <h4>Featured on meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='Pen' width='18' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='Pen' width='18' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={logo} alt='Pen' width='18' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
        </div>

        <h4>Hot meta posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt quidem aliquam.</p>
            </div>  
        </div> 
    </div>
  )
}

export default Widget