import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, setAuthToken, getAuthToken } from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on app start
  useEffect(() => {
    const initAuth = async () => {
      const token = getAuthToken();
      if (token) {
        try {
          const response = await authAPI.getProfile();
          if (response.data.success) {
            setUser(response.data.user);
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error('Auth initialization error:', error);
          // Token might be invalid, clear it
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authAPI.signin(credentials);
      if (response.data.success) {
        const { token, user } = response.data;
        setAuthToken(token);
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      }
      return { success: false, message: response.data.message };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      return { success: false, message };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await authAPI.signup(userData);
      if (response.data.success) {
        const { token, user } = response.data;
        setAuthToken(token);
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      }
      return { success: false, message: response.data.message };
    } catch (error) {
      const message = error.response?.data?.message || 'Signup failed';
      const errors = error.response?.data?.errors || [];
      return { success: false, message, errors };
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};