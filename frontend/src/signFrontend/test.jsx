import React, { useState } from "react";
import { Label } from "../signFrontend/components/label.jsx";
import { Input } from "../signFrontend/components/input.jsx";
import { cn } from "../signFrontend/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { BackgroundBoxesDemo } from "../signFrontend/test2.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../config/api';
import "./index.css";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 -z-10 opacity-80">
        <BackgroundBoxesDemo />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <SignupFormDemo />
      </div>
    </div>
  );
}

function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    general: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp();
  };

  async function signUp() {
    setIsLoading(true);
    setErrors({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      general: ""
    });

    try {
      // Client-side validation
      const newErrors = {};
      if (!formData.firstname.trim()) newErrors.firstname = 'First name is required';
      if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setIsLoading(false);
        return;
      }

      const response = await authAPI.signup({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password
      });

      if (response.data?.success) {
        // Save token and user data if provided
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        navigate('/welcome');
      } else {
        throw new Error(response.data?.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response) {
        if (error.response.status === 400) {
          if (error.response.data.errors) {
            const serverErrors = {};
            error.response.data.errors.forEach(err => {
              if (err.field === 'firstname') serverErrors.firstname = err.message;
              else if (err.field === 'lastname') serverErrors.lastname = err.message;
              else if (err.field === 'email') serverErrors.email = err.message;
              else if (err.field === 'password') serverErrors.password = err.message;
            });
            setErrors(prev => ({ ...prev, ...serverErrors }));
          }
          errorMessage = error.response.data?.message || 'Invalid registration data';
        } else if (error.response.status === 409) {
          setErrors(prev => ({ ...prev, email: 'Email already exists' }));
        } else {
          errorMessage = error.response.data?.message || errorMessage;
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      }

      setErrors(prev => ({ ...prev, general: errorMessage }));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-lg p-6 sm:p-8 shadow-xl shadow-black/30 border border-white/10">
      <div className="text-center mb-6 sm:mb-8">
        <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl font-bold text-white">MK</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Welcome to MAA's Kitchen</h1>
        <p className="text-xs sm:text-sm text-white/80">Create your account to get started</p>
      </div>

      {errors.general && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white/90 text-sm sm:text-base">First name</Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/5 border ${errors.firstname ? 'border-red-400' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all text-sm sm:text-base`}
              required
            />
            {errors.firstname && <span className="text-red-400 text-xs mt-1">{errors.firstname}</span>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white/90 text-sm sm:text-base">Last name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/5 border ${errors.lastname ? 'border-red-400' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all text-sm sm:text-base`}
              required
            />
            {errors.lastname && <span className="text-red-400 text-xs mt-1">{errors.lastname}</span>}
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="email" className="text-white/90 text-sm sm:text-base">Email Address</Label>
          <Input
            id="email"
            placeholder="john@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all text-sm sm:text-base`}
            required
          />
          {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="password" className="text-white/90 text-sm sm:text-base">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/5 border ${errors.password ? 'border-red-400' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all text-sm sm:text-base`}
            minLength="6"
            required
          />
          {errors.password && <span className="text-red-400 text-xs mt-1">{errors.password}</span>}
        </LabelInputContainer>

        <button
          disabled={isLoading}
          className={`w-full py-2.5 sm:py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg transform hover:scale-[1.01] transition-all duration-200 flex items-center justify-center ${isLoading ? 'opacity-80' : ''} text-sm sm:text-base`}
          type="submit"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </>
          ) : (
            "Sign Up"
          )}
        </button>

        <div className="relative my-4 sm:my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 sm:px-3 text-xs sm:text-sm text-white/60 bg-transparent">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-xs sm:text-sm"
          >
            <IconBrandGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>GitHub</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-xs sm:text-sm"
          >
            <IconBrandGoogle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Google</span>
          </button>
        </div>

        <div className="text-center text-xs sm:text-sm text-white/70 mt-4 sm:mt-6">
          Already have an account?{' '}
          <Link 
            to="/Login" 
            className="font-medium text-amber-400 hover:text-amber-300 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-1 sm:space-y-2", className)}>
      {children}
    </div>
  );
};