import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className ='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className ='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>

                <Link to = "/RegisterForm"><button type="submit">Login</button></Link>

                <div className="register-link">
                    <p>Don't have an account? <Link to ="/RegisterForm"> Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;