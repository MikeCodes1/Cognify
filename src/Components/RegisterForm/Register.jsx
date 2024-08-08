import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Register.css';

/*All CSS is from loginform.css other than remember me and email */
const Register = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="text" placeholder='Email' required/>
          <MdEmail className='icon'/>
        </div>
        <div className="input-box">
          <input type ="text" placeholder='First Name' required/>
        </div>
        <div className="input-box">
          <input type ="text" placeholder='Last Name' required/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required/>
          <FaLock className ='icon'/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
        </div>
        <div className="register-link">
          <p>Have an account? <Link to = "/LoginForm"> Login</Link></p>
        </div>
        <Link to = "/LoginForm"> <button type="submit">Register</button></Link>
      </form>
    </div>
    
  )
}

export default Register