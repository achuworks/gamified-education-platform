import React, { useState } from 'react';
import axios from 'axios';

function Newlogintest() {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login', { uname, email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '40rem', height: '35rem', borderRadius: '25px' }}>
        <h2 className="text-left mb-4"><strong>Welcome !!!</strong></h2>
        <h5 className="mb-4">Sign up here.... </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={uname}
              onChange={e => setUname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
          <button type="submit" className="btn btn-warning w-100 py-2 mb-4">Sign up</button>
        </form>
        <div className="text-center mt-3">
          <small>Already have an account?? <a href="#" className="text-warning text-decoration-none"><strong>Log in</strong></a></small>
        </div>
      </div>
    </div>
  );
}

export default Newlogintest;
