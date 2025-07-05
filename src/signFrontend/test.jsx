
import React, { useState } from "react";
import { Label } from "../signFrontend/components/label.jsx";
import { Input } from "../signFrontend/components/input.jsx";
import { cn } from "../signFrontend/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import axios from "axios";
import { BackgroundBoxesDemo } from "../signFrontend/test2.jsx"; // Make sure to import your background component
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./index.css";
export default function SignupPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      // Full-screen background 
      <div className="absolute inset-0 -z-10">
        <BackgroundBoxesDemo />
      </div>
      
      // Centered form 
      <div className="relative z-10 h-full flex items-center justify-center p-4">
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    await signUp();
  };
const navigate = useNavigate();
  async function signUp() {
    try {
      // Validate all fields are filled
      if (!formData.firstname || !formData.lastname || !formData.email || !formData.password) {
        throw new Error('All fields are required');
      }

      const response = await axios.post('http://localhost:8080/signUp/signUp', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Signup successful:', response.data);
      if (response.data.success) {
      navigate('/welcome'); // Redirect to home page after successful signup
      }
      return response.data;
      
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response) {
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Request setup error:', error.message);
      }
      throw error;
    }
  }

  return (
    <div className="shadow-input mx-auto h-150 w-full  max-w-md rounded-none bg-white p-4 md:rounded-2xl  md:p-8 dark:bg-black">
      <h1 className="text-3xl pl-28 h-12 text-center font-bold text-neutral-800  dark:text-neutral-200">
        Login Page
      </h1>
      <p className="h-10 m-2 mb-6 pb-6 justify-self-center  max-w-sm text-sm text-neutral-800 dark:text-neutral-300">
        Login to MAA's Kitchen, get tasty food and enjoy the day! 
      </p>
      <form className="h-80%" onSubmit={handleSubmit}>
   <div className="w-full p-4 flex flex-row space-x-4"> 
  <LabelInputContainer className="flex-1">
    <Label htmlFor="firstname">First name</Label>
    <Input 
      id="firstname" 
      placeholder="Tyler" 
      type="text" 
      value={formData.firstname}
      onChange={handleChange}
      className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" 
    />
  </LabelInputContainer>
  
  <LabelInputContainer className="flex-1">
    <Label htmlFor="lastname">Last name</Label>
    <Input 
      id="lastname" 
      placeholder="Durden" 
      type="text" 
      value={formData.lastname}
      onChange={handleChange}
      className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
    />
  </LabelInputContainer>
</div>
<div className="h-15 pl-1.5">
  <LabelInputContainer className="mb-4">
    <Label htmlFor="email">Email Address</Label>
    <Input 
      id="email" 
      placeholder="projectmayhem@fc.com" 
      type="email" 
      value={formData.email}
      onChange={handleChange}
    />
  </LabelInputContainer>
</div>

<div className="h-15 ml-5">
  <LabelInputContainer className="mb-4">
    <Label htmlFor="password">Password</Label>
    <Input 
      id="password" 
      placeholder="••••••••" 
      type="password" 
      value={formData.password}
      onChange={handleChange}
    />
  </LabelInputContainer>
</div>

<button
  className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
  type="submit"
>
  Sign up →
  <BottomGradient />
</button>

<div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

<div className="flex flex-col space-y-4">
  <button
    className="group/btn relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
    type="button"
  >
    <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
    <span className="text-sm text-neutral-700 dark:text-neutral-300">
      GitHub
    </span>
    <BottomGradient />
  </button>
  </div>
  <div className="flex flex-col space-y-4">
  <button
    className="group/btn relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
    type="button"
  >
    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
    <span className="text-sm text-neutral-700 dark:text-neutral-300">
      Google
    </span>
    <BottomGradient />
  </button>
</div>
         <div className="h-98 w-full flex items-center justify-center rounded-2xl">
  <Link to="/Login" className="w-full">
    <button
      className="group/btn relative block h-11 w-full items-center justify-center space-x-2 rounded-md bg-gradient-to-br from-emerald-700 to-cyan-300 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
      type="button"
    >
      Sign In →
      <BottomGradient />  
    </button>
  </Link>
</div>
        
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
