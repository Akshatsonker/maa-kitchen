/*
import React from "react";
//import fileLoader from "react-dom"
import Logo from "../header/logo.png"

import { useNavigate } from "react-router-dom";


export default function Header(){

    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/Menu'); 
        // Navigate to the Cart page
    };
    return(
        <div className="container">
        <div className="h-40 w-full bg-black flex items-center justify-center">
            <img className="h-24 w-24 ml-20 mt-4 bg-white rounded-4xl" src={Logo} alt=""/>
            <h1 className="text-red-700 text-5xl">Maa Kitchen</h1>
            <ul className="ml-200 mt-30">
            <span className="text-[white] mr-10">Home</span>
            <span className="text-[white] mr-10 "  onClick={handleMenuClick}>Menu</span>
            <span className="text-[white] mr-10">SignIn</span>
            <span className="text-[white] mr-10">Login</span>
            </ul>
        </div>
    </div>
    );
} ;
 */
/*
import React from "react";
import Logo from "../header/logo.png";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import the CSS file for styling
export default function Header() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/Menu'); // Navigate to the CardDemo page
    };

    const handleLoginClick = () => {
        navigate('/Login'); // Navigate to the CardDemo page
    };

    const handleAboutUsClick = () => {
        navigate('/AboutUs'); // Navigate to the CardDemo page
    };

   return (
  <div className=" w-full">
    <div className="h-40 w-full bg-black flex justify-between items-end ">
      
      <div className="flex items-center">
        <img className="h-32 w-32 bg-white rounded-4xl" src={Logo} alt="Logo" />
        <h1 className="text-red-700 text-5xl ml-4">Maa's Kitchen</h1>
      </div>
     

  <li onClick={handleMenuClick} className="cursor-pointer">Menu</li>
  <li onClick={handleAboutUsClick} className="cursor-pointer">AboutUs</li>
</ul>
    </div>
  </div>
);



}
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiShoppingCart, FiUser, FiInfo } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { icon: <FiHome size={20} />, text: "Home", path: "/" },
        { icon: <FiMenu size={20} />, text: "Menu", path: "/menu" },
        { icon: <FiInfo size={20} />, text: "About", path: "/aboutUs" },
        { icon: <FiInfo size={20} />, text: "Login", path: "/login" },
    ];

    return (
        <header className="w-full bg-gradient-to-r from-gray-900 to-black shadow-xl sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center relative">
                {/* Logo with animation */}
                <motion.div 
                    className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
                    onClick={() => {
                        navigate('/');
                        setMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="relative">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg sm:text-xl font-bold">MK</span>
                        </div>
                        {isHovering && (
                            <motion.div 
                                className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full blur opacity-75"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.75 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </div>
                    <motion.h1 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 text-2xl sm:text-3xl font-bold tracking-tighter"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        Maa's Kitchen
                    </motion.h1>
                </motion.div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className="flex items-center text-gray-300 hover:text-white group relative"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-1 sm:mr-2 group-hover:text-red-400 transition-colors">
                                {item.icon}
                            </span>
                            <span className="font-medium text-sm sm:text-base">{item.text}</span>
                            <motion.div 
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <motion.button 
                    className="md:hidden p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <FiX className="text-white text-xl" />
                    ) : (
                        <FiMenu className="text-white text-xl" />
                    )}
                </motion.button>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg z-40"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <nav className="flex flex-col p-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            navigate(item.path);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="flex items-center text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-colors"
                                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="mr-3 text-red-400">
                                            {item.icon}
                                        </span>
                                        <span className="text-lg">{item.text}</span>
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}