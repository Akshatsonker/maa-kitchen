import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(''); // Use email instead of username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    try {
      const response = await fetch('http://localhost:8080/signUp/signIn', { // Adjust URL as needed
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!data.success) {
        setError(data.message);
      } else {
        // Save token if you want
        localStorage.setItem('token', data.jwtToken);
        // Redirect to welcome page
        navigate('/welcome');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
     
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
        <p>Don't have an account? <Link to="/">Sign Up</Link></p>
      </form>
    </div>
  );
};
const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('https://wallpaperaccess.com/full/1737995.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  homeLink: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'black',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

// ...styles object remains the same

export default Login;
