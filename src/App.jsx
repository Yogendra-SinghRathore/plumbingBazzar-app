import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages//Products'
import Contact from './components/pages//Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BrandCatagories from './components/pages/BrandCatagories'
import BuySection from './components/pages/BuySection'
import Profile from './components/pages/Profile'
import Chekout from './components/pages/Chekout'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/> }/>
        <Route path='/products' element={<Products/> }/>
        <Route path='/contact' element={<Contact/> }/>
        <Route path='/brandcatag' element={ <BrandCatagories/> }/>
        <Route path='/profile' element={ <Profile/> }/>
        <Route path='/buysection/:productName' element={ <BuySection/> }/>
        <Route path='/chekout' element={ <Chekout/> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
