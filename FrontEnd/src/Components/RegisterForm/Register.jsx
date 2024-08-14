import React, { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const signUp = async (e) => {
      e.preventDefault();

      if (!email || !password || !username || !firstName || !lastName) {
          alert("Please fill in all fields.");
          return;
      }

      try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/LoginForm'); // Redirect only after successful registration
      } catch (err) {
          console.error(err);
          alert("Registration failed. Please try again.");
      }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={signUp}>
        <h1>Register</h1>
        
        <div className='input-box'>
          <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
          <FaUser className='icon'/>
        </div>

        <div className="input-box">
          <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <MdEmail className='icon'/>
        </div>

        <div className="input-box">
          <input type="text" placeholder='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="input-box">
          <input type="text" placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="input-box">
          <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          <FaLock className ='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
        </div>

        <div className="register-link">
          <p>Have an account? <Link to="/LoginForm">Login</Link></p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
