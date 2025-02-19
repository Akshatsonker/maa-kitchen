import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic (e.g., API call)
    if (username === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Simulate a successful login
      console.log('Logged in with:', { username, password });
      // Redirect or perform other actions after successful login
    }
  };

  return (
    <div style={styles.container}>
      {/* Home Link positioned at the top right */}
      <span style={styles.homeLink}>
        <Link to="/">Home</Link>
      </span>
    
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh', // Make the container fill the whole screen height
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex', // Enable flexbox
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('https://wallpaperaccess.com/full/1737995.jpg')", // Corrected background image syntax
    backgroundSize: 'cover', // Ensure the background image covers the container
    backgroundPosition: 'center', // Center the background image
    position: 'relative', // Set position to relative for absolute positioning of child elements
  },
  homeLink: {
    position: 'absolute', // Position the Home link absolutely
    top: '20px', // Adjust top position
    right: '20px', // Adjust right position
    color: 'black', // Set text color
    fontSize: '24px', // Set font size
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

export default Login;