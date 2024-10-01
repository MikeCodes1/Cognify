import { useNavigate, Link } from 'react-router-dom';
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { auth, googleProvider, db } from '../../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState, useEffect } from "react";

/* **CHANGE USERNAME TO EMAIL** */
const LoginForm = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = async (e) =>{
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            navigate('/HomePage');
        } catch(err) {
            console.error(err);
            alert("Wrong Email or Password. Please try again.");
        }

    };
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {  // Check if the user is authenticated
                navigate('/HomePage');
            }
        } catch (err) {
            console.error(err);
            alert("Google Sign-In failed. Please try again.");
        }
    };
    const logout = async () => {
        try{
            await signOut(auth);
        }catch (err){
            console.error(err);
        }
    }

    return(
        <div className='wrapper'>
            <form onSubmit={signIn}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Email' required 
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
                <div className='Login'>
                    <button type="submit" onClick={signIn}>Login</button>
                </div>

                <div className='google_signin'>
                    <button type="submit" onClick={signInWithGoogle}> Sign In with Google</button>
                </div>
                
                <div className="register-link">
                    <p>Don't have an account? <Link to ="/RegisterForm"> Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;