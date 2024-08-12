import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { auth, googleProvider, db } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth' 
import { useState, useEffect } from "react";

/* **CHANGE USERNAME TO EMAIL** */
const LoginForm = () => {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const signIn = async () =>{
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.error(err);
        }

    };
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        }catch (err){
            console.error(err); 
        }
    }
    const logout = async () => {
        try{
            await signOut(auth);
        }catch (err){
            console.error(err); 
        }
    }

    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <FaUser className ='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required
                    onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className ='icon'/>
                </div>
                
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>

                <Link to = "/HomePage"><button type="submit" onClick={signIn}>Login</button></Link>
                <Link to = "/HomePage"><button type="submit" onClick={signInWithGoogle}> Sign In with Google</button> </Link>
                
                <div className="register-link">
                    <p>Don't have an account? <Link to ="/RegisterForm"> Register</Link></p>
                </div>
            </form>
            <button onClick={logout}> Logout </button>
        </div>
    );
};

export default LoginForm;