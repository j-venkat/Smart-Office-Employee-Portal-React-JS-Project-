import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/auth/authSlice';
// import API from '../services/api'; <--- Commenting this out to debug
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';

const Login = () => {
  // HARDCODED CREDENTIALS - DO NOT CHANGE THESE
  const [email, setEmail] = useState('eve.holt@reqres.in'); 
  const [password, setPassword] = useState('cityslicka');   
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  // ... existing imports ...

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(loginStart());

  // 👇 BYPASSING THE NETWORK TO FIX CORS
  // We simulate a network delay of 1 second, then log you in.
  setTimeout(() => {
    
    // Check if user typed the right fake credentials
    if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
      console.log("Login Success (Simulated)");
      const fakeToken = "QpwL5tke4Pnpja7X4"; // The actual token Reqres would return
      dispatch(loginSuccess({ token: fakeToken, user: { email } }));
      navigate('/dashboard');
    } else {
      console.log("Login Failed (Simulated)");
      dispatch(loginFailure('Invalid Credentials'));
    }
    
  }, 1000); 
};

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
      <Card style={{ width: '400px' }} className="shadow border-0">
        <Card.Body className="p-4">
          <h3 className="text-center mb-4 font-weight-bold">Smart Office</h3>
          
          {/* ERROR ALERT */}
          {error && <Alert variant="danger">Error: {error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Sign In'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;