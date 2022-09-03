import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './components/HomeMainbar/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import About from './pages/About/About'


const AllRoutes = () => {
  return (
    <Routes>
       <Route exact path='/' element={<Home/>} />
        <Route exact path='/Auth' element={<Auth/>} />
        <Route exact path='/Questions' element={<Questions/>} />
        <Route exact path='/AskQuestion' element={<AskQuestion/>} />
        <Route exact path='/Questions/:id' element={<DisplayQuestion/>} />
        <Route exact path='/about' element={<About/>} />

    </Routes>
  )
}

export default AllRoutes