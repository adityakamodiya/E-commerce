import React from 'react'
import Header from './Header'
import About from './About'
import FAQ from './FAQ'
import COntact from './COntact'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import App from './App'
function RoutungPage() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
<Route path='/' element={<App/>} ></Route>
<Route path='/cart' element={''}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/faq' element={<FAQ/>}></Route>
<Route path='/contact' element={<COntact/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RoutungPage
