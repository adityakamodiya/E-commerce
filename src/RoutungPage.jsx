import React, { useState } from 'react'
import Header from './Header'
import About from './About'
import FAQ from './FAQ'
import COntact from './COntact'
import { createContext } from 'react'
import Cart from './Cart.jsx'
import Signup from './login_signup/Signup'
import Login from './login_signup/Login'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from './App'
import Products from './Products'
export const Mycontext = createContext(null);

function RoutungPage() {
    const [searchitems,setsearchitems] = useState()
    const [searchtriger,setsearchtriger] = useState(false)
    const[searchcat,setsearchcat] = useState('')
  return (
    <>
    <Mycontext.Provider value={{searchitems,setsearchitems,searchtriger,setsearchtriger,searchcat,setsearchcat}}>
    <BrowserRouter>
    <Header></Header>
    <Routes>
<Route path='/' element={<App/>} ></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/products' element={<Products/>}></Route>

<Route path='/about' element={<About/>}></Route>
<Route path='/faq' element={<FAQ/>}></Route>
<Route path='/contact' element={<COntact/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/login' element={<Login/>}></Route>


    </Routes>
    </BrowserRouter>
    </Mycontext.Provider>
    </>
  )
}

export default RoutungPage
