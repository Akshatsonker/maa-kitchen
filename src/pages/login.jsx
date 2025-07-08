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
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
        <p style={styles.signupText}>Don't have an account? <Link to="/" style={styles.link}>Sign Up</Link></p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('https://wallpaperaccess.com/full/1737995.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    marginBottom: '1.5rem',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '1rem',
    transition: 'background-color 0.3s',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  signupText: {
    textAlign: 'center',
    margin: 0,
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  '@media (max-width: 480px)': {
    form: {
      padding: '1.5rem',
      margin: '0 1rem',
    },
  },
};

export default Login;