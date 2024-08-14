import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react'
import Nav from '../../Components/Navigation/Nav';
import '../Pages.css';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider, db } from '../../config/firebase'
import './Account.css'

const Account = () => {
  const logout = async () => {
    try{
        await signOut(auth);
    }catch (err){
        console.error(err);
    }
}
  return (
    <div className='wrapper-pages'>
      <Nav></Nav>

      <Link to = "/LoginForm"> <button onClick ={logout}> Logout </button> </Link>
    </div>
  )
}

export default Account