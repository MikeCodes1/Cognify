import React from 'react'
import './HomePage.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from '../../Components/Navigation/Nav';
const HomePage = () => {
  return (
    <div className='wrapper-pages'>
      <Nav></Nav>
    </div>

  )
}

export default HomePage