import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if(!email || !password){
      setErrorMsg("Please fill all the details!");
      return;
    }
    setErrorMsg("");
    localStorage.setItem('email', email);
    window.location.href = "/homepage";
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <Form onSubmit={handleLogin}>
          <h2 className='login'>Login</h2>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className='form-label'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <button type="submit" className='login-btn'>Login</button>
          <p className='errorMsg'>{errorMsg}</p>
        </Form>
      </div>
    </div>
  )
}

export default Login;
