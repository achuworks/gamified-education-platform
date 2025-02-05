import React, { useState } from 'react';
import Signup from './Signup';

function Login() {
  const [signup, setsignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {!signup ? (
        <div className="card p-4 shadow-lg" style={{ width: '40rem', height: '30rem', borderRadius: '25px' }}>
          <h2 className="text-left mb-4"><strong>Welcome Back!!!</strong></h2>
          <h5 className="mb-4">Log in to your account.</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">Username or email</label>
              <input type="text" className="form-control" id="username" placeholder="example@gmail.com" required />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control mb-4" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn btn-warning w-100 py-2 mb-4">Login</button>
          </form>
          <div className="text-center mt-3">
            <small>Don't have an account <a href="#" onClick={() => setsignup(true)} className="text-warning text-decoration-none"><strong>Sign..Up</strong></a></small>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default Login;
