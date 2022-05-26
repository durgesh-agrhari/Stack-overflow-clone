import React from 'react'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'

const Home = () => {
  return (
    <div className='home-container1'>
      <LeftSidebar />
      <div className='home-container2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home