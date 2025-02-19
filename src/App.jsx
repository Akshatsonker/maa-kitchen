/*
import React from 'react';
//import {Link, NavLink} from'react-router-dom'
import Header from './components/header/index.jsx'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css'
import ColourfulText  from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';
import CardDemo from './pages/cart.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/Menu" component={CardDemo} />
        {/*other routes can be add here*/
        /*
      </Routes>  
     <ColourfulText/> 
     <Footer/> 
     </Router>  
    
  );
};

export default App;

import React from 'react';
import Header from './components/header/index.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ColourfulText from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';
import CardDemo from './pages/cart.jsx'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Menu" element={<CardDemo />} /> {/* Route for Menu */
        /*
        <Route path="/cart" element={<CardDemo />} /> {/* Ensure this route is defined */
        /*
        {/* Other routes can be added here */
        /*
      </Routes>
      <ColourfulText />
      <Footer />
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import ColourfulText from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';
import CardDemo from './pages/cart.jsx'; // Ensure this path is correct
import Header from './components/header/index.jsx';
import Login from './pages/login.jsx'; // Ensure this path is correct

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {/* Conditionally render Header based on the current route */
      /*
      {location.pathname !== '/Menu' && <Header />}
      
      <Routes>
        <Route path="/Menu" element={<CardDemo />} /> {/* Route for Menu */
        /*
        <Route path="/cart" element={<CardDemo />} /> {/* Ensure this route is defined */
        /*
        {/* Other routes can be added here */
        /*
      </Routes>

      {/* Conditionally render ColourfulText and Footer based on the current route */
      /*
      {location.pathname !== '/Menu' && <Header />}


   {/* Conditionally render Header based on the current route */
   /*
   {location.pathname !== '/Login' && <Header />}
      
   <Routes>
     <Route path="/Login" element={<Login />} /> {/* Route for Menu */
     /*
     <Route path="/cart" element={<Login />} /> {/* Ensure this route is defined */
     
     /* Other routes can be added here */
     /*
   </Routes>
*/
   /* Conditionally render ColourfulText and Footer based on the current route */
   /*
   {location.pathname !== '/Menu' && (

        <>
          <ColourfulText />
          <Footer />
        </>
      )}
    </div>
  );
}

// Wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import ColourfulText from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';
import CardDemo from './pages/cart.jsx'; // Ensure this path is correct
import Header from './components/header/index.jsx';
import Login from './pages/login.jsx'; // Ensure this path is correct
import BackgroundLinesDemo from './components/About/index.jsx';
import Home from './pages/cart.jsx'
function MainContent() {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {/* Conditionally render Header based on the current route */}
      {location.pathname !== '/Login' && location.pathname !== '/Menu'&& location.pathname !== '/AboutUs' && location.pathname !== '/Home'&& <Header />}

      <Routes>
        {/* Add a route for the root path */}
        <Route path="/" element={<ColourfulText />} /> {/* Default route */}
        <Route path="/Menu" element={<CardDemo />} /> {/* Route for Menu */}
        <Route path="/Login" element={<Login />} /> {/* Route for Login */}
        <Route path="/AboutUs" element={<BackgroundLinesDemo />} /> {/* Route for Login */}
       
        {/* Other routes can be added here */}
      </Routes>

      {/* Conditionally render Footer based on the current route */}
      {location.pathname !== '/Menu'&& location.pathname !== '/Login' && location.pathname !== '/AboutUs' && location.pathname !== '/Home' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;