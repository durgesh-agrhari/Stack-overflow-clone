
import React from 'react'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'

const Questions = () => {
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

export default Questions

















// import React from 'react'

// const Questions = ({question}) => {
//   return (
//     <div className='displat-ans-container'>
//       <div className='display-votes-ans'>
//         <p>{question.votes}</p>
//         <p>votes</p>
//       </div>

//       <div>

//       </div>
//     </div>
//   )
// }

// export default Questions





















