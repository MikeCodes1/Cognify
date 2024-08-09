import React from 'react'
import { BrowserRouter,Routes,Route, Link, NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
  return (
    
    <div className='wrapper-nav'>
        <div className="wrapper-title">
            <NavLink to = "/HomePage" className="Title">Cognify </NavLink>
        </div>
        
        <nav className='Nav'>
            
        <NavLink 
                to="/HomePage" 
                className={({ isActive }) => isActive ? "Home active-link" : "Home"}
            >
                Home
            </NavLink>
            <NavLink 
                to="/Sets" 
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Sets
            </NavLink>
            <NavLink 
                to="/Explore" 
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Explore
            </NavLink>
            <NavLink 
                to="/Account" 
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Account
            </NavLink>
        </nav>
    </div>
  )
}

export default Nav