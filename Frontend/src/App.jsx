import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {
  const [login,setLogin] = useState(false);
  return (
    <>
    {
      login? <LoginPopup setLogin={setLogin} />: <> </>
    }
    <div className='app'>
      <Navbar setLogin={setLogin} />
      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route path ="/cart" element ={<Cart/> } />
        <Route path = "/order" element = {<PlaceOrder/>} />

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
