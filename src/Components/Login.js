import React, { useState } from 'react';
import Signup from './Signup';
import axios from 'axios';

function Login() {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login', { username, password })
      .then(res => {
        if (res.status === 200) {
          alert('Login successful!');
          window.location.href = '/';
        } else {
          alert('Login failed!');
        }
      })
      .catch(err => {
        console.error(err);
        alert(err);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {!signup ? (
        <div className="card p-4 shadow-lg" style={{ width: '40rem', height: '30rem', borderRadius: '25px' }}>
          <h2 className="text-left mb-4"><strong>Welcome Back!!!</strong></h2>
          <h5 className="mb-4">Log in to your account.</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="Enter your username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control mb-4" 
                id="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-warning w-100 py-2 mb-4">Login</button>
          </form>
          <div className="text-center mt-3">
            <small>Don't have an account? <a href="#" onClick={() => setSignup(true)} className="text-warning text-decoration-none"><strong>Sign Up</strong></a></small>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default Login;
