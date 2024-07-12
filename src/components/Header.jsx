import React from 'react'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../shared/pages/Homepage'
import Seller from './Seller'
import Location from './Location'
import Features from './Features'
import Price from './Price'
import Images from './Images'
import { Comfirmation } from './Comfirmation'
import Preview from './Preview'

const Header = () => {
  return (
    <>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/property/seller' element={<Seller/>}/>
            <Route path='/property/location' element={<Location/>}/>
            <Route path='/property/features' element={<Features/>}/>
            <Route path='/property/price' element={<Price/>}/>
            <Route path='/property/image' element={<Images/>}/> 
            <Route path='/property/confirm' element={<Comfirmation/>}/>
            <Route path='/property/preview' element={<Preview/>}/>  

        </Routes>
    </>
  )
}

export default Header