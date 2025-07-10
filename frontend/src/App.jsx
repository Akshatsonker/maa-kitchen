import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import ColourfulText from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';
import CardDemo from './pages/cart.jsx';
import Header from './components/header/index.jsx';
import Login from './pages/login.jsx';
import BackgroundLinesDemo from './components/About/index.jsx';
import SignupPage from './signFrontend/test.jsx';
import ProductDetails from './payment/frontend/paymentHome.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/welcome" element={
            <>
              <Header />
              <ColourfulText />
              <Footer />
            </>
          } />
          <Route path="/Menu" element={<CardDemo />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AboutUs" element={<BackgroundLinesDemo />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;