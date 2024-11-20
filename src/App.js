import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const App = () => {

  const[login,setlogin] = useState(false)

  return (
    <>
    {login?<Login setlogin={setlogin} />:<></>}
    <div className='app'>
      <Navbar setlogin={setlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element = {<Placeorder/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App