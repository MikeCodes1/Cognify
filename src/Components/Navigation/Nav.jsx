import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    
    <div className='wrapper-nav'>
        <Link to = "/HomePage" className="Title">Cognify </Link>
        <nav className='Nav'>
            <Link to ="/HomePage" className="Home">Home </Link>
            <Link to ="/Sets">Sets </Link>
            <Link to ="/Explore">Explore </Link>
            <Link to ="/Account">Account </Link>
        </nav>
    </div>
  )
}

export default Nav