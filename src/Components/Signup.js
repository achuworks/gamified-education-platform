import React, { useState } from 'react';
import Login from './Login';

function Signup() {
  const [login, setLogin] = useState(false);
  const [unameoremail,setunameoremail] = useState('');
  const [password,setpassword] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {!login ? (
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
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-warning w-100 py-2 mb-4">Sign up</button>
          </form>
          <div className="text-center mt-3">
            <small>Already have an account?? <a href="#" onClick={() => setLogin(true)} className="text-warning text-decoration-none"><strong>Log in</strong></a></small>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Signup;